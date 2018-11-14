import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-default" >
            <img className="navbar-brand size-logo-image" alt="Qubit.tv - Mirá películas online en HD sin cortes" src="https://ringo.cdnar.net/assets/public/qubit/production/logo-qubit-azul.svg" ></img>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                <span className="icon-toggler"> <FontAwesomeIcon icon="bars" /></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            EXPLORAR </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Inicio</a>
                            <a className="dropdown-item" href="#">Bélico</a>
                            <a className="dropdown-item" href="#">Acción</a>
                            <a className="dropdown-item" href="#">Clásico</a>
                            <a className="dropdown-item" href="#">Terror</a>
                        </div>
                    </li>
                    <NavLink className="nav-item nav-link" activeClassName="active" exact to="/home">INVITA A TUS AMIGOS</NavLink>
                </ul>
                <ul><br /></ul>
                <ul className="navbar-nav mr-left">
                    <li className="nav-item">
                        <a href="#" className="rounded-circle navbar__search-button btn" >
                            <FontAwesomeIcon icon="search" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">
                            <img src="http://jxnblk.com/avatar.png" alt="avatar" className="size-user-image" />Felipe
                        </span>
                    </li>
                    <li className="nav-item">
                        <a href="https://ayuda.qubit.tv/hc/es" alt="base.footer.links.help_center" className="rounded-circle navbar__help-button btn"><FontAwesomeIcon icon="question-circle" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};



export default HeaderNav;
