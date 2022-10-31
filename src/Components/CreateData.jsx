import React, { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableData from "./TableData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const CreateData = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   user
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassowrd] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userCity, setUserCity] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    if (userName === "") {
      toast("Enter User Name");
    } else if (userEmail === "") {
      toast("Enter User Email");
    } else if (userPassword === "") {
      toast("Enter User Password");
    } else if (userNumber === "") {
      toast("Enter User Number");
    } else if (userCountry === "") {
      toast("Enter User Country");
    } else if (userCity === "") {
      toast("Enter User City");
    } else {
      toast("Thanks");
      console.log(
        userName,
        userEmail,
        userPassword,
        userNumber,
        userCountry,
        userCity
      );

      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          userEmail,
          userPassword,
          userNumber,
          userCountry,
          userCity,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setOpen(false);
          window.location.reload()
        });
    }
  };

  return (
    <>
      <div className="container">
        <Button
          variant="contained"
          className="button_container"
          onClick={handleOpen}
        >
          Create Data
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="form">
              <form action="" onSubmit={formSubmit}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ textAlign: "center", p: "10px 0", color: "#FFFFFF" }}
                >
                  Form Data
                </Typography>
                <TextField
                  type="text"
                  label="Enter Your Name"
                  variant="outlined"
                  className="inputFiled"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  type="email"
                  label="Enter Your Email"
                  variant="outlined"
                  className="inputFiled"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <TextField
                  type="password"
                  label="Enter Your Password"
                  variant="outlined"
                  className="inputFiled"
                  onChange={(e) => setUserPassowrd(e.target.value)}
                />
                <TextField
                  type="number"
                  label="Enter Your Number"
                  variant="outlined"
                  className="inputFiled"
                  onChange={(e) => setUserNumber(e.target.value)}
                />
                <TextField
                  type="text"
                  label="Enter Your Country"
                  variant="outlined"
                  className="inputFiled"
                  onChange={(e) => setUserCountry(e.target.value)}
                />
                <TextField
                  type="text"
                  label="Enter Your City"
                  variant="outlined"
                  className="inputFiled"
                  onChange={(e) => setUserCity(e.target.value)}
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <TableData />
    </>
  );
};

export default CreateData;
