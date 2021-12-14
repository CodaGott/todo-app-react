import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Todoapp = () => {
    const name = "Dozie"
    return (
        <div>
    <Header/>
    <div>
      <h1>Hello world</h1>
      <h3>I'm {name} by name</h3>
      <Footer/>
    </div>
        </div>
    );
};

export default Todoapp;