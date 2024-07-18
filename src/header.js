import React from 'react';
import './Header.css';
function Header(){
    return(
        <header className='header'>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
            <h1 className='header-title'>TO-DO-LIST</h1>
            <i class="ri-file-list-3-line"></i>
        </header>
    );
}
export default Header;