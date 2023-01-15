import Hello from "../src/components/Hello";
import {getByText, render, screen} from "@testing-library/react";


describe('render', function () {
    it('should render correctly', function () {
        render(<Hello/>);
        expect(screen.getByText('Hello World')).toBeTruthy();
    })

});
