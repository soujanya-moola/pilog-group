import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './InnovativeProducts.css'

export default function MasterDataOntologyManager() {
    return (
        <div>
            <div>
                <div className='innovative-mdom'>
                    {/* <img className='w-100' src={require('../Assets/InnovativeProducts/Master_Data_Ontology_Manager_Banner.webp')} alt='Innovative products-mdo-banner' /> */}
                    <div className='' >
                        <h1>
                            Master Data Ontology Manager
                        </h1>
                        <p className='fs-5'>
                            ISO 8000 compliant data models and structures.
                        </p>
                        <p>
                            Data Cleansing, Harmonization, Validation and Enrichment
                        </p>
                        <div class="buttons">
                            <button class="download-btn ">Download Brochure</button>
                            <button class="readmore-btn btn-light">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <div>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={7} className='text-start'>
                            <p className='para-text'>
                                The primary function of the PiLog™ Master Data Ontology Manager is to allow users to create and maintain the client corporate Master Data Dictionary, data requirement statements, and classification structures. Managing the corporate Master Data Dictionary is key for the best practice of master data management. Ontology is the Meta data for the creation of new master data.

                            </p>

                            <p className='para-text'>
                                Each data requirement can be seen as a data entry form to create master data, containing all the data quality rules (masks, regular expressions, data types) to guarantee quality data. Each data requirement is associated with a class and the properties (fields) that are used to describe the class. For example, the material class "bearing" would be described using the properties, interior diameter, outer diameter, and width. The service class "clean floor" would be described using the property, floor material.

                            </p>
                        </Col>

                        <Col lg={5}>
                            <img className='w-100' src={require('../Assets/InnovativeProducts/mdom/mdom-img1.webp')} alt='Innovative products-mdo-banner' />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </div>

            <div>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={5}>
                            <img className='w-100' src={require('../Assets/InnovativeProducts/mdom/mdom-img2.webp')} alt='Innovative products-mdo-banner' />
                        </Col>
                        <Col lg={7} className='text-start'>
                            <p className='para-text'>
                                Data requirements can be nested to provide complex data structures. Data quality Meta data (masks, data types, regular expressions) can be pre-defined in the data requirement statements. The Meta data is interpreted and enforced by the Item Entry control functionality of MDRM. Multiple data types are available that cover any data domains (accounts, cost centers, customers, addresses, vendors, materials...).

                            </p>

                            <p className='para-text'>
                                The Data Requirement Manager is integrated with a Master Data Dictionary that contains the terms and definitions; this is sometimes called a company lexicon or vocabulary. The customer dictionary is managed as a subset of the PiLog Registered Ontology and is integrated with open technical dictionaries that contain terms and definitions collected from international and national standards organizations as well as industry consortia. Master Data Dictionary, contains synonyms and translations.

                            </p>
                        </Col>

                    </Row>
                </Container>
                <br />
                <br />
            </div>

            <div>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <h2 className='pb-3'>
                            Benefits
                        </h2>
                        <Col lg={6} className='text-start'>
                            <p className='para-text'>
                                <ul>
                                    <li>
                                        MDOM software Application allows users to convert their corporate business language into a formal ontology/dictionary

                                    </li>
                                    <li>
                                        MDOM comprises of 4 different views of dictionaries that are ISO 22745 & ISO 8000 compliant.

                                    </li>
                                    <li>
                                        MDOM is used to create hierarchical classifications for spend analysis or other reporting requirements.

                                    </li>
                                    <li>
                                        MDOM has the capability to automatically translate the terminology & the definitions in non-English languages, the user has the ability to review and approve the translations proposed by the machine.

                                    </li>
                                    <li>
                                        MDOM is used to analyze the similarities & differences between any two organization dictionaries. It has various compare options to analyze the terminology, data requirements, translations in detail.

                                    </li>
                                    <li>
                                        MDOM can be implemented as a standalone module or integrated with other PiLog modules or applications.

                                    </li>
                                </ul>
                            </p>
                        </Col>
                        <Col lg={6}>
                            <img className='w-100' src={require('../Assets/InnovativeProducts/mdom/benefits.webp')} alt='Innovative products-mdo-banner' />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </div>

            <div >
                <Container>
                    <h2 className='pb-3'>
                        Architecture
                    </h2>
                    <img className='w-100' src={require('../Assets/InnovativeProducts/mdom/architecture.webp')} alt='Innovative products-mdo-banner' />
                </Container>
            </div>
            <br />
        </div>
    )
}
