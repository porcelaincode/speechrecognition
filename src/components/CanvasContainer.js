import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FacebookIcon from '@material-ui/icons/Facebook';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function CanvasContainer() {
    return (
        <div className="leftSplitContainer">
            <div className="topMetaContainer">
                PC Statistics
            </div>
            <div className="resultsMetaContainer" style={{backgroundColor:"transparent", flexDirection:"row", justifyContent:"center"}}>
            <div className="statisticGrid">
                <p>Battery</p>
                <h2>74%</h2>
            </div>
            <div className="statisticGrid">
                <p>CPU Usage</p>
                <h2>79%</h2>
            </div>
            <div className="statisticGrid" style={{width:"50%"}}>
                <p>Apps lagging CPU</p>
                <p>
                <FacebookIcon fontSize="large"/>
                <GTranslateIcon fontSize="large"/>
                <LibraryMusicIcon fontSize="large"/>
                <WhatsAppIcon fontSize="large"/>
                </p>
            </div>
            </div>
        </div>
    )
}

export default CanvasContainer
