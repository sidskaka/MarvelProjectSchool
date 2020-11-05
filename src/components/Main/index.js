import React from "react"
import { Link } from "react-router-dom"
//import styled from 'styled-components'

const Main = () => {
    return (
        <div>
            Main
            <br />
            <Link to="/login" className="lien-retour">Login</Link>
            <br /><br />
            <Link to="/sinscrire" className="lien-retour">Sinscrire</Link>
        </div>
    )
}

/*const Link_1 = styled.Link`
    color: #fff;
`*/

export default Main