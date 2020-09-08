import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from './NavBar'
Enzyme.configure({ adapter: new Adapter() })

let wrapper = shallow(<Navbar />)

describe('App' , () => {
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toBeTruthy()
      });
})