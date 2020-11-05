import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/Main"
import Login from "../components/Login"
import Sinscrire from "../components/Sinscrire"
import ErrorPage from "../components/RedirectErrorPage"
import BienvenuePage from "../components/BienvenuePage"
import Details from "../components/BienvenuePage/Details"

class App extends Component {
    render() {
        return (
			<Router>
				<Header />

				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/bienvenue" component={BienvenuePage} />
					<Route path="/details/:id" component={Details} />
					<Route path="/login" component={Login} />
					<Route path="/sinscrire" component={Sinscrire} />
					<Route component={ErrorPage} />
				</Switch>

				<Footer />
			</Router>    
        )
    }
}

export default App
