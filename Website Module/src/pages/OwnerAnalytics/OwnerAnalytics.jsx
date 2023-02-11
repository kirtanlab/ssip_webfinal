import React, { useEffect } from "react";
import "./OwnerAnalytics.css";


// import React, { useEffect } from "react";
import HistoryIcon from "@mui/icons-material/History";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Sidebar from "../../components/Sidebar/Sidebar";
// import Home from "../../components/Home/Home";
// import Header from "../../components/Header_Home/Header";
// import Wallet from "../../components/Wallet/Wallet";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
// import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
// import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../constants/API";
import Chart from "../../components/Chart/Chart";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import RevenueBox from "../RevenueBox/RevenueBox";
// import PayReqs from "../PayReqs/PayReqs";
import Header from "../../components/Header_Home/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const OwnerAnalytics = () => {
  const [chart, setChart] = React.useState(true);

  let navigate = useNavigate();
  function render_req() {
    const payreq_fetch = async () => {
      const data = await axios.get(
        `${API.canteen_server}/api/v1/cashpayment/canteenView`
      );
      console.log("data", data);
      // let bal = data.data.wallet;
      // setBalance(bal);
    };
    payreq_fetch();
  }

  const btn2_handle = () => {
    navigate("/owner-dashboard/profileScreen");
  };
  return (
    // <div className="home-container">
    //   <div className="top-components">
    //   <Header
    //               title="Analysis"
    //             //   btn1={btn1_handle}
    //             //   btn1title={<HistoryIcon sx={{ fontSize: 40 }} />}
    //               btn2={btn2_handle}
    //               btn2title={<AccountCircleIcon sx={{ fontSize: 40 }} />}
    //             />
    //   </div>

    //   <div className="bottom-components">
    //     {/* <div className="bottom-left">
    //       <div className="revenue-box">
    //         <RevenueBox />
    //       </div>
    //     </div> */}
    //     {/* {chart ? ( */}
    //       <div className="bottom-right">
    //         {/* <p className="box-title">Last 7 Months (income)</p>
    //         <Chart />
    //         <p className="box-title">Last 7 Months (income)</p>
    //         <Chart /> 
    //         <p className="box-title">Last 7 Months (income)</p> */}
    //         <Chart />
    //       </div>
    //     {/* ) : (
    //       <div className="bottom-right">
    //         <PayReqs oldreqs={pastreq.reverse()} currentreqs={currentreq} />
    //       </div>
    //     )} */}
    //   </div>
    // </div>



    <div className="owner-dashboard-container">
      <div className="owner-inner-container">
        <div className="owner-left">
          <Sidebar />
        </div>
        <div className="owner-right">
          <div className="header_handle" style={{borderBottom: "1px solid black"}}>
            <Header
              title="kirtan"
              btn2={btn2_handle}
              btn2title={<AccountCircleIcon sx={{ fontSize: 40 }} />}
            />
          </div>
          <hr />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default OwnerAnalytics;
