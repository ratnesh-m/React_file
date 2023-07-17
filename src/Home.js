import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import { Link } from "react-router-dom";
import Detail from "./Detail";




export default function Home(props) {
    const [data, setData] = useState([])
    const [input, setInput] = useState("");

    useEffect(() => {
        let input = fetch('https://restcountries.com/v2/all').then((res) => res.json()).then(val => setData(val))
    }, [])
    // console.log(data)

    function handleChange(e) {
        console.log(e.target.value)
        setInput(e.target.value)
        const search = data.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setData(search)
    }

    return (
        <>

            <div style={{ textAlign: "center", padding: "5px", width: "100%", height: "20px", backgroundColor: "greenyellow", justifyContent: "center", padding: "60px" }}>


                <input type="text" onChange={handleChange} value={input} />

                {/* <button>Search</button> */}
            </div>
            {data.map((d, i) => {
                return (
                    <div key={i} className='mainDiv'>
                        <div>
                            <img className='image' src={d.flag} />
                            <div className='minDiv'>
                                <h1>{d.name}</h1>
                                <h2>{d.capital}</h2>
                                <h2>{d.population}</h2>
                                <h2>{d.region}</h2>
                               <button onClick={()=>{
                                props.clickFunction(d)
                               }}>Explore</button>
                               
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
} 