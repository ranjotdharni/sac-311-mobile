import renderer from "react-test-renderer";
import Resources from "../app/(tabs)/Resources";

describe("Resources", () => {
  it("renders correctly", () => {
    const page = renderer.create(<Resources />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("renders 4 children components", () => {
    const tree = renderer.create(<Resources />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});