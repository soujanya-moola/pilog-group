import React from 'react'
import { Button, Carousel, Col, Container, Row, Table } from 'react-bootstrap'

export const MaterialCriticalityAnalysis = () => {

    const AnalysisData = [
        {
            Title: 'ABC Analysis: Based on Consumption Value per Year',
            tr1: {
                td1: 'A',
                td2: 'It represents the most valuable products. These are the products that contribute heavily to your overall profit without eating up too much of your resources. This category will be the smallest category reserved exclusively for biggest money makers. It requires tight control',
                td3: 'Cumulative percent: 0-75%',
            },
            tr2: {
                td1: 'B',
                td2: 'It represents the middle products. These are the products that contribute to the bottom line but aren’t significant enough to receive a lot of attention. It requires moderate control',
                td3: 'Cumulative percent: >75-90%',
            },
            tr3: {
                td1: 'C',
                td2: 'It represents the middle products. These are the products that contribute to the bottom line but aren’t significant enough to receive a lot of attention. It requires moderate control',
                td3: 'Cumulative percent: >75-90%',
            },
            url: require('../Assets/Services/abc-pie.png'),
            subTitle: 'Steps Performed on ABC Analysis:',
            subData: {
                list1: 'Identify the objective and the analysis criterion',
                list2: 'Collect all the data about the inventory and calculate the consumption or sale value',
                list3: 'Arrange all the consumption values in the descending order',
                list4: 'Create next column and start adding the cumulative total of consumption value',
                list5: 'Assign the category based on the accumulated value as A, B & C',
            },
        },
        {
            Title: 'FMSN Analysis: Based on Consumption Rate',
            tr1: {
                td1: 'F',
                td2: 'Fast Moving',
                td3: 'Items which are issued every year',
            },
            tr2: {
                td1: 'M',
                td2: 'Medium Moving',
                td3: 'Items which are quarterly issued in a specific time period',
            },
            tr3: {
                td1: 'S',
                td2: 'Slow Moving',
                td3: 'Items which are less frequently issued and are used once or twice in 5 years',
            },
            tr4: {
                td1: 'N',
                td2: 'Non-Moving',
                td3: 'Items which are not issued in any year',
            },
            url: require('../Assets/Services/fmsn-pie.png'),
            subTitle: 'Steps Performed on FMSN Analysis:',
            subData: {
                list1: 'Classification relies on the issuing patterns from stores.',
                list2: 'It serves as a valuable tool in managing obsolescence.',
                list3: 'The duration since the last transaction is calculated based on the later of the receipt date or the last issue date.',
                list4: 'The number of months elapsed is determined from this reference point.',
                list5:'Based on number of months/years categorize as F, M & S'
               
            },
        },
        {
            Title: 'XYZ Analysis: Based on stock value accumulation',
            tr1: {
                td1: 'X',
                td2: 'Items which are critically important and require close monitoring and tight control',
                td3: 'Cumulative percent: 0-75%',
            },
            tr2: {
                td1: 'Y',
                td2: 'Items which are of lower criticality requiring standard controls and periodic reviews of usage',
                td3: 'Cumulative percent: >75-90%',
            },
            tr3: {
                td1: 'Z',
                td2: 'Items which require least controls, are sometimes issues as "free stock" or forward holding',
                td3: 'Cumulative percent: >90-100%',
            },
            url: require('../Assets/Services/xyz-graph.png'),
            subTitle: 'Steps Performed on XYZ Analysis:',
            subData: {
                list1: 'Identify the objective and the analysis criterion & Collect all the data about the inventory',
                list2: 'Divide Item’s current stock value (cost per piece) with the total stock value (Total Cost)',
                list3: 'Arrange all the consumption values in descending order of values',
                list4: 'Create next column and start adding the cumulative total of consumption value',
                list5: 'Assign the category based on the accumulated value as X, Y & Z',
                
            },
        },
        {
            Title: 'VED Analysis: Based on Criticality & Impact',
            tr1: {
                td1: 'V-Vital',
                td2: 'The spares stock out of which even for a short time will stop production for quite some time & future the cost of stock out is very high',
                td3: 'Average Working Hours: >= 4 Hours',
            },
            tr2: {
                td1: 'E-Essential',
                td2: 'The spares stock out of which even for a few hours of days & cost of lost production is high',
                td3: 'Average Working Hours: >=1, < 4 Hours',
            },
            tr3: {
                td1: 'D-Desirable',
                td2: 'The spares which are needed but their absence for even for even a week or so will not lead to stoppage of production',
                td3: 'Average Working Hours: < 1 Hour',
            },
            url: require('../Assets/Services/ved-graph.png'),
            subTitle: 'Steps Performed on VED Analysis:',
            subData: {
                list1: 'Identification of factors essential for VED Analysis',
                list2: 'Calculate the sum of Actual working hours',
                list3: 'Finding out how many times the order was placed',
                list4: 'Calculate the average working hours',
                list5: 'Place the items into V, E and D categories',
            },
        },
        {
            Title: 'HML Analysis: Based on Unit cost of Material',
            tr1: {
                td1: 'H-High Cost',
                td2: 'These are the costly item and are generally 10-15% of total items',
                td3: 'More than 10,000 Rs.',
            },
            tr2: {
                td1: 'M-Medium Cost',
                td2: 'These items are low cost item as compared to H class items, this are generally 20-25% of total items',
                td3: 'Between 1000-10,000 Rs.',
            },
            tr3: {
                td1: 'L-Low Cost',
                td2: 'These items are low class item and generally 60-70% of total items',
                td3: 'Less than 1000 Rs.',
            },
            url: require('../Assets/Services//hml-graph.png'),
            subTitle: 'Steps Performed on HML Analysis:',
            subData: {
                list1: 'Prepare the list of items and calculate their unit cost, annual demand and annual usage',
                list2: 'Arrange items in the descending order of their unit cost',
                list3: 'Calculate percentage of unit cost, cumulative of unit cost and then categories the inventory item',
                list4: 'The cut-off lines are then fixed by the organization for deciding three categories',
                list5: 'Plot the graph on the basis of cumulative unit cost and then categories the inventory items',
            },
        },
        {
            Title: 'SDE Analysis: Based on Lead time and Availability',
            tr1: {
                td1: 'S-Scarce',
                td2: 'Items which are imported and require longer lead time ie., more than 6 months (180+ Days)',
                td3: 'Longer Lead Time',
            },
            tr2: {
                td1: 'D-Difficult',
                td2: 'Items which require more than a fortnight to be available, but less than 6 months’ lead time (between 1 to 180 Days)',
                td3: 'Long Lead Time',
            },
            tr3: {
                td1: 'E-Easy',
                td2: 'Items which are easily available in less than a fortnight',
                td3: 'Reasonable Lead Time',
            },
            url: require('../Assets/Services/sde-graph.png'),
            subTitle: 'Steps Performed on SDE Analysis:',
            subData: {
                list1: 'Identify the objective and the analysis criterion',
                list2: 'Collect all the data about the scarcity and availability of the items',
                list3: 'Identify the lead time in weeks/days',
                list4: 'Arrange the values in the descending order',
                list5: 'Assign the category based on the lead time as S, D & E',
            },
        },
    ]
    return (
        <div>
            <div className='service-mca'>
                {/* <img className='w-100' src={require('../Assets/Services/dau-banner-large.jpg')} alt='service-darchving-banner' /> */}
                <div className='' >
                    <h1>Material Criticality Analysis</h1>
                    <p>Criticality Ranking for Material Enabling better process control</p>
                </div>
                <div>
                    <Button>Read More</Button>
                </div>
            </div>
            <br />
            <div>
                <Container>
                    <div className='text-primary'>
                        <h2>Introduction</h2>
                    </div>

                    <Row className='my-4 d-flex text-align-left'>
                        <Col lg={8} className='daa-desc'>
                            <p>PiLog would perform the material criticality or Inventory Analysis in order to determine the criticality, consumption value, consumption rate, stock value, lead time, price of single unit and frequency with which it is used by the plants during the production process.</p>
                            <p>Inventory management is the ongoing process of moving parts and products into and out of a company’s location(s). Companies manage their inventory on a daily basis as they place new orders for products and ship orders out to customers.</p>
                            <p>It’s important that business leaders gain a firm grasp of everything involved in the inventory management process. That way, they can figure out creative ways to solve inventory management challenges by finding the right solutions.</p>
                        </Col>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/img1.jpg')} alt='service-dau1' />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* End-Div-1 */}
            <div className='dau-keypoints'>

                <Container>
                    <div className='text-primary'>
                        <h2>Usage</h2>
                    </div>
                    <Row className='mt-4 d-flex justify-content-center align-items-center'>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/img2.jpg')} alt='serive-dau-img-2' />
                        </Col>
                        <Col lg={8} className='dau-points'>
                            <div className=''>
                                <p>This module allows the users to easily view inventory movement, usage and trends. Users can analyse inventory sales over a specified time frame and make decisions on how to best adjust item resource planning values based on sales averages and months availability.</p>
                                <p>The process of understanding the moving parts and products combined with the knowledge of the demand for stock/product. It is the technique to determine the optimum level of inventory for a firm.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <h4>The following are the various methods to control the inventory process:</h4>
                    <Row className='mt-4 d-flex justify-content-center align-items-center text-align-left'>
                        <Col lg={6}>
                            <img className='w-75 rounded-3' src={require('../Assets/Services/img3.png')} alt='serive-dau-img-2' />

                        </Col>
                        <Col lg={6}>
                            <div className='mca-benifits'>
                                <ul>
                                    <li>ABC Analysis: Based on Consumption Value per Year</li>
                                    <li>FMSN Analysis: Based on Consumption Rate</li>
                                    <li>XYZ Analysis: Based on stock value accumulation</li>
                                    <li>VED Analysis: Based on Criticality & Impact</li>
                                    <li>HML Analysis: Based on Unit cost of Material</li>
                                    <li>SDE Analysis: Based on Lead time and Availability</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='my-5'>
                <Container>
                    <Carousel className='mca-analisys '>
                        {AnalysisData.map((e)=>
                         <Carousel.Item className='py-4'>
                            <div>
                                <h2>{e.Title}</h2></div>
                         <Table striped bordered hover>

                             <tbody className='text-start'>
                                 <tr>
                                     <td>{e.tr1.td1}</td>
                                     <td>{e.tr1.td2}</td>
                                     <td>{e.tr1.td3}</td>

                                 </tr>
                                 <tr>
                                     <td>{e.tr2.td1}</td>
                                     <td>{e.tr2.td2}</td>
                                     <td>{e.tr2.td3}</td>

                                 </tr>
                                 <tr>
                                     <td>{e.tr3.td1}</td>
                                     <td>{e.tr3.td2}</td>
                                     <td>{e.tr3.td3}</td>
                                 </tr>
                             </tbody>

                         </Table>
                         <Row>
                         <Col lg={6}>
                                 <img className='w-75' src={e.url} alt='mca-carosal-img'/>
                             </Col>
                             <Col lg={6}>
                                 <img className='w-75' src={e.url} alt='mca-carosal-img'/>
                             </Col>
                         </Row>
                         <Row className='my-3'>
                             
                             <Col lg={12}>
                                 <div className='p-2' >
                                    <div className='mca-benifits'>
                                     <h4 className='text-primary'>{e.subTitle}</h4>

                                    </div>
                                     <div className='mca-benifits py-2'>
                                         <ul>
                                             <li>{e.subData.list1}</li>
                                             <li>{e.subData.list2}</li>
                                             <li>{e.subData.list3}</li>
                                             <li>{e.subData.list4}</li>
                                             <li>{e.subData.list5}</li>
                                            
                                             </ul>
                                     </div>
                                 </div>
                             </Col>

                         </Row>
                     </Carousel.Item>
                        )}
                       
                        {/* <Carousel.Item className='py-4'>
                            <p>"" So far we have been working with PiLog for a long time .We have good
                                experience regarding MDRM. PiLog is providing the good atmosphere working
                                facility and we are very much satisfied with thier support . They solve each
                                and every issue raised by our people in a smart way and responds quickly
                                when we people contact them."</p>
                        </Carousel.Item>
                        <Carousel.Item className='py-4'>
                            <p>" At PiLog, <b>Digital Transformation Consulting Services Company</b>,
                                we blend our technology and industry expertise to develop solutions to help
                                organizations create engaging digital experience our Digital
                                Transformation solutions."</p>
                        </Carousel.Item>
                        <Carousel.Item className='py-4' >
                            <p>"PiLog has a team of professional and well supported people and we are
                                satisfied with its service. Application is developed in user friendly manner
                                and its dictionary provides full knowledge of Material master." </p>
                        </Carousel.Item>
                        <Carousel.Item className='py-4'>
                            <p>"MDRM tool is providing a very comfortable platform to manage our
                                Master Data (Materials and services). User friendly, cost effective and
                                international standard. It well integrated with our ERP system. Currently
                                with MDRM V10, we are enjoying speedy application that will be available on
                                mobile phones." </p>
                        </Carousel.Item>
                        <Carousel.Item className='py-4' >
                            <p>"I have worked with the vendor for the past 3 months and i am
                                satisfied with the vendor. The service from the vendor is prompt acceptable
                                and it is risk solving and time saving."</p>
                        </Carousel.Item>
                        <Carousel.Item className='py-4'>
                            <p> "It is very useful for Master Data analytics, well interfaced with SAP
                                for creation, extension, change, deletion, and undeletion of materials.
                                Useful to find all duplicates across all business units."</p>
                        </Carousel.Item> */}
                    </Carousel>
                </Container>
            </div>
            <div className='dau-keypoints'>
                <Container>
                    <div className='text-primary'>
                        <h2>Features</h2>
                    </div>
                    <Row className='mt-4 d-flex justify-content-center align-items-center text-align-left'>
                        <Col lg={4}>
                            <div className='mca-benifits'>
                                <ul>
                                    <li>Products can be classified based on the value of importance</li>
                                    <li>Strict control of materials is required</li>
                                    <li>Minimum storage cost of the material</li>
                                    <li>Time saving</li>
                                    <li>The system categorizes the items based on how frequently the spare parts are issued or used</li>
                                    <li>Reducing the handling efforts</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/img4.jpg')} alt='serive-dau-img-2' />

                        </Col>
                        <Col lg={4}>
                            <div className='mca-benifits'>
                                <ul>
                                    <li>To keep the investment on inventories to the minimum</li>
                                    <li>To minimize the idle time by avoiding stock outs and shortages</li>
                                    <li>To control obsolescence of raw materials, components, tools, spare parts, etc.</li>
                                    <li>To determine the criticality of the spare</li>
                                    <li>It is useful for monitoring and control of stores and spares inventory</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className=' my-3'>
                <Container>
                    <div className='text-primary'>
                        <h2>Benefits</h2>
                    </div>
                    <Row className='mt-4 d-flex justify-content-center align-items-center text-align-left'>
                        <Col lg={4}>
                            <img className='w-100 rounded-3' src={require('../Assets/Services/img5.jpg')} alt='serive-mca-img-2' />

                        </Col>
                        <Col lg={8}>
                            <div className='mca-benifits'>
                                <ul>
                                    <li>Improved efficiency and lower margins</li>
                                    <li>Promote overall productivity with significantly shortened work cycles</li>
                                    <li>Eliminate most inter-department paperwork, taking inventory, and receiving to the warehouse</li>
                                    <li>Reconcile missing assets onsite with an easy-to-use visual contrast of collected and original asset data based on tag number, serial number, or asset ID</li>
                                    <li>Save time and improve accuracy of data</li>
                                    <li>Increasing virtualization</li>
                                    <li>Eliminates excel work which are stuck with various formulae to manage inventory</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
