import { useContext, useState } from "react";
import dollarSign from "./../images/icon-dollar.svg";
import personIcon from "./../images/icon-person.svg";
import { TipContext } from "./../contexts/Tip";

const TipOptions = () => {
  const {
    bill,
    setBill,
    percent,
    setPercent,
    numOfPeople,
    setNumOfPeople,
    p,
    setP,
  } = useContext(TipContext);

  const changeP = (e) => {
    setPercent(e.target.value);
    setP(e.target.value);
  };

  const custom = () => {
    setPercent("");
    setP("custom");
  };

  const [click, setClick] = useState(false);

  const clicked = (e) => {
    setClick(true);
  };

  return (
    <form>
      <fieldset className="bill">
        <legend>Bill</legend>
        <img src={dollarSign} alt="dollar sign" />
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </fieldset>

      <fieldset className="tip-percent">
        <legend>Select Tip %</legend>
        <div>
          <button
            className={p === "0.05" ? "selected btn" : "btn"}
            type="button"
            onClick={changeP}
            value={0.05}
          >
            5%
          </button>
          <button
            className={p === "0.1" ? "selected btn" : "btn"}
            type="button"
            onClick={changeP}
            value={0.1}
          >
            10%
          </button>
          <button
            className={p === "0.15" ? "selected btn" : "btn"}
            type="button"
            onClick={changeP}
            value={0.15}
          >
            15%
          </button>
          <button
            className={p === "0.25" ? "selected btn" : "btn"}
            type="button"
            onClick={changeP}
            value={0.25}
          >
            25%
          </button>
          <button
            className={p === "0.5" ? "selected btn" : "btn"}
            type="button"
            onClick={changeP}
            value={0.5}
          >
            50%
          </button>
          <input
            type="text"
            placeholder="Custom"
            onClick={custom}
            value={p === "custom" ? percent * 100 : ""}
            onChange={(e) => setPercent(e.target.value / 100)}
          />
        </div>
      </fieldset>

      <fieldset className="num-of-people">
        <legend>Number of People</legend>
        <img src={personIcon} alt="user-icon" />
        {click ? (
          numOfPeople == 0 ? (
            <p>Can't be 0!</p>
          ) : numOfPeople ? (
            ""
          ) : (
            <p>Can't leave this blank!</p>
          )
        ) : (
          ""
        )}
        <input
          type="text"
          value={numOfPeople}
          onClick={clicked}
          onChange={(e) => setNumOfPeople(e.target.value)}
        />
      </fieldset>
    </form>
  );
};

export default TipOptions;
