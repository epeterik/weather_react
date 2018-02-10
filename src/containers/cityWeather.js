import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { WaitSpinner } from '../components/waitSpinner';

class CityWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        //bindings
        //this.handleInputDidChange = this.handleInputDidChange.bind(this);
    }

    componentDidMount() {
        console.log("Entering componentDidMount"); //debug
        //this.props.displayCityWeather();
        console.log("Leaving componentDidMount"); //debug
    }

    render() {
        //figure out what's in props
        console.log("CityWeather Props: ", this.props);

        //get local path for links
        //let localPath = this.props.match.path;
        //console.log(localPath);

        return (
            <div>
                <p>Display city weather data here</p>
                <p>Will need to use axios to make an OpenWeatherAPI call on component did mount</p>
                <p>Add logic to display city not found?  Per mockup, no redirect, catch on error?</p>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        //listOfProducts: state.productList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        /* loadProductsList: () => {
              dispatch(getPPMProducts());
        }*/
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CityWeather);