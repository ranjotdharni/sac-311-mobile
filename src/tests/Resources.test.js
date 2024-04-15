import renderer from "react-test-renderer";
import Resources from "../app/(tabs)/Resources";

describe("Resources", () => {
  it("renders correctly", () => {
    const page = renderer.create(<Resources />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("has 2 children", () => {
    const tree = renderer.create(<Resources />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});