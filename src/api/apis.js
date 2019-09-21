import axios from 'axios';

const APIs = {
    requestPhones: () => {
        return axios.get('http://armada.bestdoorshop.ru/api/1.0/phone.php');
    },
    requestDoors: () => {
        return axios.get('http://armada.bestdoorshop.ru/api/1.0/doors.php');
    },
    requestCalc: () => {
        return axios.get('http://armada.bestdoorshop.ru/api/1.0/calc.php');
    },
    requestComments: (numInPage, page) => {
        return axios.get('http://armada.bestdoorshop.ru/api/1.0/comments.php', { params: { numInPage, page }});
    }
};

export default APIs;