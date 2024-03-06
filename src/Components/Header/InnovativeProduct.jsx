import React, { useState } from 'react'
import './InnovativeProduct.css'
import { Link } from 'react-router-dom';

export const InnovativeProduct = () => {
    const [activeTab, setActiveTab] = useState('London');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };
  return (
    <div>

    <div>



        <div className="drop-tab1-inn">
           

            <div>
                <button
                    className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
                    onMouseOver={() => openCity('London')}
                >
                    <Link className='in-link' to="innovative-products/MasterDataRecordManager"> Master Data Record Manager (MDRM)</Link>
                   
                </button>
                <button
                    className={`tablinks ${activeTab === 'data-analytics' ? 'active' : ''}`}
                    onMouseOver={() => openCity('data-analytics')}
                >
                    <Link className='in-link' to="innovative-products/DataQualityHub">  Data Quality HUB (DQH)</Link>

                   
                </button>
                <button
                    className={`tablinks ${activeTab === 'data-migration' ? 'active' : ''}`}
                    onMouseOver={() => openCity('data-migration')}
                >
                    <Link className='in-link' to="innovative-products/DataQualityManagement">  Data Quality Management (iDQM)</Link>

                

                </button>
                <button
                    className={`tablinks ${activeTab === 'iSPIR-Management' ? 'active' : ''}`}
                    onMouseOver={() => openCity('iSPIR-Management')}
                >
                    <Link className='in-link' to="innovative-products/MasterDataOntologyManager"> Master Data Ontology Manager (MDOM)</Link>

                
                </button>
                <button
                    className={`tablinks ${activeTab === 'data-health' ? 'active' : ''}`}
                    onMouseOver={() => openCity('data-health')}
                >
                    <Link className='in-link' to="innovative-products/PiLogPreferredRecords">PiLog Preferred Records (PPR)</Link>

                   
                </button>
                <button
                    className={`tablinks ${activeTab === 'data-archiving' ? 'active' : ''}`}
                    onMouseOver={() => openCity('data-archiving')}
                >
                    <Link className='in-link' to="innovative-products/PiLogPreferredOntology"> PiLog Preferred Ontology (PPO)</Link>

                  
                </button>
                <button
                    className={`tablinks ${activeTab === 'data-archiving' ? 'active' : ''}`}
                    onMouseOver={() => openCity('data-archiving')}
                >
                    <Link className='in-link' to="innovative-products/PiLogPreferredHierarchy"> PiLog Preferred Hierarchy (PPH)</Link>

                  
                </button>
            </div>
            

        </div>
        <div className="drop-tab2-inn">
        
            <button
                className={`tablinks ${activeTab === 'consulting' ? 'active' : ''}`}
                onMouseOver={() => openCity('consulting')}
            >
                    <Link className='in-link' to="innovative-products/SparePartsInterchangeabilityRecord">Spares Parts Interchangeability Record (iSPIR)</Link>

                
            </button>
            <button
                className={`tablinks ${activeTab === 'fixed-asset' ? 'avtive' : ''}`}
                onMouseOver={() => openCity('fixed-asset')}
            >
                    <Link className='in-link' to="innovative-products/iTransformETL">  iTransform - ETL</Link>

              

            </button>
            <button
                className={`tablinks ${activeTab === 'data-consulting' ? 'active' : ''}`}
                onMouseOver={() => openCity('data-consulting')}
            >
                    <Link className='in-link' to="#">  iVisualize - Digital Analytics</Link>

               
            </button>
            <button
                className={`tablinks ${activeTab === 'material-criticality' ? 'active' : ''}`}
                onMouseOver={() => openCity('material-criticality')}
            >
                    <Link className='in-link' to="innovative-products/MaterialMasterTaxonomy"> Material Master Taxonomy for SAP MDG</Link>

               
            </button>
            <button
                className={`tablinks ${activeTab === 'equipment-criticality' ? 'active' : ''}`}
                onMouseOver={() => openCity('equipment-criticality')}
            >
                    <Link className='in-link' to="innovative-products/Coswin"> Coswin CMMS/EAM</Link>

              
            </button>
            <button
                className={`tablinks ${activeTab === 'spend-analytics' ? 'active' : ''}`}
                onMouseOver={() => openCity('spend-analytics')}
            >
                    <Link className='in-link' to="innovative-products/LeanDataGovernance">Lean Data Governance</Link>

             
            </button>
           
        </div>

    </div>

    <div id="London" className={`drop-tabcontent-inn ${activeTab === 'London' ? 'active' : ''}`}>

        <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dhs-banner.jpg')} />
        <div className='d-flex mt-4'>
            <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>
            
        <p className='px-2 lh-1'>
        Master Data Governance Solution for (Material, Service, Vendor, Customer, Assets etc.)
        </p>
        </div>
        
    </div>

    <div id="data-analytics" className={`drop-tabcontent-inn ${activeTab === 'data-analytics' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dm-banner.jpg')} />
    <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

    <p className='px-2 lh-1'>Seamless Master Data extraction from various digital sources. Cleansing, standardization, classification and enrichment.
        </p>
    </div>
        
    </div>

    <div id="data-migration" className={`drop-tabcontent-inn ${activeTab === 'data-migration' ? 'active' : ''}`}>
       
        <img className='nav-drop-img' src={require('../Assets/HeaderImages/digital-transformation-solutions.jpg')} />
       <div  className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

       <p className='px-2 lh-1'>
       Preconfigured templates, data models and structures. ISO 8000 compliant
        </p>
       </div>
        
    </div>
    <div id="iSPIR-Management" className={`drop-tabcontent-inn ${activeTab === 'iSPIR-Management' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-ispirm-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        ISO 8000 compliant data models and structures. Data Cleansing, Harmonization, Validation and Enrichment
        </p>
        </div>
        
    </div>
    <div id="data-health" className={`drop-tabcontent-inn ${activeTab === 'data-health' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dha-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        Over 10 million Unique, Verified with Confidence level, Pre-Catalogued, Standardized Material, Equipment and Service Master Records
        </p>
        </div>
        
    </div>
    <div id="data-archiving" className={`drop-tabcontent-inn ${activeTab === 'data-archiving' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dau-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'> 
        Over 6000+ Unique templates for Material, Equipment and Service Master Records. ISO 8000 compliant data models and structures
        </p>
        </div>
        
    </div>
    <div id="pm-data" className={`drop-tabcontent-inn ${activeTab === 'pm-data' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-pmda-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        Mapped with Taxonomies to determine Business and Economic activities
        </p>
        </div>
        
    </div>
    <div id="tagging-inventory" className={`drop-tabcontent-inn ${activeTab === 'tagging-inventory' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-itio-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>Optimized Spares Parts Management covering Capital / Lifetime, Operational items. Inventory and Asset Optimization.
        </p>
        </div>
       
    </div>
    <div id="physical-verification" className={`drop-tabcontent-inn ${activeTab === 'physical-verification' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-pvfdc-banner.jpg')} />
        <div className='d-flex mt-4' >
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        Configure Service Master suite with transparent updates
        </p>
        </div>
        
    </div>
    <div id="bpo" className={`drop-tabcontent-inn ${activeTab === 'bpo' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-bpo-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        Well-defined Application Programming interfaces and operations to validate the flow of data and information
        </p>
        </div>
        
    </div>
    <div id="consulting" className={`drop-tabcontent-inn ${activeTab === 'consulting' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-mc-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        Transforming the data infinitely to analyze and discover business insights.
        </p>
        </div>
        
    </div>
    <div id="fixed-asset" className={`drop-tabcontent-inn ${activeTab === 'fixed-asset' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-far-banner.jpg')} />
        <div className='d-flex mt-4'>
    <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>

        <p className='px-2 lh-1'>
        The collection, measurement, analysis, visualisation and interpretation of the Data Digitally
        </p>
        </div>
       
    </div>
    <div id="data-consulting" className={`drop-tabcontent-inn ${activeTab === 'data-consulting' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-dcs-banner.jpg')} />
        <div className='d-flex mt-4'>
        <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>


        <p className='px-2 lh-1'>
        Customized CRM platform to engage and delight the Clients which is incomparable
        </p>
        </div>
        
    </div>
    <div id="material-criticality" className={`drop-tabcontent-inn ${activeTab === 'material-criticality' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-mca-banner.jpg')} />
        <div className='d-flex mt-4'>
        <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>


        <p className='px-2 lh-1'>
        Material Master Taxonomy 4.0 for SAP Master Data Governance
        </p>
        </div>
       
    </div>
    <div id="equipment-criticality" className={`drop-tabcontent-inn ${activeTab === 'equipment-criticality' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-eca-banner.jpg')} />
       <div className='d-flex mt-4'>
       <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>


       <p className='px-2 lh-1'>
        Criticality Ranking for Equipment enabling better process control
        </p>
       </div>
    </div>
    <div id="spend-analytics" className={`drop-tabcontent-inn ${activeTab === 'spend-analytics' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets/HeaderImages/s-sa-banner.jpg')} />
        <div className='d-flex mt-4'>
        <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>


            <p className='px-2 lh-1'>
        Derive best in class and tailor made spend visibility, dashboards and reports
        </p></div>
    </div>
    <div id="supply-chain" className={`drop-tabcontent-inn ${activeTab === 'supply-chain' ? 'active' : ''}`}>
    <img className='nav-drop-img' src={require('../Assets//HeaderImages/extended-supply-banner.jpg')} />
       <div className='d-flex mt-4'>
       <img style={{width:30, height:30}} src={require('../Assets/HeaderImages/optimize-one.png')}/>


       <p className='px-2 lh-1'>
            Operational Efficiencies and Effectiveness is the only way to save money!!!
        </p>
       </div>
    </div>



</div>
  )
}
