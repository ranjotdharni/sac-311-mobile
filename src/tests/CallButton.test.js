import { render, fireEvent } from '@testing-library/react-native';
import ResourceAbout from '../app/(tabs)/ResourceAbout'; 
import { Linking } from 'react-native';

describe('ResourceAbout Page', () => {
  it('make sure the call button works', () => {
    const { getByTestId } = render(<ResourceAbout />);
    const callButton = getByTestId('callBtn');
    fireEvent.press(callButton);

    // Verify that phone app was opened with the 311 number
    expect(Linking.openURL).toHaveBeenCalledWith(`tel:${311}`);

  });
});
