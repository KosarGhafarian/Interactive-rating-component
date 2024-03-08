import React from "react";

import useRate from "./context/RateContext";

import ThankYouImage from "./images/illustration-thank-you.svg";
const SubmittedPage = () => {
  const { selectedRate } = useRate();

  return (
    <div className="container">
      <div className="thanks-image">
        <img src={ThankYouImage} alt="thank-you" />
        <div className="rate-announce">
          You selected {selectedRate} out of 5
        </div>
        <div className="thanks">Thank you!</div>
        <div
          className="description"
          style={{ padding: "0 5px", paddingBottom: "25px" }}
        >
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    </div>
  );
};

export default SubmittedPage;
