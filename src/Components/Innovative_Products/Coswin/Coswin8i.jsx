import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Coswindata.css'

export const Coswin8i = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={require('./Coswin8i-Banner-8i.jpg')} alt='partner-01' />
            </div>

            <div className='my-3 py-4' style={{ textAlign: 'left' }}>
                <Container>
                    <div className='text-primary'>
                        <h3>Choose performance with Coswin 8i CMMS !</h3>
                    </div>
                    <Row className='mt-3'>
                        <Col lg={4}>
                            <div>
                                <img className='w-75' src={require('./choose-performance-with-coswin-8i-cmms.png')} alt='partner-01' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <p>
                                    Coswin 8i is a solution for Computer Maintenance Management and Enterprise Asset Management that improves maintenance management as well as optimising equipment performance. This solution will help you reduce your purchasing costs and stock levels, improve your maintenance staff productivity in full compliance with the rules in force. Siveco Group and authorized partners possess all the necessary skills to implement a Coswin 8i solution at the heart of your organisation. This will allow you to obtain a quick return on investment, whatever the size of your organisation and your sector (Industry, Services, Health, Transport, Defence ...).
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-3 py-3 coswin8i-part-2' style={{ textAlign: 'left'}}>
                <Container>
                    <div className='text-primary my-2'>
                        <h4>Features</h4>
                    </div>
                    <Row className='py-3'>
                        <Col>
                            <div>
                                <h5>
                                    Web Architecture
                                </h5>
                                <p>
                                    The Coswin 8i full Web architecture employs all the advantages offered by the latest web technologies (JSF, HTML5, Ajax).
                                </p>
                                <p>
                                    Users have access anytime from anywhere via standard Internet browsers, which minimises network traffic and does not require the purchase of expensive computer devices.
                                </p>
                                <p>
                                    As a result Coswin 8i can be implemented in very different configurations, from the simplest to the most complex, in a local or an extended network. Coswin 8i runs on an Oracle, a Microsoft Sql Server or a PostgresPURE Database.
                                </p>

                            </div>
                            <div>
                                <h5>
                                    Design & Ergonomy
                                </h5>
                                <p>Coswin 8i is very intuitive and easy to use so deployment is more efficient. In fact, the software benefits from an innovative approach, combining performance, design, user friendliness and simplicity in a way that is natural for the user.</p>
                                <div>
                                    <h6 className='text-primary'>The manipulation of data is easy:</h6>
                                    <ul>
                                        <li>entry and online modification spreadsheet-style</li>
                                        <li>mass update of data,</li>
                                        <li>statistics on request,</li>
                                        <li>direct export of your data into a spreadsheet.</li>
                                    </ul>
                                    <p>
                                        Moreover, Coswin 8i is fully customisable for each user profile (vocabulary used, layout of the screens, addition of new fields, definition of links with external applications, contextual browsing).
                                    </p>
                                </div>
                            </div>


                        </Col>
                        <Col>
                            <div>
                                <h5>Adaptability</h5>
                                <p><b className='text-primary'>Multiple companies:</b>Coswin 8i is the ideal solution to manage several sites and/or companies since each user only sees data specific to their organisation. Multi-language: Coswin 8i can be used simultaneously from different countries in different languages. Data and screens are adapted according to the zone or the profile of the connected user.</p>
                            </div>
                            <div>
                                <h5>Security and traceability</h5>
                                <p>
                                    Coswin 8i enables companies to comply with the security and environmental legislation in force. Coswin 8i includes extended functions to provide an audit trail and ensure access security for transactions. You can therefore meet the specific requirements of quality assurance, traceability of actions and improve your internal services. You also benefit from the electronic signature function in accordance with 21CFR11, the pharmaceutical industry standard for example.
                                </p>

                            </div>
                            <div>
                                <h5>Mobility</h5>
                                <p>
                                    Coswin Coswin 8i is available in tablet mode, designed to meet the needs of smart mobile users. Siveco Group also offers Coswin Nom@d which allows remote access to the essential Coswin 8i functionalities wherever you are located, with or without network connection.
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='my-3 py-3 coswin8i-part-3' style={{ textAlign: 'left' }}>
                <Container>
                    <div className='text-primary my-2'>
                        <h4>Functionality</h4>
                    </div>
                    <Row className='py-3'>
                        <Col>
                            <div>
                                <h5>
                                    Management of strategic maintenance assets
                                </h5>
                                <div>
                                    <h6 className='text-primary'>Standard and corrective processes:</h6>
                                    <ul>
                                        <li> Centralised register of assets and spare parts (management and encoding),</li>
                                        <li>Graphical access to Coswin data via the Diagram Editor module</li>
                                        <li>Organisational tree, functional, geographical, and by family,</li>
                                        <li>Centralisation of technical files, suppliers, builders</li>
                                        <li>Technical specification and safety instructions,</li>
                                        <li>Initiation of job requests (J.R), work orders (W.O.) and review,</li>
                                        <li>Analysis of failures (Symptoms, Defects, Causes, Remedies).</li>
                                    </ul>

                                </div>
                                <div>
                                    <h6 className='text-primary'>Planned maintenance:</h6>
                                    <ul>
                                        <li>Full management of maintenance activities: preventive, corrective maintenance, new works, improvements,</li>
                                        <li>esource management allows the evaluation of schedules and employee skills in order to optimise assignments and increase resource availability</li>
                                        <li>Calendar of planned works and resources deployed (equipment, workforce etc.).</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h5>Inventory management</h5>
                                <p>
                                    Coswin 8i is for both single and multiple warehouses.It enables inventory management for repairable, non-stocked, stocked, items and tools, for issues, receipts, reservations, transfers, transport and orders, across multiple stores, to ensure maximum item availability and flexibility, to achieve reductions in stock overheads.
                                </p>
                            </div>
                            <div>
                                <h5>Purchasing management</h5>
                                <p>
                                    Coswin 8i allows precise supplier management with manual and automatic purchase order requests, relationship tracking with suppliers and subcontractors, as well as prices, budgets, invoices and assets.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h5>Multiple Organisation management</h5>
                                <p>The implementation is to separate data and validation circuits according to the entity to which the users belong.</p>
                            </div>
                            <div>
                                <h6 className='text-primary'>Each entity possesses:</h6>
                                <ul>
                                    <li>equipment,</li>
                                    <li>stores and items,</li>
                                    <li>employees,</li>
                                    <li>validation circuit by type of transaction,</li>
                                    <li>rotating teams and separate cost tracking.</li>
                                </ul>
                                <p>As a result you can manage your data in Coswin 8i by organisational entity.</p>
                            </div>
                            <div>
                                <h5>Project</h5>
                                <p>
                                    The Project module purpose is to prepare, plan and follow-up the realisation of maintenance projects requiring preparation tasks, facilities and tracking of time spent and costs, for example new works, annual shutdowns, construction, etc. A project is made up of tasks that can be linked together and may generate Work Orders.
                                </p>
                            </div>
                            <div>
                                <h5>Quotation</h5>
                                <p>
                                    This module allows maintenance companies to manage their customers using Coswin. These customers have requirements that may:
                                </p>
                                <ul>
                                    <li>
                                        Be treated directly, for example with a WO,
                                    </li>
                                    <li>Necessitate a study subject to quotation. This quotation must be submitted to the customer before realisation (progress status).</li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='my-3 py-3' style={{ textAlign: 'left' }}>
                <Container>
                    <div className='text-primary'>
                        <h3>The Homepage is customizable by user profile and is composed of several sections:<br />It contains:</h3>
                    </div>
                    <Row>
                        <Col>
                            <ul>
                                <li>dynamic performance indicators: once connected you can view critical information previously defined such as late Work Orders, the number of tasks not yet validated, and the number of stopped machines,</li>
                                <li>access to the standard modules,</li>
                                <li> graphical diagram browsers,</li>
                                <li>access to mapping sites (Google MAPS, OpenStreetMap),</li>
                                <li>access to integrated internet sites, displayed within the Coswin application.</li>
                            </ul>
                        </Col>
                        <Col>
                            <div>
                                <img className='w-75' src={require('./User-Profile-Image-01.png')} alt='partner-01' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='my-3 py-3 coswin8i-part-5'>
                <Container>
                    <Row style={{ textAlign: 'left' }}>
                        <div>
                            <h5>Workflow</h5>
                            <p>
                                The purpose of this module is to optimise the validation circuit of the company. It allows the customisation of the validation circuit for different types of transaction (Job Request, Purchase Order, Order, Work Order, etc.) and tracks progress at each stage of the circuit, recognises blockages and alerts users when validation of transactions is required.
                            </p>
                        </div>
                        <div>
                            <h5>Metrology</h5>
                            <p>
                                Coswin 8i offers the possibility to manage equipment metrology (calibration, measurements, conformity, and history). The goal is to guarantee equipment conformity, control measurement methods and capabilities, then handle divergences.
                            </p>
                        </div>
                        <div>
                            <h5>Linear Asset Management</h5>
                            <p>
                                A set of features allows defining a linear 'equipment' (e.g :pipelines, rails, roads, waterways, power line...) as well as managing the maintenance activities linked to it.
                            </p>
                        </div>
                        <div>
                            <h5>PPE management - Personal Protective Equipment</h5>
                            <p>
                                Professional risk management and safety is at the heart of business concerns. Coswin 8i has features to track allocations of PPE by technician and manage their condition and maintenance.
                            </p>
                        </div>
                        <div>
                            <h5>Geographical Information System</h5>
                            <p>
                                The integration of ESRI ArcGIS to Coswin 8i complements the management of your assets, enabling the initiation of maintenance actions geotagged from your CMMS but also from each GIS map.
                            </p>
                        </div>
                    </Row>
                    <Row style={{ textAlign: 'left' }}>
                        <div className='text-primary'>
                            <h4>Easy integration into your information system</h4>
                        </div>
                        <div>
                            <p>
                                Today maintenance processes can no longer be simply delegated to the factory or maintenance department level. Maintenance functions are collaborative and interact with other specialised company applications, so they are an integral part of the global information system. Maintenance is directly linked to company leadership goals. Our large range of tools (data transfer module, interface tables, web services) allow us to integrate Coswin 8i within your environment.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <img className='w-50' src={require('./information-System-01.png')} alt='partner-01' />
                        </div>
                    </Row>
                    <Row style={{ textAlign: 'left' }}>
                        <div>
                            <h5>Reporting & Performance Indicators</h5>
                            <p>Thanks to Coswin 8i, you can edit user-friendly reports to evaluate performance of maintenance and the status of assets. It helps you build a clear forecast for strategic and financial goals. Siveco Group provide pre-defined reports thanks to the standard integrated Siveco Reports tool, where you can easily customise your own reports.</p>
                        </div>
                    </Row>
                    <Row className='my-4'>
                        <div>
                            <img className='w-100' src={require('./Reporting-Performance-Indicators-Image-01.png')} alt='partner-01' />
                        </div>
                    </Row>
                    <Row style={{ textAlign: 'left' }}>
                        <div>
                            <h5>A flexible offering</h5>
                            <p><b>We offer a range of choices for deployment of Coswin 8i:</b></p>
                            <p>License mode: traditional license purchase. Coswin 8i in license mode will be directly installed on your internal network server. You will therefore handle and manage your server,</p>
                            <p>SaaS subscription mode: CMMS becomes a simple service. You rent Coswin 8i software that is hosted in a secure cloud *,</p>
                            <p>Hosting: this hybrid solution between local hosting and SaaS subscription allows license ownership while delegating technical server management to Siveco Group*.</p>
                            <p>Your company can thus choose the mode of deployment corresponding to your needs while complying with the IT policies in force.</p>
                            <h6>*Our partnership with a specialised and well-known hosting provider for critical applications represents a key factor for success in our offering and fully meets market expectations.</h6>
                            </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
