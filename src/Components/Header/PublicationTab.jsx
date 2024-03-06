import React, { useState } from 'react'
import './PublicationTab.css'
import { Link } from 'react-router-dom';

export const PublicationTab = () => {
    const [activeTab, setActiveTab] = useState('London');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };
  return (
    <div>
    <div>
        <div className="drop-tab1-public">
            <div>
                <button
                    className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                    onMouseOver={() => openCity('London')}
                >
                    <Link className='public-link' to="publications/News-and-Updates">   News and Events</Link>

                
                </button>
                <button
                    className={`tablinks ${activeTab === 'blogs' ? 'active' : ''}`}
                    onMouseOver={() => openCity('blogs')}
                >
                    <Link className='public-link' to="publications/Blogs">    Blogs</Link>

                
                </button>
                <button
                    className={`tablinks ${activeTab === 'brochures' ? 'active' : ''}`}
                    onMouseOver={() => openCity('brochures')}
                >
                    <Link className='public-link' to="publications/Brochure">      Brochures</Link>

            

                </button>
                <button
                    className={`tablinks ${activeTab === 'videos' ? 'active' : ''}`}
                    onMouseOver={() => openCity('videos')}
                >
                    <Link className='public-link' to="publications/Videos"> Videos</Link>

               
                </button>
            </div>
        </div>
    </div>

    <div id="London" className={`drop-tabcontent-public ${activeTab === 'London' ? 'active' : ''}`}>

        <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dhs-banner.jpg')} />
        <div className='d-flex mt-4'>
            <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>
            
        <p className='px-2 lh-1'>
        The latest news and events from our global activities.
        </p>
        </div>
        
    </div>

    <div id="blogs" className={`drop-tabcontent-public ${activeTab === 'blogs' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dm-banner.jpg')} />
    <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

    <p className='px-2 lh-1'>
    Discover all the latest about our Products, Solutions and Technologies
        </p>
    </div>
        
    </div>

    <div id="brochures" className={`drop-tabcontent-public ${activeTab === 'brochures' ? 'active' : ''}`}>
       
        <img className='nav-drop-img' src={require('../Assets/HeaderImages/digital-transformation-solutions.jpg')} />
       <div  className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

       <p className='px-2 lh-1'>
       Highly recommended solutions in one go
        </p>
       </div>
        
    </div>
    <div id="videos" className={`drop-tabcontent-public ${activeTab === 'videos' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-ispirm-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        The latest videos from our global activities.
        </p>
        </div>
        
    </div>

</div>
  )
}
