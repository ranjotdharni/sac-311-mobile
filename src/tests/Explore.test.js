import renderer from "react-test-renderer";
import Explore from "../app/(tabs)/Explore";

describe("Explore", () => {
  it("renders correctly", () => {
    const page = renderer.create(<Explore />).toJSON();
    expect(page).toMatchSnapshot();
  });
});