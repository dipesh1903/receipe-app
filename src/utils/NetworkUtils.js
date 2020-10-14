import {RECEIPES} from '../constants/ApiEnum';

export const to = (promise) => {
    return promise
        .then(response => ([response, undefined]))
        .catch(error => Promise.resolve([undefined, error.response]));
};

export const _fetchReceipes = () => {
    return fetch(RECEIPES);
};

export const _postPayment = () => {
    const timeOut = setTimeout(() => {
        return 'success'
    })
}