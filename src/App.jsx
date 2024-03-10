import React from 'react'
import Navbar from './components/Navbar.jsx'
import data from '../assets/data.js'
import Card from './components/Card.jsx'

export default function App() {
    const cards = data.map(item => {
        return <Card 
            items = {item}
        />
    })
    return (
        <div className="parent">
            <Navbar />
            <div className="cards--container">
            {cards}
            </div>
        </div>
    ) 
}