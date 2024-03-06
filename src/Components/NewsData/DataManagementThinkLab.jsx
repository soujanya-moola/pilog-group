import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

export const DataManagementThinkLab = () => {
const [data, setData] = useState(null);

useEffect(()=> {
  fetch('https://httpbin.org/get')
  .then(res => res.json())
  .then(res => {setData(res); console.log(res);})
  .catch(err => console.log(err));
},[])

  return (
    <div>
    <div>
        
        <img className='w-100' src={require('../Assets/PublicationImages/Publications_Banner.jpg')}/>
    </div>

    <div className='my-4 py-4'>

      <Container>
        <Row>
          <div className='text-primary border border-primary py-4 shadow'>
            <h2>
            WHY SHOULD YOU JOIN?
            </h2>
          <div className='my-4 ' style={{textAlign:'left'}}>
            <p className='text-left'>The most engaging data management event of 2024 is going to happen in Prague! Yes, you read that right - this time, PiLog Group is Lead Partner which is hosted by ThinkLinkers right in the heart of they headquarter, Which is the most charming city of Europe!</p>
            <p>This is an event that puts in the spotlight the value of Data and celebrates YOU, Data Management professionals, as agents of change, set to skillfully handle the HOW and WHY, the Yin and Yang of successful Data Management</p>
            <p>Interactive Q&A, roundtables, panel discussions and networking time will blur the line between speakers and participants, connecting people, ideas and weaving together stories of success as well as failure</p>
            <p>We along with ThinkLinkers, welcome you to the beautiful city of Prague, for this occasion, the home of Data Management.</p>
          </div>

          </div>

        
        </Row>
        <Row className='my-4 py-4'>
          <Col>
          <div  style={{textAlign:'left'}}>
            <h2>KEY TOPICS</h2>
            <ul>
            <li> <span>&#9658; </span>Data Management as the springboard for Innovation</li>
                        <li> <span>&#9658;</span> A Business case for Generative AI</li>
                        <li> <span>&#9658;</span> Data Governance - Centralised? Federated? Hybrid?</li>
                        <li> <span>&#9658;</span> The Power of Communication and Soft Skills</li>
                        <li> <span>&#9658;</span> Woman in Data and why it is so important</li>
                        <li> <span>&#9658;</span> Data Quality as the cornerstone of trust in Data Products</li>
                        <li> <span>&#9658;</span> Applied Data Mesh</li>
                        <li> <span>&#9658;</span> Data Management and Data Analytics: 10X the value of your Data</li>
                        <li> <span>&#9658;</span> The Role of a Data Manager in the AI & Automation age</li>
                        <li> <span>&#9658;</span> How Product Information / Digital Shelf Can Help You Transform Data Management Activities ?</li>
            </ul>
          </div>
          </Col>
          <Col>
          <div  style={{textAlign:'left'}}>
            <h2>How to tell your Data Story</h2>
            <ul className='list-ul'>
            <li> <span>&#9658; </span>The Yin and Yang of Data Management: Technology and People</li>
                        <li> <span>&#9658;</span>MDM & Automation: real uses cases</li>
                        <li> <span>&#9658;</span> Woman in Data</li>
                        <li> <span>&#9658;</span> The carrot and the stick: using fear and desire to propel your Data Journey</li>
                        <li> <span>&#9658;</span> The importance of Data Quality and Data Observability for building reliable Data Products and Successful AI Initiatives</li>
                        <li> <span>&#9658;</span> Data Management: from inception - to strategy - to execution</li>
                        <li> <span>&#9658;</span> Build a future-proof enterprise fuelled by Data</li>
                        <li> <span>&#9658;</span> Data Governance: Slow Down to Go Faster</li>
                        <li> <span>&#9658;</span> The Evolution of Data Management and Its Influence on Modern Business Capabilities</li>
            </ul>
          </div>
          </Col>
        </Row>

        <Row style={{textAlign:'left',  justifyContent:'center'}}>
          <Col lg={3} className='border shadow py-3 rounded-3  mx-3'>
          <div>
            <h4 className='text-primary'>FOCUSED FORMAT</h4>
            <p className='pt-3'>Professional and Meaningful Networking World-class Expert Presenters Intimate Environment Interactive Discussions Benchmarking Sessions</p>
          </div>
          </Col>
          <Col lg={3} className='border shadow py-3 rounded-3 mx-3'>
          <div>
          <h4 className='text-primary'>AGENDA</h4>
            <p className='pt-3'>Our agenda reflects the most crucial topics in Data Management today. The program is developed and researched by ThinkLinkers in collaboration with senior practitioners and thought leaders.</p>                
          </div>
          </Col>
          <Col lg={3} className='border shadow py-3 rounded-3 mx-3'>
          <div>
          <h4 className='text-primary'>WHO ATTENDS</h4>
            <p className='pt-3'>VPS, DIRECTORS, HEADS, MANAGERS OF: Data Management Master Data Management Data Governance Data Quality Enterprise Information Management Information Management Enterprise Architects CDOs</p>                
          </div>
          </Col>
        </Row>
      </Container>

    </div>

    <div className='my-5 py-5' style={{backgroundColor:'#1a2b63'}}>
      <Container>
        <Row style={{textAlign:'left',  justifyContent:'center'}}>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo1.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo2.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo3.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo4.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo5.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo6.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo7.png')}/>

          </div>
          </Col>
           <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo8.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo9.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo10.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo11.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo12.png')}/>

          </div>
          </Col>
          <Col lg={3} className='mt-3'>
          <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/think-logo13.png')}/>

          </div>
          </Col>

        </Row>
      </Container>
    </div>
    <div className='mt-5 py-5' style={{backgroundColor:'#1a2b63'}}>
      <Container>
        <Row style={{textAlign:'center',  justifyContent:'center'}}>
          <Col lg={4} className='mt-5'>
          <div>
            <div className='text-light'><h2>LEAD PARTNER</h2></div>
            <div>
        <img className='w-75' src={require('../Assets/PublicationImages/NewsDataImages/astrocytia.png')}/>
            </div>
          </div>
          </Col>
          <Col lg={4} className='mt-5'>
          <div>
            <div className='text-light'><h2>LEAD PARTNER</h2></div>
            <div>
        <img className='w-50' src={require('../Assets/PublicationImages/NewsDataImages/pilog.png')}/>
            </div>
          </div>
          </Col>
          <Col lg={4} className='mt-5'>
          <div>
            <div className='text-light'><h2>ASSOCIATE PARTNER</h2></div>
            <div>
        <img className='w-50' src={require('../Assets/PublicationImages/NewsDataImages/frame_796.png')}/>
            </div>
          </div>
          </Col>
          <Col lg={4} className='mt-5'>
          <div>
            <div className='text-light'><h2>MEDIA PARTNER</h2></div>
            <div>
        <img className='w-50' src={require('../Assets/PublicationImages/NewsDataImages/datafloq.png')}/>
            </div>
          </div>
          </Col>
          <Col lg={4} className='mt-5'>
          <div>
            <div className='text-light'><h2>MEDIA PARTNER</h2></div>
            <div>
        <img className='w-50' src={require('../Assets/PublicationImages/NewsDataImages/tgoa2.png')}/>
            </div>
          </div>
          </Col>
          

        </Row>
      </Container>
    </div>
</div>
  )
}
