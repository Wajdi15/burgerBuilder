import axios from 'axios';

let instance = axios.create({
    baseURL : "https://react-my-burger-b1950-default-rtdb.firebaseio.com/"
})

 export  default instance 