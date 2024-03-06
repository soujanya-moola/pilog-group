import React, { useState } from 'react'

export const MasterDataManagement = () => {

    const [formData, setFormData] = useState({
        regionOfInterest: '',
        name: '',
        email: '',
        company: '',
        phone: '',
        enquiry: '',
        captchaInput: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateEmail = () => {
        const emailValue = formData.email.trim().toLowerCase();
        const disallowedEmailDomains = ["yahoo.com", "hotmail.com", "mail.ru"];
        const emailDomain = emailValue.split('@')[1];
        const domainParts = emailDomain.split('.');
        const topLevelDomain = domainParts[domainParts.length - 1];

        if (disallowedEmailDomains.includes(emailDomain) || disallowedEmailDomains.includes(topLevelDomain)) {
            alert("Please enter a business email id!");
            setFormData((prevData) => ({
                ...prevData,
                email: '', // Clear the input
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };


  return (
    <div>
         <section className="section-wrapper-banner">
                <img src="https://www.piloggroup.com/img/master-data-management-big-data-banner-img.webp" className="section-banner-new" width="100%" style={{ marginTop: '36px' }} />
            </section>

            <section className="section-wrapper">
                <div className="container">
                    <div className="row row-form-sec">
                        <div className="col-md-5" style={{ backgroundColor: 'white' }}>
                            {/* Your form goes here */}
                            <form onSubmit={handleSubmit}>
                                {/* Form inputs go here */}
                                {/* For example: */}
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                                <input type="text" name="email" value={formData.email} onChange={handleChange} onBlur={validateEmail} placeholder="Email address" />
                                {/* Other form inputs */}
                                <button type="submit">Submit</button>
                            </form>

                            <form method="POST" name="myForm" id="reach-out" onSubmit={handleSubmit} >
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Country</label>
                                        <select name="regionOfInterest" onchange="getcountrycode(this)">
                                            <option>Choose your country</option>
                                            <option data-countrycode="DZ" data-country-value="+213" value="Algeria (+213)">Algeria (+213)</option>
                                            <option data-countrycode="AD" data-country-value="+376" value="Andorra (+376)">Andorra (+376)</option>
                                            <option data-countrycode="AO" data-country-value="+244" value="Angola (+244)">Angola (+244)</option>
                                            <option data-countrycode="AI" data-country-value="+1264" value="Anguilla (+1264)">Anguilla (+1264)</option>
                                            <option data-countrycode="AG" data-country-value="+1268" value="Antigua &amp; Barbuda (+1268)">Antigua &amp; Barbuda (+1268)</option>
                                            <option data-countrycode="AR" data-country-value="+54" value="Argentina (+54)">Argentina (+54)</option>
                                            <option data-countrycode="AM" data-country-value="+374" value="Armenia (+374)">Armenia (+374)</option>
                                            <option data-countrycode="AW" data-country-value="+297" value="Aruba (+297)">Aruba (+297)</option>
                                            <option data-countrycode="AU" data-country-value="+61" value="Australia (+61)">Australia (+61)</option>
                                            <option data-countrycode="AT" data-country-value="+43" value="Austria (+43)">Austria (+43)</option>
                                            <option data-countrycode="AZ" data-country-value="+994" value="Azerbaijan (+994)">Azerbaijan (+994)</option>
                                            <option data-countrycode="BS" data-country-value="+1242" value="Bahamas (+1242)">Bahamas (+1242)</option>
                                            <option data-countrycode="BH" data-country-value="+973" value="Bahrain (+973)">Bahrain (+973)</option>
                                            <option data-countrycode="BD" data-country-value="+880" value="Bangladesh (+880)">Bangladesh (+880)</option>
                                            <option data-countrycode="BB" data-country-value="+1246" value="Barbados (+1246)">Barbados (+1246)</option>
                                            <option data-countrycode="BY" data-country-value="+375" value="Belarus (+375)">Belarus (+375)</option>
                                            <option data-countrycode="BE" data-country-value="+32" value="Belgium (+32)">Belgium (+32)</option>
                                            <option data-countrycode="BZ" data-country-value="+501" value="Belize (+501)">Belize (+501)</option>
                                            <option data-countrycode="BJ" data-country-value="+229" value="Benin (+229)">Benin (+229)</option>
                                            <option data-countrycode="BM" data-country-value="+1441" value="Bermuda (+1441)">Bermuda (+1441)</option>
                                            <option data-countrycode="BT" data-country-value="+975" value="Bhutan (+975)">Bhutan (+975)</option>
                                            <option data-countrycode="BO" data-country-value="+591" value="Bolivia (+591)">Bolivia (+591)</option>
                                            <option data-countrycode="BA" data-country-value="+387" value="Bosnia Herzegovina (+387)">Bosnia Herzegovina (+387)</option>
                                            <option data-countrycode="BW" data-country-value="+267" value="Botswana (+267)">Botswana (+267)</option>
                                            <option data-countrycode="BR" data-country-value="+55" value="Brazil (+55)">Brazil (+55)</option>
                                            <option data-countrycode="BN" data-country-value="+673" value="Brunei (+673)">Brunei (+673)</option>
                                            <option data-countrycode="BG" data-country-value="+359" value="Bulgaria (+359)">Bulgaria (+359)</option>
                                            <option data-countrycode="BF" data-country-value="+226" value="Burkina Faso (+226)">Burkina Faso (+226)</option>
                                            <option data-countrycode="BI" data-country-value="+257" value="Burundi (+257)">Burundi (+257)</option>
                                            <option data-countrycode="KH" data-country-value="+855" value="Cambodia (+855)">Cambodia (+855)</option>
                                            <option data-countrycode="CM" data-country-value="+237" value="Cameroon (+237)">Cameroon (+237)</option>
                                            <option data-countrycode="CA" data-country-value="+1" value="Canada (+1)">Canada (+1)</option>
                                            <option data-countrycode="CV" data-country-value="+238" value="Cape Verde Islands (+238)">Cape Verde Islands (+238)</option>
                                            <option data-countrycode="KY" data-country-value="+1345" value="Cayman Islands (+1345)">Cayman Islands (+1345)</option>
                                            <option data-countrycode="CF" data-country-value="+236" value="Central African Republic (+236)">Central African Republic (+236)</option>
                                            <option data-countrycode="CL" data-country-value="+56" value="Chile (+56)">Chile (+56)</option>
                                            <option data-countrycode="CN" data-country-value="+86" value="China (+86)">China (+86)</option>
                                            <option data-countrycode="CO" data-country-value="+57" value="Colombia (+57)">Colombia (+57)</option>
                                            <option data-countrycode="KM" data-country-value="+269" value="Comoros (+269)">Comoros (+269)</option>
                                            <option data-countrycode="CG" data-country-value="+242" value="Congo (+242)">Congo (+242)</option>
                                            <option data-countrycode="CK" data-country-value="+682" value="Cook Islands (+682)">Cook Islands (+682)</option>
                                            <option data-countrycode="CR" data-country-value="+506" value="Costa Rica (+506)">Costa Rica (+506)</option>
                                            <option data-countrycode="HR" data-country-value="+385" value="Croatia (+385">Croatia (+385)</option>
                                            <option data-countrycode="CU" data-country-value="+53" value="Cuba (+53)">Cuba (+53)</option>
                                            <option data-countrycode="CY" data-country-value="+90392" value="Cyprus North (+90392)">Cyprus North (+90392)</option>
                                            <option data-countrycode="CY" data-country-value="+357" value="Cyprus South (+357)">Cyprus South (+357)</option>
                                            <option data-countrycode="CZ" data-country-value="+42" value="Czech Republic (+42)">Czech Republic (+42)</option>
                                            <option data-countrycode="DK" data-country-value="+45" value="Denmark (+45)">Denmark (+45)</option>
                                            <option data-countrycode="DJ" data-country-value="+253" value="Djibouti (+253)">Djibouti (+253)</option>
                                            <option data-countrycode="DM" data-country-value="+1809" value="Dominica (+1809)">Dominica (+1809)</option>
                                            <option data-countrycode="DO" data-country-value="+1809" value="Dominican Republic (+1809)">Dominican Republic (+1809)</option>
                                            <option data-countrycode="EC" data-country-value="+593" value="Ecuador (+593)">Ecuador (+593)</option>
                                            <option data-countrycode="EG" data-country-value="+20" value="Egypt (+20)">Egypt (+20)</option>
                                            <option data-countrycode="SV" data-country-value="+503" value="El Salvador (+503)">El Salvador (+503)</option>
                                            <option data-countrycode="GQ" data-country-value="+240" value="Equatorial Guinea (+240)">Equatorial Guinea (+240)</option>
                                            <option data-countrycode="ER" data-country-value="+291" value="Eritrea (+291)">Eritrea (+291)</option>
                                            <option data-countrycode="EE" data-country-value="+372" value="Estonia (+372)">Estonia (+372)</option>
                                            <option data-countrycode="ET" data-country-value="+251" value="Ethiopia (+251)">Ethiopia (+251)</option>
                                            <option data-countrycode="FK" data-country-value="+500" value="Falkland Islands (+500)">Falkland Islands (+500)</option>
                                            <option data-countrycode="FO" data-country-value="+298" value="Faroe Islands (+298)">Faroe Islands (+298)</option>
                                            <option data-countrycode="FJ" data-country-value="+679" value="Fiji (+679)">Fiji (+679)</option>
                                            <option data-countrycode="FI" data-country-value="+358" value="Finland (+358)">Finland (+358)</option>
                                            <option data-countrycode="FR" data-country-value="+33" value="France (+33)">France (+33)</option>
                                            <option data-countrycode="GF" data-country-value="+594" value="French Guiana (+594)">French Guiana (+594)</option>
                                            <option data-countrycode="PF" data-country-value="+689" value="French Polynesia (+689)">French Polynesia (+689)</option>
                                            <option data-countrycode="GA" data-country-value="+241" value="Gabon (+241)">Gabon (+241)</option>
                                            <option data-countrycode="GM" data-country-value="+220" value="Gambia (+220)">Gambia (+220)</option>
                                            <option data-countrycode="GE" data-country-value="+7880" value="Georgia (+7880)">Georgia (+7880)</option>
                                            <option data-countrycode="DE" data-country-value="+49" value="Germany (+49)">Germany (+49)</option>
                                            <option data-countrycode="GH" data-country-value="+233" value="Ghana (+233)">Ghana (+233)</option>
                                            <option data-countrycode="GI" data-country-value="+350" value="Gibraltar (+350)">Gibraltar (+350)</option>
                                            <option data-countrycode="GR" data-country-value="+30" value="Greece (+30)">Greece (+30)</option>
                                            <option data-countrycode="GL" data-country-value="+299" value="Greenland (+299)">Greenland (+299)</option>
                                            <option data-countrycode="GD" data-country-value="+1473" value="Grenada (+1473)">Grenada (+1473)</option>
                                            <option data-countrycode="GP" data-country-value="+590" value="Guadeloupe (+590)">Guadeloupe (+590)</option>
                                            <option data-countrycode="GU" data-country-value="+671" value="Guam (+671)">Guam (+671)</option>
                                            <option data-countrycode="GT" data-country-value="+502" value="Guatemala (+502)">Guatemala (+502)</option>
                                            <option data-countrycode="GN" data-country-value="+224" value="Guinea (+224)">Guinea (+224)</option>
                                            <option data-countrycode="GW" data-country-value="+245" value="Guinea - Bissau (+245)">Guinea - Bissau (+245)</option>
                                            <option data-countrycode="GY" data-country-value="+592" value="Guyana (+592)">Guyana (+592)</option>
                                            <option data-countrycode="HT" data-country-value="+509" value="Haiti (+509)">Haiti (+509)</option>
                                            <option data-countrycode="HN" data-country-value="+504" value="Honduras (+504)">Honduras (+504)</option>
                                            <option data-countrycode="HK" data-country-value="+852" value="Hong Kong (+852)">Hong Kong (+852)</option>
                                            <option data-countrycode="HU" data-country-value="+36" value="Hungary (+36)">Hungary (+36)</option>
                                            <option data-countrycode="IS" data-country-value="+354" value="Iceland (+354)">Iceland (+354)</option>
                                            <option data-countrycode="IN" data-country-value="+91" value="India (+91)">India (+91)</option>
                                            <option data-countrycode="ID" data-country-value="+62" value="Indonesia (+62)">Indonesia (+62)</option>
                                            <option data-countrycode="IR" data-country-value="+98" value="Iran (+98)">Iran (+98)</option>
                                            <option data-countrycode="IQ" data-country-value="+964" value="Iraq (+964)">Iraq (+964)</option>
                                            <option data-countrycode="IE" data-country-value="+353" value="Ireland (+353)">Ireland (+353)</option>
                                            <option data-countrycode="IL" data-country-value="+972" value="Israel (+972)">Israel (+972)</option>
                                            <option data-countrycode="IT" data-country-value="+39" value="Italy (+39)">Italy (+39)</option>
                                            <option data-countrycode="JM" data-country-value="+1876" value="Jamaica (+1876)">Jamaica (+1876)</option>
                                            <option data-countrycode="JP" data-country-value="+81" value="Japan (+81)">Japan (+81)</option>
                                            <option data-countrycode="JO" data-country-value="+962" value="Jordan (+962)">Jordan (+962)</option>
                                            <option data-countrycode="KZ" data-country-value="+7" value="Kazakhstan (+7)">Kazakhstan (+7)</option>
                                            <option data-countrycode="KE" data-country-value="+254" value="Kenya (+254)">Kenya (+254)</option>
                                            <option data-countrycode="KI" data-country-value="+686" value="Kiribati (+686)">Kiribati (+686)</option>
                                            <option data-countrycode="KP" data-country-value="+850" value="Korea North (+850)">Korea North (+850)</option>
                                            <option data-countrycode="KR" data-country-value="+82" value="Korea South (+82)">Korea South (+82)</option>
                                            <option data-countrycode="KW" data-country-value="+965" value="Kuwait (+965)">Kuwait (+965)</option>
                                            <option data-countrycode="KG" data-country-value="+996" value="Kyrgyzstan (+996)">Kyrgyzstan (+996)</option>
                                            <option data-countrycode="LA" data-country-value="+856" value="Laos (+856)">Laos (+856)</option>
                                            <option data-countrycode="LV" data-country-value="+371" value="Latvia (+371)">Latvia (+371)</option>
                                            <option data-countrycode="LB" data-country-value="+961" value="Lebanon (+961)">Lebanon (+961)</option>
                                            <option data-countrycode="LS" data-country-value="+266" value="Lesotho (+266)">Lesotho (+266)</option>
                                            <option data-countrycode="LR" data-country-value="+231" value="Liberia (+231)">Liberia (+231)</option>
                                            <option data-countrycode="LY" data-country-value="+218" value="Libya (+218)">Libya (+218)</option>
                                            <option data-countrycode="LI" data-country-value="+417" value="Liechtenstein (+417)">Liechtenstein (+417)</option>
                                            <option data-countrycode="LT" data-country-value="+370" value="Lithuania (+370)">Lithuania (+370)</option>
                                            <option data-countrycode="LU" data-country-value="+352" value="Luxembourg (+352)">Luxembourg (+352)</option>
                                            <option data-countrycode="MO" data-country-value="+853" value="Macao (+853)">Macao (+853)</option>
                                            <option data-countrycode="MK" data-country-value="+389" value="Macedonia (+389)">Macedonia (+389)</option>
                                            <option data-countrycode="MG" data-country-value="+261" value="Madagascar (+261)">Madagascar (+261)</option>
                                            <option data-countrycode="MW" data-country-value="+265" value="Malawi (+265)">Malawi (+265)</option>
                                            <option data-countrycode="MY" data-country-value="+60" value="Malaysia (+60)">Malaysia (+60)</option>
                                            <option data-countrycode="MV" data-country-value="+960" value="Maldives (+960)">Maldives (+960)</option>
                                            <option data-countrycode="ML" data-country-value="+223" value="Mali (+223)">Mali (+223)</option>
                                            <option data-countrycode="MT" data-country-value="+356" value="Malta (+356)">Malta (+356)</option>
                                            <option data-countrycode="MH" data-country-value="+692" value="Marshall Islands (+692)">Marshall Islands (+692)</option>
                                            <option data-countrycode="MQ" data-country-value="+596" value="Martinique (+596)">Martinique (+596)</option>
                                            <option data-countrycode="MR" data-country-value="+222" value="Mauritania (+222)">Mauritania (+222)</option>
                                            <option data-countrycode="YT" data-country-value="+269" value="Mayotte (+269)">Mayotte (+269)</option>
                                            <option data-countrycode="MX" data-country-value="+52" value="Mexico (+52)">Mexico (+52)</option>
                                            <option data-countrycode="FM" data-country-value="+691" value="Micronesia (+691)">Micronesia (+691)</option>
                                            <option data-countrycode="MD" data-country-value="+373" value="Moldova (+373)">Moldova (+373)</option>
                                            <option data-countrycode="MC" data-country-value="+377" value="Monaco (+377)">Monaco (+377)</option>
                                            <option data-countrycode="MN" data-country-value="+976" value="Mongolia (+976)">Mongolia (+976)</option>
                                            <option data-countrycode="MS" data-country-value="+1664" value="Montserrat (+1664)">Montserrat (+1664)</option>
                                            <option data-countrycode="MA" data-country-value="+212" value="Morocco (+212)">Morocco (+212)</option>
                                            <option data-countrycode="MZ" data-country-value="+258" value="Mozambique (+258)">Mozambique (+258)</option>
                                            <option data-countrycode="MN" data-country-value="+95" value="Myanmar (+95)">Myanmar (+95)</option>
                                            <option data-countrycode="NA" data-country-value="+264" value="Namibia (+264)">Namibia (+264)</option>
                                            <option data-countrycode="NR" data-country-value="+674" value="Nauru (+674)">Nauru (+674)</option>
                                            <option data-countrycode="NP" data-country-value="+977" value="Nepal (+977)">Nepal (+977)</option>
                                            <option data-countrycode="NL" data-country-value="+31" value="Netherlands (+31)">Netherlands (+31)</option>
                                            <option data-countrycode="NC" data-country-value="+687" value="New Caledonia (+687)">New Caledonia (+687)</option>
                                            <option data-countrycode="NZ" data-country-value="+64" value="New Zealand (+64)">New Zealand (+64)</option>
                                            <option data-countrycode="NI" data-country-value="+505" value="Nicaragua (+505)">Nicaragua (+505)</option>
                                            <option data-countrycode="NE" data-country-value="+227" value="Niger (+227)">Niger (+227)</option>
                                            <option data-countrycode="NG" data-country-value="+234" value="Nigeria (+234)">Nigeria (+234)</option>
                                            <option data-countrycode="NU" data-country-value="+683" value="Niue (+683)">Niue (+683)</option>
                                            <option data-countrycode="NF" data-country-value="+672" value="Norfolk Islands (+672)">Norfolk Islands (+672)</option>
                                            <option data-countrycode="NP" data-country-value="+670" value="Northern Marianas (+670)">Northern Marianas (+670)</option>
                                            <option data-countrycode="NO" data-country-value="+47" value="Norway (+47)">Norway (+47)</option>
                                            <option data-countrycode="OM" data-country-value="+968" value="Oman (+968)">Oman (+968)</option>
                                            <option data-countrycode="PW" data-country-value="+680" value="Palau (+680)">Palau (+680)</option>
                                            <option data-countrycode="PA" data-country-value="+507" value="Panama (+507)">Panama (+507)</option>
                                            <option data-countrycode="PG" data-country-value="+675" value="Papua New Guinea (+675)">Papua New Guinea (+675)</option>
                                            <option data-countrycode="PY" data-country-value="+595" value="Paraguay (+595)">Paraguay (+595)</option>
                                            <option data-countrycode="PE" data-country-value="+51" value="Peru (+51)">Peru (+51)</option>
                                            <option data-countrycode="PH" data-country-value="+63" value="Philippines (+63)">Philippines (+63)</option>
                                            <option data-countrycode="PL" data-country-value="+48" value="Poland (+48)">Poland (+48)</option>
                                            <option data-countrycode="PT" data-country-value="+351" value="Portugal (+351)">Portugal (+351)</option>
                                            <option data-countrycode="PR" data-country-value="+1787" value="Puerto Rico (+1787)">Puerto Rico (+1787)</option>
                                            <option data-countrycode="QA" data-country-value="+974" value="Qatar (+974)">Qatar (+974)</option>
                                            <option data-countrycode="RE" data-country-value="+262" value="Reunion (+262)">Reunion (+262)</option>
                                            <option data-countrycode="RO" data-country-value="+40" value="Romania (+40)">Romania (+40)</option>
                                            <option data-countrycode="RU" data-country-value="+7" value="Russia (+7)">Russia (+7)</option>
                                            <option data-countrycode="RW" data-country-value="+250" value="Rwanda (+250)">Rwanda (+250)</option>
                                            <option data-countrycode="SM" data-country-value="+378" value="San Marino (+378)">San Marino (+378)</option>
                                            <option data-countrycode="ST" data-country-value="+239" value="Sao Tome &amp; Principe (+239)">Sao Tome &amp; Principe (+239)</option>
                                            <option data-countrycode="SA" data-country-value="+966" value="Saudi Arabia (+966)">Saudi Arabia (+966)</option>
                                            <option data-countrycode="SN" data-country-value="+221" value="Senegal (+221)">Senegal (+221)</option>
                                            <option data-countrycode="CS" data-country-value="+381" value="Serbia (+381)">Serbia (+381)</option>
                                            <option data-countrycode="SC" data-country-value="+248" value="Seychelles (+248)">Seychelles (+248)</option>
                                            <option data-countrycode="SL" data-country-value="+232" value="Sierra Leone (+232)">Sierra Leone (+232)</option>
                                            <option data-countrycode="SG" data-country-value="+65" value="Singapore (+65)">Singapore (+65)</option>
                                            <option data-countrycode="SK" data-country-value="+421" value="Slovak Republic (+421)">Slovak Republic (+421)</option>
                                            <option data-countrycode="SI" data-country-value="+386" value="Slovenia (+386)">Slovenia (+386)</option>
                                            <option data-countrycode="SB" data-country-value="+677" value="Solomon Islands (+677)">Solomon Islands (+677)</option>
                                            <option data-countrycode="SO" data-country-value="+252" value="Somalia (+252)">Somalia (+252)</option>
                                            <option data-countrycode="ZA" data-country-value="+27" value="South Africa (+27)">South Africa (+27)</option>
                                            <option data-countrycode="ES" data-country-value="+34" value="Spain (+34)">Spain (+34)</option>
                                            <option data-countrycode="LK" data-country-value="+94" value="Sri Lanka (+94)">Sri Lanka (+94)</option>
                                            <option data-countrycode="SH" data-country-value="+290" value="St. Helena (+290)">St. Helena (+290)</option>
                                            <option data-countrycode="KN" data-country-value="+1869" value="St. Kitts (+1869)">St. Kitts (+1869)</option>
                                            <option data-countrycode="SC" data-country-value="+1758" value="St. Lucia (+1758)">St. Lucia (+1758)</option>
                                            <option data-countrycode="SD" data-country-value="+249" value="Sudan (+249)">Sudan (+249)</option>
                                            <option data-countrycode="SR" data-country-value="+597" value="Suriname (+597)">Suriname (+597)</option>
                                            <option data-countrycode="SZ" data-country-value="+268" value="Swaziland (+268)">Swaziland (+268)</option>
                                            <option data-countrycode="SE" data-country-value="+46" value="Sweden (+46)">Sweden (+46)</option>
                                            <option data-countrycode="CH" data-country-value="+41" value="Switzerland (+41)">Switzerland (+41)</option>
                                            <option data-countrycode="SI" data-country-value="+963" value="Syria (+963)">Syria (+963)</option>
                                            <option data-countrycode="TW" data-country-value="+886" value="Taiwan (+886)">Taiwan (+886)</option>
                                            <option data-countrycode="TJ" data-country-value="+7" value="Tajikstan (+7)">Tajikstan (+7)</option>
                                            <option data-countrycode="TH" data-country-value="+66" value="Thailand (+66)">Thailand (+66)</option>
                                            <option data-countrycode="TG" data-country-value="+228" value="Togo (+228)">Togo (+228)</option>
                                            <option data-countrycode="TO" data-country-value="+676" value="Tonga (+676)">Tonga (+676)</option>
                                            <option data-countrycode="TT" data-country-value="+1868" value="Trinidad &amp; Tobago (+1868)">Trinidad &amp; Tobago (+1868)</option>
                                            <option data-countrycode="TN" data-country-value="+216" value="Tunisia (+216)">Tunisia (+216)</option>
                                            <option data-countrycode="TR" data-country-value="+90" value="Turkey (+90)">Turkey (+90)</option>
                                            <option data-countrycode="TM" data-country-value="+7" value="Turkmenistan (+7)">Turkmenistan (+7)</option>
                                            <option data-countrycode="TM" data-country-value="+993" value="Turkmenistan (+993)">Turkmenistan (+993)</option>
                                            <option data-countrycode="TC" data-country-value="+1649" value="Turks &amp; Caicos Islands (+1649)">Turks &amp; Caicos Islands (+1649)</option>
                                            <option data-countrycode="TV" data-country-value="+688" value="Tuvalu (+688)">Tuvalu (+688)</option>
                                            <option data-countrycode="UG" data-country-value="+256" value="Uganda (+256)">Uganda (+256)</option>
                                            <option data-countrycode="GB" data-country-value="+44" value="UK (+44)">UK (+44)</option>
                                            <option data-countrycode="UA" data-country-value="+380" value="Ukraine (+380)">Ukraine (+380)</option>
                                            <option data-countrycode="AE" data-country-value="+971" value="United Arab Emirates (+971)">United Arab Emirates (+971)</option>
                                            <option data-countrycode="UY" data-country-value="+598" value="Uruguay (+598)">Uruguay (+598)</option>
                                            <option data-countrycode="US" data-country-value="+1" value="USA (+1)">USA (+1)</option>
                                            <option data-countrycode="UZ" data-country-value="+7" value="Uzbekistan (+7)">Uzbekistan (+7)</option>
                                            <option data-countrycode="VU" data-country-value="+678" value="Vanuatu (+678)">Vanuatu (+678)</option>
                                            <option data-countrycode="VA" data-country-value="+379" value="Vatican City (+379)">Vatican City (+379)</option>
                                            <option data-countrycode="VE" data-country-value="+58" value="Venezuela (+58)">Venezuela (+58)</option>
                                            <option data-countrycode="VN" data-country-value="+84" value="Vietnam (+84)">Vietnam (+84)</option>
                                            <option data-countrycode="VG" data-country-value="+1284" value="Virgin Islands - British (+1284)">Virgin Islands - British (+1284)</option>
                                            <option data-countrycode="VI" data-country-value="+1340" value="Virgin Islands - US (+1340)">Virgin Islands - US (+1340)</option>
                                            <option data-countrycode="WF" data-country-value="+681" value="Wallis &amp; Futuna (+681)">Wallis &amp; Futuna (+681)</option>
                                            <option data-countrycode="YE" data-country-value="+969" value="Yemen (North)(+969)">Yemen (North)(+969)</option>
                                            <option data-countrycode="YE" data-country-value="+967" value="Yemen (South)(+967)">Yemen (South)(+967)</option>
                                            <option data-countrycode="ZM" data-country-value="+260" value="Zambia (+260)">Zambia (+260)</option>
                                            <option data-countrycode="ZW" data-country-value="+263" value="Zimbabwe (+263)">Zimbabwe (+263)</option>
                                        </select>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12">
                                        <label for="first name">Name</label>
                                        <input value={formData.name} onChange={handleChange} type="text" id="fname" name="name" placeholder=""/>
                                        <span class="error"></span>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <label for="first name">Email address</label>
                                        <input value={formData.email} onChange={handleChange} type="text" id="email" name="email" placeholder=""/>
                                        <span class="error"></span>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="first name">Company
                                        </label>
                                        <input type="text" id="fname" name="company" placeholder=""/>
                                        <span class="error"></span>
                                    </div>
                                    <div class="col-md-6" >
                                        <label for="first name">Contact Number
                                        </label>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <input type="text" id="contrycode" class="countrycode" placeholder="+" disabled="" />
                                            </div>
                                            <div class="col-md-9">
                                                <input name="phone" type="tel"  placeholder="Phone Number" class="form-input-fields wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" aria-required="true" aria-invalid="false"/>
                                                <span class="error"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-12 col-xs-12">
                                        <label for="first name">Message</label>
                                        <textarea name="enquiry" placeholder="Write something.."></textarea>
                                        <span class="error"></span>
                                    </div>
                                </div>
                             
                                <div class="regions3">
                                    <div class="capbox" >
                                        <div id="CaptchaDiv">TZSC7tr</div>
                                        <div class="capbox-inner">Enter CAPTCHA code:

                                            <input type="hidden" id="txtCaptcha" value="TZSC7tr"/>
                                            <input type="text" name="CaptchaInput" id="CaptchaInput" size="15" onchange="check();"/>

                                        </div>
                                    </div>

                                    <script type="text/javascript">
                                        
                                    </script>
                                </div>
                            
                          
                                <div id="submit-btn" class="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <input type="submit" class="btn btn-lg btn-general btn-blue" name="send" value="Submit"/>
                                    <span class="error" ></span>
                                </div>
                            
                            </form>
                        </div>

                        <div className="col-md-7" style={{ paddingTop: '53px', paddingLeft: '38px' }}>
                            {/* Your content goes here */}
                            <h1 className="sec-title-style">Master Data Management</h1>
                            <p>In today's digital landscape...</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
