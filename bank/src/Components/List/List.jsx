import React from "react";
import { Box, Btn } from "../Ui";
import { lista } from "../../info";
import Card from "../Cards/Card";

const Lista = ()=>{
  return <Box> 
    {
      lista.cargos.map((cargo,i)=>{
        return <Card key={i} cargo={cargo}/>
      })
    }
    <Btn>Ver mas</Btn>
  </Box>
}

export default Lista