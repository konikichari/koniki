import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProfileBanner.css"

function ProfileBanner() {
  return (
    <div className='bannerContainer'>
      <Container>
      <Row>
        <Col sm={12} xs={12} md={6} lg={7} className='p-5'>

          <h1 className='animate-charcter'>Hey !!! Congratulations on reaching to me......</h1>
          <p>
            I am a react developer...
            <br />
            Having <h3> <strong>4+  years</strong></h3> of IT experience.
          </p>
          <p>
            <button className='glow-on-hover'>
              connect
            </button>
          </p>
          
        </Col>
        <Col sm={12} xs={12} md={6} lg={5} className="p-3 " >
        <img className='profileImg' src={"bobby.jpg"} alt="BigCo Inc. logo"/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ProfileBanner