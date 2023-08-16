import React from "react";

function NavComponent(){
    return(
        <>
           {logo}
            {<div style={styling}></div>}
            <input id="TextField" placeholder="Search"></input>
            <button id="btn">Find</button>
            <h5>Shivansh Gupta</h5>
            <h5>I am a Cart</h5>
        </>
    );
}

const logo=React.createElement(
     "img",{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvdx0qTWxRGYoiWTjgV6DWOeP3fuCPEPUZTkyXX0&s"
     }
)

const styling={
    backgroundColor:"lightblue",
    width:'100',
    height:'100px'
}

export default NavComponent;