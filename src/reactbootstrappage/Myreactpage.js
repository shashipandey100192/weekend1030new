import React from 'react'
// import Button from 'react-bootstrap/Button';
import {Button, Card, Carousel, Tab, Tabs} from 'react-bootstrap';
import "../style.css";
import { AiFillBank } from "react-icons/ai";
import { FcApproval, FcBearish } from "react-icons/fc";


function Myreactpage() {
  return (
    <div>Myreactpage
    <Button variant="dark">Primary</Button>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="photo/img3.jpg" alt="tis is image"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="photo/img3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="photo/img4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="photo/img5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
    <AiFillBank></AiFillBank>
    <FcApproval></FcApproval>
    <h1 className='cush'><FcBearish></FcBearish></h1>


    </div>
  )
}

export default Myreactpage