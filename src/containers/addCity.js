import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { WaitSpinner } from '../components/waitSpinner';
import { addNewCity } from '../actions/actions';

class AddCity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName: '',
            cityImageUrl: ''
        }

        //bindings
        this.handleInputDidChange = this.handleInputDidChange.bind(this);
        this.handleAddNewCityToListClick = this.handleAddNewCityToListClick.bind(this);
    }

    handleInputDidChange (event) {
        //console.log("Entering handleInputDidChange");
        let localInputChange = event.target.value;
        let localInputName = event.target.name;
        //console.log("handleInputDidChange for " + localInputName + " | Updated Value: " + localInputChange);
        this.setState({[localInputName]: localInputChange});
        //console.log("Leaving handleInputDidChange");
    }

    handleAddNewCityToListClick() {
        console.log("Entering handleAddNewCityToListClick");

        if (this.state.cityName.trim() === "")
        {
            alert("You cannot leave city name blank");
            return;
        }

        //send action to store to update the city list array
        this.props.addNewCityToList(this.state.cityName, 
                                    this.state.cityImageUrl);

        //direct user to default/home page after request has been sent
        this.props.history.push("/");

        console.log("Leaving handleAddNewCityToListClick");
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
                <div className="text-center">
                    <h2>Add City</h2>
                </div>
                <div>
                    City Name: <input type="text" name="cityName" placeholder="Please Enter a City Name" value={this.state.cityName} onChange={this.handleInputDidChange} />
                </div>
                <div>
                    City Image URL: <input type="text" name="cityImageUrl" placeholder="Please Provide a City Image URL" value={this.state.cityImageUrl} onChange={this.handleInputDidChange} />
                </div>
                <div className="text-center">
                    <button onClick={this.handleAddNewCityToListClick}>Add New City</button>
                </div>
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
            addNewCityToList: (cityName, cityImageUrl) => {
                dispatch(addNewCity(cityName, cityImageUrl));
        }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddCity);