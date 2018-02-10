import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { WaitSpinner } from '../components/waitSpinner';

class AddCity extends Component {
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
                <h2>Add City</h2>
                <p>Need an input for city name and city image url</p>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddCity);