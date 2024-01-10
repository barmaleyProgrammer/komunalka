import axios from 'axios';

const connect = axios.create({
    baseURL: (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000/api' : 'https://komunalka-cms.ssoloviov.kiev.ua/api',
    responseType: 'json',
    maxRedirects: 0,
    // timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

export const bannersList = () => {
    return connect.get('/banners')
        .then((res) => res.data)
};

// export const newsList = () => {
//     return connect.get('/news')
//         .then((res) => res.data)
// };

// export const newsList = () => {
//     return connect.get('/news').then((res) => res.data);
// };