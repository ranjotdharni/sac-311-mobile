import renderer from "react-test-renderer";
import ButtonPanel from '../app/(components)/Home/ButtonPanel'; 

describe('ButtonPanel', () => {
  it('make sure the panel renders', () => {
    //const { getByTestId } = render(<ButtonPanel />);
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 children", () => {
    const tree = renderer.create(<ButtonPanel />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
