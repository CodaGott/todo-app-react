import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Todoapp = () => {
    const firstName = "Dozie"

    const [name, setName] = useState("Don Dozie")

    useEffect( ()=> {
        console.log("Hello my name is", name);
    })
    return (
        <div>
    <Header/>
    <div>
      <h1>Hello world</h1>
      <label htmlFor="name" style={{
          marginRight: "1rem"
      }}>Name</label>
      <input
       type="text" 
       id='name' 
       onChange={(e) =>setName(e.target.value)}
       value={name}
       />
      
      <h3>I'm {firstName} by name</h3>
      <Footer/>
    </div>
        </div>
    );
};

export default Todoapp;