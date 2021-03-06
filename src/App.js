import React, { Component } from 'react';
import Header from "./Header";
import './App.css';

class App extends Component {

    deleteHandler() {
        alert("Delete Clicked");
    }

    render() {
        let subscribers = [
            {
                id: 1,
                name: "Aakash",
                phone: "1234567890"
            },
            {
                id: 2,
                name: "Tyagi",
                phone: "0987654321"
            },
            {
                id: 3,
                name: "Hello",
                phone: "7894561230"
            }
        ]
        return (
            <div >
                <Header heading="Phone Directory" />
                <div className="component-body-container" >
                    <button className="custom-btn add-btn" > Add </button>
                    <div className="grid-container heading-container" >
                        <span className="grid-item name-heading" > Name </span>
                        <span className="grid-item phone-heading" > Phone </span>
                    </div>
                    {
                        subscribers.map(sub => {
                            return <div key={sub.id} className="grid-container">
                                <span className="grid-item">{sub.name}</span>
                                <span className="grid-item"> {sub.phone}</span>
                                <span className="grid-item action-btn-container" >
                                    <button className="custom-btn delete-btn" onClick={this.deleteHandler}>Delete</button>
                                </span>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;