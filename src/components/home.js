import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';

export const Home = (props) => {

    console.log("Entering Home - props: ", props); //debug

    return (
            <div>                
                <p>
                    Welcome to the Dojo Weather Forecast, please select a 
                    city to see the current weather or add a new city.
                </p>
            </div>
    );
}