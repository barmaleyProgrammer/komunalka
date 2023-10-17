import axios from "axios";
import mock from './mock.js';

const config = {
    baseURL: 'https://api-test.komunalka.ua/api/v2',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46Y29tbXVuYWw=',
        'apiauthorization': `Bearer ${localStorage.getItem('accessToken') || ''}`
    }
};

const signUp = (data) => {
    const newConfig = {...config};
    delete newConfig.headers.apiauthorization;
    return axios.post('/account/signup', data, newConfig)
        .then((res) => res)
        .catch((error) => {
            throw error.response.data.error;
        });
}

const signIn = (data) => {
    const newConfig = {...config};
    delete newConfig.headers.apiauthorization;
    return axios.post('/account/signin', data, newConfig).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        const cookieName = 'refreshToken';
        console.log(res.headers);
        console.log(res.headers['set-cookie']);
        console.log(res.headers.get('set-cookie'));
        // debugger;
        // const cookie = (res.headers['set-cookie'])
        //     .find((cookie) => cookie.includes(cookieName))
        //     ?.match(new RegExp(`^${cookieName}=(.+?);`))
        //     ?.[1];
        // localStorage.setItem('refreshToken', cookie);
        config.headers.apiauthorization = `Bearer ${res.data.accessToken}`;
        return res.data;
    }).catch((error) => {
        throw error.response.data.error;
    });
}
const updateUser = (data) => {
    return axios.put('/account', data, config).then((res) => {
        localStorage.setItem('user', JSON.stringify(data));
        return res;
    }).catch((error) => {
        console.error('акаунт', error);
    });
}
const changePassword = (password) => {
    return axios.put('/account/password',  { password }, config).then((res) => {
        return res;
    }).catch((error) => {
        console.error(error);
    });
}
const changeEmailRequest = (email, source) => {
    return axios.get(`https://api-test.komunalka.ua/api/v2/account/email/code?email=${encodeURIComponent(email)}&source=${source}`,  config).then((res) => {
        return res;
    }).catch((error) => {
        console.error(error);
    });
}
const validationNewEmail = (form) => {
    return axios.put('https://api-test.komunalka.ua/api/v2/account/email', form , config).then((res) => {
        return res;
    }).catch((error) => {
        console.error(error);
    });
}
const renameAddress = (objectId, name) => {
    return axios.put(`/account/address/${objectId}`, { name }, config).then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });
}

const signOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    config.headers.apiauthorization = '';
}

const validation = (email, token) => {
    const newConfig = {...config};
    delete newConfig.headers.apiauthorization;
    return axios.get(`account/validate/email?email=${encodeURIComponent(email)}&token=${token}`, newConfig).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        config.headers.apiauthorization = `Bearer ${res.data.accessToken}`;
        return res;
    });
}
const resetPasswordRequest = (email, source) => {
    return axios.get(`https://api-test.komunalka.ua/api/v2/account/reset/password?email=${encodeURIComponent(email)}&source=${source}`, config).then((res) => res);
}
const authSocialNetworks = () => {
    const newConfig = {...config};
    delete newConfig.headers.apiauthorization;
    return axios.get(`https://api-test.komunalka.ua/api/user/oauth2?authTypeId=google&successUrl=http://localhost:3000/cabinet&errorUrl=http://localhost:3000/cabinet`, newConfig).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        config.headers.apiauthorization = `Bearer ${res.data.accessToken}`;
        return res;
    });
}
const newPassword = (payload) => {
    return axios.post(`account/reset/password`,payload, config).then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });
}

const getRegions = () => {
    if (!localStorage.getItem('accessToken')) {
        return [];
    }
    const newConfig = {...config};
    delete newConfig.apiauthorization;
    return axios.get('/address/regions?country=1', newConfig).then((res) => {
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
    return axios.get(`/counter/meters/data?objectId=${objectId}`, config)
        .then((res) => res.data.data)
        .catch((error) => {
            console.error(error);
        });
}

const getCountersHistory = (objectId, dateStart, dateEnd) => {
    if (process.env.NODE_ENV === 'development') {
        return new Promise((resolve) => {
            resolve(mock);
        });
    }

    const key = `${objectId}-${dateStart}-${dateEnd}`;
    const storedData = sessionStorage.getItem(key);

    if (storedData) {
        return new Promise((resolve) => {
            resolve(JSON.parse(storedData));
        });
    }

    return axios.get(`/counter/meters/history/data?objectId=${objectId}&dateStart=${dateStart}&dateEnd=${dateEnd}`, config)
        .then((res) => {
            sessionStorage.setItem(key, JSON.stringify(res.data.data));
            return res.data.data;
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
}

const getServices = () => {
    return axios.get(`/counter/service`, config)
        .then((res) => {
            localStorage.setItem('services', JSON.stringify(res.data.data));
            return res.data.data;
        })
        .catch((error) => {
            console.error(error);
        });
}
const getServiceTypes = () => {
    return axios.get(`/counter/service/type`, config)
        .then((res) => {
            localStorage.setItem('serviceTypes', JSON.stringify(res.data.data));
            return res.data.data;
        })
        .catch((error) => {
            console.error(error);
        });
}
const getAddress = () => {
    return axios.get(`/account/address`, config)
        .then((res) => {
            localStorage.setItem('addresses', JSON.stringify(res.data));
            return res.data;
        })
        .catch((error) => {
            console.error(error);
        });
}

const getObject = () => {
    return axios.get('/account', config)
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.account));
            // localStorage.setItem('addresses', JSON.stringify(response.data.addresses));
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        });
}

const addObject = (objectId, name = '') => {
    return axios.post('/account/address', { objectId, name }, config).then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });
}

const deleteObject = (objectId) => {
    const payload = {
        data: { objectId },
        headers: config.headers,
        baseURL: config.baseURL
    };
    return axios.delete('/account/address', payload).then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });
}
const deleteAccount = () => {
    return axios.delete('/account', config).then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });
}

const getDebt = (objectId) => {
    return axios.get(`/accrual/debt/${objectId}`, config)
        .then((response) => response.data.debts)
        .catch((error) => {
            console.error(error);
        });
}
const sendCounterData = (deviceId, payload) => {
    return axios.post(`/counter/meter/device/${deviceId}`, payload, config).then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });
}
export default {
    signUp,
    signIn,
    signOut,
    validation,
    resetPasswordRequest,
    newPassword,
    changePassword,
    changeEmailRequest,
    validationNewEmail,
    getServices,
    getServiceTypes,
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
    getDebt,
    updateUser,
    renameAddress,
    sendCounterData,
    getCountersHistory,
    authSocialNetworks,
    deleteAccount
};
