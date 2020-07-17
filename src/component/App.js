import React from 'react';
import Searchbar from './Searchbar';
import Imagelist from './Imagelist';
 import Api from '../unsplash/Api';

 class App extends React.Component{
 	state={images: []};

 	  onSearchsubmit=async (term)=>{

 	 	const response=await Api.get('/search/photos', {
 	 	 params:{query :term} 
 	 	});
 	 	 this.setState({images: response.data.results});
 	 }
  render(){
 	return (

   <div className="ui container" style={{marginTop:"10px"}}> <Searchbar submit={this.onSearchsubmit}/>
      <Imagelist images={this.state.images}/>
   </div>


 		);
 	}

 	 }
 	   export default App