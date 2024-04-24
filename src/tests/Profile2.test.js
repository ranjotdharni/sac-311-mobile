import renderer from "react-test-renderer";
import Profile2 from "../app/(tabs)/Profile2";

describe("Profile2", () => {
  it("renders correctly", () => {
    const page = renderer.create(<Profile2 />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("renders 8 children components", () => {
    const tree = renderer.create(<Profile2 />).toJSON();
    expect(tree.children.length).toBe(8);
  });
});