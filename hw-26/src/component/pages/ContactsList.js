

import {Link} from "react-router-dom";
import useUsersList from "./hooks/useUsersList";
import { NavLink } from 'react-router-dom';
const ContactsList = () => {
    const { list,deleteUser } = useUsersList();

    return (
       
        <>
                <h1>Contacts List</h1>
            <table className="table">
                <thead>
                <tr className="">
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item)=>(
                    <tr>
                        <th scope="row">{item + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                            <Link className="btn" to="/user"><i className="fa-solid fa-eye m-2"></i></Link>
                            <Link className="btn btn-outline-dark m-2"  to="/user/edit">Edit</Link>
                            <Link className="btn btn-danger m-2"  onClick={() => deleteUser(item.id)} >Delete</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
        
                </table>
        </>

    );

}

export default ContactsList;