import React, { Component } from 'react';
import * as iconLogo from '../item/Icon/07.logo.png';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-header">
        <div className="col-2">
        <NavLink className="navbar-brand" to="/#"><img src={iconLogo} alt="Logo" width="100px" height="70px"/></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        </div>
        <div className="collapse navbar-collapse col-10" id="navbarSupportedContent">
          <div className="nav-tiltle col-10">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Trang chủ <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/#">Dự án</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Về chúng tôi</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/#">Tin tức</NavLink>
            </li>
          </ul>
          </div>
          <div className="btn-contact col-2">
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Liên hệ</button>
          </form>
          </div>
        </div>
      </nav>

    );
  }
}

export default Nav;