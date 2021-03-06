import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import homeLogo from "./assets/Home.svg";
import notificationLogo from "./assets/notificacion.svg";
import profileLogo from "./assets/Perfil.svg";

const barStyle = {
  background: '#FFFF',
  bottom: 0,
  right: 0,
  left: 0,
}


const imageStyle = {
  background: '#5cb85c',
  borderRadius: 10,
  flex: 1,
  width: 50,
  height: 50,
  resizeMode: 'contain',
}


export const BottomBar = () => {
  return (
    <Navbar className="fixed-bottom" style={barStyle}>
      <Container>
        <Link to="/home"><Navbar.Brand ><img style={imageStyle} src={homeLogo}></img></Navbar.Brand></Link>
        <Link to="/notifications"><Navbar.Brand ><img style={imageStyle} src={notificationLogo}></img></Navbar.Brand></Link>
        <Link to="/profile"><Navbar.Brand ><img style={imageStyle} src={profileLogo}></img></Navbar.Brand></Link>
      </Container>
    </Navbar>
  )
}