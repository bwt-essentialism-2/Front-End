import React, {Component} from 'react';
import './DashboardStyle.css';
import EssentialCard from './EssentialCard';
import { DashContext } from '../contexts';
// import { axiosWithAuth } from "../src/utils/axiosAuth";


class SingleCard extends Component {
constructor(props){
    super(props);
    this.state = {
        items: [],
        // newProject: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

}

    // componentDidMount(){
    // axiosWithAuth()
    //         .post("https://essentialism-bwt.herokuapp.com/api/users/2/projects", newProject)
    //         .then(res => {
    //             console.log(res);
    //             this.setState({newProject: res.data})
    //         })
    //     }
    

addItem(e) {
    if (this.inputElement.value !== '') {
        const newItem = {
            text: this.inputElement.value,
            key: Date.now()
        };
       this.setState((prevState) => {
           return {
               items: prevState.items.concat(newItem)
           };
       });
    }
    this.inputElement.value = '';
    console.log(this.state.items);
    e.preventDefault();
}

    deleteItem(key) {
        const filteredItems = this.state.items.filter(function(item){
            return(item.key !== key)
        })
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return(
            <DashContext.Provider>
            <div className='container-fluid'>
            <div className="card-2 text-center">
                <div className="overflow">
                    <img src={''} alt='' className='card-img-topf'/>
                    </div>
                        <div className='card-body'>
                        <h1 className='card-title'>{''}this is where the title of the card will go.</h1>
                        <p className='card-text text-secondary'>{''}This is where the text for the card will go. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae earum quae quo dolorum natus soluta libero odio recusandae minima.
                        </p>
                        <form onSubmit={this.addItem}>
                        <input ref={(a) => this.inputElement = a} 
                        placeholder='Inspiration'>
                        </input>
                        <button type='submit'>Add</button>
                        {/* <DashboardCard /> */}
                        <EssentialCard entries={this.state.items}
                                        delete={this.deleteItem}
                        />  
                    </form>
                </div>
            </div>
            </div>
            </DashContext.Provider>
        )
    }
}

export default SingleCard;