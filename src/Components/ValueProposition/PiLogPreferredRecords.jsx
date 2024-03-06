import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pprpart1img from '../Assets/InnovativeProducts/ppr/ppr-img1.svg'
import pprfeatureimg from '../Assets/InnovativeProducts/ppr/features.svg'
import pprbenifitsimg from '../Assets/InnovativeProducts/ppr/PPR_Benefits-03.png'
import pprsolutionimg from '../Assets/InnovativeProducts/ppr/solutions.svg'



import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


export const PiLogPreferredRecords = () => {
    return (
        <div>
            <div className='innovate-ppr'>
                <div>
                    <h1>PiLog Preferred Records</h1>
                    <h6>
                        Over 6000+ Unique templates for Material, Equipment and Service Master Records.
                    </h6>
                    <h6>ISO 8000 compliant data models and structures</h6>

                    <div >
                        <Button className='btn-ppr mx-2' >
                            <Link to='#' className='ppr-btn-link'><b>Download Brochure</b> </Link></Button>
                        <Button className='btn-ppr mx-2' >
                            <Link to='#' className='ppr-btn-link'><b>Read More</b> </Link></Button>
                    </div>

                </div>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className='ppr-list'>
                                <h4>PPR (PiLog Preferred Record) is a uniquely defined pre-catalogued and
                                    standardized material and Service master records</h4>
                                <h5>
                                    PiLog Preferred Record Structured material description contains the following:
                                </h5>
                                <div>
                                    <ul>
                                        <li>Genuine Manufacturer</li>
                                        <li>Genuine Part Number/Model Number</li>
                                        <li>Standardized characteristic values</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={pprpart1img} alt='ppr-part2' />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4 bg-light'>
                <Container>

                    <h4 className='mt-2'>
                        Maintained Confidence Level Based on data richness and data availability Confidence Level as follows :
                    </h4>
                    <Row className='my-4'>
                        <Col lg={6}>
                            <div className='ppr-list'>
                                <h6>Confidence Level AAA</h6>
                                <p>Records with a Part number or Model number, Manufacturer name, Reference URL & 100% mandatory properties/characteristics are filled.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='ppr-list'>
                                <h6>Confidence Level BBB</h6>
                                <p>Records with or without a Part number or Model number or Manufacturer name, Reference URL & at least 50% of mandatory properties/characteristics are filled.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className='ppr-list'>
                                <h6>Confidence Level AA</h6>
                                <p>Records with or without a Part number or Model number or Manufacturer name, Reference URL & at least 75% of mandatory properties/characteristics are filled.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='ppr-list'>
                                <h6>Confidence Level BB</h6>
                                <p>Records with a Part number or Model number or Manufacturer name, Reference URL & at least <NavigateBeforeIcon />50% of mandatory properties/characteristics are filled.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className='ppr-list'>
                                <h6>Confidence Level A</h6>
                                <p>Records with a Part number or Model number or Manufacturer name, Reference URL & at least 50% of mandatory properties/characteristics are filled.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='ppr-list'>
                                <h6>Confidence Level B</h6>
                                <p>Records with or without a Part number or Model number or Manufacturer name, Reference URL & at least 30% of mandatory properties/characteristics are filled.</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className='my-4 py-4 feature-part'>
                <Container>
                    <h2>Features</h2>
                    <Row className='py-4 mt-2'>
                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={pprfeatureimg} alt='ppr-part2' />

                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='ppr-list'>
                                <ul>
                                    <li>Each material master record has been verified with confidence level indicators.</li>
                                    <li>Each material master record has Class, Characteristics, Values, UOMs, UNSPSC, Short & Long descriptions, Images for immediate use.</li>
                                    <li>Material master records have Vendor name, researched URL for verification of the data</li>
                                    <li>Improved structured text descriptions based on industry-standard templates</li>
                                    <li>Easily integrable web services (Microservices) for consuming the repository data</li>
                                    <li>Commodities covers mechanical, electrical, instrumentation, electronics, general & chemical disciplines.</li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4'>
                <Container>
                    <h2>Benefits</h2>
                    <Row className='py-4 mt-2'>

                        <Col lg={7}>
                            <div className='ppr-list'>
                                <ul>
                                    <li>Reduction of time between order and fulfilment</li>
                                    <li>Increase order accuracy</li>
                                    <li>Elimination of free-text spend</li>
                                    <li>Improves the supply-chain processes by reducing the time to create a new record as well as the source of the material from where it could be procured</li>
                                    <li>Convert free-text items to structured descriptions for analysis</li>
                                    <li>Convert structured-text items to contract procurement</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={pprbenifitsimg} alt='ppr-part2' />

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='my-4 py-4 feature-part'>
                <Container>
                    <h2>Solutions</h2>
                    <Row className='py-4 mt-2'>
                        <Col lg={5}>
                            <div>
                                <img className='w-100' src={pprsolutionimg} alt='ppr-part2' />

                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='ppr-list'>
                                <ul>
                                    <li>PiLog objective is to have a global repository so that no item requires manual cataloguing</li>
                                    <li>PiLog has developed PPR, A repository/ central location in which data is stored and managed. It has embedded industry-standard content and ISO compliant processes (Data exchange compliant to ISO 29002)</li>
                                    <li>PiLog has spent over twenty years in researching, developing, and refining the PPR (PiLog Preferred Records)</li>
                                    <li>For those wanting to start with structured descriptions now without waiting for historical data clean up, we offer the Structured Text Generator to build class-driven descriptions that improve search capability and eliminate free-text spending.</li>
                                    <li>PPR is not only limited to materials but also has service master domain details i.e., 0.5 million readily structured service master records are available</li>
                                    <li>PPR has 100% accuracy in the descriptions.</li>
                                    <li>Re-usability of the golden records as they are independent of "language", "region", "Industry Sector".</li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    )
}
