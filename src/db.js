import Axios from 'axios';

export const callAPI = (endPoint, method = 'GET', body='')=>{
    const config = {
        baseURL: `http://localhost:3000/${endPoint}`,
        method: method
    }
    if(method === 'GET' && Object.keys(body).length > 0){
        config.baseURL = `http://localhost:3000/${endPoint}?q=${body.q}`
    }
    else{
        config.data = body
    }
    return Axios(config)
}



