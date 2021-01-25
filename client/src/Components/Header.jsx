import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutPage from '../Pages/About';

function Header(){
    return (
        <header>
            <h1>Manas pieziimes</h1>
            <Router>
                <Link to="./Pages/About">Par aplikaciju</Link>
            </Router>
            <Router>
                <Switch>
                    <Route exact path="/About" component={AboutPage}/>
                </Switch>
            </Router>
            
        </header>
    );
}


export default Header;
