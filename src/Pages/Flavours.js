import React from "react";
import { useParams } from "react-router-dom";

function Flavours(){
    let { flavour } = useParams()

    return <h2>this is page is for {flavour} coffees</h2>
}

export default Flavours;