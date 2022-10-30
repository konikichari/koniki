import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Skillsection.css"

const Skillsection = () => {
    return (
        <div className='m-2 p-3' id='skills'>
            <h1 className='text-center text-white'>
                SKILL'S
            </h1>
            <Row>
                <Col sm={12} xs={12} md={6} lg={3} className='p-5 d-flex justify-content-center align-items-center flex-column zoom'>
                    <h3 className='text-white mb-3'>HTML</h3>
                    <div className='p-4 skillCard glow-on-hoverSkill d-flex justify-content-center align-items-center' >
                        <img className=' p-3' src="htmlimg.webp" alt="htmlicon" width="150" height={150} />
                    </div>
                </Col>
                <Col sm={12} xs={12} md={6} lg={3} className='p-5 d-flex justify-content-center align-items-center flex-column zoom'>
                     <h3 className='text-white mb-3'>CSS</h3>
                    <div className='p-4 skillCard glow-on-hoverSkill d-flex justify-content-center align-items-center' >
                        <img className=' p-3' src="cssimg.png" alt="htmlicon" width="150" height={150} />
                    </div>
                </Col>
                <Col sm={12} xs={12} md={6} lg={3} className='p-5 d-flex justify-content-center align-items-center flex-column zoom'>
                     <h3 className='text-white mb-3'>Java Script</h3>
                    <div className='p-4 skillCard glow-on-hoverSkill d-flex justify-content-center align-items-center' >
                        <img className=' p-3' src="jsimg.png" alt="htmlicon" width="150" height={150} />
                    </div>
                </Col>
                <Col sm={12} xs={12} md={6} lg={3} className='p-5 d-flex justify-content-center align-items-center flex-column zoom'>
                     <h3 className='text-white mb-3'>REACT</h3>
                    <div className='p-4 skillCard glow-on-hoverSkill d-flex justify-content-center align-items-center' >
                        <img className=' p-3' src="reactimg.webp" alt="htmlicon" width="150" height={150} />
                    </div>
                </Col>
              
            </Row>
        </div>
    )
}

export default Skillsection