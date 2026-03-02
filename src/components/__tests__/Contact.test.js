import {render, screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Contact page should be rendered", () => {
    render(<ContactUs/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should contain two text boxes", () => {
    render(<ContactUs/>);

    const textBoxes = screen.getAllByRole("textbox");

    expect(textBoxes.length).toBe(2);

});