import React from 'react';
import { render,screen } from '@testing-library/react';
import Ques5 from './Ques5';

describe('UserProfile Component', () => {
  test('should display user profile information', () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    };
    render(<Ques5 user={user} />);

    expect(screen.getByText('User Profile')).toBeInTheDocument();
    expect(screen.getByText(`Name: ${user.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
    expect(screen.getByText(`Phone Number: ${user.phone}`)).toBeInTheDocument();
  });
});
