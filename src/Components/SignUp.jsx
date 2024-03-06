import React, { Fragment, useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { _get, _post } from "../../services";
import axios from "axios";
import phone from "phone";
import { lookup } from "country-data-list";
import DialogBox from "../../components/common/alertPopup/DialogBox";
import { useDispatch } from "react-redux";
import sideImg from '../../assets/images/CRM_Image.gif'
import logoImg from '../../assets/images/CI_logo_02.png'
import { useNavigate } from "react-router-dom";
let countries = require("country-data-list").countries;

function SignUp() {
  // const [user_country, setUser_country] = useState("")
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const ref = useRef();
  // const [selectedImage, setSelectedImage] = useState("")

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    // const imgstr = e.target.files[0].name;
    // setSelectedImage(imgstr)
    // setSelectedImage(URL.createObjectURL(file));
  };

  const [requiredFields, setRequiredFiels] = useState({
    first_name: "2",
    last_name: "2",
    username: "2",
    email: "2",
    password: "2",
    userType: "2",
    mobile: "2",
    country: "2",
    report_to: "2",
    organization: "2",
    std_code: "",
  });
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    userType: "ADMIN",
    role_type: "ADMIN",
    mobile: "",
    country: "",
    report_to: "",
    organization: "",
    std_code: "",
  });
  const [err_mssg, seterr_mssg] = useState({
    mobile_err_mssg: "",
    pass_err_mssg: "",
    email_err_mssg: "",
  });

  const handleRegisterData = (e) => {
    e.preventDefault();
    setFile("");
    if (
      userData.first_name !== "" &&
      userData.last_name !== "" &&
      userData.username !== "" &&
      userData.email !== "" &&
      userData.password !== "" &&
      userData.mobile !== ""
    ) {
      setShowLoader(true);
      _post("register", userData)
        .then((data) => {
          setShowLoader(false);
          if (data.status) {
            if (file) {
              const formData = new FormData();
              
              formData.append("file", file);
              _post(`Attachment/upload/profile/${data.data._id}`, formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
                .then(() => {
                  setShowLoader(false)

                })
                .catch((error) => {
                  console.error(error.message);
                });
            }
            dispatch({
              type: "POPUP_MESSAGE",
              payload: { status: "Success", _message: data.message },
            });
            setShowDialogBox(true);
            ref.current.value = "";
            setUserData({
              first_name: "",
              last_name: "",
              username: "",
              email: "",
              password: "",
              userType: "",
              mobile: "",
              country: "",
              report_to: "",
              organization: "",
              std_code: "",
            });
            navigate("/")
          } else {
            dispatch({
              type: "POPUP_MESSAGE",
              payload: {
                status: "Alert",
                _message: data.message,
                excelError: data.errors,
              },
            });
            setShowDialogBox(true);
          }
        })
        .catch((error) => {
          setShowLoader(false);
          console.log("error", error.message);
        });
    } else {
      setShowLoader(false);
      dispatch({
        type: "POPUP_MESSAGE",
        payload: {
          status: "Alert",
          _message: "warning, Please Fill Required Fields",
          excelError: '',
        },
      });
      setShowDialogBox(true);
      setRequiredFiels({
        ...userData,
      });
    }

  };

  // const clearAllData = (e) => {
  //   e.preventDefault();
  //   setUserData({
  //     ...userData,
  //     country: user_country,
  //     first_name: "",
  //     last_name: "",
  //     username: "",
  //     email: "",
  //     password: "",
  //     userType: "",
  //     mobile: "",
  //     organization: ""
  //   });
  //   validate_calling_code(user_country)
  // };

  const validate_calling_code = (country_name) => {
    const countrydata = lookup.countries({ name: country_name })[0];
    const number_code = countrydata.countryCallingCodes[0];

    setUserData({ ...userData, std_code: number_code, country: country_name });
    verify_number(country_name, userData.mobile);
  };

  const verify_number = (country_name, mobile_value) => {
    seterr_mssg({ ...err_mssg, mobile_err_mssg: "" });

    const number = phone(userData.std_code + mobile_value, { country: null })
    if (mobile_value !== "") {
      if (number.isValid) {
        seterr_mssg({ ...err_mssg, mobile_err_mssg: "" })
      } else {
        seterr_mssg({ ...err_mssg, mobile_err_mssg: "Number Invalid" });
      }

      if (country_name === "India" && mobile_value.length !== 10) {
        seterr_mssg({ ...err_mssg, mobile_err_mssg: "Number Invalid!" });
      }
    }
  };

  const handleUserData = (e) => {
    if (isNaN(e.target.value) && e.target.name === "mobile") {
      return;
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setRequiredFiels({ ...requiredFields, [e.target.name]: e.target.value });

    if (e.target.name === "mobile") {
      e.target.value === ""
        ? seterr_mssg({ ...err_mssg, mobile_err_mssg: "Field can't be empty" })
        : verify_number(userData.country, e.target.value);
    }

    if (e.target.name === "country") {
      validate_calling_code(e.target.value);
    }
  };
  const handleShowDialogBox = () => {
    setShowDialogBox(false)
    dispatch({ type: "POPUP_MESSAGE", payload: {} })
  }

  useEffect(() => {
    _get("BaseTable/role")
      .then(data => {
        if (data.status) {
          // setAllRoles(data.result)
        }
      })
      .catch(error => {
        console.log("error:::", error.message);
      })
    // Fetch the user's IP-based location
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position, 'position')
    });
    axios(`https://ipinfo.io/json?token=${'4dd53b2ae2c18f'}`).then((data) => {
      const user_country_details = lookup.countries({ alpha2: data.data.country })[0];
      // setUser_country(user_country_details.name)
      validate_calling_code(user_country_details.name)
    })
      .catch((error) => {
        console.error('Error fetching location:', error);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <DialogBox
        showDialogBox={showDialogBox}
        handleShowDialogBox={handleShowDialogBox}
      />
      <div className="signup-parent">
        {/* base code */}
        <div className="sign_up">
          <div className="sing_up_form_main">
            <div className='logo_img text-center'>
              <img src={logoImg} alt='loading' />
            </div>
            <form>
              <div className="sign_up_form">
                <div className="sign_up_form_left">
                  <div className="margin_btm first_n_last_n d-flex justify-content-between">
                    <div className="w-50 pe-2">
                      <label>
                        First Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`${requiredFields.first_name.length < 1 ? `border_color` : ``
                          }`}
                        value={userData.first_name}
                        name="first_name"
                        onChange={handleUserData}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-50 ps-2">
                      <label>
                        Last Name<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        className={`${requiredFields.last_name.length < 1 ? `border_color` : ``
                          }`}
                        value={userData.last_name}
                        name="last_name"
                        onChange={handleUserData}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="margin_btm">
                    <label>
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`${requiredFields.email.length < 1 ? `border_color` : ``
                        }`}
                      value={userData.email}
                      name="email"
                      onChange={handleUserData}
                      placeholder="Email"
                    />
                  </div>
                  <div className="margin_btm">
                    <label>
                      Password<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="password"
                      className={`${requiredFields.password.length < 1 ? `border_color` : ``
                        }`}
                      value={userData.password}
                      name="password"
                      onChange={handleUserData}
                      placeholder="Password"
                    />
                  </div>
                  {/* <div className="margin_btm">
                  <label>Organization</label>
                  <select
                    className={`sign_up_form_select`}
                    value={userData.organization}
                    onChange={handleUserData}
                    name="organization"
                  >
                    <option value="">Select</option>
                    <option value="ivision">iVision</option>
                  </select>
                </div> */}
                </div>
                <div className="sign_up_form_right">
                  <div className="margin_btm">
                    <label>
                      Username<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className={`${requiredFields.username.length < 1 ? `border_color` : ``
                        }`}
                      value={userData.username}
                      name="username"
                      onChange={handleUserData}
                      placeholder="Username"
                    />
                  </div>
                  {/* <div className="margin_btm">
                  <label>
                    Role Type<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className={`${requiredFields.userType.length < 1
                      ? `sign_up_form_select border_color`
                      : `sign_up_form_select`
                      }`}
                    name="userType"
                    value={userData.userType}
                    onChange={handleUserData}
                  >
                    <option value="">Select</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </div> */}
                  <div className="margin_btm">
                    <label>Country</label>
                    <select
                      className={`sign_up_form_select `}
                      value={userData.country}
                      onChange={handleUserData}
                      name="country"
                    ><option value=""></option>
                      {countries.all.filter(ele => ele.countryCallingCodes[0] !== undefined).map(list =>
                        <Fragment key={Math.random()}>
                          <option id={list.alpha2} value={list.name}>
                            {list.name}
                          </option>
                        </Fragment>
                      )}
                    </select>
                  </div>
                  <div className="margin_btm">
                    <label>Mobile*</label>
                    <div className="input-group flex-nowrap">
                      <input
                        type="text"
                        value={userData.std_code}
                        name="std_code"
                        className="form-control control"
                        disabled
                      />
                      <input
                        type="text"
                        className={`form-control code_number w-75  ${requiredFields.mobile.length < 1 ? `border_color` : ``
                          }`}
                        value={userData.mobile}
                        onChange={handleUserData}
                        placeholder="Mobile"
                        name="mobile"
                      />
                    </div>
                    <span style={{ color: "red", fontSize: "13px" }}>
                      {err_mssg.mobile_err_mssg}
                    </span>
                  </div>
                </div>
              </div>
              <div className="img_upload_row">
                <label>Upload Profile Picture</label>
                <input type="file" onChange={handleImageChange} ref={ref} />                
              </div>

              {showLoader ? (
                <div className="sign_up_btn_loading w-100">
                  <div className="spinner-border text-white" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
              ) : (
                <div className="sign_up_btn_grp">
                  <button type="submit" onClick={handleRegisterData}>
                    Register
                  </button>
                  {/* <button onClick={clearAllData}>Clear</button> */}
                </div>
              )}
            </form>
          </div>
        </div>
        <div className='sign_up_right_side'>
          <div className=''>
            <img src={sideImg} alt='loading' className='login_page_right_img' />
          </div>
        </div>
        {/* base code end here */}
      </div>
    </Fragment>

  );
}

export default SignUp;
