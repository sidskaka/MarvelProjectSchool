/*import React, { Component } from 'react'
import axios from 'axios'

class BienvenuePage extends Component {
    *//*const [data, setDonnees] = useState({ hits: [] });

    useEffect(async () => {
        const result = await axios('http://hp-api.herokuapp.com/api/characters');

        setDonnees(result.data)
        console.log(data)
    }, [])*//*

    constructor(props) {
        super(props);

        this.state = {
            donnees: ''
        }
    }

    componentDidMount() {
        axios.get('http://hp-api.herokuapp.com/api/characters')
            .then(res => {
                
                this.setState({ donnees: res.data })
                console.log(donnees)
            })
            .catch(err => {
                console.log(err)
            })
    }


    
    render() {
        return (
            <div>
                dsfdsf
            </div>    
        )
    }
}

export default BienvenuePage*/