import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

function Nav1(){
    const url="https://kontests.net/api/v1/all";
    const[count,setcount]=useState([]);

    useEffect(()=>{
        axios.get(url).then(res=>{
            console.log(res);
            setcount(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[])

    return(
        <>
        <Nav></Nav>
        <div style={{backgroundColor:"#262626"}}>
        <center> <div class="card" style={{border:"none",backgroundColor:"#262626"}}>
  <div class="card-body">
  <h1 className='bg'>Competitive Coding Contest</h1>
  </div>
</div></center>
        <ul class="me-5">
            
            {
                count.map(res1=> <div class="card  mb-3"  style={{backgroundColor:"#262626",border:1+"px solid black"}}>
                <div class="card-header bg-transparent " style={{ fontFamily: "Segoe UI",fontWeight: "bold", color:"whitesmoke",border:1+"px solid black",backgroundColor:"red"}}><h2>Contest Site: {res1.site}</h2></div>
                <div class="card-body text-success">
                  <h5 class="card-title" style={{ fontFamily: "Segoe UI",fontWeight: "bold"}}>Contest Name: {res1.name}</h5>
                  <p class="card-text" style={{ fontFamily: "Segoe UI",fontWeight: "bold"}}>{res1.site} is a Coding Platform. Below find the Contest Link</p>
                </div>
                <div class="card-footer bg-transparent" style={{border:1+"px solid black",fontFamily: "Segoe UI",fontWeight: "bold"}}><a href={res1.url} class="text-decoration-none link-success">Contest Link</a></div>
              </div>)
            }
            </ul>
            </div>
        </>
    )
}
export default Nav1;


