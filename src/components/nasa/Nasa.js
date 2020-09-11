import React, { Component } from 'react'
import keys from "./keys";
import './NasaStyle.css';

import NasaView from './NasaView';

var nasaFetch = keys.NASA_BASE_URL+'apod?api_key='+keys.NASA_API_KEY;
nasaFetch = nasaFetch.toString();

console.log(nasaFetch)

export default class Nasa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      copyright: '',
      explanation:'',
      url:'',
    };
  }

  componentDidMount() {
    fetch(`${nasaFetch}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            copyright: result.copyright,
            explanation: result.explanation,
            url: result.url,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, copyright, explanation, url } = this.state;

    if (error) {
      return <div>Error: {error.message}{console.log(error)}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <NasaView url={url} copyright={copyright} explanation={explanation}/>
      );
    }
  }
}
