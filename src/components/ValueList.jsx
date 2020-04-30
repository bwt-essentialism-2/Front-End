import React, { useEffect } from "react";
import ValueCard from "./ValueCard";
import ValueForm from "./ValueForm";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { fetchData } from '../actions/actions';
import { connect } from 'react-redux';



const ValueList = props => {

    const { push } = useHistory();
   

   
    useEffect(() => {
   


        props.fetchData();
    

    }, [])


   

    const nextPage = e => {
        e.preventDefault();
        push('/dashboard');

    }





    return (

        <div id="valueCont">

            <h1>Which values resonate with you?</h1>
            <ValueForm values={props.values} />
            <div id="valueGrid">

                {props.values?.map(value => {
                    return (
                        <ValueCard value={value} key={value.id} selectItemList={props.selectItemList} />
                    )
                }) }


            </div>
            <Button id="nextButton" color="primary" variant="contained" onClick={nextPage} >
                Next
    </Button>


        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        values: state.reducer.values[0]
    }
}


export default connect(mapStateToProps, { fetchData })(ValueList);