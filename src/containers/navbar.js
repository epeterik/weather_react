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


class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.mapCitiesToNavigationBar = this.mapCitiesToNavigationBar.bind(this);
    }

    mapCitiesToNavigationBar = (cityObject, arrayIndex) => {

        return(
            <Link to={"/" + cityObject.cityName.replace(/ /g, '')} key={"cityKey" + arrayIndex} >{cityObject.cityName}</Link>
        )

        //<OldSchoolMenuLink activeOnlyWhenExact={true} to={"/" + cityObject.cityName.replace(' ', '')} label={cityObject.cityName} />
    }

    render() {

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
        //createProduct: (productObject, addRedirectFunction) => {
        //    dispatch(createPPMProduct(productObject, addRedirectFunction))
        //}
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);