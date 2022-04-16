import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Event = () => {
    const [data, setData] = useState([]);
    
    const getData = async(e) => {
        e.preventDefault();

        await axios.get("http://localhost:4000/event/get")
        .then(res => {
            setData(res.data)
                
        })
        .catch(err => {
            console.log(err)
        })
    }

  




  return (
    <div> 
        <h1> This is our event Data </h1>
        <button className="button" onClick= {getData} >
            Get Data
        </button>
        <br/>
        <div>
            {data.map(item => (
                 <div className = "Hello ">
                     <img src=  {item.eventImg} alt=""/>
                     <br/>
                     {item.eventName} 
                     <br/>
                     {item.eventsubtext} 
                        <br/>
                     {item.eventDate}
                        <br/>
                     {item.eventCategory}
                        <br/>
                     {item.eventDetailTxt}
                        <br/>
                     {item.eventFee}
                        <br/>
                    {item.event_isFeatured}
                    <br/>
                    <button onClick= {item.eventapplynow}> Apply Now</button>
                    <br/>
                    <br/>
                     <br/>



                 </div>

            ))}
        </div>
    </div>
  )
}

export default Event