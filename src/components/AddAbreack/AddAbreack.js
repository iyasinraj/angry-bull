import React from 'react';

const AddAbreack = (props) => {
    const {breackTime} = props
    return (
        <div>
            <h2 className='title'>Add A Breack</h2>
            <div className='add-breack'>
                <button><span onClick={()=>{breackTime(10)}}>10</span>s</button>
                <button><span onClick={()=>{breackTime(20)}}>20</span>s</button>
                <button><span onClick={()=>{breackTime(30)}}>30</span>s</button>
                <button><span onClick={()=>{breackTime(40)}}>40</span>s</button>
                <button><span onClick={()=>{breackTime(50)}}>50</span>s</button>
            </div>
        </div>
    );
};



export default AddAbreack;