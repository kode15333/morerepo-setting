import Hello from "../src/components/Hello";
import {render} from "@testing-library/react";

describe('render', function () {
    it('should render correctly', function () {
        const wrapper = render(<Hello />);
        expect(wrapper).toMatchSnapshot();
    })

});
