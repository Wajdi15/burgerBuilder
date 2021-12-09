import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {BurgerBuilder} from "./BurgerBuilder";
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';

configure({adapter : new Adapter()});

describe('<BurgerBuilder/>',()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<BurgerBuilder get ={()=> {}}/>);
    })
    it('test if burger controls are exist only when ing are here',()=>{
        wrapper.setProps({ing:{salad : 2}})
        expect(wrapper.find(BurgerControls)).toHaveLength(1);
    })
})