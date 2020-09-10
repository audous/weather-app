import React, { Component } from 'react'
import keys from "./keys";
import './NasaStyle.css';
import {Box} from '@material-ui/core';

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

      <div style={{ width: '100%' }}>
        <Box
          display="flex"
          flexWrap="nowrap"
          p={1}
          m={2}
          bgcolor="grey.300" 
          justifyContent="center"
        >
          <Box p={1} alignSelf="center" width="33%" flexWrap="wrap">
          <div style={{ width: '100%' }}>
            <a href={url}><img src={url} alt="nasa apod" style={{maxWidth:"100%"}}/></a>
          </div>
          </Box>
          <Box p={1} justifyContent="center" alignSelf="center" width="66%" flexWrap="wrap">
            <h1>NASA Image of the Day </h1>
            <h5>{copyright}</h5>
            <p>{explanation} </p>
          </Box>
        </Box>
      </div>

      );
    }
  }
}
