import React, { useState } from 'react';
import './DashboardStyle.css';
import {axiosWithAuth} from '../utils/axiosAuth';
    

const DashboardCard = () => {   

    // axiosWithAuth()
    //     .get("https://essentialism-bwt.herokuapp.com/api/values/id")
    //     .then(res => {
    //         console.log(res);
    //         this.setState({newValue: res.data})
    //     })
    
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={''} alt='' className='card-img-topf'/>
            </div>
            <div className='card-body'>
                <h3 className='card-title'>this is where the title of the card will go.</h3>
                <p className='card-text text-secondary'>{''}
                    This is where the text for the card will go. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae earum quae quo dolorum natus soluta libero odio recusandae minima.
                </p>
                {/* <link to='/essential-card'> */}
                <a path='/singlecard' className='btn btn-outline-success' >Add Inspiration</a>
                {/* </link> */}
            </div>
        </div>
    )
  
}

export default DashboardCard;