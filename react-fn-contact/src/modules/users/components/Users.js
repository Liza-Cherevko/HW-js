import { useState } from 'react';
import useUsers from '../hooks/useUsers'
import UserForm from './UserForm'
import UserList from './UserList'


function Users() {
    const { users, deleteUser, saveUser, isLoading } = useUsers();
    const [currentUser, setCurrentUser] = useState({})
    function editUser(id) { 
        setCurrentUser(users.find((item) => item.id === id));
    }
 console.log(currentUser)
    function onSave(newUser) {
        saveUser(newUser);
        setCurrentUser({});
    }
    return (
        <div>
            {isLoading ? (
                'Loading....'
            ) : (
                <>
                    <UserList
                        users={users}
                        onDelete={deleteUser}
                        onEdit={editUser}
                    />
                    <UserForm onSave={onSave} currentUser={currentUser} />
                </>
            )}
        </div>
    );
}

export default Users
