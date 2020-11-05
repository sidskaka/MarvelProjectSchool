import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from 'axios'

const Login = () => {

    // si on arrive pas a accéder au history/push des props l'autre alternative c'est d'utiliser les hooks avec useHistory
    const history = useHistory();
    //console.log(history)

    const donnees = {
        email: '',
        password: ''
    }

    const [donneesEntrees, setDonnees] = useState(donnees)

    const submitDonnees = e => {
        e.preventDefault();
        //console.log(donneesEntrees)
        axios({
            method: 'POST',
            url: 'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username: email,
                password: password,
            }
        })
            .then(res => {
                //console.log(res.headers['x-access-token'])
                localStorage.setItem('token', res.headers['x-access-token'])
                history.push('/bienvenue')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = e => {
        setDonnees({
            ...donneesEntrees, [e.target.id]: e.target.value
        })
    }

    const { email, password } = donneesEntrees;

    const button_connexion = email === '' || password === '' ?
        <button className="button-form" disabled>Connexion</button> : <button className="button-form">Connexion</button>
    return (
        <div>
            <div className="signUpLoginBox">
                <div className="slContainer" style={{}}>
                    <div className="formBoxLeftSignup" style={{}}>

                    </div>
                    <div className="" style={{}}>
                        <h2 className="title-form" style={{ textAlign: "center" }}>Connexion</h2>

                        <form className="inscription-form" onSubmit={submitDonnees}>
                           
                            <div className="form-control-style">
                                <input className="input-text" type="email" id="email" autoComplete="on" onChange={handleChange} placeholder="email" />
                            </div>
                            <div className="form-control-style">
                                <input className="input-text" type="password" id="password" autoComplete="off" onChange={handleChange} placeholder="mot de passe" />
                            </div>
                            {button_connexion}
                        </form>
                    </div>
                </div>

            </div>
            <br />
            <div className="">
                <Link to="/" className="lien-retour">Retour accueil</Link>
            </div>
        </div>
    )
}

export default Login

