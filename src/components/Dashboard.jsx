import React,{ useContext } from 'react';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { ValuesContext } from "../contexts/index";
import { useHistory } from 'react-router-dom';




const Dashboard = props => {
    console.log("value", props.values);

    const {selected} = useContext(ValuesContext);
    console.log("selected", selected);

    // const { push } = useHistory();

    // const nextPage = e => {
    //     e.preventDefault();
    //     push('/singlecard');

    // }


    return (
        <ValuesContext.Provider value={[]}>
            {console.log(selected)}
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
        </ValuesContext.Provider>
    )
}


export default Dashboard;