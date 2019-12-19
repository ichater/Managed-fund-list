import React, { useState } from "react";
import FundList from "./FundList";
import css from "../css/app.css";
import uuidv4 from "uuid/v4";

function App() {
  // functions that will be used in other files
  const [funds, setManagedFunds] = useState(sampleFunds);
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
      <FundList
        //exported props to child components
        funds={funds}
        handleMFAdd={handleMFAdd}
        handleFundDelete={handleFundDelete}
      ></FundList>
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
