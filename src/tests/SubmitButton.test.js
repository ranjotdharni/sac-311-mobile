import SubmitButton from '../app/(components)/RequestConfirmation/SubmitButton';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

describe('SubmitButton', () => {
  it('renders correctly', async () => {
    const { findByText } = render(<SubmitButton onPress={() => {}} />);
    const buttonElement = await findByText('Jump to Request Confirmation Page');
    expect(buttonElement).toBeTruthy();
  });

  it('calls onPress function when button is pressed', async () => {
    const onPressMock = jest.fn();
    const { findByText } = render(<SubmitButton onPressGoToConfirm={onPressMock} />);
    const buttonElement = await findByText('Jump to Request Confirmation Page');
    fireEvent.press(buttonElement);
    await waitFor(() => {
      expect(onPressMock).toHaveBeenCalled();
    });
  });
});