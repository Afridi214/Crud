import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })

    const {name, username, email, phone, website} = user;

    const onInputChange = e => {
        setUser ({...user,[e.target.name]: e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3003/users", user);
        history.push("/")
    }

    return (

        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" name="name" value={name} onChange={e => onInputChange(e)} className="form-control form-control-lg mb-3" placeholder="Please Enter Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="username" value={username} onChange={e => onInputChange(e)} className="form-control form-control-lg mb-3" placeholder="Please Enter Your username" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="email" value={email} onChange={e => onInputChange(e)} className="form-control form-control-lg mb-3" placeholder="Please Enter Your Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" value={phone} onChange={e => onInputChange(e)} className="form-control form-control-lg mb-3" placeholder="Please Enter Your Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="website" value={website} onChange={e => onInputChange(e)} className="form-control form-control-lg mb-4" placeholder="Please Enter Your website name" />
                    </div>
                    <button className="btn btn-primary btn-block w-100" >Add User </button>
                </form>
            </div>
        </div>




    )
}

export default AddUser;