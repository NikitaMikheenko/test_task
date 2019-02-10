import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import Foto from './Foto.jsx';

const url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=5815170014.191e50f.479e343561274278830f441be2254797";

export default class Instagram extends Component {
    constructor(){
        super();
        this.state={
            instagramData: []
        };
    }

    componentWillMount() {
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState( { instagramData: json.data } ));
    }

    render() {
        return (        
            <div>
                <nav>
                    <Link to="/youtube">YouTube videos</Link>
                </nav>
                <div>
                    {
                        this.state.instagramData.map((item) => {
                            return <Foto link={item.images.standard_resolution.url} key={item.id} />
                        })
                    }
                </div>
            </div>
        );
    }
}