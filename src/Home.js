import React from 'react';
import './Home.css';
import Banner from "./Banner";
import Card from "./Card.js";


function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home_section">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="home_section">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Home
