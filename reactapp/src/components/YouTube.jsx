import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import Video from './Video.jsx';

const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=LLLbJ1rdD7sQhtszHyzVep-g&maxResults=5&key=AIzaSyCmJpdAmVyNsSIKAi0BaQoWcQv8f03RTXE";

export default class YouTube extends Component {
    constructor(){
        super();
        this.state={
            youtubeData: []
        };
    }

    componentWillMount() {
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState( { youtubeData: json.items } ));
    }

    render() {
        return (        
            <div>
                <nav>
                    <Link to="/instagram">Instagram fotos</Link>
                </nav>
                <div>
                    {
                        this.state.youtubeData.map((item) => {
                            return <Video name={item.snippet.resourceId.videoId} key={item.id}/>
                        })
                    }
                </div>
            </div>
        );
    }
}