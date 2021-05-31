import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { Home } from "../Home";
import { createStore } from "redux";

describe("Home", () => {
  it("renders successfully", () => {
    // arrange
    const store = createStore(() => ({
      locationReducer: {
        city: "Mock",
      },
    }));

    // act
    const root = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // assert
    expect(root.toJSON()).toMatchSnapshot();
  });
});
