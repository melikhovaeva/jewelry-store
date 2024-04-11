import { render, screen } from "../../../tests/setup";
import CardUniversity from "./index";

describe("CardUniversity component", () => {
  it("renders university name and country", () => {
    const testData = {
      country: "Test Country",
      name: "Test University",
    };

    render(<CardUniversity data={testData} />);

    const cardElement = screen.getByText(`${testData.country} - ${testData.name}`);
    expect(cardElement).toBeInTheDocument();
  });
});
