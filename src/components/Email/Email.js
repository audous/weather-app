import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';
import { motion } from "framer-motion";

const ballStyle = {
  display: "block",
  width: "100%",
  borderRadius: "0.5rem"
};

const bounceTransition = {
  x: {
    duration: .4,
    yoyo: Infinity,
    ease: "easeOut"
  }
};

export class Email extends Component {

	constructor(props) {
  	super(props);
    this.state = { 
      email:'',
      collapse: false,
      validater: false,
      results:false
    };
  }
  

  hoverDance = () =>{
    
    this.setState({ collapse: !this.state.collapse });
    setInterval(function(){ 

    }, 2000);
    
  };

  changeValue = (e) =>{
    console.log(e.target.value)
    this.setState({email: e.target.value});


    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
    {
      this.setState({validater: true});
      console.log(this.state.validater);
    }else{
     this.setState({validater: false});
     console.log(this.state.validater);
    }

  }



  getStyle = () => {

    if(this.state.results && !this.state.validater){
      return {
        display:"block",
        color: "#666",
fontWeight: 500,
textAlign:"center"
      };
    }else{
      return {
        display:"none",
      };
    }

  };

  resultSet = () => {
    this.setState({ results: true })
  }


  signme = () => {
    return {
      backgroundColor:"#ffcd20",
      border: "none",
      fontWeight: "800",
      fontSize: "36px",
      textTransform: "uppercase",
    color:"#000"
    }
  }


  render() {
    
    return (
      <div
      style={{
        width: "100%"
      }}
    >
<Box p={1}>
<form>

      <div
        style={{
          width: "100%"
        }}
      ><Box p={1}>
          <input
          className="enterbest"
          type="email"
            name="email"
            onChange={this.changeValue}
            placeholder="Enter Your Best Email"
            width="100%"
          /></Box>
        
        <motion.span
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          x: ["1%", "-1%"]
        }}
      >
        <Box p={1} id="btndance">
        <Button className="subemail" style={this.signme()} onMouseOver={this.hoverDance} onClick={this.resultSet}>Sign Me Up!</Button>
        </Box>
        
      </motion.span>
        <Box><div style={this.getStyle()}><p>The email address you entered is invalid</p></div></Box>



        </div>
</form>





</Box>
        


      </div>
    )
  }
}

export default Email
