import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/react";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

// test("form header renders", async () => {
//     render(<App/>);
//     const header = screen.getByText(/React Plants/i);
//     expect(header).toBeInTheDocument();
// });
    
test("form header renders", () => {
    render(<App/>);
    const header = screen.getByText(/React Plants/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameeInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameeInput, "Wick");
    userEvent.type(addressInput, "Horseshoe Road");
    userEvent.type(cityInput, "Mill Neck");
    userEvent.type(stateInput, "NY");
    userEvent.type(zipInput, "11765")
    
    const buttonInput = screen.getByRole("button", /checkout/i);
    userEvent.click(buttonInput);

    const successMessage = screen.getByTestId("successMessage");

    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent("You have ordered some plants!")
    expect(successMessage).toHaveTextContent("Your new green friends will be shipped to:")
});

