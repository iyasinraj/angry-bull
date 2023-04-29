import React from 'react';

const UserDetails = () => {
    return (
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
    );
};

export default UserDetails;