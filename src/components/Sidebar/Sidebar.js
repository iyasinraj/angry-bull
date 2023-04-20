import React from 'react';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <User></User>
        </div>
    );
};

const User = () =>{
    return(
        <div>
            <div className='user-container'>
                <img src="https://avatars.githubusercontent.com/u/78220038?v=4" alt="" />
                <div>
                    <h2 className='name'>Iyasin Raj</h2>
                    <p className='location'>Rampura, Dhaka</p>
                </div>
            </div>
            <UserDetails></UserDetails>
            <AddAbreack></AddAbreack>
            <ExerciseDetails></ExerciseDetails>
            <button className='btn-complete'>Activity Completed</button>
        </div>
    )
}
const UserDetails = () =>{
    return(
        <div className='user-details'>
            <div>
                <p><strong>75</strong><span>kg</span></p>
                <p>Weight</p>
            </div>
            <div>
                <p><strong>6.1</strong></p>
                <p>Height</p>
            </div>
            <div>
                <p><strong>24</strong><span>yrs</span></p>
                <p>Age</p>
            </div>
        </div>
    )
}

const AddAbreack = () =>{
    return(
        <div>
            <h2 className='title'>Add A Breack</h2>
            <div className='add-breack'>
                <button>10<span>s</span></button>
                <button>20<span>s</span></button>
                <button>30<span>s</span></button>
                <button>40<span>s</span></button>
                <button>50<span>s</span></button>
            </div>
        </div>
    )
}

const ExerciseDetails = () => {
    return(
        <div>
            <h2 className='title'>Exercise Details</h2>
            <div className='exercise'>
                <div className='exercise-time'>
                    <p>Exercise Time</p>
                    <p>200 seconds</p>
                </div>
                <div className='exercise-time'>
                    <p>Breack Time</p>
                    <p>15 seconds</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;