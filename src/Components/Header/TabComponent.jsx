import React, { useState } from 'react'
import './TabComponent.css'
import Sbpo from '../Assets/HeaderImages/s-bpo-icon.svg'
import { Link } from 'react-router-dom';

export const TabComponent = () => {


    const [activeTab, setActiveTab] = useState('London');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };

    return (
        <div>

            <div>



                <div className="drop-tab1">
                    <h5>Tactical Services</h5>

                    <div>
                        <button
                            className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                            onMouseOver={() => openCity('London')}
                        >
                            <Link to='services/DataHarmonization'>Data Harmonization</Link>
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'data-analytics' ? 'active' : ''}`}
                            onMouseOver={() => openCity('data-analytics')}
                        >
                            <Link to="services/DataAnalytics"> Data Analytics</Link>
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'data-migration' ? 'active' : ''}`}
                            onMouseOver={() => openCity('data-migration')}
                        >
                            <Link to="services/DataMigration">    Data Migration</Link>

                        </button>
                        <button
                            className={`tablinks ${activeTab === 'digital-transformation' ? 'active' : ''}`}
                            onMouseOver={() => openCity('digital-transformation')}
                        >
                            <Link to="services/DigitalTransformation">Digital Transformation</Link>

                        </button>
                        <button
                            className={`tablinks ${activeTab === 'iSPIR-Management' ? 'active' : ''}`}
                            onMouseOver={() => openCity('iSPIR-Management')}
                        >
                            <Link to="services/ISManagement"> iSPIR Management</Link>

                        </button>
                        <button
                            className={`tablinks ${activeTab === 'data-health' ? 'active' : ''}`}
                            onMouseOver={() => openCity('data-health')}
                        >
                            <Link to="services/DataHealthAssessment"> Data Health Assessment</Link>

                        </button>
                        <button
                            className={`tablinks ${activeTab === 'data-archiving' ? 'active' : ''}`}
                            onMouseOver={() => openCity('data-archiving')}
                        >
                            <Link to="services/DataArchivingandUnarchiving"> Data Archiving and Unarchiving</Link>

                        </button>
                    </div>
                    <div>
                        <button
                            className={`tablinks ${activeTab === 'pm-data' ? 'active' : ''}`}
                            onMouseOver={() => openCity('pm-data')}
                        >
                            <Link to="services/PMDataAcquisition"> PM Data Acquisition</Link>

                        </button>
                        <button
                            className={`tablinks ${activeTab === 'tagging-inventory' ? 'active' : ''}`}
                            onMouseOver={() => openCity('tagging-inventory')}
                        >
                            <Link to="services/ITIO"> Imaging, Tagging Inventory Optimization</Link>

                        </button>
                        <button
                            className={`tablinks ${activeTab === 'physical-verification' ? 'active' : ''}`}
                            onMouseOver={() => openCity('physical-verification')}
                        >
                            <Link to="services/pvfdc"> Physical-Verification (or) Field Data Collection</Link>

                        </button>
                        <button
                            className={`tablinks ${activeTab === 'bpo' ? 'active' : ''}`}
                            onMouseOver={() => openCity('bpo')}
                        >
                            <Link to="#"> Business Process Outsourcing</Link>

                        </button>
                    </div>

                </div>
                <div className="drop-tab2">
                    <h5>Strategic Services</h5>
                    <button
                        className={`tablinks ${activeTab === 'consulting' ? 'active' : ''}`}
                        onMouseOver={() => openCity('consulting')}
                    >
                        <Link to="services/ManagementConsulting"> Management Consulting</Link>

                    </button>
                    <button
                        className={`tablinks ${activeTab === 'fixed-asset' ? 'avtive' : ''}`}
                        onMouseOver={() => openCity('fixed-asset')}
                    >
                        <Link to="services/FixedAssetRegister">    Fixed Asset Register</Link>

                    </button>
                    <button
                        className={`tablinks ${activeTab === 'data-consulting' ? 'active' : ''}`}
                        onMouseOver={() => openCity('data-consulting')}
                    >
                        <Link to="services/DataConsultingServices">Data Consulting Services</Link>

                    </button>
                    <button
                        className={`tablinks ${activeTab === 'material-criticality' ? 'active' : ''}`}
                        onMouseOver={() => openCity('material-criticality')}
                    >
                        <Link to="services/MaterialCriticalityAnalysis"> Material Criticality Analysis</Link>

                    </button>
                    <button
                        className={`tablinks ${activeTab === 'equipment-criticality' ? 'active' : ''}`}
                        onMouseOver={() => openCity('equipment-criticality')}
                    >
                        <Link to="services/EquipmentCriticalityAnalysis"> Equipment Criticality Analysis</Link>

                    </button>
                    <button
                        className={`tablinks ${activeTab === 'spend-analytics' ? 'active' : ''}`}
                        onMouseOver={() => openCity('spend-analytics')}
                    >
                        <Link to="services/SpendAnalytics"> Spend Analytics</Link>

                    </button>
                    <button
                        className={`tablinks ${activeTab === 'supply-chain' ? 'active' : ''}`}
                        onMouseOver={() => openCity('supply-chain')}
                    >
                        <Link to="services/DataAnalytics"> Extended Supply Chain Optimization</Link>

                    </button>
                </div>

            </div>

            <div id="London" className={`drop-tabcontent ${activeTab === 'London' ? 'active' : ''}`}>

                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dhs-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />

                    <p className='px-2 lh-1'>
                        Structured and Unstructured data cleaned, standardized and enriched to control and enhance business processes
                    </p>
                </div>

            </div>

            <div id="data-analytics" className={`drop-tabcontent ${activeTab === 'data-analytics' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dm-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />

                    <p className='px-2 lh-1'>
                        Analytics platform to provide insights into the business performance with real-time dashboards
                    </p>
                </div>

            </div>

            <div id="data-migration" className={`drop-tabcontent ${activeTab === 'data-migration' ? 'active' : ''}`}>

                <img className='nav-drop-img' src={require('../Assets/HeaderImages/digital-transformation-solutions.jpg')} />
                <div className='d-flex p-2 mt-5'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/Data Migration.png')} />

                    <p className='px-2 lh-1'>
                        Platform agnostic, standardized and seamless extraction, transformation and loading
                    </p>
                </div>

            </div>
            <div id="digital-transformation" className={`drop-tabcontent ${activeTab === 'digital-transformation' ? 'active' : ''}`}>

                <img className='nav-drop-img' src={require('../Assets/HeaderImages/digital-transformation-solutions.jpg')} />
                <div className='d-flex p-2 mt-5'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/Digital Transformation.png')} />

                    <p className='px-2 lh-1'>
                    Digital transformation is the cultural, organizational and operational change of an organization, industry or ecosystem througha smart integration of digital technologies,
                        </p>
                </div>

            </div>
            <div id="iSPIR-Management" className={`drop-tabcontent ${activeTab === 'iSPIR-Management' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-ispirm-banner.jpg')} />
                <div className='d-flex mt-5 p-2'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/iSPIR Management.png')} />

                    <p className='px-3 lh-1'>
                        Information management of replacable interchangeable and alternatives sparesfor effective MRO inventory managment for expansion or capital project
                    </p>
                </div>

            </div>
            <div id="data-health" className={`drop-tabcontent ${activeTab === 'data-health' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dha-banner.jpg')} />
                <div className='d-flex mt-5 p-2'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/Data Health Assessment.png')} />

                    <p className='px-2 lh-1'>
                        Qualitative data management against standards and provisional reporting
                    </p>
                </div>

            </div>
            <div id="data-archiving" className={`drop-tabcontent ${activeTab === 'data-archiving' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dau-banner.jpg')} />
                <div className='d-flex mt-5 p-2'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/EIM-Architecture.png')} />

                    <p className='px-2 lh-1'>
                        Managing the data volumes effectively and efficiently to reduce the data footprint
                    </p>
                </div>

            </div>
            <div id="pm-data" className={`drop-tabcontent ${activeTab === 'pm-data' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-pmda-banner.jpg')} />
                <div className='d-flex mt-5 p-2'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/PM-Data-Acquisition.png')} />

                    <p className='px-2 lh-1'>
                        Data capturing, compliance and standards adoption and creation of Financial and Maintenance application agnostic
                    </p>
                </div>

            </div>
            <div id="tagging-inventory" className={`drop-tabcontent ${activeTab === 'tagging-inventory' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-itio-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />

                    <p className='px-2 lh-1'>Digital Image Management, Bar Code / RIFD Tagging and WH Automation and Inventory Optimization SOP's
                    </p>
                </div>

            </div>
            <div id="physical-verification" className={`drop-tabcontent ${activeTab === 'physical-verification' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-pvfdc-banner.jpg')} />
                <div className='d-flex mt-5 p-2' >
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/Physical-Verification.png')} />

                    <p className='px-2 lh-1'>
                        Data capturing, compliance and standards adoption and creation of Financial and Maintenance application agnostic
                    </p>
                </div>

            </div>
            <div id="bpo" className={`drop-tabcontent ${activeTab === 'bpo' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-bpo-banner.jpg')} />
                <div className='d-flex mt-5 p-2'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/Business-Process-Outsourcing.png')} />

                    <p className='px-2 lh-1'>
                        Outsource the specialized Processes and Functions to keep focus on core business
                    </p>
                </div>

            </div>
            <div id="consulting" className={`drop-tabcontent ${activeTab === 'consulting' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-mc-banner.jpg')} />
                <div className='d-flex mt-5 p-2'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/Management-Consulting.png')} />

                    <p className='px-2 lh-1'>
                        Process Studies, Best Practices Augmentation, Strategy Management, Change Management, Value Articultion and Continual Monitoring and Control
                    </p>
                </div>

            </div>
            <div id="fixed-asset" className={`drop-tabcontent ${activeTab === 'fixed-asset' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-far-banner.jpg')} />
                <div className='d-flex mt-5 p-2'>
                    <img style={{ width: 40, height: 40 }} src={require('../Assets/HeaderImages/TServices/Fixed-Asset-Register.png')} />

                    <p className='px-2 lh-1'>
                        Managing assets data effectively over its life cycle and assess the financial impact
                    </p>
                </div>

            </div>
            <div id="data-consulting" className={`drop-tabcontent ${activeTab === 'data-consulting' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dcs-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />


                    <p className='px-2 lh-1'>
                        Establish the best practices from industry proven methodologies and processes for the organization to manage the lifecycle of enterprise data
                    </p>
                </div>

            </div>
            <div id="material-criticality" className={`drop-tabcontent ${activeTab === 'material-criticality' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-mca-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />


                    <p className='px-2 lh-1'>
                        Criticality Ranking for Material enabling better process control
                    </p>
                </div>

            </div>
            <div id="equipment-criticality" className={`drop-tabcontent ${activeTab === 'equipment-criticality' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-eca-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />


                    <p className='px-2 lh-1'>
                        Criticality Ranking for Equipment enabling better process control
                    </p>
                </div>
            </div>
            <div id="spend-analytics" className={`drop-tabcontent ${activeTab === 'spend-analytics' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-sa-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />


                    <p className='px-2 lh-1'>
                        Derive best in class and tailor made spend visibility, dashboards and reports
                    </p></div>
            </div>
            <div id="supply-chain" className={`drop-tabcontent ${activeTab === 'supply-chain' ? 'active' : ''}`}>
                <img className='nav-drop-img' src={require('../Assets//HeaderImages/extended-supply-banner.jpg')} />
                <div className='d-flex mt-4'>
                    <img style={{ width: 30, height: 30 }} src={require('../Assets/HeaderImages/optimize-one.png')} />


                    <p className='px-2 lh-1'>
                        Operational Efficiencies and Effectiveness is the only way to save money!!!
                    </p>
                </div>
            </div>



        </div>
    )
}
