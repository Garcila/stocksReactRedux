import React from 'react';

const Header = (props) => {
    return(
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand" href="#">{props.title}</a>
        </nav>
    );
}

export default Header;