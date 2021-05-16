import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure 
// they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
})

test("form shows success on submit with form details", () => {
    render(<CheckoutForm/>)
    fireEvent.click(screen.getByRole('button')) //fireEvent bugged after PlantList update, why?
    screen.getByTestId('success')
})