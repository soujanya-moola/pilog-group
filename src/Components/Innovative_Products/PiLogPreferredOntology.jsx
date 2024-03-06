import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './InnovativeProducts.css'
import pposvg from '../Assets/InnovativeProducts/ppo/ppo-img1.svg'

export default function PiLogPreferredOntology() {
    return (
        <div>
            <div className='position-relative text-align-center text-light'>
                <img className='w-100' src={require('../Assets/InnovativeProducts/ppo/Prefrerred-Ontology.jpg')} alt='Innovative products-mdo-banner' />
                <div className='ppo position-absolute top-50 left-50 transform-translate(-50%, -50%)'>
                    <h1>
                        PiLog Preferred Ontology
                    </h1>
                    <p className='fs-5'>
                        Over 6000+ Unique templates for Material, Equipment and Service Master Records.
                    </p>
                    <p>
                        ISO 8000 compliant data models and structures
                    </p>
                    <div className="buttons">
                        <button className="download-btn">Download Brochure</button>
                        <button className="readmore-btn btn-light">Read More</button>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <Container>
                    <Row>
                        <Col lg={12} className='text-start para-text'>
                            <p>
                                PiLog has the best dictionary in the form of PPO - PiLog Preferred Ontology which covers the MRO and Service Templates from various industries around the globe. PiLog develops the dictionaries/taxonomies/Ontologies and the master data governance solutions as per the ISO standards.
                            </p>
                            <p>
                                The most important component of any Master Data effort-of any data effort-is content. PiLog has spent twenty-five years researching, developing, and refining our Technical Dictionary and Taxonomy.
                            </p>
                        </Col>
                        <Col lg={6} className='text-start para-text'>
                            <p>
                                Most people simply use the term "Technical Dictionary" to refer to the content needed to describe and relate master data. The foundation of what is needed is far more than just a dictionary. You must define the properties and classification structures. You must determine the links and relationships between and among the data. That is what our content provides-a unique set of templates to define data based on the class of each item of each data domain.
                            </p>
                            <p>
                                All that definition and determination take time, but many find the task too daunting and begin their project with inaccurate and incomplete rule sets that fail to govern their Master Data. As a Master Data Content Accelerator, the PiLog Technical Dictionary Content puts any Master Data Project on a firm footing to start Classifying, Managing, and Governing Master Data on the first day of your Master Data project.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <img className='w-100' src={pposvg} alt='Innovative products-dqh-img' />
                        </Col>
                    </Row>
                </Container>
            </div>
            <br />

            <div className='bg-light p-5'>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={6}>
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className='w-100' src={require('../Assets/InnovativeProducts/ppo/slide1.png')} alt='Innovative products-dqh-img' />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='w-100' src={require('../Assets/InnovativeProducts/ppo/slide2.png')} alt='Innovative products-dqh-img' />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='w-100' src={require('../Assets/InnovativeProducts/ppo/slide3.png')} alt='Innovative products-dqh-img' />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='w-100' src={require('../Assets/InnovativeProducts/ppo/slide4.png')} alt='Innovative products-dqh-img' />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='w-100' src={require('../Assets/InnovativeProducts/ppo/slide5.png')} alt='Innovative products-dqh-img' />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Problem Statement
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show bg-light" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='text-start'>
                                                <li>Ineffective search</li>
                                                <li>Incomplete item specifications</li>
                                                <li>High possibility of creating duplicate items</li>
                                                <li>Items not properly grouped</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Feature
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse bg-light" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul  className='text-start'>
                                                <li>Extensive coverage of all commodities</li>
                                                <li>Detailed templates explaining each commodity</li>
                                                <li>Flexible and user-friendly</li>
                                                <li>Suitable for all industrial sectors</li>
                                                <li>Available in multiple languages</li>
                                                <li>User-friendly</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Benefits
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse bg-light" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul  className='text-start'>
                                                <li>Structured materials get created using our Ontology (PPO)</li>
                                                <li>Enables capturing complete specifications to reduce incorrect purchasing</li>
                                                <li>Standardized descriptions (Short & Long) across the organization ( Across the plants/Regions)</li>
                                                <li>Identify duplicates based on the characteristics</li>
                                                <li>Enables the user to link images to the material records</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}