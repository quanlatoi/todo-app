import Axios from 'axios';

// const token = localStorage.getItem('token');

export const callAPI = (endPoint, token= '',  method = 'GET', body='')=>{
    const getToken = localStorage.getItem('token') || token;
    const config = {
        baseURL: `http://localhost:8000/api/${endPoint}`,
        method: method,
        headers: {
            'Authorization': `bearer ${getToken}`
        }
    }
    if(method === 'GET' && Object.keys(body).length > 0){
        config.baseURL = `http://localhost:8000/api/${endPoint}?q=${body.q}`
    }
    else{
        config.data = body
    }
    return Axios(config)
}



