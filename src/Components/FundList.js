import React from "react";
import MFs from "./MFs";

export default function FundList(props) {
  const { funds, handleMFAdd, handleFundDelete } = props;
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
              return (
                <MFs
                  key={funds.id}
                  handleFundDelete={handleFundDelete}
                  {...funds}
                />
              );
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
