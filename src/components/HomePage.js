import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        //todo routing menu my //github portfolio //homepage //about app //contacts
        return (
                <header>
                    <nav>
                        <ul className="header-menu">
                            <li>Home</li>
                            <li>About</li>
                            <li>See more</li>
                            <li>contacts</li>
                        </ul>
                    </nav>
                </header>
        );
    }
}

export default HomePage;