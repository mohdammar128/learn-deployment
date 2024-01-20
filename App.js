import React, { useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";


function App()
{

    const [quote,setQuote]=useState();
    const random=Math.floor(Math.random()*10);
   
    useEffect(()=>{
    getQuotes();
    },[])

    const getQuotes = async () => {
        try {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json(); // Convert response to JSON
    
            console.log(data[random]);
            setQuote(data[random]);
        } catch (error) {
            console.error("Error fetching quotes:", error);
        }
    }
    
    return <div>
       <h1> Hello Mohd Ammar How are you</h1>
       <p>your toadays quote <br/>{quote?.text}</p>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)