import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

configure({ adapter: new Adapter() });

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'some_token',
            userId: 'some_user_id'
        })).toEqual({
            token: 'some_token',
            userId: 'some_user_id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});