import React from "react";

export default function FundEdit() {
  return (
    <div className="Fund-Edit">
      <div className="fund-edit__remove-button-container">
        <button className="btn fund-edit__remove-button">&times;</button>
      </div>
      <div className="fund-edit__details-grid">
        <label htmlFor="name" className="fund-edit__label">
          Fund Name
        </label>
        <input type="text" name="name" id="name" className="fund-edit__input" />
        <label htmlFor="Category" className="fund-edit__label">
          Category
        </label>
        <input
          type="text"
          name="Category"
          id="Category"
          className="fund-edit__input"
        />
        <label htmlFor="MER" className="fund-edit__label">
          MER
        </label>
        <input type="number" name="MER" id="MER" className="fund-edit__input" />
        {/* Think about linking to a PDS */}
      </div>
    </div>
  );
}
