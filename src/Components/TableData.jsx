import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import "../App.css";

const TableData = () => {
    const [getValue, setGetValue] = useState([]);
  const api = async () => {
    const response = await fetch("http://localhost:3000/user");
    const data = await response.json();
    setGetValue(data);
  };

  const editFunction =  (id) => {
       fetch(`http://localhost:3000/user/${id}`, {
            method : "PUT",
            headers : {
                "Accept" : "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getValue)
        })
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            console.log(data);
        })
  }
 
  useEffect(() => {
    api();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Password</th>
            <th>User Number</th>
            <th>User Country</th>
            <th>User City</th>
            <th>User Edit</th>
            <th>User Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            getValue.map(elment => 
                <tr key={elment.id}>
                    <td>{elment.id}</td>
                    <td>{elment.userName}</td>
                    <td>{elment.userEmail}</td>
                    <td>{elment.userPassword}</td>
                    <td>{elment.userNumber}</td>
                    <td>{elment.userCountry}</td>
                    <td>{elment.userCity}</td>
                    <td><Button variant="contained" onClick={(id) => editFunction(elment.id)}>Edit</Button></td>
                    <td><Button variant="contained" color="error">Delete</Button></td>
                </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
};

export default TableData;
