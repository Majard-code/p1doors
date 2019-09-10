import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from './actions';

const initialState = {
    phones: {
        data: null,
        status: 'INITIAL'
    },
    doors: {
        data: null,
        status: 'INITIAL'
    },
    calc: {
        data: null,
        dataChoice: null,
        status: 'INITIAL'
    },
    comments: {
        data: null,
        status: 'INITIAL'
    }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;