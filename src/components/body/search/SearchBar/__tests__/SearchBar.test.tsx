import SearchBar from "../SearchBar";
import {render, screen} from "@testing-library/react";
import React from "react";

describe("Search Bar Component Tests", () => {

    it("displays Search Bar correctly", () => {
        render(<SearchBar />);

        const searchBarElement = screen.getByText("Search Bar Placeholder");
        expect(searchBarElement).not.toBeNull();
    });
});