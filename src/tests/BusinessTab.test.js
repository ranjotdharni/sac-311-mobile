import renderer from "react-test-renderer";
import BusinessTab from "../app/(tabs)/BusinessTab";

describe("BusinessTab", () => {
  it("renders correctly", () => {
    const page = renderer.create(<BusinessTab />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("has 4 children", () => {
    const tree = renderer.create(<BusinessTab />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});