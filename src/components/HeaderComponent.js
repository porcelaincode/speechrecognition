import React from 'react'

import MicRoundedIcon from '@material-ui/icons/MicRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';

function HeaderComponent() {
    return (
        <div className="headerContainer">
            <a href="https://www.github.com/porcelaincode/speechai" className="iconLink">
                <MicRoundedIcon fontSize="small"/>
                github repo
                <CodeRoundedIcon fontSize="small"/>
            </a>
        </div>
    )
}

export default HeaderComponent
