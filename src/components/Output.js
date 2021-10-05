import { useContext } from "react";
import { TipContext } from "../contexts/Tip";

const Output = () => {
  const { reset } = useContext(TipContext);
  const { tip, total, numOfPeople } = useContext(TipContext);
  return (
    <div className="output">
      <div className="tip-amount">
        <span>
          <h4>Tip Amount</h4>
          <p>/ person</p>
        </span>
        <span>
          <h1>
            ${tip > 0 ? parseFloat(tip / numOfPeople).toFixed(2) : "0.00"}
          </h1>
        </span>
      </div>
      <div className="total">
        <span>
          <h4>Total</h4>
          <p>/ person</p>
        </span>
        <span>
          <h1>
            ${total > 0 ? parseFloat(total / numOfPeople).toFixed(2) : "0.00"}
          </h1>
        </span>
      </div>

      <button type="button" onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default Output;
