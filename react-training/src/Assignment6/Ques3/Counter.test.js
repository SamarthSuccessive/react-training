import React from 'react';
import Ques3 from './Ques3';
import { render,screen,fireEvent } from '@testing-library/react';

describe('Happy Path', () => {
    test('renders initial count', () => {
        render(<Ques3 />);
        const countElement = screen.getByText('0');
        expect(countElement).toBeInTheDocument();
      });
    
    test("check the increment button is present or not",()=>{
        render(<Ques3/>);
        const text =screen.getByText('Increment');
        expect(text).toBeInTheDocument();
    
    })
    
    test("check the Decrement button is present or not",()=>{
        render(<Ques3/>);
        const text =screen.getByText('Decrement');
        expect(text).toBeInTheDocument();
    })
    
    test("check the button click functionality",()=>{
        render(<Ques3/>);
        const incrementButton = screen.getByText('Increment');
        const countElement = screen.getByText('0');
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        expect(countElement).toHaveTextContent('2');
    })
    
    test("check for the functionality for the decrement button",()=>{
        render(<Ques3 />);
        const DecrementButton = screen.getByText('Decrement');
        const countElement = screen.getByText('0');
        fireEvent.click(DecrementButton);
        fireEvent.click(DecrementButton);
        expect(countElement).toHaveTextContent('-2');
    })
})

describe('Negative Path', () => {

 
test('does not increment count beyond maximum value', () => {
  render(<Ques3 />);
  const incrementButton = screen.getByText('Increment');
  const countElement = screen.getByText('0');
  for(let i=0;i<11;i++)
  {
      fireEvent.click(incrementButton);
  }
  expect(countElement).toHaveTextContent('10');
});

test('Check the limit of the Decerment Button',()=>{
    render(<Ques3/>);
    const value=screen.getByText('Decrement');
    const countervalue=screen.getByText('0');
    for(let i=0;i<11;i++)
    {
        fireEvent.click(value);
    }
    expect(countervalue).toBeInTheDocument(-10);
})
    })



