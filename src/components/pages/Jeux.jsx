import React from 'react'
import Navbar from '../navbar/Navbar';
import ElementsReminder from '../ElementsReminder/ElementsReminder';

function Jeux() {
    return (
        <div style={{ background: 'beige', height: '100vh', width: '100vw' }}>
            Jeux
            <ElementsReminder />
        </div>
    )
}

export default Jeux