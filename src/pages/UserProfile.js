import React from 'react';
import {useParams} from 'react-router-dom';

const userData = {
    1: { name: 'John Doe', age: 25, email: 'john@example.com' },
    2: { name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    3: { name: 'Sam Wilson', age: 22, email: 'sam@example.com' }
  };

function UserProfile() {

    const {id} = useParams();

    const user = userData[id];

    if(!user){
        return <h2>User not found!</h2>
    }
  return (
    <div className='user-profile'>
        <h2>User Profile</h2>
        <h4><strong>Name: </strong>{user.name}</h4>
        <h4><strong>Age: </strong>{user.age}</h4>
        <h4><strong>Email: </strong>{user.email}</h4>
    </div>
  )
}

export default UserProfile