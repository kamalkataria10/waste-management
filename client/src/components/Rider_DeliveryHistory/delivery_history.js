import React from "react";
import { Link } from "react-router-dom";
import DHstyles from "./delivery_history.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import rider_ic from "../Dashboard_Rider/rider.png";

export const DeliveryHistory = () => {
  function DeliveryDetails(props) {
    return (
      <tr>
        <td>{props.OrderNo}</td>
        <td>{props.Slot}</td>
        <td>{props.SellerName}</td>
        <td>{props.VendorName}</td>
        <td className={DHstyles.invoice}>{props.Invoice}</td>
      </tr>
    );
  }

  return (
    <div className={DHstyles.p_container}>
      <div>
        <div className={DHstyles.greet_rider}>
          {/* GRADIENT BAR */}
          <div className="rider-image">
            <img
              src={rider_ic}
              alt="profile_img"
              className={DHstyles.rider_img}
            ></img>
            {/* RIDER IMAGE */}
          </div>
          <div className={DHstyles.rider_greeting_text}>
            <h2>Hi!</h2>
            {/* GREET RIDER */}
          </div>
        </div>

        <div className={DHstyles.rider_delivery_history}>
          <div className={DHstyles.list_heading}>
            <h2>DELIVERY HISTORY</h2>
          </div>

          

          <div className={DHstyles.return_btn}>
            <Link to="/dashboard/rider">
              <Button variant="primary">RETURN TO DASHBOARD</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
