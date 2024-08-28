import React, { useState } from "react";

interface OfferRideProps {
  addDummyRide: (origin: string, destination: string) => void;
}

const OfferRide: React.FC<OfferRideProps> = ({ addDummyRide }) => {
  // State for form inputs
  const [origin, setOrigin] = useState<string>(""); // State for origin city
  const [destination, setDestination] = useState<string>(""); // State for destination city

  // List of cities
  const cities = ["Beer Sheva", "Tel Aviv", "Haifa"];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the function to add a new ride with selected origin and destination
    addDummyRide(origin, destination);
  };

  return (
    <div>
      <h2>Offer a New Ride</h2>
      <form onSubmit={handleSubmit}>
        {/* Dropdown for Origin City */}
        <label>
          Origin City:
          <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
            <option value="" disabled>
              Select Origin City
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <br />
        {/* Dropdown for Destination City */}
        <label>
          Destination City:
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="" disabled>
              Select Destination City
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>

        {/* Submit Button */}
        <br />
        <button type="submit">Offer Ride</button>
      </form>
    </div>
  );
};

export default OfferRide;
