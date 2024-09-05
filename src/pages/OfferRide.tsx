import React, { useState } from "react";

interface OfferRideProps {
  addRide: (origin: string, destination: string, contact: string) => void;
}

const OfferRide: React.FC<OfferRideProps> = ({ addRide: addRide }) => {
  // State for form inputs
  const [origin, setOrigin] = useState<string>(""); // State for origin city
  const [destination, setDestination] = useState<string>(""); // State for destination city
  const [contact, setContact] = useState<string>(""); // State for contact phone number
  const [date, setDate] = useState<string>(""); // State for date
  const [time, setTime] = useState<string>(""); // State for time

  // List of cities
  const cities = ["Beer Sheva", "Tel Aviv", "Haifa", "Jerusalem"];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the function to add a new ride with selected origin and destination
    addRide(origin, destination, contact);
  };

  return (
    <div>
      <h2>Offer a New Ride</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Origin City:
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          >
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
        <label>
          Destination City:
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
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
        <br />
        <label>
          Contact Phone Number:
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <br />
        {/* Date */}
        <label>
          Date:
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        {/* Time */}
        <label>
          Time:
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>

        {/* Submit Button */}
        <br />
        <button type="submit">Add Ride</button>
      </form>
    </div>
  );
};

export default OfferRide;
