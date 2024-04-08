
import './App.css';
import React from 'react';
import Button from './Assignment-1/Ques6';
import TaskList from './Assignment-1/Ques5';
import Wheather from './Assignment-1/Ques3';
import Counter from './Assignment-1/Ques4';
import Greeting from './Assignment-1/Ques1';
import UserCard from './Assignment-1/Ques2';
import Assignment2 from './Assign2/Assignment-2';
import Assignment3 from './Assignment3/Assignment3';
import Divider from './Assignment3/Divider';
import Assignment4 from './Assignment4/Assignment4';




function App() {
 
  return (
    <div className="App">
      
       <Greeting />
      <hr></hr>
      <UserCard name={'Samarth'} email={'samarth.srivastava@successive.tech'} url={'https://via.placeholder.com/150'} />
      <br />
      <UserCard name={'Don'} email={'Don.srivastava@successive.tech'} url={'https://via.placeholder.com/150'} />
      <br />
      <UserCard name={'Harry'} email={'Harry.srivastava@successive.tech'} url={'https://via.placeholder.com/150'} /> 

      <br />
       <Wheather temp={5}/>
       <br />
      <Wheather temp={24}/>
      <br />
      <Wheather temp={30}/> 
      <hr />
      
     <Counter /> 
     <br/>
    
     <hr/>
       <TaskList names={['play','study','dinner','watching tv']}/>

       <hr/>
     <Button color={"Violet"} text={"Hello,there i am the question 6 of the assignment 1 of React JS"}/> 
      <br />
      <Button color={"red"} text={"I am the text 2 of the component"}/>  
      <br />
      <h1>Assignment 2</h1>
      <Assignment2 />
      <Divider />
      <h1>Assignment 3</h1>
      <Assignment3 />

      <Divider />
      <h1>Assignment4</h1>
      <Assignment4 />

      
      
    </div>
  );
} 

export default App;
