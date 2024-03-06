import React from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'

export const LeadershipTeam = () => {

const    teamLeadData = [
    {
        image:require('../Assets/LeaderShipTeam/Salomon-Jager-large.jpg'),
        name:'Dr. Salomon De Jager',
        designation:' Co - Chief Executive Officer | PiLog Group',
        discription:'Mr Strydom has a Mechanical Engineering degree from the University of Pretoria, South Africa, and furthered his studies with a MBL from Unisa. He started his career at Eskom as Maintenance Engineer in the nuclear field. He was member of the nuclear governance body monitoring and controlling all nuclear-related activities at Koeberg Power Station where he managed a number of research and development projects on behalf of Eskom. Mr Strydom continued his career at the University of Technology as Head of the Engineering Faculty and later the Campus Director for one of the University campuses.'

    },
    {
        image:require('../Assets/LeaderShipTeam/Pieter_Strydom.jpg'),
        name:'Pieter Strydom',
        designation:' Co - Chief Executive Officer | PiLog Group',
        discription:'Mr Strydom has a Mechanical Engineering degree from the University of Pretoria, South Africa, and furthered his studies with a MBL from Unisa. He started his career at Eskom as Maintenance Engineer in the nuclear field. He was member of the nuclear governance body monitoring and controlling all nuclear-related activities at Koeberg Power Station where he managed a number of research and development projects on behalf of Eskom. Mr Strydom continued his career at the University of Technology as Head of the Engineering Faculty and later the Campus Director for one of the University campuses.'

    },
        {
            image:require('../Assets/LeaderShipTeam/GideonHuisamen.jpg'),
            name:'Gideon Huisamen',
            designation:' Co - Chief Executive Officer PiLog Group',
            discription:'Mr Gideon Huisamen completed his National Higher Diploma in Cost Accounting in 1989 and then his Bachelor in Commerce (Finance) in 1996. He worked as a Management and Cost accountant for 16 years in South Africa with a Telecom Company and also later in a food Canning Manufacturing Company. In 1996 he joined a software development House Paradigm Systems Technology as Functional Specialist in the design and implementation of the Procurement, Inventory and Financial Modules, which was part of the bigger Enterprise Asset and Maintenance Management Systems.'

        },
        {
            image:require('../Assets/LeaderShipTeam/Imad_syed.jpg'),
            name:'Dr. Imad Syed',
            designation:' Chief Information Officer | PiLog Group | Chief Executive Officer | Middle East , Apac',
            discription:'Senior Executive, Digital Advisory, Visionary Leader with vast experience in conceiving & designing business, enterprise information and data quality HUB strategies for medium to large enterprises; Expertise in designing simple yet powerful strategies for data governance, management, transformation and analytics of complex system landscapes, proven track record of excelling operational efficiency & effectiveness; revolutionized the product and solution development using innovative frameworks that are agile and sustainable from the perspective of futuristic technology evolutions.',
            description2:'Developing & executing business strategies be it for GTM or Product or Operational management or deep & diversified Value-Engineering solutions has been core strengths over the years; Passionate to nurture, build & lead high-performance teams resulting best of both worlds in the form of Customer & Employee experience is the principle believed and proven several times by Imad Syed.'

        },
        {
            image:require('../Assets/LeaderShipTeam/wynand-nortje-new.jpg'),
            name:'Wynand Nortje',
            designation:'Chief Technology Officer | PiLog Group',
            discription:'Mr Wynand Nortje obtained his Industrial Engineering degree from the University of Pretoria, South Africa and furthered his studies with a B.Sc Honours degree in Operations Research. He has 25 years of experience in the design, development and implementation of data governance solutions with a specific focus on technical frameworks required to affect enterprise data quality for large organizations. He participated in the ISO technical committee’s tasked with the creation of the ISO 8000 standard and provided the strategic roadmap for the practical implementation of the standard in PiLog software frameworks. He is actively researching trends in data digitalization and transformation methodologies. He has a proven track record for delivering large scale complex solutions, passionate on following through to successful conclusions and satisfied customers.'
        },
      
       
        {
            image:require('../Assets/LeaderShipTeam/Tracy-Bennett-new.jpg'),
            name:'Tracy Bennett',
            designation:' Americas and Canada - Zone1',
            discription:'Tracy Bennett has 31 years of experience in leading the organizations in value creation & delivery, data creation & enhancement, data integration & strategy, data asset management & protection and organizational optimization with continuous improvement.',
            discription2:"He was a former GEO-market CFO for operations and shared 500 services. Director for a Fortune 500 company and Global perspective with 17 years of international experience. He received master's of degree in Business Administration from the University of Liverpool. He is a certified management accountant and serial entrepreneur.",
        },
        {
            image:require('../Assets/LeaderShipTeam/Reinhard_Schiel.jpg'),
            name:'Reinhard Schiel',
            designation:' Chief Operating Officer | Africa - Zone 2',
            discription:"He started his career as a telecommunications engineer in the laboratories of Telkom after completing his Electrotechnical Engineering degree at the University of Pretoria. Seven years later, he joined the Pretoria Municipality where he held several posts and ended up being responsible for all maintenance and construction activities of the electricity distribution network of Pretoria East.",
            discription2:"Later joined Paradigm Systems Technologies as a maintenance and stores management consultant, and picked up valuable experience in a variety of industries across southern Africa. He was then part of the management buy-out of the Industrial Division of Paradigm to form PiLog where he continued to combine his wide experience in the implementation of ERP systems with his in-depth knowledge of Cataloguing and Master Data creation and maintenance to head up the Marketing Department of PiLog, driving all marketing activities worldwide.",

        },
        {
            image:require('../Assets/LeaderShipTeam/Johan-Zwarts.jpg'),
            name:'Johan Zwarts',
            designation:' Chief Operating Officer | Africa - Zone 2',
            discription:"Johan is the Chief Operating Officer and Senior Program Manager at PiLog Africa for various PiLog Clients involved in the world of Master Data Quality Management and related solutions.",
            discription2:"In 1986 he obtained his Bachelors degree in Industrial Engineering at the University of Pretoria, South Africa, and later completed his Masters Degree in Industrial Engineering, also at the University of Pretoria. He started his career as Business Analyst at Paradigm Systems Technology in the field of Information Systems development and implementation. He gained extensive experience in Maintenance and Configuration management, and during the early to mid-2000’s he was the Product Development Manager overseeing the development of PiLog’s Engineering Management solutions. His experience in these fields is now applied in the Master Data Quality Management domain."
        },

    ]
    
    return (
        <div>
            <div className='position-relative text-align-center text-light'>
                <img className='w-100' src={require('../Assets/AboutUS/Corporate_Banners.jpg')} alt='Innovative products-mdo-banner' />
                <div className='ppo position-absolute top-50 left-15 transform-translate(-50%, -50%)' style={{ left: 300 }}>
                    <h1>
                        Leadership Team
                    </h1>
                </div>
            </div>

            <div className='my-4 py-4'>
                <Container className='border rounded bg-light py-4'>
                    
                      <Carousel className='mca-analisys '>
                      {teamLeadData.map((e)=>
                      <Carousel.Item className='py-2'>
                          <Row>
                              <Col lg={4}>
                                  <div>
                                      <Card style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                          <Card.Img className=' mt-2' variant="top" style={{ borderRadius: 150, width: 160 }} src={e.image} />
                                          <Card.Body>
                                              <Card.Title className='text-primary'>{e.name}</Card.Title>
                                              <Card.Text>
                                                 {e.designation}
                                              </Card.Text>
                                              {/* <Button variant="primary">Go somewhere</Button> */}
                                          </Card.Body>
                                      </Card>
                                  </div>
                              </Col>
                              <Col lg={8} style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                  <div className='mt-4' style={{ textAlign: 'left', justifyContent: 'center', alignItems: 'center' }}>
                                      <div>

                                          <p><b className='text-primary'>{e.name} | </b> {e.designation}</p>
                                      </div>
                                      <div style={{ lineHeight: 1.8 }}>
                                          <p>{e.discription}</p>
                                          <p>{e.discription2}</p>
                                      </div>
                                  </div>

                              </Col>

                          </Row>
                      </Carousel.Item>
 )}

                  </Carousel>
                   
                  
                </Container>
            </div>
        </div>
    )
}
