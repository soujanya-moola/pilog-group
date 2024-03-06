import React from 'react'
import './Services.css'
import { Col, Container, Row } from 'react-bootstrap'

export const DataHarmonization = () => {
    return (
        <div>
            <div>
                <div className=' position-relative text-align-center text-light'>
                    <img className='w-100' src={require('../Assets/Services/Services_Banner.jpg')} alt='service-dh-banner' />
                    <div className=' dh position-absolute top-50 left-50 transform-translate(-50%, -50%)' >
                        <h1>Data Harmonization</h1>
                        <p>Structured and Unstructured data cleansed, standardized and enriched <br /> to
                            control and enhance business processes</p>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <Container>
                    <Row className='dh-row'>
                        <Col lg={8}>
                            <div>
                                <h4>
                                    What is Master Data Harmonization
                                </h4>
                                <p>Businesses facing today's the difficulty of correlating data gathered from various sources into meaningful insights, and making sound decisions can be an uphill battle. Pilog provides comprehensive data harmonization services which equip organizations with tools, expertise, and methodologies to integrate, standardize, optimize, and ensure accuracy, consistency and reliability across their data</p>
                            </div>
                            <div>
                                <h4>Data Harmonization Framework</h4>
                                <p><b>Data harmonization Service</b> intends to merge distinct levels, genres and sources of data to ensure that data is comparable and compatible. Data Harmonization improves the quality and utility of master data through Data Cleansing and cataloguing disparate sources of data and provides an integrated picture of data.The data catalog merges all the specifics of organization's data assets using a technical dictionary with regimented classification templates and data requirements. And this enables the method of standardization for abbreviation and description generation.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <img className='dh-1-img' src={require('../Assets/Services/dh-img1.jpg')} alt='dh-1' />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='dh-2-div'>
                <Container className='mt-2'>
                    <Row className='dh-row py-3'>
                        
                        <Col lg={4} >
                            <img className='dh-2-img' src={require('../Assets/Services/dh-img2.jpg')} alt='dh-2' />
                        </Col>
                        <Col lg={8}>
                            <div>
                                <h4>
                                Data Harmonization Process
                                </h4>
                                <p>Data harmonization is essential to organizations seeking to leverage their data fully. This involves gathering together disparate data sources into one standardized format and rectifying any discrepancies or discrepancies found. By harmonizing their information, organizations can achieve a unifying view of everything, allowing for accurate analyses, data-driven decisions, and increased competitive edge within their market. PiLog's tactical service Data Harmonization techniques resolves discrepancies in the data sets through automated and semi-automated processes and transforms unstructured data into structured and consistent Data sets with quality. Our <b>Data Harmonization Services </b> enriches your data to its full potential by discovering and leveraging data in the way you always desired.</p>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container className='mt-2'>
                    <h4>How do we Harmonize Data</h4>
                    <div className='dh-row-down'>
                        <ul>
                            <li>
                                <p><b>Identify the data sources: </b> The first step is to identify all of the data sources that need to be harmonized. This may include internal data sources, such as customer databases, product catalogs, and financial records, as well as external data sources, such as social media data, market research data, and weather data.</p>
                               </li> 
                               <li>
                                <p><b>Define the data elements:</b>Once you have identified the data sources, you need to define the data elements that need to be harmonized. This means identifying the different fields of data, such as customer name, product ID, and sales date, and defining the data types and formats for each field.</p>
                                </li>
                                 <li>
                                <p><b>Cleanse the data: </b>Once you have defined the data elements, you need to cleanse the data. This means removing any errors, inconsistencies, or duplicates from the data.</p>
                                </li>
                                 <li>
                                <p><b>Normalize the data:</b>Once the data has been cleansed, you need to normalize the data. This means standardizing the data formats and values across all of the data sources.</p>
                            </li>
                            <li>
                                <p><b>Build a data dictionary: </b> A data dictionary is a document that defines the data elements in a data set. It includes information about the data types, formats, values, and relationships between the data elements. Building a data dictionary is an important step in data harmonization because it helps to ensure that everyone who uses the data understands the meaning of the data elements.</p>

                            </li>
                            <li>
                                <p><b>Implement a data harmonization tool: </b>There are a number of data harmonization tools available on the market. These tools can help you to automate the harmonization process, which can save you time and effort.</p>

                            </li>
                            <li>
                                <p><b>Monitor the data: </b>Once the data has been harmonized, you need to monitor the data to make sure that it remains consistent. This means checking for errors, inconsistencies, and duplicates on a regular basis.</p>
                            </li>
                            <li>
                                <p>Data harmonization is a complex process, but it is essential for ensuring the quality and consistency of your data. By following the steps outlined above, you can create a single source of truth for your data that can be used to make better decisions and improve your business performance.</p>
                            </li>
                        </ul>
                    </div>
                </Container>
                <Container className='mt-2'>
                    <h4>Data Harmonization Steps and techniques</h4>
                    <div className='dh-row-down'>
                        <ul>
                            <li><p>Pilog's Data Harmonization Services begin with data integration, where data from different sources, including databases, applications and external datasets, is combined into one central repository. Pilog uses several techniques - ETL processes, virtualization technology and APIs - to seamlessly combine disparate sources into one consolidated view.</p></li>
                            <li><p>Data Standardization: Pilog recognizes that data harmonization requires standardizing data from various sources regarding its naming conventions, formats, units of measurement and other attributes. Through this standardization process, we ensure all elements adhere to consistent naming conventions, formats, units of measurement and attributes for analysis and reporting purposes. By standardizing all this information on one platform, we ensure no redundancies arise; facilitate interoperability while simplifying analysis and reporting tasks.</p></li>
                            <li><p>Data Cleaning and Quality Assurance: Pilog understands the critical role that data quality plays in harmonization processes, with data cleaning techniques like profiling, validation, and enrichment to ensure high-quality, reliable data.</p></li>
                            <li><p>Data Transformation: Information from different sources may have different structures, representations, or levels of granularity. Pilog's data transformation capabilities facilitate mapping data elements from diverse sources onto a common schema or data model through restructuring, aggregating/disaggregating/combining operations, and applying business rules or calculations that yield valuable insights from harmonized data sets.</p></li>
                        </ul>
                    </div>
                </Container>
                <Container className=''>
                    <h4>Data Harmonization Challenges</h4>
                    <div className='dh-row-down'>
                        <ul>
                            <li><p>Pilog emphasizes metadata management as an integral component of its Data Harmonization Services. Proper metadata maintenance documents and maintains information about data sources, structures, lineage and transformations while increasing data discoverability, improving governance practices and streamlining lineage tracking processes.</p></li>
                            <li><p>Improved Data Quality and Accuracy : By harmonizing data, Pilog ensures inconsistencies, errors, and redundancies are eliminated to produce high-quality, accurate information that provides more trustworthy insights. By harmonizing the data, this improved quality enhances the reliability and trustworthiness of insights derived from it.</p></li>
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
    )
}
