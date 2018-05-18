import React, {Component} from 'react'

import axios from 'axios'

import SearchBar from '../components/search-bar'
import VideoList from './video-list'

//Movie Database
const API_KEY = 'api_key=29384fec98e6802921a9d6772d27e64c'
const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false"

class App extends Component {


	constructor(props){
		super(props)
		this.state = {}
	}

	componentWillMount(){
		axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
			console.log(response)
		})
	}

	render(){
		return (
			<div>
			<SearchBar/>
				<VideoList />
			</div>
		)
    }
}


export default App