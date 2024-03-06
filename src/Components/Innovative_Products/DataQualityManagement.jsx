import React from 'react'
import { Carousel, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const DataQualityManagement = () => {
    return (
        <div>
            <div className='innovate-dqm'>
                {/* <img className='w-100' src={require('../Assets/Services/banner-large.jpg')} alt='service-da-banner' /> */}
                <div>
                    <h1>Intelligence Data Quality Management</h1>
                    <p>Preconfigured templates, Auto Assignment of Class & Characteristics, ISO 8000 and UNSPSC compliant</p> </div>
            </div>
            <div className='my-4 py-4'>
                <Container>
                    <Row>
                        <Row>
                            <Col>
                                <div className='border rounded py-2 dqm-parts'>
                                    <Link style={{textDecoration:'none', color:'black'}} to='PiLogPreferredRecords'><h5>PiLog Preferred Records(PPR)</h5></Link>
                                </div>
                            </Col>
                            <Col>
                                <div className='border rounded py-2 dqm-parts'>
                                <Link style={{textDecoration:'none', color:'black'}} to='PiLogPreferredOntology'> <h5>PiLog Preferred Ontology(PPO)</h5></Link>

                                   </div></Col>
                            <Col>
                                <div className='border rounded py-2 dqm-parts'>
                                <Link style={{textDecoration:'none', color:'black'}} to='PiLogPreferredHierarchy'><h5>PiLog Preferred Hierarchy(PPH)</h5></Link>

                                    
                                </div>
                            </Col>

                        </Row>
                    </Row>
                </Container>

            </div>

            <div className='my-4 py-4'>
                <Container>
                    <div><h2>About Data Quality Management</h2></div>
                    <Row className='my-2 py-3'>
                        <div>
                            <p>Data Quality Management is aimed to automate the process of standardization, cleansing & management of unstructured/free text data by utilizing ASA (Auto Structured Algorithms) built on PiLog’s taxonomy and the catalog repositories of master data records.</p>
                        </div>
                    </Row>
                    <div className='dqm-list'>
                        <h6>Data Quality Management Capabilities includes but not limited to</h6>
                    </div>

                    <Row>

                        <Col>
                            <ul className='dqm-list'>
                                <li>Analyze the source data content for completeness, consistency, redundancy, standardization, richness, etc</li>
                                <li>Auto Assignment of Class & Characteristics from the PiLog's Taxonomy to each record</li>
                                <li>Extract the characteristic values & UOM's from the source descriptions for each record</li>
                                <li>Extract reference data from the source descriptions such as Part#/Model#/Drawing#/Mnfr/Vendor etc for each record</li>
                                <li>Bulk review of materials (QC Tools & DQ Assessment)</li>
                                <li>Auto mapping of source data with PiLog repositories & other reliable sources</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className='dqm-list'>
                                <li>Assign the data sets to relevant user groups based on various criteria</li>
                                <li>Capture additional information (or) Validate processed/structured data</li>
                                <li>Provision to collect the field data & update (Physical Walk down)</li>
                                <li>Auto-generation of Short & PO text based on User configured</li>
                                <li>Identification of redundant records</li>
                                <li>Export the data to be migrated to a Target system(s)</li>
                                <li>Integrate in real-time with other systems</li>
                                <li>Data Quality assessment & progress reports</li>
                            </ul>

                        </Col>



                    </Row>
                </Container>

            </div>

            <div className='my-4 py-4'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/iDQM/spares-data-acquisition.png')} alt='dqm-part2' />
                            </div>
                        </Col>
                        <Col lg={9} md={12} xs={12} className='dqh-side-table'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr className='dqm-table'>
                                        <th className='text-light'>Criteria</th>
                                        <th className='text-light' >MM</th>
                                        <th className='text-light'>VM</th>
                                        <th className='text-light'>CM</th>
                                        <th className='text-light'>SM</th>
                                        <th className='text-light'>PM</th>
                                        <th className='text-light'>HR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Count</td>
                                        <td>2,182 Classes Completed</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>2K+ Classes Completed</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Validation</td>
                                        <td>ERP Fields validation</td>
                                        <td>General, Taxation, Banking Details Validation</td>
                                        <td>General, Taxation, Banking Details Validation</td>
                                        <td>ERP Fields validation</td>
                                        <td>ERP Fields are validated</td>
                                        <td>Address Fields Validation</td>
                                    </tr>
                                    <tr>
                                        <td>Verification</td>
                                        <td>ERP Fields verification</td>
                                        <td>General, Taxation, Banking Details Verification</td>
                                        <td>General, Taxation, Banking Details Verification</td>
                                        <td>ERP Fields verification</td>
                                        <td>ERP Fields verification</td>
                                        <td>Address Fields Verification</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Carousel className='mca-analisys '>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr className='dqm-table'>
                                                <th className='text-light'>S.No</th>
                                                <th className='text-light' >Scope of Work</th>
                                                <th className='text-light' colSpan={2}>[PiLog: Customer = 30:70]</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>SOW Description</td>
                                                <td>PiLog</td>
                                                <td>Customer</td>

                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Data Extraction from SAP Systems (Master Data, Base Data, Configuration Data, KDS etc),
                                                    Templates, Values & Business validations</td>
                                                <td>C & I</td>
                                                <td>R & A</td>

                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Analyzing the client's taxonomy with PiLog’s Global templates</td>
                                                <td>R & A</td>
                                                <td>C & I</td>

                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Analyze the material master records and determine the Key data structure (KDS)
                                                    fields in accordance with SAP, other 3rd party systems </td>
                                                <td>R & A</td>
                                                <td>C & I</td>

                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Configuring the Algorithms specific to customer data, preprocessing the data and uploading in the
                                                    Management tool in the same format as provided model template</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Running data analysis algorithms and providing analysis details on source descriptions and on SAP fields (KDS)</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Initiating cleansing process by grouping the records based on commodity, category and UNSPSC</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr className='dqm-table'>
                                                <th className='text-light'>S.No</th>
                                                <th className='text-light' >Scope of Work</th>
                                                <th className='text-light' colSpan={2}>[PiLog: Customer = 30:70]</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>SOW Description</td>
                                                <td>PiLog</td>
                                                <td>Customer</td>

                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Allocating Material records to cataloguers either group wise
                                                    or category wise(Done by Manager)</td>
                                                <td>C & I</td>
                                                <td>R & A</td>

                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Cataloguers to review allocated groups in Data Automation
                                                    Process and correct / validate / update records</td>
                                                <td>R & A</td>
                                                <td>C & I</td>

                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>Process records through Automation to get the records segregated into
                                                    various categories such as A, B, C & D</td>
                                                <td>R & A</td>
                                                <td>C & I</td>

                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>Process the Records with Reference details to ping against the Pilog repository (PPR) and
                                                    fetch the characteristics & additional details based to Part/Model number</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>Review the records segregated into the categories mentioned in Point:9 above and assess the
                                                    data quality (correctness, completeness, relevance, mandatory requirements etc), transfer the data to next steps</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>Run QC tools to establish consistency, standardization across the batch or set of records</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr className='dqm-table'>
                                                <th className='text-light'>S.No</th>
                                                <th className='text-light' >Scope of Work</th>
                                                <th className='text-light' colSpan={2}>[PiLog: Customer = 30:70]</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>SOW Description</td>
                                                <td>PiLog</td>
                                                <td>Customer</td>

                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>Consolidate approved records and move them to next step or assign for
                                                    enrichment in case of insufficient/inadequate information</td>
                                                <td>C & I</td>
                                                <td>R & A</td>

                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>Run the duplicate check, validate the results once all the records are
                                                    approved & finalized per commodity or plant or batch</td>
                                                <td>R & A</td>
                                                <td>C & I</td>

                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>Merge the confirmed duplicates or common items, consolidate the
                                                    records within ERP system with appropriate cross-references</td>
                                                <td>R & A</td>
                                                <td>C & I</td>

                                            </tr>
                                            <tr>
                                                <td>16</td>
                                                <td>Upload the data into Governance solution or ERP system with updated associated data </td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                            <tr>
                                                <td>17</td>
                                                <td>Prepare close-out reports, extract all the data & archive</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>Run QC tools to establish consistency, standardization across the batch or set of records</td>
                                                <td>R & A</td>
                                                <td>C & I</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Carousel.Item>


                    </Carousel>
                    <Row>
                        <Col>
                            <div className='dqm-list py-4'>
                                <ul>
                                    <li>PiLog objective is to have a global repository so that no item requires manual cataloguing </li>
                                    <li>PiLog has developed PPR, A repository/ central location in which data is stored and managed. It has embedded industry-standard content and ISO compliant processes (Data exchange compliant to ISO 29002) </li>
                                    <li>PiLog has spent over twenty years in researching, developing, and refining the PPR (PiLog Preferred Records) </li>
                                    <li>For those wanting to start with structured descriptions now without waiting for historical data clean up, we offer the Structured Text Generator to build class-driven descriptions that improve search capability and eliminate free-text spending. </li>
                                    <li>PPR is not only limited to materials but also has service master domain details i.e., 0.5 million readily structured service master records are available </li>
                                    <li>PPR has 100% accuracy in the descriptions. </li>
                                    <li>Re-usability of the golden records as they are independent of "language", "region", "Industry Sector". </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4 bg-light'>
                <Container>
                    <div>
                        <h2>
                            Data Quality Standards
                        </h2>
                    </div>
                    <Row className='py-3 my-3'>
                        <Col lg={4}>
                            <div className='mt-4'>
                                <img className='' style={{ width: 350, height: 350 }} src={require('../Assets/InnovativeProducts/iDQM/download.png')} alt='dqm-part2' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='dqm-list'>
                                <p>The International Organization for Standardization (ISO) approved a set of
                                    standards for data quality as it relates to the exchange of master data
                                    between organizations and systems. These are primarily defined in the ISO
                                    8000-110, -120, -130, -140 and the ISO 22745-10, -30 and -40 standards.
                                    Although these standards were originally inspired by the business of
                                    replacement parts cataloguing, the standards potentially have a much
                                    broader application.</p>
                                <p>The ISO 8000 standards are high level requirements that do not prescribe
                                    any specific syntax or semantics. On the other hand, the ISO 22745 standards
                                    are for a specific implementation of the ISO 8000 standards in extensible
                                    markup language (XML) and are aimed primarily at parts cataloguing and
                                    industrial suppliers.</p>
                                <p>PiLog Data Harmonization processes & methodologies complies to ISO 8000 & ISO 22745 standards.</p>
                                <p>PiLog utilizes the PiLog Preferred Ontology (PPO) when structuring and cleansing
                                    Material, Asset/Equipment & Services Master records ensuring data deliverables comply
                                    with the ISO 8000 methodology, processes & standards for Syntax, Semantics, Accuracy,
                                    Provenance and Completeness.</p>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <div>
                        <h2>
                            Taxonomy
                        </h2>
                    </div>
                    <Row className='py-3 my-3'>

                        <Col lg={8}>
                            <div className='dqm-list'>
                                <p>PiLog throughout the 25 years of experience in master data solutions across
                                    different industries have developed PiLog Preferred Ontology (PPO) which is
                                    a Technical Dictionary that complies with the ISO 8000 standard. The PPO is
                                    a best-defined industry specific dictionary covering all industry verticals such
                                    as Petrochemical, Iron & Steel, Oil & Gas, Cement, Transport, Utilities, Retail etc.</p>
                                <p>PiLog's Taxonomy consists of pre-defined templates. Each template consists of a list of
                                    classes (object-qualifier or noun-modifier combination) with a set of predefined
                                    characteristics (properties/attributes) per class. PiLog will make the PPO (class/characteristics/abbreviations)
                                    available for general reference via the Data Harmonization Solution (DHS) and Master Data Ontology
                                    Manager (MDOM) tools.</p>


                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className='mt-4'>
                                <img className='w-75' src={require('../Assets/InnovativeProducts/iDQM/taxonomy.png')} alt='dqm-part2' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='dqm-list'>
                                <p>PiLog creates client preferred ontology (CPO) by copying general templates common to most
                                    companies/industries, as well as known, expected templates for the specific client.
                                    The Client team will confirm the CPO templates by approving:</p>
                                <ul>
                                    <li>The class and characteristics combination for a particular class, including linkage to
                                        respective United Nations Standard Products and Services Code version 21. </li>
                                    <li>The characteristics listed on the template as complete, and properly identified as
                                        mandatory and optional. </li>
                                    <li>The proposed abbreviations.</li>
                                    <li>Ordering of properties for description generation. </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7}>
                            <div className='dqm-list'>
                                <h6>PiLog reserves the right to make these changes in the dictionary:</h6>
                                <ul>
                                    <li>Change existing classes and or characteristics of the CPO where necessary. </li>
                                    <li>Register new classes and or characteristics in the OTD, and add them to the CPO. </li>
                                    <li>If changes are made to the CPO dictionary, PiLog will only update the changes/additions
                                        in the MDPM software tool; no additional approval is required from Client to incorporate
                                        the changes, as PiLog manages the CPO dictionary according to industry standards. </li>
                                    <li>The CPO dictionary is the intellectual property of PiLog. In no way may it be edited,
                                        copied, compared, mapped, transmitted, imported/exported into other software/systems,
                                        or printed/published without prior written permission of PiLog. CPO includes concepts,
                                        classes, terms, definitions, languages, abbreviations, data requirements, equivalences,
                                        images, data types, translations, and any data structures or relationships of the content
                                        stored within the CPO. </li>
                                </ul>

                            </div>
                        </Col>
                        <Col>
                            <div className='mt-4'>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/iDQM/download1.png')} alt='dqm-part2' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4 bg-light'>
                <Container>
                    <Row className='my-2 py-2'>
                        <Col lg={7}>
                            <div className='dqm-list'>
                                <p>PiLog has its own specialized data refinery, PiLog Data. PiLog has developed superior technology and methodologies that are aimed at delivering the best possible quality, consistently and cost effectively. </p>
                                <p>In answering the market need for the cataloguing of services in a consistent and repetitive manner, PiLog developed the world's first internationally proven standard for services cataloguing, the USC. Although this has now been accepted to be part of the eOTD, the specific methodologies required to implement it successfully remains with PiLog.</p>
                                <p>The material master, as well as other master data tables, requires standardized base tables for, amongst others; unit of measure, unit of purchase, material types and material groups. This is also a specialty of PiLog. </p>


                            </div>
                        </Col>
                        <Col>
                            <div className='mt-4'>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/iDQM/data-cleansing1.png')} alt='dqm-part2' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-4 py-3'>
                        <Col>
                            <div className='mt-4'>
                                <img className='w-100' src={require('../Assets/InnovativeProducts/iDQM/data-cleansing.png')} alt='dqm-part2' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='dqm-list'>
                                <p>The PiLog Master Data Project Management is used for cleansing and structuring of a material master is a highly specialized field, requiring the use of international standards, such as eOTD, USC, EAN, ISO 8000 etc. </p>
                                <p>Effective cleansing and structuring of a material master consistent and correct application of these standards in large volumes of data requires specialized processes, methodologies and software tools. </p>
                                <p>The material master forms the basis for a myriad of business objectives. PiLog understands the complex task of translating selected business objectives into master data requirements and subsequently designing a project that is focused on delivering optimal results in a cost effective way. </p>
                                <p>For a large number of line items effective cleaning of the material master does require the cleaning and standardization of the manufacturers and/or suppliers. It therefore follows that a vendor/supplier cleanup and standardization is a logical consequence in the process </p>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className='dqm-list'>
                                <h2>Data Cataloging</h2>
                                <h6>
                                    Data cataloging is classified below methods:
                                </h6>
                                <div>
                                    <h6>Basic Structuring (Reference data extraction & Allocation of a PPO-OTD class)-</h6>
                                    <ul>
                                        <li>Reference values, such as manufacturer name and part number; drawing number,
                                            supplier references, and any other reference values of the item, are identified
                                            and captured. These are used to describe the item during purchasing.</li>
                                        <li>Each item is assigned to a PPO class. This allows all items to be grouped, as
                                            defined by the dictionary, and to have corresponding templates assigned to items.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Advanced Structuring (Value extraction)</h6>
                                    <ul>
                                        <li>Allocation of PPO - OTD properties (template), Attribute/Property values, UOM's
                                            extraction & population, Cleaning & structuring of free text, if any</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Enrichment-</h6>
                                    <ul>
                                        <li>Data enrichment is performed with the help of genuine reference data that is extracted
                                            from the source data by means of external research to generate additional data from technical
                                            sources, such as manufacturer's catalogs (PDF library) or the Internet (manufacturer's website,
                                            catalog cuts, etc.), as well as cross-verification and cross-validation of extracted data that is
                                            captured in Advanced Structuring. Further cleansing occurs through validation, cross-reference, and
                                            harmonization.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='dqm-list py-2'>
                                <h2>Cataloging Rules</h2>
                                <h6>
                                    PiLog follows three cataloging rules as follows:
                                </h6>
                                <ul className='my-2'>
                                    <li>Do not remove or delete any data provided by the client unless the data is duplicated.Duplicated in this context refers to the scenario where a word, concept, value, attribute, etc. is duplicated within a single description or text provided for an item.</li>
                                    <li>Records are never deleted by PiLog, but will be flagged as potential duplicates. It is the client's responsibility to verify and confirm whether items flagged as potential duplicates are indeed duplicates before removing them from the item master set.</li>
                                    <li>Do not add extra values to client data unless researched from a source with integrity and authority. If PiLog adds values to a client's master data item, PiLog provides the source and authenticity for the added data. </li>
                                    <li>If descriptions are incomplete, incorrect, or contain conflicting information, query the client before assigning class or values. PiLog does not assign a class if the source description or information provided by the client is unclear. PiLog seeks additional information or a decision from the client; record(s) with pending queries are kept on hold until the query is resolved. </li>
                                    <li>Electronic Data Verification (EDV) is the process whereby the source data received from the client is processed into the cataloguing system via the EOTD dictionary, where the correct item name and approved Attribute template is </li>
                                    <li>linked, and the data for the material item is populated into the template. Descriptions are then generated according to certain rules. There are different Levels of cataloguing. </li>

                                </ul>


                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Carousel className='mca-analisys '>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                <div>
                                <img className='w-75' src={require('../Assets/InnovativeProducts/iDQM/Cataloguing1.png')} alt='dqm-part2' />
                            </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                <div>
                                <img className='w-75' src={require('../Assets/InnovativeProducts/iDQM/Cataloguing2.png')} alt='dqm-part2' />
                            </div>
                                   
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item className='py-2'>

                            <Row className='my-4'>
                                <Col>
                                <div>
                                <img className='w-75' src={require('../Assets/InnovativeProducts/iDQM/Cataloguing3.png')} alt='dqm-part2' />
                            </div>
                                </Col>
                            </Row>
                        </Carousel.Item>


                    </Carousel>
                   
                </Container>
            </div>

            <div className='my-4 py-4 bg-light'>
                <Container>
                    <div className='mt-2'>
                        <h2>Add-Ons</h2>
                    </div>
                    <Row className='my-4 py-4'>
                        <Col lg={3}>
                        <div>
                        <iframe width="275" height="190" src="https://www.youtube.com/embed/zadImKJAco4?si=DcTGS22YeuWVUSVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p>Smart Consolidation</p>
                        </div>
                        </Col>
                        <Col lg={3}>
                        <div>
                        <iframe width="275" height="190" src="https://www.youtube.com/embed/zadImKJAco4?si=DcTGS22YeuWVUSVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p>RPA Robotic Process Automation - BOTs</p>
                        </div>
                        </Col>
                        <Col lg={3}>
                        <div>
                        <iframe width="275" height="190" src="https://www.youtube.com/embed/zadImKJAco4?si=DcTGS22YeuWVUSVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p>Data Profiling and Analysis</p>
                        </div>
                        </Col>
                        
                        <Col lg={3} >
                        <div>
                        <iframe width="275" height="190" src="https://www.youtube.com/embed/zadImKJAco4?si=DcTGS22YeuWVUSVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p>iSPIR</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
