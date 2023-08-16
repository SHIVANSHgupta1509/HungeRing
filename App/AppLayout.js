import React from "react";
import ReactDOM from "react-dom/client";
import NavComponent from "./src/components/Nav";
import body from "./src/components/Body";
import Footer from "./src/components/Footer";


const App=()=>{
    return(
        <>
    {<NavComponent/>}
    {body}
    {Footer()}
    </>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);