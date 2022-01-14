import { Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CirclePicker, GithubPicker } from "react-color"

function Editor() {

    const [panelDimensions, setPanelDimensions] = useState(8)
    const [hideOptions, setHideOptions] = useState(false)
    const [hidePanel, setHidePanel] = useState(true)
    const [buttonText, setButtonText] = useState("Start Drawing")
    const [selectedColor, setSelectedColor] = useState("#f44336")

    function initializeDrawingPanel() {
        setHideOptions(!hideOptions)
        setHidePanel(!hidePanel)

        buttonText === "Start Drawing"
            ? setButtonText("Reset")
            : setButtonText("Start Drawing")
    }

    function changeColor(color) {
        setSelectedColor(color.hex)
    }


    return (
        <div id="editor">
            <Typography variant="h1">Pixel Editor</Typography>
            {hidePanel && <Typography variant="h4">Enter Panel Dimensions</Typography>}

            <div id="options">
                <div className="option">
                    {hidePanel && <Input type="number" className="panelInput" defaultValue="8" />}
                </div>
            </div>
            <Button color="primary" variant="contained" onClick={initializeDrawingPanel}>{buttonText}</Button>

            <GithubPicker color={selectedColor} onChangeComplete={changeColor} />

        </div>
    )
}

export default Editor