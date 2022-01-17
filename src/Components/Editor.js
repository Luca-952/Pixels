import { Button, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { CompactPicker } from "react-color"
import DrawingPanel from './DrawingPanel';
import header from '../Sprites/pixelGenHeader.png'
import enter from '../Sprites/enter.png'

function Editor() {


    const [panelDimensions, setPanelDimensions] = useState(8)
    const [hideOptions, setHideOptions] = useState(false)
    const [hidePanel, setHidePanel] = useState(true)
    const [buttonText, setButtonText] = useState("Start Drawing")
    const [selectedColor, setSelectedColor] = useState("#f44336")

    //Lets Drawing Panel appear while the Select component disappears
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
            <br />
            <img src={header} alt="header" />
            <br /><br />


            {/*These two components are hidden once the drawing state is active*/}
            {hidePanel && <img src={enter} alt="enter" />}
            <br /><br />
            <div id="options">
                <div className="option">
                    {hidePanel &&
                        <Select variant="outlined"
                            color="primary"
                            defaultValue={panelDimensions}
                            onChange={(e) => { setPanelDimensions(e.target.value) }}>
                            <MenuItem value={8}>8x8</MenuItem>
                            <MenuItem value={12}>12x12</MenuItem>
                            <MenuItem value={16}>16x16</MenuItem>
                            <MenuItem value={32}>32x32</MenuItem>
                        </Select>}



                </div>
            </div>
            <br />



            <Button color="primary" variant="contained" onClick={initializeDrawingPanel}>{buttonText}</Button>
            <br /> <br />
            <div align="center">

                {/*The chosen Colour is passed via props to the Drawing Panel*/}
                {hideOptions && <CompactPicker color={selectedColor} onChangeComplete={changeColor} />}
            </div>
            {hideOptions && (<DrawingPanel
                dimensions={panelDimensions}
                selectedColor={selectedColor}
            />)}

        </div>
    )
}

export default Editor