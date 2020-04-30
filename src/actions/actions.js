import {axiosWithAuth} from "../utils/axiosAuth";


export const fetchData = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_START' });

        axiosWithAuth()
            .get("https://essentialism-bwt.herokuapp.com/api/values")
            .then(res => {
                console.log("res",res);
                dispatch({
                    type: 'FETCH_DATA',
                    payload: res.data
                });
            })
            .catch(err => {
                console.log("err", err);
            })
    }
}

export const addItem = (newItem) => {
    return dispatch => {
        axiosWithAuth()
        .post("https://essentialism-bwt.herokuapp.com/api/values", newItem )
        .then(res => {
          console.log(res);
          dispatch({
            type: 'ADD_ITEM',
            payload: newItem
        })
        })
        .catch(err => {
          console.log(err, "err");
  
        })
        
    }
    
}

export const selectItem = (selectedItem) => {
    return dispatch => {
        dispatch({
            type: 'SELECT_ITEM',
            payload: selectedItem
        })
    }
}