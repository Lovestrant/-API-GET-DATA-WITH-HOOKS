import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Body() {
    const [data, getData ] = useState([]); 
    const URL = "http://jsonplaceholder.typicode.com/users";

    useEffect(() =>{
        axios.get(URL).then(res => {
            console.log(res);
            getData(res.data);
        }).catch(err => {
            console.log(err)
        })
        
    }, []);

  return (
    <div>
        <div className = "container">
           <div className = "col-sm-12">
            <h1 style={{color: 'green'}}>DISPLAYING DATA FROM AN API WITH REACT HOOK</h1>
            <tbody>
                <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>address</th>
                </tr>

           
            {data?.map((item, i) => (
                <tr key={i}>
                 <td>{item.id}</td>
                 <td>{item.name}</td>
                 <td>{item.username}</td>
                 <td>{item.email}</td>
                 <td>
                 <p>street: {item.address.street}</p>
                 <p>suite: {item.address.suite}</p>
                 <p>city: {item.address.city}</p>
                 <p>zipcode: {item.address.zipcode}</p>
                 <p>lat: {item.address.geo.lat}</p>
                 <p>lng: {item.address.geo.lng}</p> 
                 </td>              
                </tr>

            ))}
              </tbody>
           </div>  
        </div>
    </div>
  )
}

export default Body