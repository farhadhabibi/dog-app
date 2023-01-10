import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Doglist.css'

class DogList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.dogs.map(dog => (
            <div className="Dog col-md-4 text-center" key={dog.name}>
                <img src={dog.src} alt={dog.name} />
                <h3><Link className="btn mt-2" to={`/${dog.name}`}>{dog.name}</Link></h3>
            </div>
        )
        )
        return (
            <div className="Doglist">
                <h1 className="display-1 text-center my-4">Dog List!</h1>
                <div className="row">
                    {data}
                </div>
            </div >
        )
    }
}

export default DogList