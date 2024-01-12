import React from "react";

import StartIcon from "./images/icon-star.svg";
import "./stylesheet/style.css";

const App = () => {
  return (
    <div className="container">
      <div className="star-container">
        <img src={StartIcon} alt="star-icon" />
      </div>
      <div className="textbox">
        <p>How did we do?</p>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <button type="submit">SUBMIT</button>
      {/* .attribution { font-size: 11px; text-align: center; }
     .attribution a { color: hsl(228, 45%, 44%); } */}

      {/* <body>

<!-- Rating state start -->



Submit

<!-- Rating state end -->

<!-- Thank you state start -->

You selected <!-- Add rating here --> out of 5

Thank you!

We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!

<!-- Thank you state end -->


<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div>
</body> */}
    </div>
  );
};

export default App;
