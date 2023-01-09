// import React  from "react";
import { dumpLog } from "./utils";
import classes from './BlogCard.module.css';
import React  from 'react';


const BlogCard = (props) =>{
 
    // onLikeBtnClick = () =>{
    //     this.setState((prevState,prevProp) => {
    //         return{likeCount:prevState.likeCount + 1}
    //         });
    // }

    dumpLog(props);
    return(
        <div className={classes.NewBlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Like Count: <span className={classes.likeCount}>{props.likeCount}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    )


    // dumpLog(props)
    // return(
    //     // <div className='BlogCord'>
    //     <div className={classes.NewBlogCard}>
    //         {/* <h3>Blog Title</h3>
    //         <p>Blog Description</p> */}

    //         {/* USE PROPS */}
    //         <h3>{props.title}</h3>
    //         <p>{props.description}</p>
    //     </div>
    // )
}

// Default Expoters
export default BlogCard 