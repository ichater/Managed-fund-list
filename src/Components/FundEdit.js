import React, { useContext } from "react";
import { FundContext } from "./App";

export default function FundEdit({ Fund }) {
  const { handleFundChange } = useContext(FundContext);

  function handleChange(changes) {
    handleFundChange(Fund.id, { ...Fund, ...changes });
  }

  return (
    <div className="Fund-Edit">
      <div className="fund-edit__remove-button-container">
        <button className="btn fund-edit__remove-button">&times;</button>
      </div>
      <div className="fund-edit__details-grid">
        <label htmlFor="name" className="fund-edit__label">
          Fund Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="fund-edit__input"
          value={Fund.name}
          onInput={e => handleChange({ name: e.target.value })}
        />
        <label htmlFor="Category" className="fund-edit__label">
          Category
        </label>
        <input
          type="text"
          name="Category"
          id="Category"
          className="fund-edit__input"
          value={Fund.Category}
          onInput={e => handleChange({ Category: e.target.value })}
        />
        <label htmlFor="MER" className="fund-edit__label">
          MER
        </label>
        <input
          type="number"
          name="MER"
          id="MER"
          className="fund-edit__input"
          value={Fund.MER}
          onInput={e => handleChange({ MER: e.target.value })}
        />
        {/* Think about linking to a PDS */}
      </div>
    </div>
  );
}
