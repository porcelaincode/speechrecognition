import React from 'react'

import MicRoundedIcon from '@material-ui/icons/MicRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';

function HeaderComponent() {
    return (
        <div className="headerContainer">
            <a 
                href="https://www.github.com/porcelaincode/speechai" 
                style={{
                    color: "#ffffff55",
                    textDecoration: "none",
                    fontSize: "small",
                    backgroundColor: "#ffffff05",
                    borderRadius: "5px",
                    paddingBottom: "1px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <MicRoundedIcon fontSize="small"/>
                github repo
                <CodeRoundedIcon fontSize="small"/>
            </a>
        </div>
    )
}

export default HeaderComponent
