import React, { useState, useEffect } from 'react'
//import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import md5 from 'md5'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Details = () => {
    
    const [datauser, setDatauser] = useState({})
    const iduser = useParams('id').id

    const ts = new Date().getMilliseconds();
    const apikey = process.env.REACT_APP_MARVEL_API_KEY;
    const privatekey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
    const hash = md5(`${ts}${privatekey}${apikey}`)
    const url = `https://gateway.marvel.com/v1/public/characters/${iduser}`


    useEffect(() => {
        axios({
            method: 'GET',
            url: url,
            params: {
                ts: ts,
                apikey: apikey,
                hash: hash
            } 
        })
            .then(res => {
                console.log(res.data.data.results[0])
                setDatauser(res.data.data.results[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //console.log(datauser.thumbnail.extension)

    return (
        <div>
            <Title>
                {datauser.name}
            </Title>
            <p>
                { datauser.description }
            </p>
            <NavLink to="/bienvenue">Retour</NavLink>
        </div>
    )
}

/*<img src={(`${datauser.thumbnail.path}.${datauser.thumbnail.extension}`)} />*/

const Title = styled.h2`
    color: #fff;
`

const NavLink = styled(Link)`
    color: #fff;
`

export default Details