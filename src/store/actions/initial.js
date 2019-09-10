import axios from 'axios';

export const getPhone = async (store, request = axios) => {
    const newObj = { ...store.state.phones }
    newObj.status = "LOADING";
    store.setState({ phones: newObj });
    try {
        const response = await axios.get(
            `http://armada.bestdoorshop.ru/api/1.0/phone.php`
        );
        const isReposEmpty = response.length === 0;
        newObj.data = response.data;
        newObj.status = isReposEmpty ? "EMPTY" : "SUCCESS";
        store.setState({ phones: newObj });
    } catch (error) {
        const isError404 = error.response && error.response.status === 404;
        newObj.status = isError404 ? "NOT_FOUND" : "ERROR";
        store.setState({ phones: newObj });
    }
};

export const getDoors = async (store, request = axios) => {
    const newObj = { ...store.state.doors }
    newObj.status = "LOADING";
    store.setState({ doors: newObj });

    try {
        const response = await request.get(
            `http://armada.bestdoorshop.ru/api/1.0/doors.php`
        );
        const isReposEmpty = response.length === 0;
        newObj.data = response.data;
        newObj.status = isReposEmpty ? "EMPTY" : "SUCCESS";
        store.setState({ doors: newObj });
    } catch (error) {
        const isError404 = error.response && error.response.status === 404;
        newObj.status = isError404 ? "NOT_FOUND" : "ERROR";
        store.setState({ doors: newObj });
    }
};
export const getCalc = async (store, request = axios) => {
    const newObj = { ...store.state.calc }
    newObj.status = "LOADING";
    store.setState({ calc: newObj });

    try {
        const response = await request.get(
            `http://armada.bestdoorshop.ru/api/1.0/calc.php`
        );
        const isReposEmpty = response.length === 0;
        newObj.data = response.data;
        newObj.status = isReposEmpty ? "EMPTY" : "SUCCESS";
        store.setState({ calc: newObj });
    } catch (error) {
        const isError404 = error.response && error.response.status === 404;
        newObj.status = isError404 ? "NOT_FOUND" : "ERROR";
        store.setState({ calc: newObj });
    }
};
export const getComments = async (store, request = axios) => {
    const newObj = { ...store.state.comments }
    newObj.status = "LOADING";
    store.setState({ comments: newObj });

    try {
        const response = await request.get(
            `http://armada.bestdoorshop.ru/api/1.0/comments.php`,
            { 
                params: {
                    numInPage: 2,
                    page: 1
                }
            }
        );
        const isReposEmpty = response.length === 0;
        newObj.data = response.data;
        newObj.status = isReposEmpty ? "EMPTY" : "SUCCESS";
        store.setState({ comments: newObj });
    } catch (error) {
        const isError404 = error.response && error.response.status === 404;
        newObj.status = isError404 ? "NOT_FOUND" : "ERROR";
        store.setState({ comments: newObj });
    }
};

export const getAll = store => {
    if (store.state.phones.status === 'INITIAL') {
        store.actions.initial.getPhone();
    } else if (store.state.phones.status === 'SUCCESS') {
        if (store.state.doors.status === 'INITIAL') {
            store.actions.initial.getDoors();
        } else if (store.state.doors.status === 'SUCCESS') {
            if (store.state.calc.status === 'INITIAL') {
                store.actions.initial.getCalc();
            } else if (store.state.calc.status === 'SUCCESS') {
                if (store.state.comments.status === 'INITIAL'){
                    store.actions.initial.getComments();
                }
            } 
        }
    }

};