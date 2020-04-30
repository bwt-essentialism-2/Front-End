import React,{ useContext } from 'react';
import DashboardCard from './DashboardCard';
import {ValuesContext} from "../contexts/index";
import { fetchData } from '../actions/actions';
import { connect } from 'react-redux';




const Dashboard = props => {
    console.log("value", props.values);


    console.log("selected", props.selected);


    return (
        
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} title={''} para={''}/>
                </div>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} title={''} para={''}/>
                </div>
                <div className='col-md-4'>
                    <DashboardCard imgsrc={''} title={''} para={''}/>
                </div>
            </div>
        </div>
    
    )
}


const mapStateToProps = state => {
    console.log(state);
    return {
        values: state.reducer.values[0],
        selected: state.reducer.selectedArray
    }
}


export default connect(mapStateToProps, { fetchData })(Dashboard);