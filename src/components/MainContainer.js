import React, { useState } from 'react'
import {IconButton, Drawer, Switch, Divider, ButtonGroup, Button, Slider, Chip } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import CachedIcon from '@material-ui/icons/Cached';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';


function valuetext(value) {
    return `${value}°C`;
}

function MainContainer(props) {
    const [state, setState] = useState(false);

    const toggleDrawerStatus = () => { 
        setState(true)
    } 
    const closeDrawer = () => {
        setState(false)
    }

    const handleDelete = () => {
        console.log("Delete intereset")
    }

    return (
        <div className="mainContainer">
            <div className="dialogueContainer">
                <p className="dialogueStyle">
                    Assistant: Hello There!
                </p>
                <p className="dialogueYourStyle">
                    You: {props.speech}
                </p>
            </div>
            <div className="sideControlsContainer">
                <IconButton color="primary" aria-label="Settings" onClick={toggleDrawerStatus}>
                    <SettingsIcon fontSize="large"/>
                </IconButton>
                {/* <IconButton color="primary" aria-label="Settings" onClick={toggleDrawerStatus}>
                    <SettingsIcon fontSize="large"/>
                </IconButton> */}

                <Drawer 
                    variant="temporary"
                    open={state}
                    onClose={closeDrawer}
                    anchor="right"
                > 
                    <div className="drawerStyle">
                        <div className="drawerTile" style={{ overflow:"hidden", flexDirection:"column"}}>
                            Your Interests
                            <div>
                                <Chip style={{fontSize: "medium", margin: "3px"}} label="Programming" color="secondary" onDelete={handleDelete} />
                                <Chip style={{fontSize: "medium", margin: "3px"}} label="Music" color="secondary" onDelete={handleDelete} />
                                <Chip style={{fontSize: "medium", margin: "3px"}} label="UI/UX" color="secondary" onDelete={handleDelete} />
                                <Chip style={{fontSize: "medium", margin: "3px"}} label="Football" color="secondary" onDelete={handleDelete} />               
                                <IconButton color="secondary" aria-label="delete" size="small">
                                    <AddIcon />
                                </IconButton>         
                            </div>
                        </div>
                        <Divider variant="middle"/>
                        <div className="drawerTile">
                            <Switch color="secondary" size='medium' onChange={console.log("toggled")}/>
                            Zen Mode
                        </div>
                        <div className="drawerTile">
                            <Switch color="secondary" size='medium' onChange={console.log("toggled")}/>
                            Dont Speak
                        </div>
                        <div className="drawerTile">
                            <Switch color="secondary" size='medium' onChange={console.log("toggled")}/>
                            Smart Home Mode
                        </div>
                        <div className="drawerTile">
                            <Switch color="secondary" size='medium' onChange={console.log("toggled")}/>
                            Do Not Disturb
                        </div>
                        
                        <Divider variant="middle"/>
                        <div className="drawerTile" style={{justifyContent: 'center', flexDirection:"column"}}>
                            Meta Control
                            <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
                                <IconButton style={{margin: "0 10px"}} color="secondary" aria-label="Add custom command">
                                    <AddIcon fontSize="large" />
                                </IconButton>
                                <IconButton style={{margin: "0 10px"}} color="secondary" aria-label="Refresh Assistant">
                                    <CachedIcon fontSize="large" />
                                </IconButton>
                                <IconButton style={{margin: "0 10px"}} color="secondary" aria-label="Check voice settings">
                                    <SettingsVoiceIcon fontSize="large" />
                                </IconButton>
                            </ButtonGroup>
                        </div>
                        <Divider variant="middle"/>
                        <div className="drawerTile" style={{ overflow:"hidden", flexDirection:"column"}}>
                            Slider Component
                            <Slider
                                color="secondary"
                                defaultValue={20}
                                step={5}
                                marks
                                min={10}
                                max={50}
                            />
                        </div>
                        <Divider variant="middle"/>
                        
                        <div className="drawerFooterStyle">
                            
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default MainContainer
