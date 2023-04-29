import React, { useState } from 'react';
import './Sidebar.css'
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import UserDetails from '../UserDetails/UserDetails';
import AddAbreack from '../AddAbreack/AddAbreack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sidebar = (props) => {
    const [breack, setBreack] = useState(0)
    const breackTime = (time) => {
        setBreack(time)
    }
    const showToast = () =>{
        toast(`Congratulations! you have successfully added your exercise rutine. your total exercise time:${props.exercises} & maximum breack time after each exercise: ${breack}`, {
            position:"top-right"
        });
    }
    return (
        <div className='sidebar'>
            <div className='user-container'>
                <img src="https://avatars.githubusercontent.com/u/78220038?v=4" alt="" />
                <div>
                    <h2 className='name'>Iyasin Raj</h2>
                    <p className='location'>Rampura, Dhaka</p>
                </div>
            </div>
            <UserDetails></UserDetails>
            <AddAbreack breackTime={breackTime}></AddAbreack>
            <ExerciseDetails breack={breack} exerciseTime={props.exercises}></ExerciseDetails>
            <button onClick={showToast} className='btn-complete'>Activity Completed</button>
            <ToastContainer/>
        </div>
    );
};


export default Sidebar;