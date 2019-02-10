import React, { Component } from 'react';

export default class Foto extends Component {
    render() {
        return (
            <img src={this.props.link} alt={this.props.id}></img>
        );
    }
}