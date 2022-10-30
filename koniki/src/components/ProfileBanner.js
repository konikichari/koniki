import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-scroll';
import "./ProfileBanner.css"

function ProfileBanner() {
  return (
    <div className='bannerContainer' id="profile">
      <Container>
      <Row>
        <Col sm={12} xs={12} md={6} lg={7} className='p-5'>

        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white animate-charcter">
          Hi, I'm Koniki.
          <br className="hidden lg:inline-block" />I love to build amazing
          apps.
        </h1>
          <p>
            I am a react developer...
            <br />
            Having <h3> <strong>4+  years</strong></h3> of IT experience.
          </p>
         
          <p>
            <Link to='contact' smooth={true} duration={100}>
            <button className='glow-on-hover'>
              connect
            </button>
            </Link>
            
          </p>
          
        </Col>
        <Col sm={12} xs={12} md={6} lg={5} className="p-3 d-flex justify-content-center align-items-center" >
        <img className='profileImg' src={"bobby.jpg"} alt="BigCo Inc. logo"/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ProfileBanner