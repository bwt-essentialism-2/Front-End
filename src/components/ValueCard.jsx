import React, {useState} from "react";
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {selected} from '../actions/actions';


const ValueCard = props => {

    const [isClicked, setIsClicked] = useState(false);
    

    const toggleItem = () => {
        if(isClicked) {
            setIsClicked(false);
            props.handleCard(props.value.id);
        
        } else {
            setIsClicked(true);
        }
        console.log( "value",props.value.value
            );
        console.log("clicked", isClicked);
        console.log(props.newCard)
        console.log(props.value.id);
    }
 

const select = () => {
   props.selected(props.value.id);
}

 


const setClickedClass = () => {
    if (isClicked === true){
        return "clicked";
    }
    else {
        return "unclicked";
    }
}

    return (
        <Card id = "valueCard" onClick={() => { select(); toggleItem();props.handleCard(props.value.id);}}
        


            >
      <CardActionArea>

        <CardContent className = {setClickedClass()}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.value.value}

          </Typography>

        </CardContent>
      </CardActionArea>
      </Card> 


    )
}

const mapStateToProps = state => {

    return {
        values: state.reducer.values[0],
        selectedArray: state.reducer.selectedArray
    }
}


export default connect(mapStateToProps, {selected})(ValueCard)