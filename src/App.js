import React from 'react';
import logo from './logo.svg';
import './App.css';

//local dependencies
import MangaContainer from './containers/MangaContainer';
import LoginContainer from './containers/LoginContainer';

//Redux stuff
import { connect } from 'react-redux';
import {
       
        //import each action as necessary,
      } from './Redux/actions/exampleActions';

//Dispatch
//This is where you will be mapping all your actions to this component props
const mapDispatchToProps = {
  

  //If you want to rename the action in this file context do this: 
  //renamedAction: otherAction
}

//State
//This is where you will be mapping the default values of state to this component props
const mapStateToProps = (state) => {
  return({
    

    //exampleValFromFirstReducer: state.first.exampleVal,
    //exampleValFromSecondReducer: state.second.exampleVal,
    //exampleValIfOnlyOneReducer: state.exampleVal,

    //Again, you can rename this state value to whatever you wish:
    //renamedStateVar: state.otherDefaultValue
  })
}

const App = (props) => {
  
  return (
    <div className="App">
      <LoginContainer />
      <MangaContainer />
    </div>
  );
}

//connect msp and mdp to our component
export default connect(mapStateToProps, mapDispatchToProps)(App);
