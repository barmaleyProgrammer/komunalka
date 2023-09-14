import axios from "axios";

const config = {
    baseURL: 'https://api-test.komunalka.ua/api/v2',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46Y29tbXVuYWw=',
        'apiauthorization': `Bearer ${sessionStorage.getItem('accessToken') || ''}`
    }
};

const signUp = (data) => {
    const newConfig = {...config};
    delete newConfig.headers.apiauthorization;
    return axios.post('/account/signup', data, newConfig)
        .then((res) => res.data);
}

const signIn = (data) => {
    const newConfig = {...config};
    delete newConfig.headers.apiauthorization;
    return axios.post('/account/signin', data, newConfig).then((res) => {
        // console.log('додано', res.data);
        // localStorage.setItem('accessToken', res.data.accessToken);
        // localStorage.setItem('refreshToken', res.data.refreshToken);
        sessionStorage.setItem('accessToken', res.data.accessToken);
        sessionStorage.setItem('refreshToken', res.data.refreshToken);
        config.headers.apiauthorization = `Bearer ${res.data.accessToken}`;
    }).catch((error) => {
        console.log(error);
    });
}

const signOut = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    config.headers.apiauthorization = '';
}

const validation = (email, token) => {
    const newConfig = {...config};
    // delete newConfig.headers;
    // delete newConfig.headers.Authorization;
    delete newConfig.headers.apiauthorization;
    return axios.get(`account/validate/email?email=${encodeURIComponent(email)}&token=${token}`, newConfig).then((res) => res);
    // return axios.get('https://api-test.komunalka.ua/api/v2/account/validate/email?email=grebenyukvd%40gmail.com&token=1d44f6f4f0bc4ed9ded14ccafec87cbf').then((res) => res);
}

const getRegions = () => {
    if (!sessionStorage.getItem('accessToken')) {
        return [];
    }
    const newConfig = {...config};
    delete newConfig.apiauthorization;
    return axios.get('/address/regions?country=1', newConfig).then((res) => {
        console.log(res)
        return res.data.map((item) => ({
            value: Number(item.region_id),
            label: item.name.trim()
        }));
    })
}


const getDistricts = (region_id) => {
    return axios.get(`/address/districts?region=${region_id}`, config).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.district_id),
            label: item.name.trim()
        }));
    })
}

const getTowns = (district_id) => {
    return axios.get(`/address/towns?district=${district_id}`, config).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.town_id),
            label: item.name.trim()
        }));
    })
}

const getStreets = (town_id) => {
    return axios.get(`/address/streets?town=${town_id}`, config).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.street_id),
            label: item.name.trim()
        }));
    })
}

const getHouses = (street_id) => {
    return axios.get(`/address/houses?street=${street_id}`, config).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.house_id),
            label: item.name.trim()
        }));
    })
}

const getFlats = (house_id) => {
    return axios.get(`/address/flats?house=${house_id}`, config).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.object_id),
            label: item.name.trim()
        }));
    });
}
const getCounterValue = (objectId) => {
    return axios.get(`/counter/meter/device?objectId=${objectId}`, config).then((res) => {
        // console.log('отримано getCounterValue', res.data.data.data);
        return res.data.data;
    }).catch((error) => {
        console.log(error);
    });
}
const getService = (objectId) => {
    return axios.get(`/counter/service?objectId=${objectId}`, config).then((res) => {
        console.log('отримано geService', res);
        return res.data;
    }).catch((error) => {
        console.log(error);
    });
}
const getAddress = () => {
    return axios.get(`/account/address`, config).then((res) => {
        console.log('отримано geService', res);
        return res.data;
    }).catch((error) => {
        console.log(error);
    });
}

const getObject = () => {
    return axios.get('/account', config).then((response) => {
        console.log('отримано getObj', response.data);
        return response.data;
    }).catch((error) => {
        console.log(error);
    });
}

const addObject = (objectId, name = '') => {
    return axios.post('/account/address', { objectId, name }, config).then((response) => {
        console.log('додано', response);
    }).catch((error) => {
        console.log(error);
    });
}

const deleteObject = (objectId) => {
    const payload = {
        data: { objectId },
        headers: config.headers,
        baseURL: config.baseURL
    };
    return axios.delete('/account/address', payload).then((response) => {
        console.log('delete', response);
    }).catch((error) => {
        console.log(error);
    });
}

const getDebt = (objectId) => {
    return axios.get(`/accrual/debt/${objectId}`, config).then((response) => {
        console.log('отримано getObj', response);
        return response.data.debts;
    }).catch((error) => {
        console.log(error);
    });
}

export default {
    signUp,
    signIn,
    signOut,
    validation,
    // getService,
    getRegions,
    getDistricts,
    getTowns,
    getStreets,
    getHouses,
    getFlats,
    getObject,
    getAddress,
    addObject,
    deleteObject,
    getCounterValue,
    getDebt
};