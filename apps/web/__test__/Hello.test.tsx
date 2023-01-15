import Hello from "../src/components/Hello";
import {render} from "@testing-library/react";


describe('render', function () {
    it('should render correctly', function () {
        console.log(process.env.HELLO)
        const wrapper = render(<Hello />);
        expect(wrapper).toMatchSnapshot();
    })

});
