import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import FormIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon  fontSize="large" className="header_icon" />
            </IconButton>
            <img className="header_logo" src="data:image/png;base64,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" alt="Logo" />
            <IconButton> 
                <FormIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}



export default Header;
