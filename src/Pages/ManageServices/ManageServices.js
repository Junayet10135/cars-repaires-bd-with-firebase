import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services , setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure?');
        if(proceed){
            const url = `https://peaceful-reaches-09947.herokuapp.com/service/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                toast('delete successfully!')
                const remaining = services.filter(service =>service._id !== id);
                setServices(remaining);
            })

        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Your Services</h2>
            {
                services.map(service => <div 
                key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default ManageServices;