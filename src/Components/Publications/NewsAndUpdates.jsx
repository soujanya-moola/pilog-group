import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container,  Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { HonorAwardsInInformationTechnology } from '../NewsData/HonorAwardsInInformationTechnology';
import { DataManagementThinkLab } from '../NewsData/DataManagementThinkLab';

export const NewsAndUpdates = () => {
    const pageData = [ 
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2244-ISOWorkGroup-Seattleaab3.jpg'),
            content:'Master Data Management Vendor for Your Business',
            btn:'Read More',
            btnUrl: 'thinklinkers-9th-data-management-thinkLab',
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2244-ISOWorkGroup-Seattleaab3.jpg'),
            content:'Master Data Management Vendor for Your Business',
            btn:'Read More',
            btnUrl: 'thinklinkers-9th-data-management-thinkLab',
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-1097-Master-Data-Management-Misconcep.png'),
            content:'Data Analytics in Business: How It Drives Success',
            btn:'Read More',
            btnUrl:'HonorAwardsInInformationTechnology',
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-1236-From-chaos-to-clarity-Embrace-these-best-practices-for-data-migration-success.jpg'),
            content:'Key Considerations for Selecting the Right Master Data Management Solutions Provider',
            btn:'Read More',
            btnUrl:'master-data-governance-certified.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-1443-Data-Governance-vs-Data-Catalog-Linkedin.jpg'),
            content:'Optimizing Master Data Governance',
            btn:'Read More',
            btnUrl:'master-data-management-big-data-analytics-blog'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-1490-blogs-7624-Gartner_Peer_Insights (1).jpg'),
            content:'Master Data Governance (MDG) for Mining Industries - PiLog',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
    
        {
            url:require('../Assets/PublicationImages/NewsDataImages/blogs-5258-Were-excited-to-introduce-our-newest-visionary-Dr-Kevin-Attard.jpg'),
            content:'PiLog appoints former SAP and Oracle executive, Dr. Kevin Attard as member of its Advisory Board for Middle East & APAC.',
            btn:'Read More',
            btnUrl:'PiLog-Appoints-Former-SAP-And-Oracle-Executive'
        },
        {
            url:require('../Assets/PublicationImages/NewsDataImages/blogs-9879-The-Emirates-Times-Shines-Spotlight-on-Dr-Imad-A-Syed-CEO-of-PiLog-Middle-East-and-APAC-linkedin.jpg'),
            content:'The Emirates Times Shines Spotlight on Dr. Imad A. Syed, CEO of PiLog Middle East and APAC',
            btn:'Read More',
            btnUrl:'the-emirates-times-shines-on-imad-syed'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-1780-8-Trends-for-Data-Management-to-follow-in-2023-Linkedin-Image.jpg'),
            content:'Why Data Governance',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-1920-Do-you-know-data-can-help-you-lead-your-market-Linkedin-Image2.jpg'),
            content:'Protecting Data Integrity with "Lean Governance on Cloud"',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2196-Business-Priorities-for-Banner-linkedin.jpg'),
            content:'The Speed and Advantages of the "Lift and Shift" Approach',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2244-ISOWorkGroup-Seattleaab3.jpg'),
            content:'Eleven Money saving Tips for Procurement Professionals',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2277-blogs-7624-Gartner_Peer_Insights (1).jpg'),
            content:'how to implement a winning mdm strategy',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
    
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2386-Eliminating-Duplicate-Data-The-Key-to-Smoother-Procurement-Operations-Linkedin-Image.jpg'),
            content:'Streamlining Business Operations The Definitive Guide to ERP Integrations',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2481-fascinating-data-harmonization-linkedin-banner.jpg'),
            content:'Eliminating Duplicate Data The Key to Smoother Procurement Operations',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2522-Improved-Spare-Parts-Interchangeability-linkedin-image.jpg'),
            content:'How Big Data Analytics is Transformation Middle East Business',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2598-what-is-digital-transformation-linkedin-banner.jpg'),
            content:'Streamline, Simplify, Succeed: Leveraging iSPIR for Improved Spare Parts Interchangeability',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2658-blogs-3644-pilog-add-on-10.4-for (1).jpg'),
            content:'The Future of Asset Management: Predictions and Trends',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2658-blogs-3644-pilog-add-on-10.4-for (1).jpg'),
            content:'Linkedin Subscriptions',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2663-why-data1.jpg'),
            content:'What are the primary goals of data management 2023?',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2696-Check-out-our-Lean-governance-Pr.jpg'),
            content:'8 Trends for Data Management to follow in 2023',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-2737-5-ways-to-optimize-the-inventory-linkedin-banner.jpg'),
            content:'Reasons why Data cleansing is necessary',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-3169-Optimizing-critical-components-Linkedin.jpg'),
            content:'How can CxOs achieve success in 2023',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-3255-pilog-overview-of-asset-life-cycle-linkedin-image.png'),
            content:'Data Classification Could Make or Break Data Governance',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
        {
            url:require('../Assets/PublicationImages/BlogsImages/blogs-3440-what-is-data-archiving-linkedin.png'),
            content:'Ontology and Data Management A Brief Explanation',
            btn:'Read More',
            btnUrl:'https://piloggroup.com/master-data-management-vendor-for-your-business.php'
        },
    
       ]

       const itemsPerPage = 6; // Number of items to display per page
       const [currentPage, setCurrentPage] = useState(1);
     
       const indexOfLastItem = currentPage * itemsPerPage;
       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
       const currentItems = pageData.slice(indexOfFirstItem, indexOfLastItem);
    
       const handlePageChange = (event, value) => {
        setCurrentPage(value);
        const targetDiv = document.getElementById('blog-div'); // Replace 'your-div-id' with the actual ID of your div
        targetDiv.scrollIntoView({ behavior: 'smooth' }); // Scroll to the top of the div
      };
  return (
    <div>
        <div className='publicaton-Blogs'>
        <Container>
          <h2>Blogs</h2>
        </Container>

      </div>

      <div className='my-4 py-4' id='blog-div'>
        <Container>
            <Row>
                
                {currentItems.map((item, index) => (
                    <Col lg={4}>
                        <Card className='mt-4' style={{height:'20rem'}}>
      <Card.Img variant="top" className='w-100' src={item.url} alt="Publication" />
      <Card.Body>
       
        <Card.Text>
        {item.content}
        </Card.Text>
        <hr/>
       <Link className='blog-card-link' to={item.btnUrl}>{item.btn}</Link>
      </Card.Body>
    </Card>
        
        </Col>
      ))}
             
            </Row>
        </Container>
    
      <div>
      
      {pageData.length > itemsPerPage && (
        <Pagination className='d-flex justify-content-center mt-4'
          count={Math.ceil(pageData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          
          color="primary"
        />
      )}
      </div>
     
    </div>
    </div>
  )
}
