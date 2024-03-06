import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

export const MaterialMasterTaxonomy = () => {
  return (
    <div>

        <div>
        <img className='hero-img' src={require("../Assets/HomePage/PiLog's Material Master Taxonomy 5.0-Banner.jpg")} alt='hero-bg-1' />
        </div>

        <div className='my-4 py-4'>
            <Container>
                <Row>
                    <Col>
                    <div className='mmt-text'>
                        <h3 className='text-primary'>PiLog's Material Master Taxonomy for SAP Master Data Governance from PiLog Group 
                            Achieves SAP® Certified Integration with RISE with SAP S/4HANA® Cloud</h3>

                        <h5>Dubai - January 4, 2024</h5>
                        <p>
                        PiLog Group announced today that the SAP Integration and Certification Center 
                        (SAP ICC) has certified PiLog's Material Master Taxonomy for SAP Master Data 
                        Governance as integrated with RISE with SAP S/4HANA® Cloud using standard integration 
                        technologies. This integration helps organizations to implement best industry 
                        practices to improve supply-chain, maintenance & procurement processes.
                        </p>
                        <p>“At PiLog Group we highly value our SAP partnership and the joint drive for RISE with 
                            SAP S/4HANA. As proud customers’ choice, year on year, as per Gartner’s Peer Insights
                             ‘Voice of the Customer’ for Master Data Management Solutions, PiLog strives for the 
                             highest levels of certifications and integrations with SAP in pursuit of providing 
                             seamless customer experience”, stated Dr. Imad Syed, CIO & Board Member PiLog Group.</p>

                             <div>
                                <h6>Aspects of PiLog’s Material Master Taxonomy for SAP Master Data Governance include:</h6>
                                <ul>
                                    <li>100% ISO compliant material master data governance</li>
                                    <li>100% improved duplicate detection</li>
                                    <li>100% improved and accurate searchability</li>
                                    <li>50% improved material master descriptions</li>
                                    <li>10% savings on inventory costs</li>
                                </ul>
                             </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='my-4 py-4'>
        <Container>

          <Row className=' mt-2'>
            <Carousel className='mca-analisys '>
              <Carousel.Item className='py-2'>
                <Row className='my-4'>
                  <Col>
                    <div className='mt-3 '>
                      <img className='w-75' src={require('../Assets/InnovativeProducts/Artboard-1.jpg')} alt='pph-hierarchy' />
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className='py-2'>
                <Row className='my-4'>
                  <Col>
                    <div className='mt-3 '>
                      <img className='w-75' src={require('../Assets/InnovativeProducts/Artboard-2.jpg')} alt='pph-hierarchy' />
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className='py-2'>
                <Row className='my-4'>
                  <Col>
                    <div className='mt-3 '>
                      <img className='w-75' src={require('../Assets/InnovativeProducts/Artboard-3.jpg')} alt='pph-hierarchy' />
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className='py-2'>
                <Row className='my-4'>
                  <Col>
                    <div className='mt-3 '>
                      <img className='w-75' src={require('../Assets/InnovativeProducts/Artboard-4.jpg')} alt='pph-hierarchy' />
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className='py-2'>
                <Row className='my-4'>
                  <Col>
                    <div className='mt-3 '>
                      <img className='w-75' src={require('../Assets/InnovativeProducts/Artboard-5.jpg')} alt='pph-hierarchy' />
                    </div>
                  </Col>
                </Row>
              </Carousel.Item> 
            </Carousel>
          </Row>
          <div className='mmt-text mt-5 py-2'>
            <p>
            This solution offers features which are unique and best in class in the industry, including options to create class and characteristics and updates to SAP custom tables. In addition, the creation and change from PiLog Preferred repository with characteristics values drop down from micro services.
            </p>
            <p>
            Other salient features include inbuilt workflows configured on 4 roles of change requests, duplicate check based on class, characteristics, and Part number, Ontology/Taxonomy download and transfer and linking reference data to material. This functionality helps achieve operational excellence in any organization.
            </p>
          </div>
        </Container>
      </div>

      <div>
      <Container>
        <Row>
            <Col>
            <div className='mmt-text'>
        
        <h4 className='text-primary'>PiLog Group</h4>
        <p>Established in 1996, PiLog Group is a global group of independent companies, specializing in Quality Data and Digital Governance and Analytical solutions supporting multiple data domains in a variety of industries all over the globe. </p>
        <p>We have many resources operating globally including Africa's, America's, Europe, Middle East, Asia, etc. The PiLog's solutions are state of the art, focused on creating a common business language and managing the rules for the creation of high quality, multilingual terminology using Machine Learning, Artificial Intelligence technologies, and human-augmented algorithms for our customers who are eager to transform their businesses digitally.</p>
        PiLog provides exclusive technical dictionaries, industrial libraries with content repositories that are the culmination of research, development, and execution over the past twenty years embedded into the platform of PiLog Data Quality HUB. All our methodologies, processes, solutions are compliant with intern.
      </div>

            </Col>
        </Row>
      </Container>
      </div>
     
     
    </div>
  )
}
