import React from 'react';

const Header = (props) => {
    return(
        <div className="header">
          <a className="title" href="#">{props.title}</a>
        </div>
    );
}

export default Header;