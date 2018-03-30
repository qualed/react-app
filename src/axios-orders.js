import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://someapp-4ea75.firebaseio.com/'
});

export default instance;