import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';


const Edit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    const [record, setRecord] = useState(data);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [salary, setSalary] = useState("");
    const [deignation, setDeignation] = useState("");


    useEffect(() => {
        setName(location.state.name)
        setEmail(location.state.email)
        setPassword(location.state.password)
        setCity(location.state.city)
        setSalary(location.state.salary)
        setDeignation(location.state.deignation)
    }, [location.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        let update = record.map((val) => {
            if (val.id == location.state.id) {
                val.name = name;
                val.email = email;
                val.password = password;
                val.city = city;
                val.salary = salary;
                val.deignation = deignation;
            }
            return val;
        })
        localStorage.setItem('users', JSON.stringify(update))
        toast.success("Record Update");
        setTimeout(() => {
            navigate('/')
        }, 2000)
    };


    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">

                    <form onSubmit={handleSubmit} className='shadow'>
                            <div className="card card-body">

                                {/* Name */}
                                <div className="form-col d-flex justify-content-between align-items-center">

                                    <div className="col-md-6 mb-2">
                                        <label htmlFor="validationCustom01" className='mb-2'>Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>

                                </div>


                                {/* Email, password*/}
                                <div className="form-col d-flex justify-content-between align-items-center">

                                    <div className="col-md-6 mb-2">
                                        <label htmlFor="validationCustom02" className='mb-2'>Email Address</label>
                                        <input type="email" className="form-control" placeholder="Enter your Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </div>

                                    <div className="col-md-5 mb-2">
                                        <label htmlFor="validationCustom01" className='mb-2'>Password</label>
                                        <input type="tel" className="form-control" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </div>

                                </div>

                                {/* ciyt, Salary */}
                                <div className="form-col d-flex justify-content-between align-items-center">

                                    <div className="col-md-5 mb-2">
                                        <label htmlFor="validationCustom01" className='mb-2'>City</label>
                                        <input type="text" className="form-control" placeholder="Enter your City" onChange={(e) => setCity(e.target.value)} value={city} />
                                    </div>

                                    <div className="col-md-6 mb-2">
                                        <label htmlFor="validationCustom02" className='mb-2'>Salary</label>
                                        <input type="text" className="form-control" placeholder="Enter your Salary" onChange={(e) => setSalary(e.target.value)} value={salary} />
                                    </div>

                                </div>

                                {/* Country, Status*/}
                                <div className="form-col  d-flex justify-content-between align-items-center">

                                    <div className="col-md-7 mb-2">
                                        <label htmlFor="validationCustom02" className='mb-2'>Degignation </label>
                                        <input type="text" className="form-control" placeholder="Enter Your Degignation" onChange={(e) => setDeignation(e.target.value)} value={deignation} />
                                    </div>

                                </div>

                                {/* Submit Button */}
                                <div className='d-flex justify-content-end'>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Edit