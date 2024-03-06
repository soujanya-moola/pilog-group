import React, { useState } from 'react'
import { Container, Nav, NavDropdown, NavLink, Navbar, Tab, Tabs } from 'react-bootstrap'
import './Header.css'
import { Link} from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TabComponent } from './TabComponent';
import { ValueTab } from './ValueTab';
import { InnovativeProduct } from './InnovativeProduct';
import { PublicationTab } from './PublicationTab';
import { Twitter } from '../SocialIcons/Twitter';
import { YouTube } from '../SocialIcons/YouTube';
import { Facebook } from '../SocialIcons/Facebook';
import { Linkedin } from '../SocialIcons/Linkedin';
import { MenuItem } from '@mui/material';
import { AboutTabs } from './AboutTabs';
import CloseIcon from '@mui/icons-material/Close';



export const Header = () => {
    
    const [isTopBarVisible, setIsTopBarVisible] = useState(true);

    const toggleTopBar = () => {
      setIsTopBarVisible(!isTopBarVisible);
    };
  

   
    return (
        <div >
            <Navbar   expand="lg" className="bg-white  ">
                {/* <Container> */}
               
            
                <Navbar.Brand className='logo-header' href="#home">
                    <img src={require('../Assets/logo-header.png')} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-center" >
                    <Nav ClassName="me-auto  " >


                        <div>
                            <Link className='nav-btn' to="/">Home</Link>
                        </div>
                        {/* <div>
                            <Link className='nav-btn mx-4' to="/">About Us</Link>
                        </div> */}
                        <div className="dropdown">
                        
                            <Link className="dropbtn" to='valuepropositons'>About Us</Link>

                            <div className="dropdown-content-about">
                                <div id="tabs">
                                    <ul>
                                       <AboutTabs/>
                                    </ul>
                                </div>
                                {/* <div className='responsive-tabs'>
                                    <ul>
                                        <li>Corporate</li>
                                        <li>Zonal Offices</li>
                                        <li>Industries/Customers</li>
                                        <li>Partners</li>
                                        <li>Partner Program</li>
                                        <li>Leadership Team</li>
                                    </ul>
                                </div> */}

                            </div>
                        </div>

                        <div className="dropdown">
                        
                            <Link className="dropbtn" to='valuepropositons'>Value Propositions</Link>

                            <div className="dropdown-content">
                                <div id="tabs">
                                    <ul>
                                        <ValueTab />
                                    </ul>
                                </div>
                                <div className='responsive-tabs'>
                                    <ul>
                                        <li>Extended Supply Chain Optimization</li>
                                        <li>Enduring Asset Lifecycle Management</li>
                                        <li>Maturing Business Partner Lifecycle Management</li>
                                        <li>Seamless Data Migration and Effective Application Consolidation</li>
                                        <li>Digital Transformation and Automation</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="dropdown">
                            <Link className="dropbtn" to='innovative-products'>Innovative Products</Link>
                            <div className="dropdown-content1" >
                                <div id="tabs">
                                    <ul>
                                        <InnovativeProduct />
                                    </ul>
                                </div>
                                <div className='responsive-tabs'>
                                    <ul>
                                        <li>Master Data Record Manager (MDRM)</li>
                                        <li>Data Quality HUB (DQH)</li>
                                        <li>Data Quality Management (iDQM)</li>
                                        <li>Master Data Ontology Manager (MDOM)</li>
                                        <li>PiLog Preferred Records (PPR)</li>
                                        <li>PiLog Preferred Ontology (PPO)</li>
                                        <li>PiLog Preferred Hierarchy (PPH)</li>
                                        <li>Spares Parts Interchangeability Record (iSPIR)</li>
                                        <li>iTransform - ETL</li>
                                        <li>iVisualize - Digital Analytics</li>
                                        <li>Material Master Taxonomy for SAP MDG</li>
                                        <li>Coswin CMMS/EAM</li>
                                        <li>Lean Data Governance</li>
                                    </ul>
                                   
                                </div>

                            </div>
                        </div>
                        <div className="dropdown">
                            <Link className="dropbtn" to='services'>Services</Link>
                            <div className="dropdown-content2">
                                <div id="tabs">
                                    <ul>
                                        <TabComponent />

                                    </ul>
                                </div>
                                <div className='responsive-tabs'>
                                    <ul>
                                        <h6>Tactical Services</h6>
                                        <li>Data Harmonization</li>
                                        <li>Data Analytics</li>
                                        <li>Data Migration</li>
                                        <li>Digital Transformation</li>
                                        <li>iSPIR Management</li>
                                        <li>Data Health Assessment</li>
                                        <li>Data Archiving and Unarchiving</li>
                                        <li>PM Data Acquisition</li>
                                        <li>Imaging, Tagging Inventory Optimization</li>
                                        <li>Physical-Verification (or) Field Data Collection</li>
                                        <li>Material Master Taxonomy for SAP MDG</li>
                                        <li>Business Process Outsourcing</li>
                                        
                                    </ul>
                                    <ul>
                                        <h6>Strategic Services</h6>
                                        <li>Management Consulting</li>
                                        <li>Fixed Asset Register</li>
                                        <li>Data Consulting Services</li>
                                        <li>Material Criticality Analysis</li>
                                        <li>Equipment Criticality Analysis</li>
                                        <li>Spend Analytics</li>
                                        <li>Extended Supply Chain Optimization</li>
                                    </ul>
                                   
                                </div>

                            </div>
                        </div>
                        <div className="dropdown">
                            <Link className="dropbtn" to='publications'>Publications </Link>
                            <div className="dropdown-content3">
                                <div id="tabs">
                                    <ul>
                                        <PublicationTab />

                                    </ul>
                                </div>
                                <div className='responsive-tabs'>
                                    <ul>
                                        <li>News and Events</li>
                                        <li>Blogs</li>
                                        <li>Brochures</li>
                                    
                                        <li>Videos</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='saas'>
                            <Link className='nav-btn-saas' to="Subscription">SaaS</Link>
                        </div>
                        <div>
                            <Link className='nav-btn' to="contactus">Contact Us</Link>
                        </div>
                        <div class="tooltip-container">
                            <span class="tooltip">
                                <Link className='header-social-icons' to=''><Twitter/></Link>
                                <Link className='header-social-icons' to=''><Facebook/></Link>
                                <Link className='header-social-icons' to=''> <YouTube/></Link>
                                <Link className='header-insta-icons' to=''><Linkedin/></Link>
                            </span>
                            <span class="text">
                                <div class="borde-back">
                                    <div className="icon">
                                        <PublicIcon className='public-icon' />


                                    </div>
                                </div>
                            </span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    )
}
