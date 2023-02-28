import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Search from "./components/Search";
import api from "./mocks/api";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(api);
})

afterEach(() => {
  jest.restoreAllMocks()
});

test("renders landing page", async () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/Where In The World?/);
  expect(<App />).toMatchSnapshot();
  await waitForElementToBeRemoved(() => screen.queryByTestId("loading"))
});

test("theme switch", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const switchBtn = screen.getByTestId("switch");

  fireEvent.click(switchBtn);

  expect(switchBtn).toHaveTextContent(/Mode/);
  expect(<Header />).toMatchSnapshot();
});

test("should be able to search", () => {
  render(<Search />);

  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();

  const searchBtn = screen.getByTestId("search");
  fireEvent.keyUp(searchBtn);
  fireEvent.change(searchBtn);
});