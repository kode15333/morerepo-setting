import {render, screen} from "@testing-library/react";
import {Button} from "~/Button";

describe('Button render', function () {
    it('should render correctly', function () {
        render(<Button/>);

        expect(screen.getByText('Boop')).toBeTruthy();
    })

});
