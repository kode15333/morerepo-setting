import {render} from "@testing-library/react";
import {Button} from "~/Button";

describe('Button render', function () {
    it('should render correctly', function () {
        const wrapper = render(<Button/>);
        expect(wrapper).toMatchSnapshot();
    })

});
