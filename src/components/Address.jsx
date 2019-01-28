import React from "react";

import "./address.css";

function Address(props) {
  const { address } = props;
  return (
    <div>
      <div className="address-top">{address.address1}</div>
      <div className="address-bottom">
        {address.city}, {address.state} {address.zip}
      </div>
    </div>
  );
}

export default Address;
