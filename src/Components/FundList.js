import React, { useContext } from "react";
import MFs from "./MFs";
import { FundContext } from "./App";

export default function FundList({ funds }) {
  const { handleMFAdd } = useContext(FundContext);
  return (
    <div className="MF-list">
      <h1 className="Fund-Heading">Fund List</h1>
      <div>
        <table className="fundTable">
          <tbody>
            <tr>
              <th> Fund Name</th>
              <th> Category</th>
              <th> MER </th>
              <th> Value </th>
            </tr>
            {funds.map(funds => {
              return <MFs key={funds.id} {...funds} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="MF-list_add-MF-btn-container">
        <button className="btn btn--primary" onClick={handleMFAdd}>
          Add Fund
        </button>
      </div>
    </div>
  );
}
