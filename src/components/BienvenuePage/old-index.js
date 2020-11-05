import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import '../../styles/style-teste.css'

const BienvenuePage = () => {
    //const [data, setData] = useState({ hits: [] });
    let [users, setUsers] = useState([]);

   
    useEffect(() => {
        axios
            .get("http://hp-api.herokuapp.com/api/characters")
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            });
        
    }, []);

    console.log(users)

    return (
        <DivContaint>
            <h2>Tous les heros de Marvel</h2>
            
                
                {
                    users.map(user =>
                        /*<NameUser key={user.id}>{user.name}</NameUser>*/
                        <DivContaintBis key={user.id}>
                            <Lien href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045">

                                <Img src={user.image} />

                                <Article>
                                    <Title1>{ user.name }</Title1>

                                    <Span>Harry Brignull</Span>
                                </Article>
                            </Lien>
                        </DivContaintBis>
                    )
                } 

            
            
        </DivContaint>
    )
}

/*const NameUser = styled.div`
    color: red;
`*/

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

const Lien = styled.a`
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

/*const DivContTer = styled.div`
    padding-bottom: 60%;
    background-size: cover;
    background-position: center center;
`*/

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

/*
 

<div className="band">

                <div className="item-2">
                    <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" className="card">
                        <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)' }}></div>
                        <article>
                            <h1>How to Conduct Remote Usability Testing</h1>
                            <span>Harry Brignull</span>
                        </article>
                    </a>
                </div>

            </div>
 */