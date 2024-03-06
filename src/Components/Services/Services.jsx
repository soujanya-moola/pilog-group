import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'
import { Col, Container, Row, Tabs } from 'react-bootstrap'
import './Services.css'
import dataHarmonization from '../Assets/Services/Data Harmonization.svg'
import dataMigration from '../Assets/Services/Data_Migration.svg'
import ispirManage from '../Assets/Services/iSPIR-Management.svg'
import dataAchive from '../Assets/Services/Data Archiving & Unarchiving.svg'
import imagingTagging from '../Assets/Services/Imaging_Tagging.svg'
import bpo from '../Assets/Services/Business-Process-Outsourcing.svg'
import dataAnalatic from "../Assets/Services/Data_Analytics.svg"
import digitalTransformation from '../Assets/Services/Digital_Transformation.svg'
import dataHealt from "../Assets/Services/Data_Health_Assessment.svg"
import pmData from "../Assets/Services/PM-Data-Acquisition.svg"
import physicalVartical from "../Assets/Services/Physical-Verification.svg"
import managementConsulting from '../Assets/Services/Management-Consulting.svg'
import FixedAssetRegister from '../Assets/Services/Fixed-Asset-Register.svg'
import dataManagement from '../Assets/Services/Data-Management.svg'
import equipmentCriticality from '../Assets/Services/Equipment_Criticality_Analysis_icon.svg'
import emiArchitecture from '../Assets/Services/EIM-Architecture.svg'
import meterialEquality from '../Assets/Services/Material_Equipment_Criticality_Analysis.svg'
import spendAnalysis from '../Assets/Services/Spend-Analytics.svg'




export const Services = () => {

    const techService = [
        {
            url:dataHarmonization,
            title: "Data Harmonization",
            content: "Analytics platform to provide insights into the business performance with real-time dashboards."
        },
        {
            url: dataMigration ,
            title: "Data Migration",
            content: "Platform agnostic, standardized and seamless extraction, transformation and loading"
        },
        {
            url: ispirManage,
            title: "iSPIR Management",
            content: "Information management of replaceable, interchangeable and alternatives spares for effective MRO inventory management"
        },
        {
            url: dataAchive,
            title: "Data Archiving & Unarchiving",
            content: "Seamless Master Data extraction from various digital sources. Cleansing, standardization, classification and enrichment."
        },
        {
            url: imagingTagging,
            title: "Imaging, Tagging Inventory Optimization",
            content: "Digital Image Management, Bar Code / RIFD Tagging & WH Automation and Inventory Optimization SOP's"
        },
        {
            url: bpo,
            title: "Business Process Outsourcing",
            content: "Outsource the specialized Processes & Functions to keep focus on core business"
        },
        {
            url: dataAnalatic,
            title: "Data Analytics",
            content: "Analytics platform to provide insights into the business performance with real-time dashboards"
        },
        {
            url: digitalTransformation,
            title: "Digital Transformation",
            content: "Technology and Business Change with innovations providing competitive advantage"
        },
        {
            url: dataHealt,
            title: "Data Health Assessment",
            content: "Qualitative data management against standards & provisional reporting."
        },
        {
            url: pmData,
            title: "PM Data Acquisition",
            content: "Data capturing, compliance & standards adoption and creation of Financial and Maintenance application agnostic"
        },
        {
            url: physicalVartical,
            title: "Physical Verification / Walk down",
            content: "Capturing of real time data from field and maintaining data quality standards"
        },
       

    ]

    const strategicService = [
        {
            url:managementConsulting,
            title: "Management Consulting",
            content: "Process Studies, Best Practices Augmentation, Strategy Management, Change Management, Value Articulation and Continual Monitoring & Control"
        },
        {
            url: FixedAssetRegister,
            title: "Fixed Asset Register",
            content: "Managing assets data effectively over its life cycle and assess the financial impact"
        },
        {
            url: dataManagement,
            title: "Data Consulting Services",
            content: "Establish the best practices from industry proven methodologies and processes for the organization to manage the lifecycle of enterprise data"
        },
        {
            url: emiArchitecture,
            title: "EIM Architecture",
            content: "Establish the landscape and architecture for the Enterprise Information management augmenting the cloud & on-premise models."
        },
        {
            url: meterialEquality,
            title: "Material Criticality Analysis",
            content: "Criticality Ranking for Material enabling better process control"
        },
        {
            url: equipmentCriticality,
            title: "Equipment Criticality Analysis",
            content: "Criticality Ranking for Equipment enabling better process control"
        },
        {
            url: spendAnalysis,
            title: "Spend Analytics",
            content: "Derive best in class and tailor made spend visibility, dashboards and reports"
        },
        
       

    ]

   

    return (
        <div>
            <div className='innovate-product-hero position-relative text-align-center color-white'>
                <img className='w-100' src={require('../Assets/Services/Services_Banner.jpg')} alt='service-hero-banner' />
                <div className='innovate-product-hero-title  position-absolute top-50 left-30 transform-translate(-50%, -50%)' >
                    <h1>Services</h1>
                </div>
            </div>
            <br />
            <div>
                <Container className=''>
                    <Tabs
                        defaultActiveKey="Technical Services"
                        id="fill-tab-example"
                        className="mb-3" 
                        
                        fill
                    >
                        <Tab className='border my-3' eventKey="Technical Services" title="Technical Services">
                            
                                <Row className='justify-content-center align-items-center text-align-center'>
                                {techService.map((e) =>
                                    <Col className='d-flex' lg={6}>
                                        <div className='d-flex justify-content-center align-items-center text-align-left m-4'>
                                            <img style={{ width: 90}} src={e.url} alt=''/>
                                            <div style={{ textAlign:'left', marginLeft:30 }}>
                                                <h5>{e.title}</h5>
                                                <p >{e.content}</p>
                                            </div>
                                        </div>
                                    </Col>
                                     )}
                                  
                                </Row>
                           

                        </Tab>
                        <Tab className='border my-3' eventKey="Strategic Services" title="Strategic Services">
                           <Row className='justify-content-center align-items-center text-align-center'>
                           {strategicService.map((e) =>
                                    <Col className='d-flex' lg={6}>
                                        <div className='d-flex justify-content-center align-items-center text-align-left m-4'>
                                            <img style={{ width: 90}} src={e.url} alt=''/>
                                            <div style={{ textAlign:'left', marginLeft:30 }}>
                                                <h5>{e.title}</h5>
                                                <p >{e.content}</p>
                                            </div>
                                        </div>
                                    </Col>
                                     )}
                           </Row>
                        </Tab>

                    </Tabs>
                </Container>


            </div>
        </div>
    )
}
