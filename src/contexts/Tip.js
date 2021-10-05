import { createContext, useEffect, useState } from "react";

export const TipContext = createContext();

const TipContextProvider = ({ children }) => {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");

  const [p, setP] = useState();

  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill && percent && numOfPeople) {
      if (!numOfPeople) {
        setTip("");
        setTotal("");
      } else {
        const newTip = bill * percent;
        setTip(newTip);
        setTotal(Number(newTip) + Number(bill));
      }
    }
  }, [bill, percent, numOfPeople]);

  const reset = () => {
    setBill("");
    setPercent("");
    setNumOfPeople("");
    setTip(0);
    setTotal(0);
    setP();
  };

  return (
    <TipContext.Provider
      value={{
        bill,
        setBill,
        percent,
        setPercent,
        numOfPeople,
        setNumOfPeople,
        tip,
        total,
        reset,
        p,
        setP,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContextProvider;
