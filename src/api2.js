import axios from 'axios';
import ApiError from './error';

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
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const newsList = () => {
    const fields = [
        'id','publish_date','title','banner'
    ];
    return connect.get(`/news?fields=${fields.join(',')}`)
        .then((res) => res.data)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getNews = (id) => {
    return connect.get(`/news/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const agreementInfo = () => {
    return connect.get('/agreement/1')
        .then((res) => res.data)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const aboutInfo = () => {
    return connect.get('/about/1')
        .then((res) => res.data)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const faqList = () => {
    return connect.get('/faq')
        .then((res) => res.data)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const topBannerList = () => {
    const fields = [
        'id','image', 'url'
    ];
    return connect.get(`/topbanners?fields=${fields.join(',')}`)
        .then((res) => res.data)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const contactInfo = () => {
    return connect.get('/contact')
        .then((res) => {
            // localStorage.setItem('contacts', JSON.stringify(res.data));
            return res.data;
        }).catch((error) => {
            throw new ApiError(error);
        });
};

export const advantagesList = () => {
    const fields = [
        'id','title', 'body', 'icon'
    ];
    return connect.get(`/advantages?fields=${fields.join(',')}`)
        .then((res) => {
            return res.data;
        }).catch((error) => {
            throw new ApiError(error);
        });
};

export const neuronInfo = () => {
    return connect.get('/neuron/1').then((res) => {
        return res.data;
    }).catch((error) => {
    throw new ApiError(error);
    });
};

export const indicatorsInfo = () => {
    return connect.get('/indicator').then((res) => {
        return res.data;
    }).catch((error) => {
        throw new ApiError(error);
    });
};