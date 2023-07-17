import React from "react";
// import { useParams } from "react-router-dom";
// import { useState,useEffect } from "react";

export default function Detail(props){
    console.log(props)

    
//  const {name} = props.

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     let input = fetch(`https://restcountries.com/v2/${name}`).then((res) => res.json()).then(val => setData(val))
    // }, [])


    return(
        <>
        <div>
        <h1>Details:</h1>
        {/* {props.map((country,i)=>{
            return(
                <div key={i}>
                    <h2>{country.name}</h2>
                </div>
            )
        })} */}
        <div style={{border:"2px solid black" , width:"250px",margin:"15px",padding:"10px", textAlign:"center"}}>
           <img  style={{height:"100px" ,width:"100px"}} src={props.countrydata.flag} />
      <div style={{border:"1px solid green"}}> <h2>{props.countrydata.name}</h2> 
       <h2>{props.countrydata.capital}</h2> 
       <h2>{props.countrydata.population}</h2> 
       <h2>{props.countrydata.region}</h2> </div>
       </div>
        </div>
     </>
    )
}