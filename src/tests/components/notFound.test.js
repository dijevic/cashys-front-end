import { shallow } from "enzyme/build"
import { NotFound } from "../../pages/NotFound"

describe('test the 404 not found route', () => {

    const wrapper = shallow(<NotFound />)

    test('should match the snapshot', () => {

        expect(wrapper).toMatchSnapshot()

    })
    test('should get the text NOT FOUND', () => {


        const p = wrapper.find('p')

        expect(p.text()).toBe('Page not found 404 X-X')


    })
})