import React, { useEffect, useState } from 'react';
import './Main.css'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
const Main = () => {
    const [exercise, setExercise] = useState(0)
    const [data, setData] = useState([])
    const getData = (data) =>{
        setExercise(prevState => exercise + data)
    }
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='main'>
            <main className='mainsection'>
                <Navbar></Navbar>
                <div className='topic-div'>
                    <h1>Select today's exercise</h1>
                    <div className='topics'>
                        {
                            data.map(r => <Topic data= {r} getData = {getData}></Topic>)
                        }
                    </div>
                </div>
            </main>
            <Sidebar exercises={exercise}></Sidebar>
        </div>
    );
};

const Topic = (props) => {
    const {img, title, description, time, age} = props.data
    return (
        <div className='topic'>
            <img src={img} alt="" srcset="" />
            <p><strong>{title}</strong></p>
            <p>{description.slice(0, 40)}....</p>
            <p>For Age: <strong>{age}</strong></p>
            <p>Time Required: <strong>{time}s</strong></p>
            <button onClick={() => {props.getData(time)}}>Add To List</button>
        </div>
    );
}

export default Main;