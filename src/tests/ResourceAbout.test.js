import renderer from "react-test-renderer";
import ResourceAbout from "../app/(tabs)/ResourceAbout";

describe("ResourceAbout", () => {
  it("renders correctly", () => {
    const page = renderer.create(<ResourceAbout />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("renders 2 children components", () => {
    const tree = renderer.create(<ResourceAbout />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});