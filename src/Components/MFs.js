import React, { useContext, useState } from "react";
import { FundContext } from "./App";

export default function ManagedFund(props) {
  const {
    handleFundDelete,
    handleFundSelect,
    handleFundValueChange
  } = useContext(FundContext);
  const { id, name, Category, MER, value } = props;

  return (
    <>
      <tr className="MF-table-row">
        <td> {name}</td>
        <td> {Category}</td>
        <td>
          {/* toFixed gud */}
          {MER} $(<span>{((value * MER) / 100).toFixed(2)}</span>)
        </td>
        <td>
          $
          <input
            type="number"
            placeholder="fund value"
            onChange={e => handleFundValueChange(id, e.target.value)}
            value={value}
          ></input>
        </td>
        <td>
          <button
            className="btn1 btn-edit"
            onClick={() => handleFundSelect(id)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn1 btn-delete"
            onClick={() => handleFundDelete(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
