import renderer from "react-test-renderer";
import ResidentTab from "../app/(tabs)/ResidentTab";

describe("ResidentTab", () => {
  it("renders correctly", () => {
    const page = renderer.create(<ResidentTab />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("renders 4 children components", () => {
    const tree = renderer.create(<ResidentTab />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});