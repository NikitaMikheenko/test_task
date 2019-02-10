import React, { Component } from 'react';

export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = { link: "https://www.youtube.com/embed/" + props.name };
    }

    render() {
        return (
            <iframe title={this.props.name} width="560" height="315" src={this.state.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        );
    }
}