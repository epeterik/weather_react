import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

//package imports
import { connect } from "react-redux";

//App Imports
import { WaitSpinner } from '../components/waitSpinner';
import { getCityWeatherData } from '../actions/actions';

class CityWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInCelcius: false
        }

        //bindings
        //this.displayWeatherImage = this.displayWeatherImage.bind(this);
    }

    //Convert Kelving to Celcius
    //ref: https://www.rapidtables.com/convert/temperature/how-kelvin-to-celsius.html
    //Copied from original weather API assignment from 1/12/2018
    kelvinToCelcius(temp)
    {
        //console.log(temp);
        return Math.floor(temp - 273.15) + " °C"; //floor result to get integer value
    }

    //Convert Kelving to fahrenheit
    //ref: https://www.rapidtables.com/convert/temperature/how-kelvin-to-fahrenheit.html
    //Copied from original weather API assignment from 1/12/2018
    kelvinTofahrenheit(temp)
    {
        //console.log(temp);
        return Math.floor((temp * 1.8) - 459.67) + " °F"; //floor result to get integer value
    }

    displayTempurature(temp) 
    {
        return this.state.displayInCelcius ? this.kelvinToCelcius(temp) : this.kelvinTofahrenheit(temp);
    }

    getCityWeatherData() {
        console.log("Entering getCityWeatherData"); //debug
    
        let localCityName = this.props.match.params.cityName; //pull city name from parameters
        console.log("Looking up city weather data for: " + localCityName); //debug
    
        //make call API call to get city weather data back
        this.props.lookupCityWeatherData(localCityName); //returned data is stored in the store
    
        console.log("Leaving getCityWeatherData"); //debug
    }

    toggleCelcius() {
        //update state
        this.setState({displayInCelcius: !this.state.displayInCelcius});
    }

    displayCelciusLinkText() {
        //return text to display
        return this.state.displayInCelcius ? "Click for Farenheight" : "Click for Celcius";
    }

    displayWeatherImage(cityName) {
        let cityObject = this.props.definedCityList.find((localCityObject) => localCityObject.cityName.toUpperCase() === cityName.toUpperCase())

        if (cityObject !== undefined &&
            cityObject.imageUrl !== "")
        {
            return <img alt={cityName + " picture"} src={cityObject.imageUrl} />
        }
        else
        {
            let tempPicSrc = 'https://images.pexels.com/photos/164024/pexels-photo-164024.jpeg?h=350&auto=compress&cs=tinysrgb';
            return <img alt="generic weather" src={tempPicSrc} />
        }
    }
    
    componentDidMount() {
        console.log("Entering componentDidMount"); //debug
    
        this.getCityWeatherData();
    
        console.log("Leaving componentDidMount"); //debug
    }

    render() {
        console.log("City Weather Properties: ", this.props); //debug
        let localCityData = this.props.currentCityData;
        console.log("City Weather Properties: ", ); //debug

        return (
            <div>
                {this.props.isCityWeatherDataLoading || this.props.currentCityData === undefined ?
                    <WaitSpinner />
                    :
                this.props.currentCityData === "error" ?
                    <div className = "text-center">
                        <h1>City Not Found!</h1>
                        <h3>Please Pick Another City</h3>
                    </div>
                    :
                    <div>
                        <div className="row">
                            <div className="small-12 columns text-center">
                                <h1>
                                    {localCityData.name}
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            {/* left side column - for showing city weather data */}
                            <div className="small-6 columns">
                                <div className="row">
                                    <div className="small-12 columns">Humidity: {localCityData.main.humidity}%</div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">Temperature (Average): {this.displayTempurature(localCityData.main.temp)}</div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">Temperature (High): {this.displayTempurature(localCityData.main.temp_max)}</div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">Temperature (Low): {this.displayTempurature(localCityData.main.temp_min)}</div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns">Current Status: {localCityData.weather[0].main}&nbsp;&nbsp;<img alt={localCityData.weather[0].main + " icon"} src={"http://openweathermap.org/img/w/" + localCityData.weather[0].icon  + ".png"} /></div>
                                </div>
                                <div className="row">
                                    <div className="small-12 columns"><div onClick={() => this.toggleCelcius()}><a>{this.displayCelciusLinkText()}</a></div></div>
                                </div>
                            </div>
                            {/* right side column - for showing city picture */}
                            <div className="small-6 columns">
                                {this.displayWeatherImage(localCityData.name)}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        isCityWeatherDataLoading: state.cityDataLoading, 
        currentCityData: state.currentCityData,
        definedCityList: state.cityList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        lookupCityWeatherData: (cityName) => {
              dispatch(getCityWeatherData(cityName));
        }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CityWeather);