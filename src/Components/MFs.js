import React from "react";

export default function managedFund(props) {
  const { name, Category, MER } = props;
  return (
    <>
      <tr class="MF-table-row">
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
          <button className="btn1 btn-delete">Delete</button>
        </td>
      </tr>
    </>
  );
}
