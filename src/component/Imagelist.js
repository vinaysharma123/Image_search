import React from'react'; 
import './Imagelist.css';
import Imagecard from './Imagecard';

 const Imagelist=(props)=>{
     const images= props.images.map((image)=>{
      return <Imagecard key={image.id} image={image}/> ; //here images is an array of object that have src of all images

      });
      
 	return(
   <div className="image-list"> {images}</div>
 		);
 } ;
  export default Imagelist