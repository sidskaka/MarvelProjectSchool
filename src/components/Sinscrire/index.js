import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'

const Sinscrire = () => {
    const donnees = {
        prenom: '',
        nom: '',
        email: '',
        password: '',
        password_confirm: ''
    }
    const [donneesEntrees, setDonnees] = useState(donnees)
    console.log(donneesEntrees)

    const handleChange = e => {
        setDonnees({
            ...donneesEntrees, [e.target.id]: e.target.value
        })
    }

    const submitDonnees = () => {
        axios({
            /*method: 'POST',*/

        })
    }

    const { prenom, nom, email, password, password_confirm } = donneesEntrees;

    const button_sinscrire = prenom === '' || nom === '' || email === '' || password === '' || password !== password_confirm ?
        <button className="button-form" disabled>S&apos;inscrire</button> : <button className="button-form">S&apos;inscrire</button>;

    return (
        <div>
            <div className="signUpLoginBox">
                <div className="slContainer">
                    <div className="formBoxLeftSignup" style={{}}>

                    </div>
                    <div>
                        <h2 className="title-form" style={{ textAlign: "center" }}>Veuillez vous inscrire</h2>

                        <Form onSubmit={ submitDonnees }>
                            <div className="form-control-style">
                                <input className="input-text" type="text" id="prenom" autoComplete="on" onChange={ handleChange } placeholder="prénom" />
                            </div>
                            <div className="form-control-style">
                                <input className="input-text" type="text" id="nom" autoComplete="on" onChange={handleChange} placeholder="nom" />
                            </div>
                            <div className="form-control-style">
                                <input className="input-text" type="email" id="email" autoComplete="on" onChange={handleChange} placeholder="email" />
                            </div>
                            <div className="form-control-style">
                                <input className="input-text" type="password" id="password" autoComplete="off" onChange={handleChange} placeholder="mot de passe" />
                            </div>
                            <div className="form-control-style">
                                <input className="input-text" type="password" id="password_confirm" autoComplete="off" onChange={handleChange} placeholder="confirmer le mot de passe" />
                            </div>
                            {button_sinscrire}
                        </Form>
                    </div>
                </div>

            </div>
            <br />
            <div className="">
                <Link to="/login" className="lien-retour">Connexion</Link>
            </div>
        </div>
    )
}

const Form = styled.form`
    width: 257px;
`

export default Sinscrire