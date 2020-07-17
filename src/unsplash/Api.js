import axios from 'axios';
 
 export default axios.create({
  baseURL: "https://api.unsplash.com",
   headers:{

  	      Authorization: 'Client-ID veCRAaOYC1v0U0l3EFoL-Uv78CUDX6QHbc9XKSryYsc'
  }



  });