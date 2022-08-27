import React from "react";
import { useParams } from "react-router-dom";

const Param = (props) => {
    const { id, segundo } = useParams();

    return (
    <div className="Param">
      <h1>Param</h1>
      <h2>Valor: { id }</h2>
      <h2>Valor 2: { segundo }</h2>
      
    </div>
  );
};

export default Param;
