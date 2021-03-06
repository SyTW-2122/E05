import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MapContainer } from 'react-leaflet';
import { ActiveUserInterface } from '../../../backend/src/Data/Models/activeUsers';
import { UserData } from '../../types/user';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setNearUsers } from '../store/storeSlice';
import { userService } from '../_services';
import classes from './HomePage.module.css';
import { LocateControl } from './MapControls/LocateControl';
import { MatchsicTile } from './MatchsicTile';
import { UserMarker } from './UserMarker';

export const HomePage = () => {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  const { nearUsers } = useAppSelector(state => state.matchsic);
  const dispatch = useAppDispatch();

  const [map, setMap] = useState<L.Map | null>(null);
  const [nUsers, setNusers] = useState<UserData[]>([]);

  useEffect(() => {
    // Set location
    // Set near users
    setInterval(async () => {
      userService.getLocationFromBrowser()
        .then(location => {
          userService.updateActiveData({ location })
            .then(() => {
              userService.getNearUsers()
                .then(nearUsers => {
                  dispatch(setNearUsers(nearUsers));
                  setNusers(nearUsers);
                });
            });
        });
    }, 5000);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className={"text-center " + classes.gray_background}>
          <MapContainer
            center={[28.47762873997604, -16.312475617040874]}
            zoom={13}
            scrollWheelZoom={true}
            className={classes.map}
            whenCreated={(map) => setMap(map)}
          >
            <MatchsicTile />

            {
              nUsers.map(nearUser => {

                return <UserMarker
                  user={nearUser}
                  key={nearUser.username}
                />
              })
            }

            <LocateControl map={map}></LocateControl>
          </MapContainer>
        </Col>
      </Row>
    </Container>
  )
}
