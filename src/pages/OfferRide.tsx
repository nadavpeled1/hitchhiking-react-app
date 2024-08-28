import React from "react";

// Define props interface
interface OfferRideProps {
  addDummyRide: () => void; // Function type with no arguments and no return value
}

// Use props interface in the functional component
const OfferRide: React.FC<OfferRideProps> = ({ addDummyRide }) => {
  return (
    <div>
      <h1>Offer a New Ride</h1>
      <button onClick={addDummyRide}>Add Dummy Ride</button>
    </div>
  );
};

export default OfferRide;
