import React, { useRef, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import axios from 'axios';

export const AdminForm = () => {
  const [files, setFiles] = useState([]);
  const ref = useRef();
  const [postData, setPostData] = useState({
    title: '',
    body: ''
  })
  const handleInput = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.event })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (files.length > 0) {
      const formData = new FormData();

      // Assuming 'files' is an array of File objects
      files.forEach((file, index) => {
        formData.append(`file${index + 1}`, file); // Appending each file with a unique name
      });
      axios.post('http://192.168.1.91:3306/create', formData, { postData })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      // axios.post(`Attachment/upload/profile/${data.data._id}`, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
        .then(() => {
          // setShowLoader(false);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }

  const handleImageChange = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  console.log("file", files);

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = async (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     setValidated(true);
  //     return;
  //   }

  //   event.preventDefault();

  //   const formData = new FormData(form);
  //   try {
  //     const response = await fetch('http://192.168.1.91:3306/getdata/fd2c8f04-d6fa-11ee-b8ef-005056bc7d8c', {
  //       method: 'POST',
  //       body: formData
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  // Handle success
  // console.log('Form data submitted successfully:', formData);

  // Optionally, you can reset the form after successful submission
  //   form.reset();
  // } catch (error) {
  //   console.error('There was a problem with your fetch operation:', error.message);
  // Handle errors or display error message to the user
  // }

  //   setValidated(true);
  // };



  return (
    <div >
      <Container>
        <Row className='border my-4 py-4' style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Col lg={7}>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Section-1 banner</Form.Label>
                  <Form.Control required type='file' ref={ref} onChange={handleImageChange} />



                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Section-1 Heading</Form.Label>
                  <Form.Control
                    required
                    onChange={handleInput}
                    type="text"
                    placeholder="First name"
                    name='title'

                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Section-1 Content</Form.Label>
                  <Form.Control
                    required
                    onChange={handleInput}
                    type="text"
                    placeholder="Last name"
                    name='body'

                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label>Section-1 Image</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control required type='file' ref={ref} onChange={handleImageChange} />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>


              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>


    </div>
  )
}
