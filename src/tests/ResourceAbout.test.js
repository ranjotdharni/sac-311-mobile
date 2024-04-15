import renderer from "react-test-renderer";
import ResourceAbout from "../app/(tabs)/ResourceAbout";

describe("ResourceAbout", () => {
  it("renders correctly", () => {
    const page = renderer.create(<ResourceAbout />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("has 2 children", () => {
    const tree = renderer.create(<ResourceAbout />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});