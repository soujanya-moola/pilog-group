import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import './ContactUs.css'

import emailjs from 'emailjs-com';


export const ContactUs = () => {
    const [validated, setValidated] = useState(false);

  

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contact: '',
        company: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_soujanya2024', 'template_dxele8g', e.target, 'RmtANAiVZdEsxpAhI')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully');
            }, (error) => {
                console.error(error.text);
                alert('Failed to send message');
            });

            const form = e.currentTarget;
            if (form.checkValidity() === false) {
               
                e.stopPropagation();
                e.preventDefault();
            }
    
            setValidated(true);
        // Clear form fields
        setFormData({
            name: '',
            email: '',
            message: '',
            contact: '',
            company: '',
        });
    };

    const handleCountryChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const countryCode = selectedOption.getAttribute("data-country-value");
        setFormData({
            ...formData,
            country: e.target.value,
            countryCode: countryCode
        });
    };

    return (
        <div>
            <div>
                <div className='innovate-product-hero position-relative text-align-center color-white'>
                    <img className='w-100' src={require('../Assets/InnovativeProducts/Innovative_Products_Banner.jpg')} />
                    <div className='innovate-product-hero-title  position-absolute top-50 left-30 transform-translate(-50%, -50%)' >
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <br />
                <div>
                    <h1>Get In Touch</h1>
                    <Container className='my-3'>
                        <Row className='border'>
                            <Col lg={6} className='my-2'>
                                <div className='contact-side position-relative text-align-center color-white'>
                                    {/* <img className='' style={{width:550, height:620}}  src={require('../Assets/Contactus/hype-cycle-wm-inner-img1 .jpg')} /> */}
                                    {/* <div className='contact-left-data'>
                                        <h3>Call Us At</h3>
                                        <div className='border p-1'>
                                            <p>Africa: +27 12 663 2210</p>
                                            <p>Americas: +1 888 291 7242</p>
                                            <p>Europe and CIS: +7 495 127 09 24</p>
                                        </div>
                                        <div className='border p-1'>
                                            <p>India: 	Direct +91 40 660 17 777/788</p>
                                            <p>         Mob +91 630 176 0928</p>
                                            <p>         HR +91 40 660 17 755</p>
                                        </div>
                                        <div className='border p-1'>
                                            <p>Middle East North: +966 13 347 2595</p>
                                            <p>Middle East South: +971 2 555 6722</p>
                                            <p>Qatar: +97444231332 <br />+97444231100</p>
                                        </div>

                                    </div> */}
                                </div>

                            </Col>
                            <Col lg={6} className='my-2' >
                                <Form  validated={validated} onSubmit={handleSubmit}>
                                    <h2>Contact Us</h2>
                                    <Row className='mt-4'>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='text-align-left d-flex' >Name</Form.Label>
                                                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='text-align-left d-flex'>Email address</Form.Label>
                                                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3 mt-3">
                                        <Col>
                                            <Form.Select aria-label="Default select example" onChange={handleCountryChange} required>
                                               
                                                <option>Choose your country</option>
                                        <option data-countryCode="DZ" data-country-value="+213" value="Algeria (+213)">Algeria (+213)</option>
                                        <option data-countryCode="AD" data-country-value="+376" value="Andorra (+376)">Andorra (+376)</option>
                                        <option data-countryCode="AO" data-country-value="+244" value="Angola (+244)">Angola (+244)</option>
                                        <option data-countryCode="AI" data-country-value="+1264" value="Anguilla (+1264)">Anguilla (+1264)</option>
                                        <option data-countryCode="AG" data-country-value="+1268" value="Antigua &amp; Barbuda (+1268)">Antigua &amp; Barbuda (+1268)</option>
                                        <option data-countryCode="AR" data-country-value="+54" value="Argentina (+54)">Argentina (+54)</option>
                                        <option data-countryCode="AM" data-country-value="+374" value="Armenia (+374)">Armenia (+374)</option>
                                        <option data-countryCode="AW" data-country-value="+297" value="Aruba (+297)">Aruba (+297)</option>
                                        <option data-countryCode="AU" data-country-value="+61" value="Australia (+61)">Australia (+61)</option>
                                        <option data-countryCode="AT" data-country-value="+43" value="Austria (+43)">Austria (+43)</option>
                                        <option data-countryCode="AZ" data-country-value="+994" value="Azerbaijan (+994)">Azerbaijan (+994)</option>
                                        <option data-countryCode="BS" data-country-value="+1242" value="Bahamas (+1242)">Bahamas (+1242)</option>
                                        <option data-countryCode="BH" data-country-value="+973" value="Bahrain (+973)">Bahrain (+973)</option>
                                        <option data-countryCode="BD" data-country-value="+880" value="Bangladesh (+880)">Bangladesh (+880)</option>
                                        <option data-countryCode="BB" data-country-value="+1246" value="Barbados (+1246)">Barbados (+1246)</option>
                                        <option data-countryCode="BY" data-country-value="+375" value="Belarus (+375)">Belarus (+375)</option>
                                        <option data-countryCode="BE" data-country-value="+32" value="Belgium (+32)">Belgium (+32)</option>
                                        <option data-countryCode="BZ" data-country-value="+501" value="Belize (+501)">Belize (+501)</option>
                                        <option data-countryCode="BJ" data-country-value="+229" value="Benin (+229)">Benin (+229)</option>
                                        <option data-countryCode="BM" data-country-value="+1441" value="Bermuda (+1441)">Bermuda (+1441)</option>
                                        <option data-countryCode="BT" data-country-value="+975" value="Bhutan (+975)">Bhutan (+975)</option>
                                        <option data-countryCode="BO" data-country-value="+591" value="Bolivia (+591)">Bolivia (+591)</option>
                                        <option data-countryCode="BA" data-country-value="+387" value="Bosnia Herzegovina (+387)">Bosnia Herzegovina (+387)</option>
                                        <option data-countryCode="BW" data-country-value="+267" value="Botswana (+267)">Botswana (+267)</option>
                                        <option data-countryCode="BR" data-country-value="+55" value="Brazil (+55)">Brazil (+55)</option>
                                        <option data-countryCode="BN" data-country-value="+673" value="Brunei (+673)">Brunei (+673)</option>
                                        <option data-countryCode="BG" data-country-value="+359" value="Bulgaria (+359)">Bulgaria (+359)</option>
                                        <option data-countryCode="BF" data-country-value="+226" value="Burkina Faso (+226)">Burkina Faso (+226)</option>
                                        <option data-countryCode="BI" data-country-value="+257" value="Burundi (+257)">Burundi (+257)</option>
                                        <option data-countryCode="KH" data-country-value="+855" value="Cambodia (+855)">Cambodia (+855)</option>
                                        <option data-countryCode="CM" data-country-value="+237" value="Cameroon (+237)">Cameroon (+237)</option>
                                        <option data-countryCode="CA" data-country-value="+1" value="Canada (+1)">Canada (+1)</option>
                                        <option data-countryCode="CV" data-country-value="+238" value="Cape Verde Islands (+238)">Cape Verde Islands (+238)</option>
                                        <option data-countryCode="KY" data-country-value="+1345" value="Cayman Islands (+1345)">Cayman Islands (+1345)</option>
                                        <option data-countryCode="CF" data-country-value="+236" value="Central African Republic (+236)">Central African Republic (+236)</option>
                                        <option data-countryCode="CL" data-country-value="+56" value="Chile (+56)">Chile (+56)</option>
                                        <option data-countryCode="CN" data-country-value="+86" value="China (+86)">China (+86)</option>
                                        <option data-countryCode="CO" data-country-value="+57" value="Colombia (+57)">Colombia (+57)</option>
                                        <option data-countryCode="KM" data-country-value="+269" value="Comoros (+269)">Comoros (+269)</option>
                                        <option data-countryCode="CG" data-country-value="+242" value="Congo (+242)">Congo (+242)</option>
                                        <option data-countryCode="CK" data-country-value="+682" value="Cook Islands (+682)">Cook Islands (+682)</option>
                                        <option data-countryCode="CR" data-country-value="+506" value="Costa Rica (+506)">Costa Rica (+506)</option>
                                        <option data-countryCode="HR" data-country-value="+385" value="Croatia (+385">Croatia (+385)</option>
                                        <option data-countryCode="CU" data-country-value="+53" value="Cuba (+53)">Cuba (+53)</option>
                                        <option data-countryCode="CY" data-country-value="+90392" value="Cyprus North (+90392)">Cyprus North (+90392)</option>
                                        <option data-countryCode="CY" data-country-value="+357" value="Cyprus South (+357)">Cyprus South (+357)</option>
                                        <option data-countryCode="CZ" data-country-value="+42" value="Czech Republic (+42)">Czech Republic (+42)</option>
                                        <option data-countryCode="DK" data-country-value="+45" value="Denmark (+45)">Denmark (+45)</option>
                                        <option data-countryCode="DJ" data-country-value="+253" value="Djibouti (+253)">Djibouti (+253)</option>
                                        <option data-countryCode="DM" data-country-value="+1809" value="Dominica (+1809)">Dominica (+1809)</option>
                                        <option data-countryCode="DO" data-country-value="+1809" value="Dominican Republic (+1809)">Dominican Republic (+1809)</option>
                                        <option data-countryCode="EC" data-country-value="+593" value="Ecuador (+593)">Ecuador (+593)</option>
                                        <option data-countryCode="EG" data-country-value="+20" value="Egypt (+20)">Egypt (+20)</option>
                                        <option data-countryCode="SV" data-country-value="+503" value="El Salvador (+503)">El Salvador (+503)</option>
                                        <option data-countryCode="GQ" data-country-value="+240" value="Equatorial Guinea (+240)">Equatorial Guinea (+240)</option>
                                        <option data-countryCode="ER" data-country-value="+291" value="Eritrea (+291)">Eritrea (+291)</option>
                                        <option data-countryCode="EE" data-country-value="+372" value="Estonia (+372)">Estonia (+372)</option>
                                        <option data-countryCode="ET" data-country-value="+251" value="Ethiopia (+251)">Ethiopia (+251)</option>
                                        <option data-countryCode="FK" data-country-value="+500" value="Falkland Islands (+500)">Falkland Islands (+500)</option>
                                        <option data-countryCode="FO" data-country-value="+298" value="Faroe Islands (+298)">Faroe Islands (+298)</option>
                                        <option data-countryCode="FJ" data-country-value="+679" value="Fiji (+679)">Fiji (+679)</option>
                                        <option data-countryCode="FI" data-country-value="+358" value="Finland (+358)">Finland (+358)</option>
                                        <option data-countryCode="FR" data-country-value="+33" value="France (+33)">France (+33)</option>
                                        <option data-countryCode="GF" data-country-value="+594" value="French Guiana (+594)">French Guiana (+594)</option>
                                        <option data-countryCode="PF" data-country-value="+689" value="French Polynesia (+689)">French Polynesia (+689)</option>
                                        <option data-countryCode="GA" data-country-value="+241" value="Gabon (+241)">Gabon (+241)</option>
                                        <option data-countryCode="GM" data-country-value="+220" value="Gambia (+220)">Gambia (+220)</option>
                                        <option data-countryCode="GE" data-country-value="+7880" value="Georgia (+7880)">Georgia (+7880)</option>
                                        <option data-countryCode="DE" data-country-value="+49" value="Germany (+49)">Germany (+49)</option>
                                        <option data-countryCode="GH" data-country-value="+233" value="Ghana (+233)">Ghana (+233)</option>
                                        <option data-countryCode="GI" data-country-value="+350" value="Gibraltar (+350)">Gibraltar (+350)</option>
                                        <option data-countryCode="GR" data-country-value="+30" value="Greece (+30)">Greece (+30)</option>
                                        <option data-countryCode="GL" data-country-value="+299" value="Greenland (+299)">Greenland (+299)</option>
                                        <option data-countryCode="GD" data-country-value="+1473" value="Grenada (+1473)">Grenada (+1473)</option>
                                        <option data-countryCode="GP" data-country-value="+590" value="Guadeloupe (+590)">Guadeloupe (+590)</option>
                                        <option data-countryCode="GU" data-country-value="+671" value="Guam (+671)">Guam (+671)</option>
                                        <option data-countryCode="GT" data-country-value="+502" value="Guatemala (+502)">Guatemala (+502)</option>
                                        <option data-countryCode="GN" data-country-value="+224" value="Guinea (+224)">Guinea (+224)</option>
                                        <option data-countryCode="GW" data-country-value="+245" value="Guinea - Bissau (+245)">Guinea - Bissau (+245)</option>
                                        <option data-countryCode="GY" data-country-value="+592" value="Guyana (+592)">Guyana (+592)</option>
                                        <option data-countryCode="HT" data-country-value="+509" value="Haiti (+509)">Haiti (+509)</option>
                                        <option data-countryCode="HN" data-country-value="+504" value="Honduras (+504)">Honduras (+504)</option>
                                        <option data-countryCode="HK" data-country-value="+852" value="Hong Kong (+852)">Hong Kong (+852)</option>
                                        <option data-countryCode="HU" data-country-value="+36" value="Hungary (+36)">Hungary (+36)</option>
                                        <option data-countryCode="IS" data-country-value="+354" value="Iceland (+354)">Iceland (+354)</option>
                                        <option data-countryCode="IN" data-country-value="+91" value="India (+91)">India (+91)</option>
                                        <option data-countryCode="ID" data-country-value="+62" value="Indonesia (+62)">Indonesia (+62)</option>
                                        <option data-countryCode="IR" data-country-value="+98" value="Iran (+98)">Iran (+98)</option>
                                        <option data-countryCode="IQ" data-country-value="+964" value="Iraq (+964)">Iraq (+964)</option>
                                        <option data-countryCode="IE" data-country-value="+353" value="Ireland (+353)">Ireland (+353)</option>
                                        <option data-countryCode="IL" data-country-value="+972" value="Israel (+972)">Israel (+972)</option>
                                        <option data-countryCode="IT" data-country-value="+39" value="Italy (+39)">Italy (+39)</option>
                                        <option data-countryCode="JM" data-country-value="+1876" value="Jamaica (+1876)">Jamaica (+1876)</option>
                                        <option data-countryCode="JP" data-country-value="+81" value="Japan (+81)">Japan (+81)</option>
                                        <option data-countryCode="JO" data-country-value="+962" value="Jordan (+962)">Jordan (+962)</option>
                                        <option data-countryCode="KZ" data-country-value="+7" value="Kazakhstan (+7)">Kazakhstan (+7)</option>
                                        <option data-countryCode="KE" data-country-value="+254" value="Kenya (+254)">Kenya (+254)</option>
                                        <option data-countryCode="KI" data-country-value="+686" value="Kiribati (+686)">Kiribati (+686)</option>
                                        <option data-countryCode="KP" data-country-value="+850" value="Korea North (+850)">Korea North (+850)</option>
                                        <option data-countryCode="KR" data-country-value="+82" value="Korea South (+82)">Korea South (+82)</option>
                                        <option data-countryCode="KW" data-country-value="+965" value="Kuwait (+965)">Kuwait (+965)</option>
                                        <option data-countryCode="KG" data-country-value="+996" value="Kyrgyzstan (+996)">Kyrgyzstan (+996)</option>
                                        <option data-countryCode="LA" data-country-value="+856" value="Laos (+856)">Laos (+856)</option>
                                        <option data-countryCode="LV" data-country-value="+371" value="Latvia (+371)">Latvia (+371)</option>
                                        <option data-countryCode="LB" data-country-value="+961" value="Lebanon (+961)">Lebanon (+961)</option>
                                        <option data-countryCode="LS" data-country-value="+266" value="Lesotho (+266)">Lesotho (+266)</option>
                                        <option data-countryCode="LR" data-country-value="+231" value="Liberia (+231)">Liberia (+231)</option>
                                        <option data-countryCode="LY" data-country-value="+218" value="Libya (+218)">Libya (+218)</option>
                                        <option data-countryCode="LI" data-country-value="+417" value="Liechtenstein (+417)">Liechtenstein (+417)</option>
                                        <option data-countryCode="LT" data-country-value="+370" value="Lithuania (+370)">Lithuania (+370)</option>
                                        <option data-countryCode="LU" data-country-value="+352" value="Luxembourg (+352)">Luxembourg (+352)</option>
                                        <option data-countryCode="MO" data-country-value="+853" value="Macao (+853)">Macao (+853)</option>
                                        <option data-countryCode="MK" data-country-value="+389" value="Macedonia (+389)">Macedonia (+389)</option>
                                        <option data-countryCode="MG" data-country-value="+261" value="Madagascar (+261)">Madagascar (+261)</option>
                                        <option data-countryCode="MW" data-country-value="+265" value="Malawi (+265)">Malawi (+265)</option>
                                        <option data-countryCode="MY" data-country-value="+60" value="Malaysia (+60)">Malaysia (+60)</option>
                                        <option data-countryCode="MV" data-country-value="+960" value="Maldives (+960)">Maldives (+960)</option>
                                        <option data-countryCode="ML" data-country-value="+223" value="Mali (+223)">Mali (+223)</option>
                                        <option data-countryCode="MT" data-country-value="+356" value="Malta (+356)">Malta (+356)</option>
                                        <option data-countryCode="MH" data-country-value="+692" value="Marshall Islands (+692)">Marshall Islands (+692)</option>
                                        <option data-countryCode="MQ" data-country-value="+596" value="Martinique (+596)">Martinique (+596)</option>
                                        <option data-countryCode="MR" data-country-value="+222" value="Mauritania (+222)">Mauritania (+222)</option>
                                        <option data-countryCode="YT" data-country-value="+269" value="Mayotte (+269)">Mayotte (+269)</option>
                                        <option data-countryCode="MX" data-country-value="+52" value="Mexico (+52)">Mexico (+52)</option>
                                        <option data-countryCode="FM" data-country-value="+691" value="Micronesia (+691)">Micronesia (+691)</option>
                                        <option data-countryCode="MD" data-country-value="+373" value="Moldova (+373)">Moldova (+373)</option>
                                        <option data-countryCode="MC" data-country-value="+377" value="Monaco (+377)">Monaco (+377)</option>
                                        <option data-countryCode="MN" data-country-value="+976" value="Mongolia (+976)">Mongolia (+976)</option>
                                        <option data-countryCode="MS" data-country-value="+1664" value="Montserrat (+1664)">Montserrat (+1664)</option>
                                        <option data-countryCode="MA" data-country-value="+212" value="Morocco (+212)">Morocco (+212)</option>
                                        <option data-countryCode="MZ" data-country-value="+258" value="Mozambique (+258)">Mozambique (+258)</option>
                                        <option data-countryCode="MN" data-country-value="+95" value="Myanmar (+95)">Myanmar (+95)</option>
                                        <option data-countryCode="NA" data-country-value="+264" value="Namibia (+264)">Namibia (+264)</option>
                                        <option data-countryCode="NR" data-country-value="+674" value="Nauru (+674)">Nauru (+674)</option>
                                        <option data-countryCode="NP" data-country-value="+977" value="Nepal (+977)">Nepal (+977)</option>
                                        <option data-countryCode="NL" data-country-value="+31" value="Netherlands (+31)">Netherlands (+31)</option>
                                        <option data-countryCode="NC" data-country-value="+687" value="New Caledonia (+687)">New Caledonia (+687)</option>
                                        <option data-countryCode="NZ" data-country-value="+64" value="New Zealand (+64)">New Zealand (+64)</option>
                                        <option data-countryCode="NI" data-country-value="+505" value="Nicaragua (+505)">Nicaragua (+505)</option>
                                        <option data-countryCode="NE" data-country-value="+227" value="Niger (+227)">Niger (+227)</option>
                                        <option data-countryCode="NG" data-country-value="+234" value="Nigeria (+234)">Nigeria (+234)</option>
                                        <option data-countryCode="NU" data-country-value="+683" value="Niue (+683)">Niue (+683)</option>
                                        <option data-countryCode="NF" data-country-value="+672" value="Norfolk Islands (+672)">Norfolk Islands (+672)</option>
                                        <option data-countryCode="NP" data-country-value="+670" value="Northern Marianas (+670)">Northern Marianas (+670)</option>
                                        <option data-countryCode="NO" data-country-value="+47" value="Norway (+47)">Norway (+47)</option>
                                        <option data-countryCode="OM" data-country-value="+968" value="Oman (+968)">Oman (+968)</option>
                                        <option data-countryCode="PW" data-country-value="+680" value="Palau (+680)">Palau (+680)</option>
                                        <option data-countryCode="PA" data-country-value="+507" value="Panama (+507)">Panama (+507)</option>
                                        <option data-countryCode="PG" data-country-value="+675" value="Papua New Guinea (+675)">Papua New Guinea (+675)</option>
                                        <option data-countryCode="PY" data-country-value="+595" value="Paraguay (+595)">Paraguay (+595)</option>
                                        <option data-countryCode="PE" data-country-value="+51" value="Peru (+51)">Peru (+51)</option>
                                        <option data-countryCode="PH" data-country-value="+63" value="Philippines (+63)">Philippines (+63)</option>
                                        <option data-countryCode="PL" data-country-value="+48" value="Poland (+48)">Poland (+48)</option>
                                        <option data-countryCode="PT" data-country-value="+351" value="Portugal (+351)">Portugal (+351)</option>
                                        <option data-countryCode="PR" data-country-value="+1787" value="Puerto Rico (+1787)">Puerto Rico (+1787)</option>
                                        <option data-countryCode="QA" data-country-value="+974" value="Qatar (+974)">Qatar (+974)</option>
                                        <option data-countryCode="RE" data-country-value="+262" value="Reunion (+262)">Reunion (+262)</option>
                                        <option data-countryCode="RO" data-country-value="+40" value="Romania (+40)">Romania (+40)</option>
                                        <option data-countryCode="RU" data-country-value="+7" value="Russia (+7)">Russia (+7)</option>
                                        <option data-countryCode="RW" data-country-value="+250" value="Rwanda (+250)">Rwanda (+250)</option>
                                        <option data-countryCode="SM" data-country-value="+378" value="San Marino (+378)">San Marino (+378)</option>
                                        <option data-countryCode="ST" data-country-value="+239" value="Sao Tome &amp; Principe (+239)">Sao Tome &amp; Principe (+239)</option>
                                        <option data-countryCode="SA" data-country-value="+966" value="Saudi Arabia (+966)">Saudi Arabia (+966)</option>
                                        <option data-countryCode="SN" data-country-value="+221" value="Senegal (+221)">Senegal (+221)</option>
                                        <option data-countryCode="CS" data-country-value="+381" value="Serbia (+381)">Serbia (+381)</option>
                                        <option data-countryCode="SC" data-country-value="+248" value="Seychelles (+248)">Seychelles (+248)</option>
                                        <option data-countryCode="SL" data-country-value="+232" value="Sierra Leone (+232)">Sierra Leone (+232)</option>
                                        <option data-countryCode="SG" data-country-value="+65" value="Singapore (+65)">Singapore (+65)</option>
                                        <option data-countryCode="SK" data-country-value="+421" value="Slovak Republic (+421)">Slovak Republic (+421)</option>
                                        <option data-countryCode="SI" data-country-value="+386" value="Slovenia (+386)">Slovenia (+386)</option>
                                        <option data-countryCode="SB" data-country-value="+677" value="Solomon Islands (+677)">Solomon Islands (+677)</option>
                                        <option data-countryCode="SO" data-country-value="+252" value="Somalia (+252)">Somalia (+252)</option>
                                        <option data-countryCode="ZA" data-country-value="+27" value="South Africa (+27)">South Africa (+27)</option>
                                        <option data-countryCode="ES" data-country-value="+34" value="Spain (+34)">Spain (+34)</option>
                                        <option data-countryCode="LK" data-country-value="+94" value="Sri Lanka (+94)">Sri Lanka (+94)</option>
                                        <option data-countryCode="SH" data-country-value="+290" value="St. Helena (+290)">St. Helena (+290)</option>
                                        <option data-countryCode="KN" data-country-value="+1869" value="St. Kitts (+1869)">St. Kitts (+1869)</option>
                                        <option data-countryCode="SC" data-country-value="+1758" value="St. Lucia (+1758)">St. Lucia (+1758)</option>
                                        <option data-countryCode="SD" data-country-value="+249" value="Sudan (+249)">Sudan (+249)</option>
                                        <option data-countryCode="SR" data-country-value="+597" value="Suriname (+597)">Suriname (+597)</option>
                                        <option data-countryCode="SZ" data-country-value="+268" value="Swaziland (+268)">Swaziland (+268)</option>
                                        <option data-countryCode="SE" data-country-value="+46" value="Sweden (+46)">Sweden (+46)</option>
                                        <option data-countryCode="CH" data-country-value="+41" value="Switzerland (+41)">Switzerland (+41)</option>
                                        <option data-countryCode="SI" data-country-value="+963" value="Syria (+963)">Syria (+963)</option>
                                        <option data-countryCode="TW" data-country-value="+886" value="Taiwan (+886)">Taiwan (+886)</option>
                                        <option data-countryCode="TJ" data-country-value="+7" value="Tajikstan (+7)">Tajikstan (+7)</option>
                                        <option data-countryCode="TH" data-country-value="+66" value="Thailand (+66)">Thailand (+66)</option>
                                        <option data-countryCode="TG" data-country-value="+228" value="Togo (+228)">Togo (+228)</option>
                                        <option data-countryCode="TO" data-country-value="+676" value="Tonga (+676)">Tonga (+676)</option>
                                        <option data-countryCode="TT" data-country-value="+1868" value="Trinidad &amp; Tobago (+1868)">Trinidad &amp; Tobago (+1868)</option>
                                        <option data-countryCode="TN" data-country-value="+216" value="Tunisia (+216)">Tunisia (+216)</option>
                                        <option data-countryCode="TR" data-country-value="+90" value="Turkey (+90)">Turkey (+90)</option>
                                        <option data-countryCode="TM" data-country-value="+7" value="Turkmenistan (+7)">Turkmenistan (+7)</option>
                                        <option data-countryCode="TM" data-country-value="+993" value="Turkmenistan (+993)">Turkmenistan (+993)</option>
                                        <option data-countryCode="TC" data-country-value="+1649" value="Turks &amp; Caicos Islands (+1649)">Turks &amp; Caicos Islands (+1649)</option>
                                        <option data-countryCode="TV" data-country-value="+688" value="Tuvalu (+688)">Tuvalu (+688)</option>
                                        <option data-countryCode="UG" data-country-value="+256" value="Uganda (+256)">Uganda (+256)</option>
                                        <option data-countryCode="GB" data-country-value="+44" value="UK (+44)">UK (+44)</option>
                                        <option data-countryCode="UA" data-country-value="+380" value="Ukraine (+380)">Ukraine (+380)</option>
                                        <option data-countryCode="AE" data-country-value="+971" value="United Arab Emirates (+971)">United Arab Emirates (+971)</option>
                                        <option data-countryCode="UY" data-country-value="+598" value="Uruguay (+598)">Uruguay (+598)</option>
                                        <option data-countryCode="US" data-country-value="+1" value="USA (+1)">USA (+1)</option>
                                        <option data-countryCode="UZ" data-country-value="+7" value="Uzbekistan (+7)">Uzbekistan (+7)</option>
                                        <option data-countryCode="VU" data-country-value="+678" value="Vanuatu (+678)">Vanuatu (+678)</option>
                                        <option data-countryCode="VA" data-country-value="+379" value="Vatican City (+379)">Vatican City (+379)</option>
                                        <option data-countryCode="VE" data-country-value="+58" value="Venezuela (+58)">Venezuela (+58)</option>
                                        <option data-countryCode="VN" data-country-value="+84" value="Vietnam (+84)">Vietnam (+84)</option>
                                        <option data-countryCode="VG" data-country-value="+1284" value="Virgin Islands - British (+1284)">Virgin Islands - British (+1284)</option>
                                        <option data-countryCode="VI" data-country-value="+1340" value="Virgin Islands - US (+1340)">Virgin Islands - US (+1340)</option>
                                        <option data-countryCode="WF" data-country-value="+681" value="Wallis &amp; Futuna (+681)">Wallis &amp; Futuna (+681)</option>
                                        <option data-countryCode="YE" data-country-value="+969" value="Yemen (North)(+969)">Yemen (North)(+969)</option>
                                        <option data-countryCode="YE" data-country-value="+967" value="Yemen (South)(+967)">Yemen (South)(+967)</option>
                                        <option data-countryCode="ZM" data-country-value="+260" value="Zambia (+260)">Zambia (+260)</option>
                                        <option data-countryCode="ZW" data-country-value="+263" value="Zimbabwe (+263)">Zimbabwe (+263)</option>
                                            </Form.Select>
                                        </Col>

                                        <Col className='d-flex gap-2'>
                                            <Form.Select className='w-25 h-75' id='country-code' aria-label="Default select example" disabled>
                                            <option>{formData.countryCode}</option>
                                            </Form.Select>
                                            <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
                                               
                                                <Form.Control type="number" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" required/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                           
                                                <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Enter Your Company" required/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Select aria-label="Default select example">
                                                <option>Products</option>
                                                <option value="Master Data Record Manager">Master Data Record Manager</option>
                                            <option value="Spares Parts Interchangeability Record (iSPIR)">Spares Parts Interchangeability Record (iSPIR)</option>
                                            <option value="Data Quality HUB (DQH)">Data Quality HUB (DQH)</option>
                                            <option value="Digital Transformation">Digital Transformation</option>
                                            <option value="Service Master Configurator ">Service Master Configurator </option>
                                            <option value="Data Harmonization Solution (DHS) ">Data Harmonization Solution (DHS) </option>
                                            <option value="Master Data Ontology Manager (MDOM) ">Master Data Ontology Manager (MDOM) </option>
                                            <option value="Micro-services (APIs) for Cleansing, Harmonization, Validation and Enrichment">Micro-services (APIs) for Cleansing,Harmonization, <br/>Validation and Enrichment</option>
                                            <option value="PiLog Preferred Records (PPR)">PiLog Preferred Records (PPR)</option>
                                            <option value="PiLog Preferred Hierarchy (PPH)">PiLog Preferred Hierarchy (PPH)</option>
                                            <option value="iVisualize - Digital Analytics">iVisualize - Digital Analytics</option>
                                            <option value="iCustomer Insights - CRM">iCustomer Insights - CRM</option>
                                            <option value="iTransform - ETL">iTransform - ETL</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col>
                                            <Form.Select aria-label="Default select example">
                                                <option>Tech Services</option>
                                                <option value="Data Harmonization">Data Harmonization</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="Data Migration">Data Migration</option>
                                            <option value="Digital Transformation">Digital Transformation</option>
                                            <option value="iSPIR Management">iSPIR Management</option>
                                            <option value="Data Health Assessment">Data Health Assessment</option>
                                            <option value="Data Archiving and Unarchiving">Data Archiving and Unarchiving</option>
                                            <option value="PM Data Acquisition">PM Data Acquisition</option>
                                            <option value="Imaging, Tagging Inventory Optimization">Imaging, Tagging Inventory Optimization</option>
                                            <option value="Physical-Verification (or) Field Data Collection">Physical-Verification (or) Field Data Collection</option>
                                            </Form.Select>
                                        </Col>
                                        <Col>
                                            <Form.Select aria-label="Default select example">
                                                <option>Stratagic Services</option>
                                                <option value="BIG Data (ML-ER-AI)">BIG Data (ML-ER-AI)</option>
                                            <option value="Business Process Outsourcing">Business Process Outsourcing</option>
                                            <option value="Management Consulting">Management Consulting</option>
                                            <option value="Fixed Asset Register">Fixed Asset Register</option>
                                            <option value="Data Management">Data Management</option>
                                            <option value="EIM Architecture">EIM Architecture</option>
                                            <option value="Material Criticality Analysis">Material Criticality Analysis</option>
                                            <option value="Equipment Criticality Analysis">Equipment Criticality Analysis</option>
                                            <option value="Spend Analytics">Spend Analytics</option>
                                            </Form.Select>
                                        </Col>

                                    </Row>
                                    <Row className='mt-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='text-align-left d-flex'>Enter Your Message</Form.Label>
                                            <Form.Control as="textarea"  name="message" value={formData.message} onChange={handleChange} rows={3} />
                                        </Form.Group>
                                    </Row>


                                    <Button type="submit">Submit</Button>
                                </Form>

                                {/* <form onSubmit={handleSubmit}>
                                    <h2>Contact Us</h2>
                                    <div>
                                        <label>Name:</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='name' />
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='email' />
                                    </div>
                                    <div>
                                        <label>Message:</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='message' />
                                    </div>
                                    <button type="submit">Send Message</button>
                                </form> */}
                            </Col>
                        </Row>
                    </Container>

                </div>
                <br />
                <div className='m-5'>
                    <Container>
                        <h3>Contact Us At</h3>
                        <div className='mt-3'>
                            <Row className='d-flex  contact-numbers'>
                                <Col lg={4}>
                                    <div className='d-flex'>
                                        <div className='contry-names'>
                                            <p>Africa:</p>
                                            <p>Americas:</p>
                                            <p>Europe and CIS:</p>
                                        </div>
                                        <div>
                                            <p> +27 12 663 2210</p>
                                            <p> +1 888 291 7242</p>
                                            <p> +7 495 127 09 24</p>
                                        </div>

                                    </div>

                                </Col>
                                <Col lg={4} className='d-flex'>
                                    <div >
                                        <h5 className='d-flex text-align-center' >India</h5>
                                        <div className='d-flex justify-content-center align-item-center text-align-left'>

                                            <div className='contry-names'>
                                                <p>Direct:</p>
                                                <p>Mob:</p>
                                                <p>HR: </p>

                                            </div>
                                            <div>
                                                <p>+91 40 660 17 777/788</p>
                                                <p> +91 630 176 0928</p>
                                                <p> +91 40 660 17 755</p>
                                            </div>
                                        </div>


                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='d-flex'>
                                        <div className='contry-names'>
                                            <p>Middle East North:</p>
                                            <p>Middle East South:</p>
                                            <p>Qatar:</p>
                                        </div>
                                        <div>
                                            <p>+966 13 347 2595</p>
                                            <p>+971 2 555 6722</p>
                                            <p>+97444231332 / +97444231100</p>

                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>



                </div>

                <div>
                    <Container>
                        <h2> Zonal Addresses</h2>
                        <Row className='my-4 zonal-row'>
                            <Col lg={4} className=' py-2'>
                                <div className='border shadow bg-body rounded address-card p-3'>
                                    <h4>PiLog Africa</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7180.142031156779!2d28.188011!3d-25.86714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9565cc86ed795b%3A0x720f78bf29040b56!2sPiLog!5e0!3m2!1sen!2sus!4v1707113038500!5m2!1sen!2sus" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </div>
                                    <p>Building 5, Centurion Gate, Akkerboom St, Zwartkop, Centurion, South Africa - 0157</p>


                                </div>
                            </Col>
                            <Col lg={4} className='py-2'>
                                <div className='border shadow bg-body rounded p-3 address-card'>
                                    <h4>PiLog Americas</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6883.218837492834!2d-95.696197!3d30.390447000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864720304b08bd39%3A0x5342a53253d0e605!2s401%20College%20St%20%23208%2C%20Montgomery%2C%20TX%2077356%2C%20USA!5e0!3m2!1sen!2sin!4v1707114379708!5m2!1sen!2sin" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <p>401 College St Suite 208 Montgomery, TX 77356</p>

                                </div>
                            </Col>
                            <Col lg={4} className='py-2'>
                                <div className='border shadow bg-body rounded p-3 address-card'>
                                    <h4>PiLog Europe and CIS</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10161.241454879579!2d30.589417000000005!3d50.453945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfe91f3a41f7%3A0xb5cfabe6404e39e!2sMykilsko-Slobidska%20St%2C%206%D0%B5%2C%20Kyiv%2C%20Ukraine%2C%2002002!5e0!3m2!1sen!2sin!4v1707114476540!5m2!1sen!2sin" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <p>6B Mykilsko Slobidska St, Kyiv Ukraine. 02002</p>

                                </div>
                            </Col>
                            <Col lg={4} className='py-2'>
                                <div className='border shadow bg-body rounded p-3 address-card'>
                                    <h4>PiLog India</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15227.141969530649!2d78.381786!3d17.422079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96eb3a70fae7%3A0xe802be4593e9fdc0!2sPiLog%20Group!5e0!3m2!1sen!2sus!4v1707114578510!5m2!1sen!2sus" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <p>3rd Floor, Unit-1, MJR Magnifique, Nanakramguda X road, Near Wells Fargo, Raidurg Navakhalsa, Hyderabad, Telangana - 500 008</p>

                                </div>
                            </Col>
                            <Col lg={4} className='py-2'>
                                <div className='border shadow bg-body rounded p-3 address-card'>
                                    <h4>Middle East North</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14202.437621859985!2d49.566008!3d27.13711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e350fb35a9b4831%3A0x1c44ef1b4321837c!2sPilog%20Saudi%20International%20Company!5e0!3m2!1sen!2sus!4v1707114652321!5m2!1sen!2sus" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <p>Office 2-2, Palm Commercial Centre, Fanateer, Jubail, Kingdom of Saudi Arabia </p>

                                </div>
                            </Col>
                            <Col lg={4} className='py-2'>
                                <div className=' border shadow bg-body rounded p-3 address-card'>
                                    <h4>Middle East South</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14529.873286819917!2d54.367254!3d24.434532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e68fb71500c4f%3A0x8aae38c5ad0a3af1!2sKhalifa%20Al%20Mubarak%20St%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1707114716897!5m2!1sen!2sin" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <p>4th Floor, office No.406, Abudhabi Plaza Tower, Fatima Bint. Mubarak Street,Abu Dhabi</p>

                                </div>
                            </Col>
                            <Col lg={4} className='py-2'>
                                <div className='border shadow bg-body rounded address-card p-3'>
                                    <h4>PiLog Innovative Solutions - Qatar</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14433.656961640107!2d51.549883!3d25.256647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf9baed3703f%3A0xa8143369f5c97cd8!2sRegus%20-%20Doha%2C%20D%20Ring%20Road!5e0!3m2!1sen!2sin!4v1707114778747!5m2!1sen!2sin" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                         </div>
                                    <p>Building no:67, Street No:250, Zone No:45, Regus D Ring Road, Doha,Qatar</p>

                                </div>
                            </Col><Col lg={4} className='py-2'>
                                <div className='border shadow bg-body rounded address-card p-3'>
                                    <h4>Representative Office - Belgium</h4>
                                    <hr />
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d320197.8033768359!2d5.175582!3d51.172171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1338af46eedff%3A0xe6b48fdea6e8e4f9!2s2490%20Balen%2C%20Belgium!5e0!3m2!1sen!2sin!4v1707114837991!5m2!1sen!2sin" width="280" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>              </div>
                                    <p>2490 Balen, Antwerp, Belgium</p>

                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>


            </div>
        </div>
    )
}
