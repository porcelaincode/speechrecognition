import React, {useState} from 'react';
import { Button, Modal, IconButton } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import CloseRoundedIcon from "@material-ui/icons/Close";

import CanvasContainer from "./CanvasContainer";
import AppsContainer from "./AppsContainer";
import SplitMainContainer from "./SplitMainContainer";

function MetaFooterContainer() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    return (
        <div className="metaFooterContainer">
            <div className="metaContainer">
            </div>
            <div className="buttonContainer">
                <Button style={{borderRadius: "200px", height:"5em", width:"5em",}}
                variant="outlined" color="primary" size="large" onClick={handleOpen}>
                    <AppsRoundedIcon fontSize="large" />
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <>
                    <div className="modalGridContainer">
                        <div className="modalMainContainer">
                            <div className="modalLeftContainer">
                                <div className="splitContainer">
                                    
                                    <AppsContainer/>
                                </div>
                                <div className="splitContainer">
                                    <CanvasContainer/>
                                </div>
                            </div>
                            <div className="modalRightContainer">
                                <SplitMainContainer/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="modalCloseContainer">
                        <IconButton aria-label="delete" onClick={handleClose}>
                            <CloseRoundedIcon fontSize="large" style={{ color: "white" }}/>
                        </IconButton>
                    </div>
                    </>
                </Modal>
            </div>
        </div>
    )
}

export default MetaFooterContainer
