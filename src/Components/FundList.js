import React from "react";
import MFs from "./MFs";

export default function FundList({ funds }) {
  return (
    <div className="MF-list">
      <h1 className="Fund-Heading">Fund List</h1>
      <div>
        <table className="fundTable">
          <tr>
            <th> Fund Name</th>
            <th> Category</th>
            <th> MER </th>
            <th> Value </th>
          </tr>
          {funds.map(funds => {
            return <MFs key={funds.id} {...funds} />;
          })}
        </table>
      </div>
      <div className="MF-list_add-MF-btn-container">
        <button className="btn btn--primary">Add Fund</button>
      </div>
    </div>
  );
}
