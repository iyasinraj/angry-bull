import React, { useEffect, useState } from 'react';
import './Topics.css'
const Topics = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <h1>Select today's exercise</h1>
            <div className='topics'>
                {
                    data.map(r => <Topic data= {r}></Topic>)
                }
            </div>
        </div>
    );
};

const Topic = (props) => {
    console.log(props.data)
    const {img, title, description, time, age} = props.data
    return (
        <div className='topic'>
            <img src={img} alt="" srcset="" />
            <p><strong>{title}</strong></p>
            <p>{description.slice(0, 40)}....</p>
            <p>For Age: <strong>{age}</strong></p>
            <p>Time Required: <strong>{time}s</strong></p>
            <button>Add To List</button>
        </div>
    );
}

export default Topics;