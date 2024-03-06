import React, { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DataAnalytics } from '../Services/DataAnalytics'

export const Videos = () => {



  return (
    <div>
      <div className='publicaton-Videos'>
        <Container>
          <h2>Videos</h2>
        </Container>

      </div>
      <div className='my-4 py-2'>
        <Container>
          <Row>
            <Col>
            <div className='Video-content'>
              <h3>PiLog Publication VIdeos</h3>
              <p>
              Welcome to Pilog! We are a team of dedicated professionals committed to provide the best data quality services.
              </p>
              <p>Our team is passionate about delivering effective strategies and results-driven solutions that help businesses grow and succeed. With years of experience in the industry, we are confident that we can provide you with the results you need for success.</p>
              <div className='Video-content-links'>
                <Link to='https://www.youtube.com/watch?v=fITvmah1zE0&list=PLJD4fiDc2nSkjLu6RJLjiIYtcVzxEGRAP' target='blank' className='video-liks'>PiLog MDRM Capabilities</Link>
                <Link to='https://www.youtube.com/watch?v=jVCv96EbfHg&list=PLJD4fiDc2nSnHQ2M-2godHg3doMg0LJTA' target='blank' className='video-liks'> PiLog Cloud Platform</Link>                
                <Link to='https://www.youtube.com/watch?v=C6VC8dy2hFM&list=PLJD4fiDc2nSlfU4UFcmLDwTslQFpVg9XX' target='blank' className='video-liks'>Master Data Record Manager</Link>
                <Link to='https://www.youtube.com/watch?v=I3i-ZTQY4vk&list=PLJD4fiDc2nSnUcrv68Ev25iPhozE10ZwC' target='blank' className='video-liks'> SAP Certified MDG Add-On</Link>
                <Link to='https://www.youtube.com/watch?v=FpXJiKOcUv8&list=PLJD4fiDc2nSkn5bAR6Y3CNTjsCwnyVBWj' target='blank' className='video-liks'>Thought Leadership Series</Link>
                <Link to='https://www.youtube.com/watch?v=UK8KnxH3WfI&list=PLJD4fiDc2nSl3OmEQ4GtpoeTx7QCJfZzi' target='blank' className='video-liks'>Webinars</Link>
                <Link to='https://www.youtube.com/watch?v=eMFn9VcWSVc&list=PLJD4fiDc2nSkJTy5TfRmteG5BvOTLCH6-' target='blank' className='video-liks'> Awards & Recognitions</Link>
              </div>
            </div>
            </Col>
            <Col>
            <div>
              <img className='w-100' src='https://i.ytimg.com/vi/PYK_atKDiXU/maxresdefault.jpg' alt='publication-vidos-img'/>
            </div>
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  )
}
