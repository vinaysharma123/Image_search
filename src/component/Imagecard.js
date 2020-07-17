import React from 'react';
 class Imagecard extends React.Component{
 	 constructor(props){
   super(props);
    this.imageref=React.createRef();
     this.state={spans:0};
 	 }

 	  componentDidMount(){

         this.imageref.current.addEventListener('load', this.setSpan);
 	  }
 	   setSpan=()=>{
         const height= this.imageref.current.clientHeight;
              const span= Math.ceil(height/10);
               this.setState({spans:span});
 	   }
    
 	render(){
 		const {description, urls}= this.props.image;//description=this.props.image.description;
 		return(
  <div style={ {gridRowEnd :`span ${this.state.spans}`}}>
  <img  ref={this.imageref} alt={ description} src={urls.regular}/>


  </div>
	);
 	}
 }
  export default Imagecard