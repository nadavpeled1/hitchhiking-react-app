import React from "react";

// Updated Ride interface to include 'origin'
interface Ride {
  id: number;
  origin: string; // New origin property
  destination: string;
  seats: number;
  passengers: number;
}

interface TakeRideProps {
  rides: Ride[];
  joinRide: (id: number) => void;
}

const TakeRide: React.FC<TakeRideProps> = ({ rides, joinRide }) => {
  return (
    <div>
      <h1>Available Rides</h1>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>
            <p>From: {ride.origin}</p> {/* Displaying origin */}
            <p>To: {ride.destination}</p> {/* Displaying destination */}
            <p>
              Available Seats: {ride.passengers}/{ride.seats}
            </p>{" "}
            {/* Displaying available seats */}
            <button onClick={() => joinRide(ride.id)}>Join Ride</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TakeRide;
