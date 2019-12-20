import React, { useState, useEffect } from "react";
import FundList from "./FundList";
import css from "../css/app.css";
import uuidv4 from "uuid/v4";
import FundEdit from "./FundEdit";

export const FundContext = React.createContext();
const LOCAL_STORAGE_KEY = "fundList.funds";

function App() {
  const [selectedFundID, setSelectedFundID] = useState();
  // functions that will be used in other files
  const [funds, setManagedFunds] = useState(sampleFunds);
  const selectedFund = funds.find(funds => funds.id === selectedFundID);

  useEffect(() => {
    const fundsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (fundsJSON != null) setManagedFunds(JSON.parse(fundsJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(funds));
    //below array specifies when you want to call the useEffect function.
  }, [funds]);

  const FundContextValue = {
    handleMFAdd,
    handleFundDelete,
    handleFundSelect
  };

  function handleFundSelect(id) {
    setSelectedFundID(id);
  }

  // function for adding managed funds
  function handleMFAdd() {
    const newMF = {
      id: uuidv4(),
      name: "newMF",
      Category: "money",
      MER: 0.9
    };
    setManagedFunds([...funds, newMF]);
  }

  function handleFundDelete(id) {
    setManagedFunds(funds.filter(funds => funds.id !== id));
  }

  return (
    <div>
      <FundContext.Provider value={FundContextValue}>
        {/* undefined && anything else is always undefined */}
        {selectedFund && <FundEdit Fund={selectedFund} />}
        <FundList
          //exported props to child components
          funds={funds}
        ></FundList>
      </FundContext.Provider>
    </div>
  );
}

const sampleFunds = [
  {
    id: 1,
    name: "Vanguard Cash Plus Fund",
    Category: "Cash: Cash enhanced",
    MER: 0.3
  },
  {
    id: 2,
    name: "Pendal Fixed Interest Fund",
    Category: "Fixed Interest: Australian",
    MER: 0.5
  }
];

export default App;
