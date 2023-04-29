import React from 'react';
import './Sidebar.css'
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import UserDetails from '../UserDetails/UserDetails';
import AddAbreack from '../AddAbreack/AddAbreack';
const Sidebar = (props) => {
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
            <AddAbreack></AddAbreack>
            <ExerciseDetails exerciseTime={props.exercises}></ExerciseDetails>
            <button className='btn-complete'>Activity Completed</button>
        </div>
    );
};


export default Sidebar;