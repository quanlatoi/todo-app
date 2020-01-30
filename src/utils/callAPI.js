import Axios from 'axios';

const token = localStorage.getItem('token');

console.log(token)

export const callAPI = (endPoint, method = 'GET', body='')=>{
    const config = {
        baseURL: `http://localhost:8000/api/${endPoint}`,
        method: method,
        headers: {
            'Authorization': `bearer ${token}`
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



