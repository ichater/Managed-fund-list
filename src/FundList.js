import React from "react";
import MFs from "./MFs";

export default function FundList({ funds }) {
  return (
    <div>
      <table>
        <tr>
          <th> Fund Name</th>
          <th> Category</th>
          <th>MER</th>
          <th> Value </th>
        </tr>
        {funds.map(funds => {
          return <MFs key={funds.id} {...funds} />;
        })}
      </table>
    </div>
  );
}
