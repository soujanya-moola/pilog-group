import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const AboutTabs = () => {

     
    const [activeTab, setActiveTab] = useState('London');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };
  return (
    <div>

    <div>
        <div className="drop-tab1-value">
            <div>
                <button
                    className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                    onMouseOver={() => openCity('London')}
                >
                   <Link className='value-link' to='About/corporate'>Corporate</Link>
                </button>
                <button
                    className={`tablinks ${activeTab === 'ealm' ? 'active' : ''}`}
                    onMouseOver={() => openCity('ealm')}
                >
                   <Link className='value-link' to='About/zonal-offices'>Zonal Offices</Link>

                  
                </button>
                <button
                    className={`tablinks ${activeTab === 'mbplm' ? 'active' : ''}`}
                    onMouseOver={() => openCity('mbplm')}
                >
                   <Link className='value-link' to='About/Industries-And-Customers'>Industries/Customers</Link>
                </button>
                <button
                    className={`tablinks ${activeTab === 'sdmaeac' ? 'active' : ''}`}
                    onMouseOver={() => openCity('sdmaeac')}
                >
                   <Link className='value-link' to='About/Partners'>Partners</Link>

                 
                </button>
                <button
                    className={`tablinks ${activeTab === 'dta' ? 'active' : ''}`}
                    onMouseOver={() => openCity('dta')}
                >
                   <Link className='value-link' to='About/Partner-Program'>Partner Program</Link>

                   

                </button>
                <button
                    className={`tablinks ${activeTab === 'dta' ? 'active' : ''}`}
                    onMouseOver={() => openCity('dta')}
                >
                   <Link className='value-link' to='About/leadership-team'>Leadership Team
                   </Link>

                   

                </button>
                
            </div>
        </div>
       

    </div>

  

    <div id="London" className={`drop-tabcontent-val ${activeTab === 'London' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dm-banner.jpg')} />
    <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

    <p className='px-2 lh-1'>
        Analytics platform to provide insights into the business performance with real-time dashboards
        </p>
    </div>
        
    </div>

    <div id="ealm" className={`drop-tabcontent-val ${activeTab === 'ealm' ? 'active' : ''}`}>
       
        <img className='nav-drop-img' src={require('../Assets/HeaderImages/digital-transformation-solutions.jpg')} />
       <div  className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

       <p className='px-2 lh-1'>
        Digital transformation is the cultural, organizational and operational change of an organization, industry or ecosystem througha smart integration of digital technologies,
        </p>
       </div>
        
    </div>
    <div id="mbplm" className={`drop-tabcontent-val ${activeTab === 'mbplm' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-ispirm-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        Information management of replacable interchangeable and alternatives sparesfor effective MRO inventory managment for expansion or capital project
        </p>
        </div>
        
    </div>
    <div id="sdmaeac" className={`drop-tabcontent-val ${activeTab === 'sdmaeac' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dha-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        Qualitative data management against standards and provisional reporting
        </p>
        </div>
        
    </div>
    <div id="dta" className={`drop-tabcontent-val ${activeTab === 'dta' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dau-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'> 
        Managing the data volumes effectively and efficiently to reduce the data footprint
        </p>
        </div>
        
    </div>
  



</div>
  )
}
