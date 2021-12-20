//  -- enzyme allows to test standalore components (isolated tests) with out render  the entire application
// -- shallow function used to render the isolated componet not deeply not child componets but it just render the component with its completes content

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'
import React from 'react'

configure({ adapter: new Adapter() })
// Global default method by jest (describe and it with two params) while creating crp project itself
// -- jest have inbulit utility methods like expect , tohaveLength , and so on..
describe("<NavigationItems />", () => {
    let wrapper;

    //  --- before Each and afterEach methods are fron enzymes to execute before and after of each test case
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />)
    })

    it("shoud be render 2 <NavigationItems /> elements if not authenticated", () => {
        //   actual testing logic writes he inside it at 2 nd param
        //  to do test --> create an instance to the component it would be render to real dom thorugh react 
        //  and then have a look in to the render component and see what was rendered --> eg: check render with out auth
        // const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it("shoud be render 3 <NavigationItems /> elements if authenticated", () => {
        // const wrapper = shallow(<NavigationItems isAuthorized />)
        wrapper.setProps({ isAuthorized: true })
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })

    it("shoud an exact logout element ", () => {
        // const wrapper = shallow(<NavigationItems isAuthorized />)
        wrapper.setProps({ isAuthorized: true })
        expect(wrapper.contains(<NavigationItem link='/logout'>LogOut</NavigationItem>)).toEqual(true);
    })
})