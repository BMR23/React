import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { TextInput } from ".";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value="testando" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("testando");
  });

  it("should call handleChange function on each key pressed", async () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} />);

    const inputElement = screen.getByPlaceholderText(/type your search/i);
    const value = "um valor qualquer";

    // userEvent.click(inputElement);
    await userEvent.type(inputElement, value);
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // inputElement.value = value;
    // fireEvent.change(inputElement, {value: value})

    expect(inputElement.value).toBe("");
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput onChange={fn} value="" />);
    expect(container).toMatchSnapshot();
  });
});
