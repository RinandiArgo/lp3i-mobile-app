import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dmxqrsm/endpoint/data/v1',
    headers: {
        'api-key' : 'YIRAN32Pw37lwBjyvRzexqMqGIkXqo3IQ7w8jjalstg8sRBZHWdBHb6AJRDap7Ry'
    },
})
//pas mongodb
//mWnF6rPZ5ZDl29Ja

//api key
//YIRAN32Pw37lwBjyvRzexqMqGIkXqo3IQ7w8jjalstg8sRBZHWdBHb6AJRDap7Ry

//base url
//https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dmxqrsm/endpoint/data/v1

export default ApiLib;