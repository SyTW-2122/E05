import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import classes from './ProfileCard.module.css'

export const ProfilePage = () => {
    
    const width: React.CSSProperties = {
        width: "300px !important",
    };

    let test = (
        
        <>
            <div className={classes.BackgroundTopProfile}>
                <Container>

                    <Row><Button className={classes.ButtonEditProfile}>Editar Perfil</Button></Row>
    
                </Container>
                
            </div>
            <div>
                <Card.Img className={classes.ProfileCardImage} alt="User Image" src={'https://thispersondoesnotexist.com/image'}/>
            </div>

            <div>
            <Card className={classes.ProfileCard + " mx-auto" + " border-0"} >
                <Card.Body className={classes.ProfileCardBody}>
                    <Card.Text className={classes.TextBold + " mb-0"}>
                        Pedro Guillermo
                    </Card.Text>
                    <span className={classes.TextMuted + " pl-1"}>Mordor1110</span>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a unde eum. Quaerat dolor unde saepe laudantium incidunt alias, architecto quidem fuga optio, blanditiis, tempora voluptates qui debitis veritatis hic.
                    </Card.Text>
                </Card.Body>
  
                <Card.Body >
                    <Card.Text className={classes.TextBold + " mb-0"}>
                        Gustos musicales
                    </Card.Text>

                    <Card.Text>
                       <Container>
                           <Row>
                               <Col className={classes.MusicalRound}>Pop</Col><Col className={classes.MusicalRound}>Rock</Col><Col className={classes.MusicalRound}>Metal</Col><Col className={classes.MusicalRound}>Rock</Col>
                           </Row>
                       </Container>
                    </Card.Text>
                </Card.Body>
                <Card.Body >
                    <Card.Text>
                       <Container>
                           <Row>
                               <Col>Twitter</Col>
                           </Row>
                       </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </>

    )


    return(test)
}