import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Head from "./head";
import Body1 from "./body";
function Github(){
    return(
        <>
        
        <Head></Head>
        <Body1></Body1>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("display"));
root.render(<Github/>);
