import React from "react";

// Define the shape of a single ride object
interface Ride {
  id: number;
  destination: string;
  seats: number;
  passengers: number;
}

// Define props interface for TakeRide component
interface TakeRideProps {
  rides: Ride[]; // Array of Ride objects
  joinRide: (id: number) => void; // Function type with a number argument
}

// Use props interface in the functional component
const TakeRide: React.FC<TakeRideProps> = ({ rides, joinRide }) => {
  return (
    <div>
      <h1>Available Rides</h1>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>
            {ride.destination} - Seats: {ride.seats} - Passengers:{" "}
            {ride.passengers}
            <button onClick={() => joinRide(ride.id)}>Join Ride</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TakeRide;
