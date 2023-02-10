import React from "react";
import "./DetailBar_Owner.css";
import axios from "axios";
import { API } from "../../constants/API";

const DetailBar_Owner = ({ data }) => {
  let [qty, setqty] = React.useState(0);
  // console.log("DetailBar", data);
  const handleclick = async () => {
    const res = await axios.post(
      `${API.canteen_server}/api/v1/canteen/decrementSubsQuantity/${data._id}`,
      {
        qty: qty,
      },
      { headers: {} }
    );
    console.log("DetailBar", res);
  };
  return (
    <div className="one-result2">
      <p className="result-id">{data.subscription_id}</p>
      <p className="result-name">{data.username}</p>
      <p className="avail">Available: {data.quantity}</p>
      <div className="new">
        New:
        <input
          type="number"
          value={qty}
          className="in-qty"
          name="qty"
          id="qty"
          onChange={(e) => setqty(e.target.value)}
          placeholder="Enter the quantity"
          min={0}
        />
      </div>
      <button onClick={handleclick} className="dtbar">
        Done
      </button>
    </div>
  );
};

export default DetailBar_Owner;
