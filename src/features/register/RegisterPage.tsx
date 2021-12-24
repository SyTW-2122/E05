import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { MatchsicButton } from '../utils/MatchsicButton'
import { MatchsicGreenBox } from '../utils/MatchsicGreenBox'


const registerButtonStyle = {
  color: '#0BA55D',
  borderRadius: '100px',
  border: 'none',
  width: '8em',
  height: '3em',
  fontWeight: 'bold',
}

export const RegisterPage = () => {
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // Validate inputs

    // Send register request
    console.log('Register form submitted');

    // If success, redirect to login page


    // If error, show error message
  }


  return (
    <MatchsicGreenBox>
      <Row className="pt-5"></Row> { /*Offset*/}

      <Row className="ps-3 pe-3">
        <Col className="text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="name">
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="secondName">
              <Form.Control type="text" placeholder="Apellidos" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="username">
              <Form.Control type="text" placeholder="Nombre de usuario" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="email">
              <Form.Control type="email" placeholder="Correo electrónico" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="password">
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="passwordConfirm">
              <Form.Control type="password" placeholder="Repite la contraseña" />
            </Form.Group>
            <MatchsicButton text="Registrarme" style={registerButtonStyle}></MatchsicButton>
          </Form>
        </Col>
      </Row>
    </MatchsicGreenBox>
  )
}
