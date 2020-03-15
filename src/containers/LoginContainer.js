import React from 'react';
import { connect } from 'react-redux';
import {
       username,
       password
        //import each action as necessary,
      } from '../Redux/actions/exampleActions';


const api =  require('mangadex-full-api');
const Mangadex = require('mangadex-api');
const msp = (state) => {
    console.log(state)
    return({
        user: state.first.username,
        pw: state.first.password,
    });
};

const mdp = {
    username,
    password,
};


const LoginContainer = (props) => {
    console.log(props.user);
    const login = () => {
        const client = new Mangadex({
            host: 'https://mangadex.cc',
            apiHost: 'https://mangadex.cc/api'
          })
        // console.log(api.agent);
        // api.agent.domainOverride = "https://cors-anywhere.herokuapp.com/https://mangadex.org/api";

        // // console.log(client.agent.login);
    }
    return(
        <div>
        Login
        
            Username: <input type='text' value={props.user} onChange={(e)=>{props.username(e.target.value)}} /> 
            Password: <input type='password' value={props.pw} onChange={(e)=>{props.password(e.target.value)}} /> 
            <button onClick={login} >Login</button>
        
        </div>
    );
};

export default connect(msp, mdp)(LoginContainer);