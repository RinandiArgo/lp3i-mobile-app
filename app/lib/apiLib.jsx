import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1',
    headers: {
        'api-key' : 'raONjpklsvic5dG7ok9IQ6UCWDIUtz1fZDWpSwPhqFQEXGzVSY5o0zbzaudLGe8i'
    },
})
//pas mongodb
//mWnF6rPZ5ZDl29Ja

//api key
//YIRAN32Pw37lwBjyvRzexqMqGIkXqo3IQ7w8jjalstg8sRBZHWdBHb6AJRDap7Ry

//base url
//https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dmxqrsm/endpoint/data/v1

export default ApiLib;