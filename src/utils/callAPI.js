import Axios from 'axios';

export const callAPI = (endPoint, method = 'GET', body='')=>{
    const config = {
        baseURL: `http://localhost:8000/api/${endPoint}`,
        method: method,
        headers: {
            'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlcjEiLCJpZCI6IjVlMjY5ZTlmNDg0MTMxMzc3NDZiYjg0NyIsImlhdCI6MTU3OTU5MTI0NX0.5LfKdy4JMwJSjtJ4LCO3ImOIwL6FFCiF9k5QAsyCLtw'
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



