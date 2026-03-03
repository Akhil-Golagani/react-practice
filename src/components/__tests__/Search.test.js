import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resMockListData.json";
import {act} from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })

});


it("Should render body component with search", async() => {
    await act(async () => render(
        <BrowserRouter><Body/></BrowserRouter>
    ));

    const allResCards =  screen.getAllByTestId("resCard");

    expect(allResCards.length).toBe(8);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target : {value : "Burger"}});

    fireEvent.click(searchBtn);

    const resCards = screen.getAllByTestId("resCard");

    expect(resCards.length).toBe(1);

});

it("Should render body component with search", async() => {
    await act(async () => render(
        <BrowserRouter><Body/></BrowserRouter>
    ));

    const resAfterFilterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(resAfterFilterBtn);

    const resCardsAfterFilter =  screen.getAllByTestId("resCard");

    expect(resCardsAfterFilter.length).toBe(6);

});