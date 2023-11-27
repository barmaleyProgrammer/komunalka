
const translate = {
    'Email exists. ': 'користувач з таким Email вже існує',
    '': ''
};

class ApiError extends Error {
    constructor(error) {
        if (process.env.NODE_ENV === 'development') {
            console.error(error);
        }
        const code = error?.response?.status;
        let message = error?.response?.data?.error;
        if (code === 401) {

        }
        if (code === 500) {
            message = 'сервіс тимчасово недоступний';
        }
        if (code === 503) {
            message = 'таймаут';
        }

        // if (translate.hasOwnProperty(message)) {
        //     message = translate[message];
        // }



        super(`${code}: ${message}`);
        this.code = error?.response?.status;
        this.cause = error;
    }
}

export default ApiError;
