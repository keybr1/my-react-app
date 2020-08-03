import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render ( ) {
    return (
      <>
        <CarouselBox />

        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4">
            <Card bg="light" border="success" text="primary">
              <Card.Img 
              variant="top"
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Button variant="primary" >About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Button variant="primary" >About team</Button>
              </Card.Body>
              <Card.Img 
              variant="bottom"
              src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </Card>
            <Card>
              <Card.Img 
              variant="top"
              src="https://images.pexels.com/photos/39621/boat-teamwork-training-exercise-39621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Button variant="primary" >About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
