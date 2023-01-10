import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogDetails.css'

class DogDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dog } = this.props;
        return (
            <div className="DogDetails row justify-content-center mt-4">
                <div className="col-lg-5">
                    <div className="DogDetails-card card">
                        <div className="DogDetails-img">
                            <img src={dog.src} className="card-img-top" alt={dog.name} />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{dog.name}</h2>
                            <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                dog.facts.map((el, i) => <li className="list-group-item" key={i}>{el}</li>)
                            }
                        </ul>
                        <div className="card-body">
                            <Link to="/" className="btn btn-info">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogDetails;