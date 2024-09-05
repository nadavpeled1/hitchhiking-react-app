import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

interface Ride {
  id: number;
  origin: string;
  destination: string;
  seats: number;
  passengers: number;
  date: string;
  time: string;
  contact: string;
}

interface TakeRideProps {
  rides: Ride[];
  joinRide: (id: number) => void;
}

const TakeRide: React.FC<TakeRideProps> = ({ rides, joinRide }) => {
  return (
    <Container>
      <h1 className="my-4">Available Rides</h1>
      <p>
        *In the future, this page will allow a travel request to be uploaded so
        that a potential traveler can receive alerts about trips suitable for
        their request.
      </p>
      <Row>
        {rides.map((ride) => (
          <Col key={ride.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>
                  Ride from {ride.origin} to {ride.destination}
                </Card.Title>
                <Card.Text>
                  <strong>Date:</strong> {ride.date}
                  <br />
                  <strong>Time:</strong> {ride.time}
                  <br />
                  <strong>Available Seats:</strong> {ride.passengers}/
                  {ride.seats}
                  <br />
                  <strong>Contact:</strong> {ride.contact}
                </Card.Text>
                <Button variant="primary" onClick={() => joinRide(ride.id)}>
                  Join Ride
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TakeRide;
