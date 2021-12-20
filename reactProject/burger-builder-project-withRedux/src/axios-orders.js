import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://burger-builder-project-2515d.firebaseio.com'
})

export default instance;