import React from "react";

export default function FundMERTotal(props) {
  const { funds } = props;
  const total = funds
    .map(fund => (fund.value * fund.MER) / 100)
    .reduce((acc, cur) => acc + cur);
  return <>{total.toFixed(2)}</>;
}
