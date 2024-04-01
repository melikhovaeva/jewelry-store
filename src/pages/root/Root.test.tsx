import { render, screen, userEvent } from "../../../tests/setup";
import Root from "./root";

// expect(<реальное состояние>).toBe(<Ожидаемое состояние>)

describe("Home", () => {
  it("check input", async () => {
    render(<Root />);

    const input = screen.getByTestId("input-update");
    const button = screen.getByTestId("button-update");

    userEvent.type(input, "test data235235235");
    userEvent.click(button);

    expect(await screen.findByText(/Count: button-update/i)).toBeInTheDocument();
  });
});
