/**
 * Created by creativecode on 05.04.17.
 */
import * as React from "react";
import { shallow } from 'enzyme';

import TestView from "../src/testModule/view/TestView";

describe("Init Render Test", ()=>{
    it("Should render something on page", ()=>{
        shallow(<TestView msg="test" />);
        const wrapper = shallow(<TestView msg="Welcome to React" />);
        const welcome = <div>Welcome to React</div>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it("Should render something on page", ()=>{
       // shallow();
       // const wrapper = shallow(<TestView msg="Welcome to React" />);
       // const welcome = <div>Welcome to React</div>;
        // expect(wrapper.contains(welcome)).toEqual(true);
    });

});