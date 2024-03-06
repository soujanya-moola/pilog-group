import React, { useEffect } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import innovate from '../Assets/HomePage/innovate.svg'
import improve from '../Assets/HomePage/improve.png'
import optimize from '../Assets/HomePage/optimize.png'
import measure from '../Assets/HomePage/measure.png'

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Aos from 'aos'
import "aos/dist/aos.css";

export const Home = () => {
  const handleMouseEnter = () => {
    const marquee = document.getElementById('myMarquee');
    if (marquee) {
      marquee.stop();
    }
  };

  const handleMouseLeave = () => {
    const marquee = document.getElementById('myMarquee');
    if (marquee) {
      marquee.start();
    }
  };
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      // easing: "ease-out-cubic",
    });
    Aos.refresh();

  }, []);
  return (
    <div>
      {/* Hero slider start */}
      <Carousel>
        <Carousel.Item className='indicator-buttons'>
          <img className='hero-img' src={require("../Assets/HomePage/PiLog's Material Master Taxonomy 5.0-Banner.jpg")} alt='hero-bg-1' />

          <Carousel.Caption>
            <Button className='hero-btn'>Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='hero-img' src={require('../Assets/HomePage/The Emirates Times Shines Spotlight on Dr. Imad A. Syed, CEO of PiLog Middle East and APAC.jpg')} alt='hero-bg-2' />

          <Carousel.Caption>
            <Button className='hero-btn' >Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='hero-img' src={require('../Assets/HomePage/The Pride of Bharat 2023 Awards-Banner.jpg')} alt='hero-bg-3' />

          <Carousel.Caption>
            <Button className='hero-btn' >Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Hero slider end */}
      {/* News Updates start */}
      {/* <div className='d-flex'>
        <div className='col-3 news'>
          <h6>News Update</h6>
        </div>
        <div className='col-9 updates '>


          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <p className='mx-3 px-4 mt-3'> PiLog Group Exclusive Webinar Series <Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item" >
                <p className='mx-3 px-4 mt-3'>Gartner Peer Insights Customers' Choice Press Release<Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'>Our Protea Tenpin Bowling South Africa Team has won gold at African Zone Championship<Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'>MDM Data Quadrant 2022, also recognized as Gold Medalist by Info-Tech Software Reviews<Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'>PiLog's Material Master Taxonomy 4.0 for SAP Master Data Governance<Link className='news-link'>Read More</Link ></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'>Dr Imad A.Syed had been interviewed by CRN <Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'>Software Reviews Master Data Management Emotional Footprint<Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'>Crafting Future-Ready Digitized Business <Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'>Data Record Manager (MDRM) v10.4.1  <Link className='news-link'>Read More</Link></p>

              </div>
              <div className="carousel-item">
                <p className='mx-3 px-4 mt-3'> Indian Achievers' Award for Science & Technology, 2020-21 <Link className='news-link'>Read More</Link></p>

              </div>


            </div>

          </div>
        </div>
      </div> */}
      {/* News Updates end */}

      <br />
      <div>
        <Container>
          <div className='services'>
            <p>Airport and Aviation</p>
            <span>|</span>
            <p>Cement</p>
            <span>|</span>
            <p>Chemicals and Refineries</p>
            <span>|</span>
            <p>Defence</p>
            <span>|</span>
            <p>Education</p>
            <span>|</span>
            <p>Energy and Utilities</p>
            <span>|</span>
            <p>Food and Beverages</p>
            <span>|</span>
            <p>Iron and Steel</p>
            <span>|</span>
            <p>Manufacturing</p>
            <span>|</span>
            <p>Mining</p>
            <span>|</span>
            <p>Oil and Gas</p>
            <span>|</span>
            <p>Telecommunications</p>
            <span>|</span>
            <p>Textile</p>
            <span>|</span>
            <p>Transport</p>

          </div>
        </Container>
      </div>
      <hr />
      <Marquee scrollamount="2" >
        <img className='client-logo' src={require("../Assets/ClientLogos/ABU_Dhabi_Airports.png")} alt='hero-client-1' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Aditya_MP_Birla Group.jpg")} alt='hero-client-2' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Al_Maktoum_Airports.png")} alt='hero-client-3' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Birla_Cement.jpg")} alt='hero-client-4' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Birla_White_Cement.jpg")} alt='hero-client-5' />
        {/* <img className='client-logo' src={require("../Assets/ClientLogos/Client-Logos-09.jpg")} alt='hero-client-6' /> */}
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-03.png")} alt='hero-client-7' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-06.png")} alt='hero-client-8' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-02.png")} alt='hero-client-9' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-09.png")} alt='hero-client-10' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-12.png")} alt='hero-client-11' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-14.png")} alt='hero-client-12' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-17.png")} alt='hero-client-13' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-24.png")} alt='hero-client-14' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-32.png")} alt='hero-client-15' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-40.png")} alt='hero-client-16' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-49.png")} alt='hero-client-17' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-53.png")} alt='hero-client-18' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-56.png")} alt='hero-client-19' />
        <img className='client-logo' src={require("../Assets/ClientLogos/LOGO-65.png")} alt='hero-client-20' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Natref.png")} alt='hero-client-21' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Nuvoco.jpg")} alt='hero-client-22' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Piramal.jpg")} alt='hero-client-23' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Sastech.jpg")} alt='hero-client-24' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Sipchem.jpg")} alt='hero-client-25' />
        <img className='client-logo' src={require("../Assets/ClientLogos/Vale_avatar.jpg")} alt='hero-client-26' />
        <img className='client-logo' src={require("../Assets/ClientLogos/adani.png")} alt='hero-client-27' />

      </Marquee>
      <div className='home-explore'>
        <img className='explore-img' src={require("../Assets/HomePage/Digital_Transformation_Banner.jpg")} alt='explore-img' />
        <div className='home-explore-content'>
          <h1>Explore our Customer's Experience <br /> with our Tools</h1>
          <p>Thousands of our users are the heroes, every step in their transformation is precious of<br /> celebration. More than 100 + customers across various industries trust PiLog to<br /> promote their business outcome.</p>
          <div >
            <Button className='m-3'>
              Watch Video
            </Button>
            <Button>
              Our Customers
            </Button>
          </div>
        </div>
      </div>
      {/* <div className='product-main'>
        <Container>

          <marquee id="myMarquee" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} direction="up" height="70" scrollamount="3" >
            <div className='products m-2'>
              <img className='product-img' src={innovate} alt='innovate' />

              <h3>Innovate</h3>
              <span>|</span>
              <p>Innovative products and technologies </p>

            </div>
            <div className='products'>
              <img className='product-img' src={improve} alt='improve' />

              <h3>Improve</h3>
              <span>|</span>
              <p>Improving the data with best practices, and timely updates of products with new features </p>

            </div>
            <div className='products'>
              <img className='product-img' src={optimize} alt='innovate' />

              <h3>Optimize</h3>
              <span>|</span>
              <p>Serving industries globally with optimized Solutions in Supply Chain Management, Asset
                Lifecycle Management and Digital Transformation. </p>

            </div>
            <div className='products'>
              <img className='product-img' src={measure} alt='Measure' />

              <h3>Measure</h3>
              <span>|</span>
              <p>You push the limit. We measure and execute it.</p>

            </div>

          </marquee>
        </Container>

      </div> */}

      <div className='py-4 my-4'>
        <Container className='shadow rounded-3 py-4'>
          <Row style={{textAlign:'center', justifyContent:'center', alignItems:'center'}}>
            <Col lg={4} md={6} xs={12}>
            <div className='border rounded-3 bg-secondary text-light p-3 mt-3' style={{height:'15rem',textAlign:'left'}}>
              <h5>Master Data Management (MDM):</h5>

              <p>We offer MDM as the backbone of data governance. We help organisations excel in their data domains, ensuring accuracy, reliability, and improvability. From material master data to supplier information, we’ve got it covered.</p>


              <Link className='text-light' to=''>Learn More</Link>

            </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
            <div className='border rounded-3 bg-danger text-light p-3 mt-3' style={{height:'15rem', textAlign:'left'}}>
              <h5>Digital Transformation: </h5>

              <p> 
                Our digital transformation combines industry expertise with technology to enhance digital experiences. Our digital transformation services empower organisations to thrive in the digital age.
              </p>


              <Link className='text-light' to=''>Learn More</Link>

            </div>
            </Col>
            <Col lg={4} md={6} xs={12}>
            <div className='border rounded-3 bg-warning text-light p-3 mt-3' style={{height:'15rem', textAlign:'left'}}>
              <h5>Quality Data Solutions:</h5>
              <p>Quality data drives informed decision-making. We provide tools and methodologies to cleanse, enrich, and maintain data quality across various industries.</p>

              <Link className='text-light' to=''>Learn More</Link>

            </div>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col>
            <Button>Know More! </Button>

            </Col>
          </Row>
        </Container>
      </div>
      {/* Optimized Supply Chain */}
      <div className='optimize'>

        <h1>Optimized Supply Chain of <br /> Petrochemical Conglomerate</h1>
        <p>Implementing best-in-class ideas towards operational excellence with <br /> more  than 15% reduction in pricing year on year

        </p>
        <p>Would you like to know more about Inventory Management Solutions</p>
        <Button>Read Now</Button>

      </div>
      {/* ending Optimized Supply Chain */}
    
      <div className='reviews'>
        <Container>
          <Row>
            <Col lg='6' className='mt-5'>
              <Carousel className='review-block'>
                <Carousel.Item className='py-4'>
                  <p>"PiLog has a broad view on business needs related to data management. They are able to support us from advise till implementation. Through their decisiveness, knowledge and capacity they are able to convert large work packages in accordance with the customer's needs."</p>
                </Carousel.Item>
                <Carousel.Item className='py-4'>
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
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col lg='4'>
              <div className='review-card px-1'>
                <div className='review-card-img'>
                  <img className='gartner-img' src={require("../Assets/HomePage/garner.png")} alt='Gartner-img' />

                </div>
                <div className='review-card-content' >
                  <h4>PiLog Group</h4>
                  <p>Master Data Management Solutions</p>
                </div>
                <hr />
                <div className='review-card-content d-flex' >
                  <h5>4.7</h5>
                  <div className='px-2'><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></div>

                </div>
                <div ><Link style={{ color: 'white', float: 'left', textDecoration: 'none' }} >402 Ratings</Link> <Link style={{ color: 'white', float: 'end', textDecoration: 'none' }} >Submit a review</Link></div>
              </div>
              <div>
                <Button className='review-btn '>Review Us !</Button>
              </div>
            </Col>
            <Col lg='2'>
            </Col>
          </Row>
        </Container>
      </div>

        {/* Our Achievements starts */}
        <div className='m-3'>
        <div className='achive-top'>
          <h2>Our Achievements</h2>
          <p className='achive-empty' ></p>
        </div>
        <div className='m-4 py-4'>
          <Container>
            <Row>
              <Col>
                <div className='achive-content'>
                  <img className='achiev-img1' src={require("../Assets/FooterImages/customer-first-gartner-blue.png")} alt='achieve1' />
                  <p className='py-3'>Gartner Peer Insights
                    “Customer First Vendor”
                    for Master Data Management Solutions</p>
                </div>
              </Col>
              <Col>
                <div>
                  <img className='achiev-img2' src={require("../Assets/HomePage/award-three.png")} alt='achieve1' />
                  <p className='py-3'>“Voice of the Customer”
                    Master Data Solutions
                    Customers Choice Award 2022</p>
                </div>
              </Col>
              <Col>
                <div>
                  <img className='achiev-img2' src={require("../Assets/HomePage/award-two.png")} alt='achieve1' />
                  <p className='py-3'>Best Idea Award
                    from our
                    Global Business customer Vedanta</p>
                </div>
              </Col>
              <Col>
                <div>
                  <img className='achiev-img3' src={require("../Assets/HomePage/gartner-peer-insights-2022.png")} alt='achieve1' />
                  <p className='py-4'>Best performing companies 2020</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Our Achievements end */}
      {/* Industry Recognition starts */}
      <div className='mt-4 '>
        <div data-aos="fade-right" className='d-flex ind-rec justify-content-center align-items-center'>
          <h2>Industry Recognition</h2>
          <p className='ind-empty d-flex ' ></p>
        </div>

        <Container data-aos="zoom-in" className='mt-4 py-4'>
          <Row className='d-flex justify-content-center'>
            <Col lg={3} md={6} xs={8}>
              <img className='ind-imgs' src={require('../Assets/HomePage/co-innovated-with-sap.png')} alt='ind-rec1' />
            </Col>
            <Col lg={3} md={6} xs={8}>
              <img className='ind-imgs' src={require('../Assets/HomePage/sap-certified-integration-s4hana.png')} alt='ind-rec2' />
            </Col>
            <Col lg={3} md={6} xs={8}>
              <img className='ind-imgs' src={require('../Assets/HomePage/sap-certified.png')} alt='ind-rec3' />
            </Col>
            <Col lg={3} md={6} xs={8}>
              <img className='ind-imgs' src={require('../Assets/HomePage/sap-premium-certified.png')} alt='ind-rec4' />


            </Col>
          </Row>
          <Row className=' mt-4 d-flex  justify-content-center'>
            <Col lg={2} md={4} xs={8}>
              <img className='ind-imgs1' src={require('../Assets/HomePage/integrated-with-oracle-cloud.png')} alt='ind-rec1' />
            </Col>
            <Col lg={2} md={4} xs={8}>
              <img className='ind-imgs1' src={require('../Assets/HomePage/iso-27001.png')} alt='ind-rec2' />
            </Col>
            <Col lg={2} md={4} xs={8}>
              <img className='ind-imgs1' src={require('../Assets/HomePage/iso-8000.png')} alt='ind-rec3' />
            </Col>
            <Col lg={2} md={4} xs={8}>
              <img className='ind-imgs1' src={require('../Assets/HomePage/iso-9001.png')} alt='ind-rec4' />
            </Col>
            <Col lg={2} md={4} xs={8}>
              <img className='ind-imgs1' src={require('../Assets/HomePage/powered-by-oracle-cloud.png')} alt='ind-rec4' />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}
