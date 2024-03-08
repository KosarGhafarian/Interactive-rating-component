import { useNavigate } from "react-router-dom";

import useRate from "./context/RateContext";

import StartIcon from "./images/icon-star.svg";
import "./stylesheet/style.css";

const rates = [1, 2, 3, 4, 5];

const App = () => {
  const navigate = useNavigate();
  const { selectedRate, setSelectedRate } = useRate();

  const onClickRate = (rate) => {
    setSelectedRate(rate);
  };

  const handleSubmit = () => {
    navigate("/submit");
  };

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
        {rates.map((rate, index) => (
          <button
            key={index}
            onClick={() => {
              onClickRate(rate);
            }}
            type="button"
            className={selectedRate === rate ? "selected" : ""}
          >
            {rate}
          </button>
        ))}
      </div>
      <button type="submit" disabled={!selectedRate} onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default App;
