// import './App.css';
// import Ques19 from './Assign2/Ques19/Ques19';
// import Ques18 from './Assign2/Ques18/Ques18';
// import Ques17 from './Assign2/Ques17/Ques17';
// import Ques16 from './Assign2/Ques16/Ques16';
// import Ques15 from './Assign2/Ques15/Ques15';
// import Ques14 from './Assign2/Ques14/Ques14';
// import Ques13 from './Assign2/Ques13/Ques13';
// import Ques12 from './Assign2/Ques12/Ques12';
// import ShoppingCart from './Assign2/Ques11/Ques11';
// import Ques10 from './Assign2/Ques10/Ques10';
// import Base from './Assign2/Ques9/Ques9';
// import Slideshow from './Assign2/Ques8';
// import Notification from './Assign2/Ques7/Ques7';
// import CounterWithStep from './Assign2/Ques5/Ques5';
// import Clock from './Assign2/Ques6/Ques6';
// import RandomNumberGenerator from './Assign2/Ques4/Ques4';
// import ToDoList from './Assign2/Ques3/Ques3';
// import PersonForm from './Assign2/Ques2/Ques2';
// import Counter from './Assign2/Ques1/Ques1';


// function App() {

  
//   return (
//     <div className="App">
//       <Counter />
//       <br />
//       <hr />

//       <PersonForm />
//       <br />
//       <hr />
//       <ToDoList />
//       <br />
//       <hr />

//       <RandomNumberGenerator />
//       <br />
//       <hr />
//       <CounterWithStep />
//       <br />
//       <hr />
//       <Clock />
//       <br />
//       <hr />
//       <Notification />
//       <br />
//       <hr />
//       <Slideshow />
//       <br />
//       <hr />

//       <Base />
//       <br />
//       <hr />
//       <Ques10 />
//       <br />
//       <hr />

//       <ShoppingCart />
//       <br />
//       <hr />
//       <Ques12 />
//       <br />
//       <hr />
//       <Ques13 />
//       <br />
//       <hr />
//       <Ques14 />  
//       <br />
//       <hr />
//       <Ques15 />
//       <br />
//       <hr />
//       <Ques16 />
//       <br />
//       <hr />
//       <Ques17 />
//       <br />
//       <hr />
//       <Ques18 />
//       <br />
//       <hr />
//       <Ques19 />
//     </div>
//   );
// }

// export default App;
import './App.css';
import React from 'react';
import Button from './Assignment-1/Ques6';
import TaskList from './Assignment-1/Ques5';
import Wheather from './Assignment-1/Ques3';
import Counter from './Assignment-1/Ques4';
import Greeting from './Assignment-1/Ques1';
import UserCard from './Assignment-1/Ques2';
import Assignment2 from './Assign2/Assignment-2';



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
      
      
    </div>
  );
} 

export default App;
