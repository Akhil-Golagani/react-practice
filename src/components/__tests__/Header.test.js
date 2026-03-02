import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button", () => {

    render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout", () => {

    render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", {name : "Logout"});

    expect(logOutButton).toBeInTheDocument();

});
