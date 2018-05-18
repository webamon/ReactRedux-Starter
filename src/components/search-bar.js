import React, {Component} from 'react'


class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state ={
            searchText:"",
            placeHolder:"Tapez votre film..."
        }
    }


    handleChange = (e)=>{
        this.setState({searchText: e.target.value})
    }

    render(){
        return (
        <div>
            <input onChange={this.handleChange} placeholder={this.state.placeHolder}/>
        </div>
        )
    }
}


export default SearchBar