//package imports
import React, { Component } from 'react';
import { connect } from "react-redux";
import { 
    Link
    } from 'react-router-dom';

//css imports
import '../ui-toolkit/css/nm-cx/main.css';

//App imports
import { OldSchoolMenuLink } from '../components/activeLinks';
import { getCityWeatherData } from '../actions/actions';


class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.mapCitiesToNavigationBar = this.mapCitiesToNavigationBar.bind(this);
    }

    mapCitiesToNavigationBar = (cityObject, arrayIndex) => {
        console.log("In mapCitiesToNavigationBar");
        return(
            <div key={"cityLink" + arrayIndex} style={{display: "inline-block", padding: "3px"}}>
                &nbsp;<Link to={"/" + cityObject.cityName} key={"cityKey" + arrayIndex} onClick={() => {this.props.lookupCityWeatherData(cityObject.cityName)}} >{cityObject.cityName}</Link>&nbsp;
            </div>
        )
        //<OldSchoolMenuLink activeOnlyWhenExact={true} to={"/" + cityObject.cityName.replace(' ', '')} label={cityObject.cityName} />
    }

    render() {
        console.log("Enterying NavigationBar Render()");

        return (
            <ul className="heading-nav padding-bottom-medium">
            {this.props.listOfCities.map(this.mapCitiesToNavigationBar)}
        </ul>
        );
    }

} //end NavigationBar class

const mapStateToProps = (state) => {
    return {
        listOfCities: state.cityList
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        lookupCityWeatherData: (cityName) => {
            dispatch(getCityWeatherData(cityName));
        }
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);