import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './utils';

import { isArrayEmpty as isMyArrayEmpty } from './utils'; // if u want to use different name of module
import React, { Component} from 'react';


 class App extends Component { 
  state = {
    showBlogs : true,
  

  /*const blogObj = {
    title : 'Blog Title 1',
    description: 'Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor'
  }*/

  // CREATE REACT ELEMENT DYNAMICALLY
  
   blogArr : [
    {
      id : 1,
      title : 'Blog Title 1',
      description: 'Name : Md Hasan  , Department : CSE, Semester : 8th',
      details: 'sambhram Institute',
      likeCount:0,
    },
    {
      id: 2,
      title : 'Blog Title 2',
      description: 'Name : Nirmal Kumatr, Department : CSE, Semester : 8th',//'Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor',
      likeCount:0,
    },
    {
      id: 3,
      title : 'Blog Title 3',
      description: 'Name : Vinay Kumar, Department : CSE, Semester : 6th',//'Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor',
      likeCount:0,
    }
  ]
  }
  onLikeBtnClick = (position)=>{
    const updatedBloglist = this.state.blogArr;
    const updatedBlogObj = updatedBloglist[position];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount +1;
    updatedBloglist[position] = updatedBlogObj;

    this.setState({blogArr:updatedBloglist})

    // console.log(updatedBlogObj);
  }

  // iterate this list using Map
  
  //  blogCards = isMyArrayEmpty(this.state.blogArr) ? []: this.state.blogArr.map((item,position) => {
    
  //   return(
  //       <BlogCard className={'Blog'} key={position} title={item.title} 
  //       description = {item.description} likeCount={item.likeCount} id = {item.id}
  //       onLikeBtnClick={ () => this.onLikeBtnClick(position)} />
  //   //   <div className='BlogCord' key={item.id}>
  //   //   <h3>{item.title}</h3>
  //   //   <p>{item.description}</p>
  //   // </div>

  //   )
  // })


//   const firstName = 'Md';
//   const lastName = 'Hasan';
//   const age = '23';
//   const job = 'Gentleman';

//   const mObj = {
//     name : 'Toto',
//     age: 45
//   }

//   const inputplaceholder = 'enter your deatails'

//   const detailsInputBos = <input placeholder= {inputplaceholder} autoComplete />
//   // fuction
//   const getFullName = (firstName,lastName) => {
//     return `${firstName} ${lastName}`

 onHideBtnClick = () => {
  //let updatestate =! this.state.showBlogs
  //this.setState({showBlogs:updatestate});
  this.setState((prevState,prevProps) => {
  return {showBlogs :! prevState.showBlogs}
  });

    console.log(this.state.showBlogs);
  }
  

  render() {
    console.log('render method called');
    console.log(this.state);

    const blogCards = isMyArrayEmpty(this.state.blogArr) ? []: this.state.blogArr.map((item,position) => {
    
      return(
          <BlogCard className={'Blog'} key={position} title={item.title} 
          description = {item.description} details={item.details} likeCount={item.likeCount} id = {item.id}
          onLikeBtnClick={ () => this.onLikeBtnClick(position)} />
      )
    })
    return(
      <div className= "App">
      {/* <button onClick={this.onHideBtnClick}>Hide List</button> */}
      <button onClick={this.onHideBtnClick}> {this.state.showBlogs ?'Hide List' :'Show List'}</button>
      <br></br>
      {
      this.state.showBlogs ? blogCards:null
      }
    </div>
    );
  }
  // return (
  //   <div className="App">
  //     <button onClick={onHideBtnClick}>Hide List</button>
  //     <br></br>
  //     {blogCards}

  //     {/* <div className='BlogCord'>
  //       <h3>{blogObj.title}</h3>
  //       <p>{blogObj.description}</p>
  //     </div>
      
  //     <div className='BlogCord'>
  //       <h3>{blogObj.title}</h3>
  //       <p>{blogObj.description}</p>
  //     </div>
      
  //     <div className='BlogCord'>
  //       <h3>{blogObj.title}</h3>
  //       <p>{blogObj.description}</p>
  //     </div> */}


  //     {/* <h3> Full Name: {firstName+' '+lastName}</h3> */}
  //     {/* <h3> Full Name: {getFullName(firstName,lastName)}</h3>
  //     <p>{mObj.age}</p>
  //     <p>{job}</p> */}

  //     {/* <input placeholder={inputplaceholder} /> */} 
  //     {/* {detailsInputBos} */}


  //   </div>
  // );
}

export default App;
