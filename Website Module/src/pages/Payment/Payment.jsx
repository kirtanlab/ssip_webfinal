import React, { useEffect, useState } from "react";
import { API } from "../../constants/API";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Payment.css";
// import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";

// const Payment = () => {
//   let [date, setDate] = React.useState("07/02/2023");
//   let [amt, setAmt] = React.useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch(
//         `${API.payment_server}/api/v1/payment/create-checkout-session`,
//         {
//           method: "POST",
//           // {Headers: { 'Content-Type': 'application/json',}},
//           body: JSON.stringify({
//             date: date,
//             amount: amt,
//           }),
//         }
//       );
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setAmt("");
//         setDate("");
//       } else {
//         console.log("Err: some error");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // const handle_Payment = async () => {
//   //   await axios.post(
//   //     `${API.payment_server}/api/v1/payment/create-checkout-session`,
//   //     {
//   //       amount: amt,
//   //       date: date,
//   //     },
//   //     {
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     }
//   //   );

//   //   const response = await fetch()
//   //   fetch("http://example.com/movies.json")
//   //     .then((response) => response.json())
//   //     .then((data) => console.log(data));
//   //   try {
//   //     console.log(data);
//   //   } catch (err) {
//   //     console.error(err);
//   //     throw err;
//   //   }
//   // };

//   // let url = `${API.payment_server}/api/v1/payment/create-checkout-session`;
//   // let data = {
//   //   amount: amt,
//   //   date: date,
//   // };
//   // const response = {};
//   // try {
//   //   response = await fetch(url, {
//   //     method: "POST", // *GET, POST, PUT, DELETE, etc.
//   //     // mode: "cors", // no-cors, *cors, same-origin
//   //     // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//   //     // credentials: "same-origin", // include, *same-origin, omit
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       // 'Content-Type': 'application/x-www-form-urlencoded',
//   //     },
//   //     // redirect: "follow", // manual, *follow, error
//   //     // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   //     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   //   });
//   // } catch (e) {
//   //   console.error(e);
//   //   throw e;
//   // }
//   // console.log(response);
//   // return response.json(); // parses JSON response into native JavaScript objects
//   // };

//   return (
//     <div className="form">
//       <form>
//         <input
//           value={date}
//           onChange={(e) => {
//             console.log(e.target.value);
//             setDate(e.target.value);
//           }}
//           label="date"
//           type="text"
//         />
//         <input
//           value={amt}
//           onChange={(e) => {
//             console.log(e.target.value);
//             setAmt(e.target.value);
//           }}
//           label="amt"
//           type="Number"
//         />
//         <input type="submit" value="SUBMIT" onClick={handleSubmit} />
//       </form>
//     </div>
//   );
// };
// export default Payment;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ProductDisplay = ({ token_main, wallet, totalCustomers }) => {
  const [value, setValue] = useState(0);
  const [card, setCard] = useState(false);
  const [select, setSelect] = useState(false);
  const [month, setMonth] = useState("Current");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeRadio = (e) => {
    setSelect("true");

    if (e.target.value === "card") {
      setCard(true);
    } else {
      setCard(false);
    }
  };

  return (
    <section>
      <div className="admin-container">
        <div className="admin-outer">
          <AdminNavbar />
          <div className="top-components">
            <div className="admin-box">
              <div className="box-left">
                <p className="box-title">USERS</p>
                <p className="box-value">
                  {totalCustomers ? totalCustomers : 0}
                </p>
                <Link
                  to="/admin-dashboard"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className="box-desc">See All Users</p>
                </Link>
              </div>
              <div className="box-right">
                <div className="box-right-top green">
                  <KeyboardArrowUpSharpIcon />
                  <p>+5%</p>
                </div>
                <div className="box-right-bottom red">
                  <AccountBoxRoundedIcon />
                </div>
              </div>
            </div>
            <div className="admin-box">
              <div className="box-left">
                <p className="box-title">WALLET</p>
                <p className="box-value">₹{wallet}</p>
                <Link
                  to="/admin-dashboard/transaction"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className="box-desc">See Total Balance</p>
                </Link>
              </div>
              <div className="box-right">
                <div className="box-right-top green">
                  <KeyboardArrowUpSharpIcon />
                  <p>+2%</p>
                </div>
                <div className="box-right-bottom green">
                  <Link to="/admin-dashboard/Payment">
                    <button className="gen2">Pay</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="admin-box box-report">
              <div className="box-left">
                <p className="box-title">MONTHLY REPORT</p>
                {/* <p className="box-value">Month</p> */}
                <select
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                  console.log(e.target.value);
                }}
                id="month"
                style={{ padding: "5px" }}
              >
                <option value="current">Current</option>
                <option value="prev">Previous</option>
              </select>
              <a
                href={
                  // month === "prev"
                  month === "current" ? 
                  "http://127.0.0.1:5000/api/v1/admin/thismonthreport"
                  :
                  "http://127.0.0.1:5000/api/v1/admin/lastmonthreport"
                  
                  // : "http://127.0.0.1:5000/api/v1/admin/thismonthreport"
                }
                className="ad-btn"
              >
                Generate
              </a>
              </div>
            </div>
          </div>
          <div className="bor">
            <h2 className="pay_header">Payment Options</h2>
            <div className="pay_info">
              <div className="pay_opt">
                <input
                  type="radio"
                  onChange={handleChangeRadio}
                  name="pay"
                  value="card"
                  id="card"
                />{" "}
                <span>
                  PAYMENT WITH CARD{" "}
                  <img
                    src="https://w7.pngwing.com/pngs/32/363/png-transparent-visa-master-card-and-american-express-mastercard-payment-visa-credit-card-emv-credit-card-visa-and-master-card-background-text-display-advertising-logo-thumbnail.png"
                    alt=""
                    className="pay_img"
                  />
                </span>
              </div>
              <div className="pay_opt">
                <input
                  type="radio"
                  onChange={handleChangeRadio}
                  name="pay"
                  value="check"
                  id="check"
                />{" "}
                <span>PAYMENT WITH CHECK</span>
              </div>
              {/* <div className="pay_box">
                <p className="box-title">CARD</p>
                <form action="/create-checkout-session" method="POST">
                    <button type="submit" className="checkout-btn">Checkout</button>
                  </form>
              </div>
              <div className="pay_box">
                <p className="box-title">CHECK</p>
              </div> */}
            </div>
            {select &&
              (card ? (
                <form action="/create-checkout-session" method="POST">
                  <button type="submit">Checkout</button>
                </form>
              ) : (
                <form action="/create-checkout-session" method="POST">
                  <button type="submit">Check</button>
                </form>
              ))}

            {/* <Box sx={{ width: "15%", margin: "5px auto" }}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className="pay_tabs"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="CARD" />
                  <Tab label="CHECK" />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <form action="/create-checkout-session" method="POST">
                  <button type="submit">Checkout</button>
                </form>
              </TabPanel>

              <TabPanel value={value} index={1}>
              </TabPanel>
            </Box> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Payment() {
  const handle_success = async () => {
    console.log("Payment started");
    await axios.get(`${API.admin_server}/api/v1/admin/fullfillpayment`, {
      headers: {},
    });
    console.log("Payment finished");
  };
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      handle_success();
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
