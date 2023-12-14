import axios from 'axios';
import ApiError from './error';
import { UniqueServiceTypes, UniqueProviders, UniqueCounters } from './utils';

const connect = axios.create({
    baseURL: 'https://api-test.komunalka.ua/api',
    withCredentials: false,
    responseType: 'json',
    maxRedirects: 0,
    // timeout: 1000,
    auth: {
        username: 'admin',
        password: 'communal'
    },
    headers: {'Content-Type': 'application/json'}
});

connect.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken') || '';
    if (token) {
        config.headers.apiauthorization = `Bearer ${token}`;
    }
    connect.defaults.withCredentials = false;
    return config;
}, (error) => Promise.reject(error));

connect.interceptors.response.use(
    (res) => res,
    (error) => {
        const prevRequest = error?.config;
        const token = localStorage.getItem('accessToken') || '';
        if (error?.response?.status === 401 && token && !prevRequest?.sent) {
            localStorage.removeItem('accessToken');
            prevRequest.sent = true;
            return refreshToken().then(() => connect(prevRequest));
        }
        return Promise.reject(error);
    }
);

export const signUp = (data) => {
    return connect.post('/v2/account/signup', data)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const signIn = (data) => {
    return connect.post('/v2/account/signin', data).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        return res.data;
    }).catch((error) => {
        throw new ApiError(error);
    });
};

const refreshToken = () => {
    connect.defaults.withCredentials = true;
    return connect.get('/v2/account/refresh/token').then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        return res.data.accessToken;
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const updateUser = (data) => {
    return connect.put('/v2/account', data).then((res) => {
        localStorage.setItem('user', JSON.stringify(data));
        return res;
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const changePassword = (password) => {
    return connect.put('/v2/account/password', { password })
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const changeEmailRequest = (email, source) => {
    return connect.get(`/v2/account/email/code?email=${encodeURIComponent(email)}&source=${source}`)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const validationNewEmail = (form) => {
    return connect.put('/v2/account/email', form)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const updateAddress = (objectId, payload) => {
    console.log(payload);
    return connect.put(`/v2/account/address/${objectId}`, payload)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const signOut = () => {
    localStorage.clear();
    sessionStorage.clear();
};

export const validation = (email, token) => {
    return connect.get(`/v2/account/validate/email?email=${encodeURIComponent(email)}&token=${token}`).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        return res;
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const resetPasswordRequest = (email, source) => {
    return connect.get(`/v2/account/reset/password?email=${encodeURIComponent(email)}&source=${source}`)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const authSocialNetworks = (type = 'google') => {
    const successUrl = `${window.location.protocol}//${window.location.host}/validateToken`;
    const errorUrl = `${window.location.protocol}//${window.location.host}/notValid`;
    window.location = `${connect.defaults.baseURL}/user/oauth2?authTypeId=${type}&successUrl=${successUrl}&errorUrl=${errorUrl}`;
    // connect.defaults.withCredentials = true;
    // return connect.get(`/user/oauth2?authTypeId=${type}&successUrl=${successUrl}&errorUrl=${errorUrl}`).then((res) => {
    //     debugger
    //     localStorage.setItem('accessToken', res.data.accessToken);
    //     return res.data.accessToken;
    // }).catch((error) => {
    //     throw new ApiError(error);
    // });
};

export const newPassword = (payload) => {
    return connect.post('/v2/account/reset/password', payload)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getRegions = () => {
    return connect.get('/v2/address/regions?country=1').then((res) => {
        return res.data.map((item) => ({
            value: Number(item.region_id),
            label: item.name.trim()
        }));
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const getDistricts = (region_id) => {
    return connect.get(`/v2/address/districts?region=${region_id}`).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.district_id),
            label: item.name.trim()
        }));
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const getTowns = (district_id) => {
    return connect.get(`/v2/address/towns?district=${district_id}`).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.town_id),
            label: item.name.trim()
        }));
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const getStreets = (town_id) => {
    return connect.get(`/v2/address/streets?town=${town_id}`).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.street_id),
            label: item.name.trim()
        }));
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const getHouses = (street_id) => {
    return connect.get(`/v2/address/houses?street=${street_id}`).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.house_id),
            label: item.name.trim()
        }));
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const getFlats = (house_id) => {
    return connect.get(`/v2/address/flats?house=${house_id}`).then((res) => {
        return res.data.map((item) => ({
            value: Number(item.object_id),
            label: item.name.trim()
        }));
    }).catch((error) => {
        throw new ApiError(error);
    });
};

export const getCounterValue = (objectId) => {
    return connect.get(`/v2/counter/meters/data?objectId=${objectId}`)
        .then((res) => res.data.data)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getCountersHistory = (objectId, dateStart, dateEnd) => {
    const key = `${objectId}-${dateStart}-${dateEnd}`;
    const storedData = sessionStorage.getItem(key);

    if (storedData) {
        return Promise.resolve(JSON.parse(storedData));
    }

    return connect.get(`/v2/counter/meters/history/data?objectId=${objectId}&dateStart=${dateStart}&dateEnd=${dateEnd}`)
        .then((res) => {
            const result = {
                all: res.data.data,
                serviceTypes: UniqueServiceTypes(res.data.data),
                providers: UniqueProviders(res.data.data),
                counters: UniqueCounters(res.data.data),
            };
            sessionStorage.setItem(key, JSON.stringify(result));
            return result;
        })
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getServices = () => {
    return connect.get('/v2/counter/service')
        .then((res) => {
            localStorage.setItem('services', JSON.stringify(res.data.data));
            return res.data.data;
        })
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getServiceTypes = () => {
    return connect.get('/v2/counter/service/type')
        .then((res) => {
            localStorage.setItem('serviceTypes', JSON.stringify(res.data.data));
            return res.data.data;
        })
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getAddress = () => {
    return connect.get('/v2/account/address')
        .then((res) => {
            localStorage.setItem('addresses', JSON.stringify(res.data));
            return res.data;
        })
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getObject = () => {
    return connect.get('/v2/account')
        .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data.account));
            return res.data;
        })
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const addObject = (payload) => {
    return connect.post('/v2/account/address', payload)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const deleteObject = (objectId) => {
    const payload = {
        data: { objectId }
    };
    return connect.delete('/v2/account/address', payload)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const deleteAccount = () => {
    return connect.delete('/v2/account')
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getDebt = (objectId) => {
    return connect.get(`/v2/accrual/debt/${objectId}`)
        .then((res) => res.data.debts)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const sendCounterData = (payload) => {
    return connect.post('/v2/counter/meters/data', payload)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};

export const getProvidersByServiceTypeId = (service_type) => {
    return connect.get(`/v2/counter/service/provider?serviceType=${service_type}`)
        .then((res) => res)
        .catch((error) => {
            throw new ApiError(error);
        });
};
