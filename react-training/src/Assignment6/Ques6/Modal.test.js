import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import Ques6 from './Ques6';

test("Check that Modal button is present or not",()=>{
    render(<Ques6/>);
    const btn=screen.getByRole('button');
    expect(btn).toBeInTheDocument();
})

test("check button after click",()=>{
    render(<Ques6/>);
    const btn=screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('I am inside the Modal')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText('I am inside the Modal')).not.toBeInTheDocument();

})