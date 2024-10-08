import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import OfferRide from "./pages/OfferRide";
import TakeRide from "./pages/AskRide";
import Login from "./pages/Login";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure this is the right path

const App: React.FC = () => {
  //login state managemnt:
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to manage rides
  const [rides, setRides] = useState<
    {
      id: number;
      origin: string;
      destination: string;
      seats: number;
      passengers: number;
      contact: string;
      date: string;
      time: string;
    }[]
  >([]);

  // Function to add a ride
  const addRide = (
    origin: string,
    destination: string,
    contact: string,
    date: string,
    time: string
  ) => {
    const newRide = {
      id: rides.length + 1,
      origin: origin,
      destination: destination,
      seats: Math.floor(Math.random() * 4) + 1, // driver + 1...4
      passengers: 0,
      contact: contact,
      date: date,
      time: time,
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
      <div style={{ paddingTop: "70px" }}>
        {" "}
        {/*so Nabar wont hide content */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/offer-ride" element={<OfferRide addRide={addRide} />} />
          <Route
            path="/ask-ride"
            element={<TakeRide rides={rides} joinRide={joinRide} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
