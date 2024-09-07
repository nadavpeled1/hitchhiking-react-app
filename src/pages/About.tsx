import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1>About This Website</h1>

      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          This website was born out of my personal pain point: Israel doesn't
          have public transportation on the weekend. To address this gap, I
          decided to build this website to help people without a car find a way
          to reach inter-city destinations.
        </p>
        <p>
          The main purpose of this website is to help us deal with the lack of
          reliable public transportation, especially on weekends. Additionally,
          it helps car owners save some money by sharing rides and reducing the
          number of cars on the road.
        </p>
      </section>

      {/* How to Use the Website */}
      <section>
        <h2>How to Use the Website</h2>
        <p>The website offers two main features:</p>
        <ul>
          <li>
            <strong>Offer a Ride:</strong> If you have a car and are willing to
            offer a ride, you can create a new ride offer by going to the "Offer
            a Ride" page. You will need to provide details like the origin,
            destination, and available seats.
          </li>
          <li>
            <strong>Take a Ride:</strong> If you're looking for a ride, you can
            browse through the available ride offers on the "Take a Ride" page
            and join one that suits your destination. Note that we plan to
            enhance this feature by allowing users to add non-dummy rides in the
            future.
          </li>
        </ul>
        <p>
          We hope this website will help connect people and make traveling
          easier and affordable.
        </p>
      </section>
    </div>
  );
};

export default About;
