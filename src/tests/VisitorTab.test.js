import renderer from "react-test-renderer";
import VisitorTab from "../app/(tabs)/VisitorTab";

describe("VisitorTab", () => {
  it("renders correctly", () => {
    const page = renderer.create(<VisitorTab />).toJSON();
    expect(page).toMatchSnapshot();
  });

  it("renders 4 children components", () => {
    const tree = renderer.create(<VisitorTab />).toJSON();
    expect(tree.children.length).toBe(4);
  });

});