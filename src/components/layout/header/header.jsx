import React from 'react';
import './HeaderStyle.css';
const Header = () => {
    return (
        <div id="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 bg-danger">
                        <a className="header__login">Đăng nhập</a>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};
export default Header;
