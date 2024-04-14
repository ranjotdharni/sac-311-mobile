import renderer from "react-test-renderer";
import VisitorTab from "./app/(tabs)/VisitorTab";


// example unit test to make sure the VisitorTab page renders
describe("VisitorTab", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<VisitorTab />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


//   // it("has 4 children", () => {
//   //   const tree = renderer.create(<VisitorTab />).toJSON();
//   //   expect(tree.children.length).toBe(4);
//   // });