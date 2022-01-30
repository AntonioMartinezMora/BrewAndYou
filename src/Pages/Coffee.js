import React from "react";
import { useParams } from "react-router-dom";

function Coffee(){
    let { coffee } = useParams()

    return <h2>Coffee</h2>
}

export default Coffee;