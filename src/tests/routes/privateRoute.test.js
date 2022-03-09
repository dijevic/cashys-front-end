import React from 'react'
import { shallow, ShallowWrapper } from "enzyme/build"

import { PrivateRoute } from "../../Routes/PrivateRoute"

describe('test for private route', () => {

    const children = <h1>this is a test child</h1>
    const wrapper = shallow(<PrivateRoute isAuth children={children} />)
    test('should match the snapshot correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })


})