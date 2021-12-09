import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItem from './NavigationItem';
import { NavLink } from 'react-router-dom';

configure({adapter : new Adapter()});


describe('<NavigationItems />',()=>{
    let wrapper
beforeEach(()=>{
    wrapper = shallow(<NavigationItem/>)
})
    it('should render two LINK elements if not authenticate',()=>{
        //test how many link we have 
        expect(wrapper.find(NavLink)).toHaveLength(2);
    })
    it('should render 3 LINK elements if  authenticate',()=>{

        //const wrapper = shallow(<NavigationItem isAuth/> ) or
        wrapper.setProps({isAuth : true})
        //test how many link we have 
        expect(wrapper.find(NavLink)).toHaveLength(3);
    })
    it('should HAVE logout path when auth',()=>{
        wrapper.setProps({isAuth : true})
        //test how many link we have 
        expect(wrapper.contains( <NavLink to="/logout" >
        Logout
      </NavLink>)).toEqual(true);
    })
})
