import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <li className="nav-item" key={dog.name}>
                <NavLink className="nav-link" to={`/${dog.name}`}>
                    {dog.name}
                </NavLink>
            </li>
        ))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dogs">Dog App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>
                                    Home
                                </NavLink>
                            </li>
                            {dogLinks}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;