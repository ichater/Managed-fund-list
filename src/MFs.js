import React from "react";

export default function managedFund(props) {
  const { name, Category, MER } = props;
  return (
    <>
      <tr>
        <td> {name}</td>
        <td> {Category}</td>
        <td>
          {MER} $(<span>0</span>)
        </td>
        <td>
          $<input type="number" placeholder="fund value"></input>
        </td>
      </tr>
    </>
  );
}
