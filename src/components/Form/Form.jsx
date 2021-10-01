import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from 'axios' ;
import { Container } from "@material-ui/core";

const initialValue = {
  name:"",
  email: "",

}


const Table = styled.form`
position: relative;
top: 200px;
  width: 500px;
  display: flex;
  flex-direction: column;
`;

function Form() {
  const [values, setValues] = useState({initialValue});
  const history = useHistory()
  console.log(values);


  function onChange(ev){
    const {name, value} = ev.target
    console.log({name, value})

    setValues({...values, [name]:value})
  }

  function onSubmit(ev) {
    ev.preventDefault();
    
    axios.post('https://my-json-server.typicode.com/tractian/fake-api/users', values)
    .then((response)=>{
      console.log(response)
      history.push("/users")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

    return (
      <Container maxWidth='sm' sx={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'250px'}} >

    <Table onSubmit={onSubmit} >
      <TextField 
        onChange={onChange}
        sx={{ position: 'relative', bottom:'10px' }}
        id="name"
        label="Nome" 
        name="name" 
        variant="outlined" />
      <TextField 
        onChange={onChange}
        id="email"
        name="email"
        label="Email"
        type="email" 
        required
        variant="outlined" />
      <Button
        color="primary"
        type="submit"
        variant="contained"
        sx={{ marginTop : '10px' ,width: "50px" }}>
        Save
      </Button  >
    </Table>
    </Container>
  );
}

export default Form;
