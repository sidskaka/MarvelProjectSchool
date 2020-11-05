import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import md5 from 'md5'
import axios from 'axios'
import styled from 'styled-components'

const BienvenuePage = () => {
    const [characters, setCharacters] = useState([])

    const ts = new Date().getMilliseconds();
    const apikey = process.env.REACT_APP_MARVEL_API_KEY;
    const privatekey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
    const hash = md5(`${ts}${privatekey}${apikey}`)
    const url = 'https://gateway.marvel.com/v1/public/characters'

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
                //console.log(res.data.data.results[0])
                setCharacters(res.data.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (

        <DivContaint>
            <h1>LISTE DES HEROS DE MARVEL</h1> 
            {
                characters.map(data =>  
                    
                    <DivContaintBis key={data.id}>
                        <Lien>
                            <Link to={`/details/${data.id}`}>
                                <Img
                                    src={(`${data.thumbnail.path}.${data.thumbnail.extension}`)} />

                                <Article>
                                    <Title1>{data.name}</Title1>

                                    <Span>Harry Brignull</Span>
                                </Article>
                            </Link>
                        </Lien>
                    </DivContaintBis>
                )
            }
        </DivContaint>
        
    )
}

const DivContaintBis = styled.div`
    width: 27%;
    float: left;
    margin: 1%;
`

const Img = styled.img`
    height: 600px;
`

const DivContaint = styled.div`
    display: inline !important;
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
`

const Lien = styled.div`
    min-height: 100%;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #444;
    position: relative;
    top: 0;
    transition: all .1s ease-in;

    &:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgba(0,0,0,0.2);
    }
`

const Article = styled.article`
    padding: 20px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: column;
`

const Title1 = styled.h1`
    font-size: 20px;
    margin: 0;
    color: #333;
`

const Span = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
`


export default BienvenuePage