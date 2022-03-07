import { shallow } from "enzyme/build"
import CashyApp from "./CashyApp"

describe('test app in general', () => {

    test('test app matching snapshot', () => {
        const wrapper = shallow(<CashyApp />)
        expect(wrapper).toMatchSnapshot()
    })
})