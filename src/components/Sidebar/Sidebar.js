import React from 'react';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1>Sidebar</h1>
            <User></User>
        </div>
    );
};

const User = () =>{
    return(
        <div>
            <div>
                <img src="" alt="" />
                <h2>Iyasin Raj</h2>
                <p>Location</p>
            </div>
            <UserDetails></UserDetails>
            <AddAbreack></AddAbreack>
            <ExerciseDetails></ExerciseDetails>
            <button>Activity Completed</button>
        </div>
    )
}
const UserDetails = () =>{
    return(
        <div>
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
            <h2>Add A Breack</h2>
            <div>
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
            <h2>Exercise Details</h2>
            <div>
                <div>
                    <p>Exercise Time</p>
                    <p>200 seconds</p>
                </div>
                <div>
                    <p>Breack Time</p>
                    <p>15 seconds</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;