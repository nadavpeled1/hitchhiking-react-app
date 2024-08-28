import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HowToUse from "./pages/HowToUse";
import OfferRide from "./pages/OfferRide";
import TakeRide from "./pages/TakeRide";

const App: React.FC = () => {
  // State to manage dummy rides
  const [rides, setRides] = useState<
    {
      id: number;
      origin: string;
      destination: string;
      seats: number;
      passengers: number;
    }[]
  >([]);

  // Function to add a dummy ride
  const addDummyRide = () => {
    const newRide = {
      id: rides.length + 1,
      origin: `Origin City ${rides.length + 1}`,
      destination: `Destiniation City ${rides.length + 1}`,
      seats: Math.floor(Math.random() * 4) + 1, // driver + 1...4
      passengers: 0,
    };
    setRides([...rides, newRide]);
  };

  // Function to join a ride
  // TODO: add a message if the ride is already full and someone try to join it.
  const joinRide = (id: number) => {
    setRides(
      rides.map((ride) =>
        ride.id === id && ride.passengers < ride.seats
          ? { ...ride, passengers: ride.passengers + 1 }
          : ride
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/HowToUse" element={<HowToUse />} />
        <Route
          path="/offer-ride"
          element={<OfferRide addDummyRide={addDummyRide} />}
        />
        <Route
          path="/take-ride"
          element={<TakeRide rides={rides} joinRide={joinRide} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
