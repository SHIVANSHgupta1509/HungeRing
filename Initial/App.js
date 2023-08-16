const a=React.createElement(
    "div",{
        id:"hey",
        id2:"ney",
        h1:"hey",
        style:{
            fontSize:100,
            background:"aquamarine"
        }
    },
   "<h1>hey</h1>",
   "SG"
);
{/* <div id="hey" id2="ney" h1="hey" >"<h1>hey</h1>","SG"</div> */}

const b=React.createElement(
    "h1",{
        id:"h1"
    },
    "I am h1"
)

const c=React.createElement(
    "div",{
        id:"container"
    },
    [a,b]
)



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(c);
