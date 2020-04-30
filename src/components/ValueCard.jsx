import React, {useState} from "react";
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const ValueCard = props => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleItem = () => {
        {isClicked ? setIsClicked(false) : setIsClicked(true)}
        console.log( "value",props.value.value
            );
        console.log("clicked", isClicked);
    }

const select = () => {
   // props.selectItem(props.value.id);
    props.selectItemList(props.value.id);
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
        <Card id = "valueCard" onClick={() => { select(); toggleItem();}}
        


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
        values: state.reducer.values[0]
    }
}


export default connect(mapStateToProps, {})(ValueCard)