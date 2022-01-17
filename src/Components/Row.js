import React from 'react'
import Pixel from './Pixel'
import '../Styles/row.scss'

function Row(props) {

    const { dimensions, selectedColor } = props

    //A Pixel-Array is generated which builds a row of the grid
    let pixels = []

    for (let i = 0; i < dimensions; i++) {
        pixels.push(<Pixel key={i} selectedColor={selectedColor} />)
    }

    return (
        <div className="row">
            {pixels}
        </div>
    )
}

export default Row