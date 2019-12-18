import React from "react";
import FundList from "./FundList";

function App() {
  return (
    <div>
      <FundList funds={sampleFunds}></FundList>
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
