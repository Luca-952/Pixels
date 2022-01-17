import React, { useRef } from "react"
import Row from "./Row"
import { exportComponentAsPNG, exportComponentAsJPEG } from 'react-component-export-image'
import { Button } from "@mui/material"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../Styles/drawingPanel.scss'

function DrawingPanel(props) {

    const { dimensions, selectedColor } = props
    const panelRef = useRef()


    //Various Rows of Pixels build a cubic Drawing Panel. The pixel.scss and the row.scss files are crucial for the right positioning of each pixel
    let rows = []

    for (let i = 0; i < dimensions; i++) {
        rows.push(<Row key={i} dimensions={dimensions} selectedColor={selectedColor} />)
    }



    return (
        <div id="drawingPanel">
            <div id="myCanvas" ref={panelRef} align="center">
                {rows}
            </div>

            {/*Two Buttons for exporting the Drawing Panel*/}
            <div>

                <Button variant="contained" color="primary"
                    onClick={() => exportComponentAsPNG(panelRef)}
                    startIcon={<FileDownloadIcon />}
                >
                    PNG
                </Button>

                <Button variant="contained" color="primary"
                    onClick={() => exportComponentAsJPEG(panelRef)}
                    startIcon={<FileDownloadIcon />}>
                    JPEG
                </Button>



            </div>
        </div>
    )
}

export default DrawingPanel