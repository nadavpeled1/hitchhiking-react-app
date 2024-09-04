import React, { useState } from "react";

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("default");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // in order to make the user fill some content to the input
    // TODO: Handle login logic here
  };

  return (
    <div>
      <h1>Login:</h1>
      <h2>Not yet implemented</h2>
      <p>Enter your phone number so people may contact you</p>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
