//i wanted to include a drop down list for navigating. but when i "un-comment the commented parts, 
// everything just disappears. any help would be deeply appreciated"

import React from 'react'
// import listData from '../../assets/listData.js'

export default function Navbar() {
    // const items = listData.map(elem => {
    //     return (
    //         <List 
    //             items = {elem}
    //         />
    // )
    // })

    return (
        <nav className="navbar">
            <img src='../assets/globe-64.png' className='globe-icon'></img>
            <h4 className='nav--title'>my travel journal</h4>
            {/* <div className="list">
                <ul>
                    {items}
                </ul>
            </div> */}
        </nav>
    )
}