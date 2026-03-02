import {render, screen} from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resMockData.json";
import "@testing-library/jest-dom";

it("Should check restaurant card is rendered or not", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument();
});

it("Should render restaurant card with vegetarian label", () => {
    const VegRestaurantCard = withVegLabel(RestaurantCard);

    render(<VegRestaurantCard resData={MOCK_DATA}/>);

    const vegRestaurant = screen.getByText("Vegetarian");

    expect(vegRestaurant).toBeInTheDocument();

});