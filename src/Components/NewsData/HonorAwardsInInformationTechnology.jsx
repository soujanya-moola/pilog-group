import { Container } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const HonorAwardsInInformationTechnology = () => {
  return (
    <div>
        <div>
            
            <img className='w-100' src={require('../Assets/PublicationImages/NewsDataImages/PiLog-Groups-CEO-Dr.-Imad-Syed-Clinches-Top-Honor-at-World-CEO-Awards-in-Information-and-Technology-Category.webp')}/>
        </div>

        <div className='my-4 py-4'>

          <Container>

            <Row style={{textAlign:'left'}}>
           <div className='my-2'>
            <h3>PiLog Group's CEO,Dr.Imad Syed,Clinches Top Honor at World CEO Awards in Information and Technology Category</h3>
           </div>
           <div className='my-3'>
           <b style={{color:'#1a2b63'}}>[5th Feb 2024] - PiLog Group,</b> a global leader in data management and information governance, is proud to announce that its Chief Executive Officer, Dr. Imad Syed, has been honored with the prestigious World CEO Award in the <b style={{color:'#1a2b63'}}>"Highly Successful CEO - Information and Technology"</b> category.
           </div>
            
            </Row>
            <Row className='my-4 py-4'>
              <Col lg={5}>
              <div>
            
            <img className='w-100' src={require('../Assets/PublicationImages/NewsDataImages/winner-certificate.png')}/>
        </div>
              </Col>
              <Col>
              <div  style={{textAlign:'left', lineHeight:2}}>
                <p>The World CEO Awards, known for recognizing excellence and innovation in leadership across various industries, has bestowed this esteemed accolade upon Dr. Imad Syed in recognition of his outstanding contributions to the Information and Technology sector. Dr. Syed's visionary leadership, strategic insight, and unwavering commitment to advancing the field have set him apart as a trailblazer in the industry.</p>
                <p>Under Dr. Imad Syed's guidance, PiLog Group has not only maintained its position as an industry leader but has also demonstrated exceptional growth and innovation. His ability to navigate the rapidly evolving landscape of Information and Technology has propelled PiLog Group to new heights, solidifying its reputation as a pioneer in data management solutions.</p>
              </div>
              </Col>
            </Row>

            <Row className='my-4 py-4'>
            <Col>
              <div  style={{textAlign:'left', lineHeight:2}}>
                <p><b style={{color:'#1a2b63'}}>The award ceremony, held on 8th December 2023 in Dubai, brought together influential leaders and visionaries from around the world.</b> Dr. Imad Syed expressed gratitude for the recognition, emphasizing the collective efforts of the entire PiLog team in driving success and innovation. "I am truly honored to receive the World CEO Award in the Information and Technology category. This recognition is a testament to the hard work and dedication of the entire PiLog team. Together, we are shaping the future of data management and information governance," said Dr. Imad Syed.</p>
                <p>PiLog Group remains committed to pushing the boundaries of what is possible in the Information and Technology sector under Dr. Syed's leadership. The World CEO Award serves as both a celebration of past accomplishments and a motivator for the company's continued pursuit of excellence.</p>
                </div>
              </Col>
              <Col lg={5}>
              <div>
            
            <img className='w-100' src={require('../Assets/PublicationImages/NewsDataImages/awards-it-honor.jpg')}/>
        </div>
              </Col>
             
            </Row>

       
          </Container>

        </div>

      
    </div>
  )
}
