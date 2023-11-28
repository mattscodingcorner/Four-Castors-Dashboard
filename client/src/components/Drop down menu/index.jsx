jsx
import React from 'react';

const ScrollableDropdown = ({ locations }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Saved Locations
      </button>
      <div className="dropdown-menu" style={{ maxHeight: '200px', overflowY: 'auto' }} aria-labelledby="dropdownMenuButton">
        {locations.map((location, index) => (
          <a className="dropdown-item" key={index} href="#">
            {location}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollableDropdown;