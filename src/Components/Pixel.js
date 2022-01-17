import React, { useState } from 'react'
import '../Styles/pixel.scss'

function Pixel(props) {

    const { selectedColor } = props

    const [pixelColor, setPixelColor] = useState("#fff")
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    //changes the current pixel's colour
    function applyColor() {
        setPixelColor(selectedColor)
        setCanChangeColor(false)
    }

    //Preview of the Pixelcolor that can be changed
    function hoverPixel() {
        setOldColor(pixelColor)
        setPixelColor(selectedColor)
    }

    //Does not change current Pixel's colour if the mouse was not clicked
    function reset() {
        if (canChangeColor) {
            setPixelColor(oldColor)
        }

        setCanChangeColor(true)
    }

    return (
        <div className="pixel"
            style={{ backgroundColor: pixelColor }}
            onClick={applyColor}
            onMouseEnter={hoverPixel}
            onMouseLeave={reset}
        >
        </div>
    )
}

export default Pixel