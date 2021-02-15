import React from 'react';
import { Button } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';

function FooterContainer() {
    return (
        <div className="recordingContainer">
            <div className="waveContainer">
                <div className="wave"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>
            </div>
            <div className="buttonContainer">
                <Button style={{borderRadius: "200px", height:"5em", width:"5em",}}
                variant="outlined" color="primary" size="large">
                    <MicIcon fontSize="large" />
                </Button>
            </div>
        </div>
    )
}

export default FooterContainer
