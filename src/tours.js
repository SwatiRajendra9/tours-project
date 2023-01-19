import React, { useState } from "react";
import './App.css';
import { ReactDOM } from "react";

let clickedNotInterested=0;


function Tours(props) {
    
    let [slicedInfo,readMoreInfo] = useState(true);
    let [showDiv,hideDiv] = useState(true);
    
    
    
    return( 
        
            showDiv ?
            <div id='tour-package'>
            
                <img id='image' src={props.img}></img>
                <div id='price'>${props.price}</div>
                <div id='name'>{props.name}</div>
                <div id='info'>{slicedInfo ? props.info.slice(0,300) : props.info}
                    <button id='read-more' onClick={toggle}>{slicedInfo ? '...Read more' : 'Show less'}</button>
                </div>
                <button id='no-interest' onClick={disappear}>Not Interested</button>  
                
                
            </div> : null
    )

    function toggle() {
        if(slicedInfo == true) {
            readMoreInfo(slicedInfo=false);
        }
        else {
            readMoreInfo(slicedInfo=true);
        }
    }

    function disappear() {
       clickedNotInterested = clickedNotInterested+1;
       if(showDiv == true) {
        hideDiv(showDiv = false);
       }
       else {
        hideDiv(showDiv = true);
       }
      

       if(clickedNotInterested == 5) {
        props.anyToursLeft(false);
       }
       else {
        props.anyToursLeft(true);
       }
    }

}


export default Tours;

