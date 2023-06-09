import React from 'react';

const ExerciseDetails = (props) => {
    const {exerciseTime, breack} = props

    return (
        <div>
             <h2 className='title'>Exercise Details</h2>
            <div className='exercise'>
                <div className='exercise-time'>
                    <p>Exercise Time</p>
                    <p>{exerciseTime} seconds</p>
                </div>
                <div className='exercise-time'>
                    <p>Breack Time</p>
                    <p>{breack} seconds</p>
                </div>
            </div>
        </div>
    );
};


export default ExerciseDetails;