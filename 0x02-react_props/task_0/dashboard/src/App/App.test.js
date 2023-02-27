import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App renders without crashing', () => {
    const app = shallow(<App />);

    it('App renders', () => {
        expect(app).toBeDefined();
    });

});