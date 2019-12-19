import React, { useContext } from "react";
import { FundContext } from "./App";

export default function ManagedFund(props) {
  const { handleFundDelete } = useContext(FundContext);
  const { id, name, Category, MER } = props;
  return (
    <>
      <tr className="MF-table-row">
        <td> {name}</td>
        <td> {Category}</td>
        <td>
          {MER} $(<span>0</span>)
        </td>
        <td>
          $<input type="number" placeholder="fund value"></input>
        </td>
        <td>
          <button className="btn1 btn-edit">Edit</button>
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
