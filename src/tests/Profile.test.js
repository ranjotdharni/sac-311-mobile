import renderer from "react-test-renderer";
import Profile from "../app/(tabs)/Profile";

describe("Profile", () => {
  it("renders correctly", () => {
    const page = renderer.create(<Profile />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("renders 2 children components", () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});