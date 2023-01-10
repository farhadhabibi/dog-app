import React, { Component } from 'react';
import { Routes, Route, useParams, Navigate, Outlet } from 'react-router-dom';
import Doglist from './Doglist';
import DogDetails from './DogDetails';


class Routers extends Component {
    render() {
        const GetDog = () => {
            const dogName = useParams();
            const currentDog = this.props.dogs.find(dog => dogName.name.toLowerCase() === dog.name.toLowerCase());
            if (currentDog) return <DogDetails dog={currentDog} />
            return <Navigate to="/" replace />
        }
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Doglist dogs={this.props.dogs} />} />
                    <Route path="/:name" element={<GetDog />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

            </div>
        )
    }
}
export default Routers;