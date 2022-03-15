import Blob from ".";
import { render } from "@testing-library/react";

describe("Blob tests", () => {
  it("Should render", () => {
    const { container } = render(<Blob />);

    expect(container.innerHTML).toBeDefined();
  });
});
