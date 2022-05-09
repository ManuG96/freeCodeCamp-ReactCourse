import React from "react";
import { useState } from "react";

function funcionesApp(){
  const [numClicks, setNumClicks] = useState(0);
  const clickContador = () => {
    setNumClicks(numClicks + 1);
  }
  const reiniciarContador = () => {
    setNumClicks(0);
  }
}
  
export default funcionesApp;