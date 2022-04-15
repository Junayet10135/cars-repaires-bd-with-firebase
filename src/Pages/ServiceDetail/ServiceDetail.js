import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId} = useParams();
    return (
        <div>
            <h2>Here Is The Details of this service :{serviceId}</h2>
            <div className='text-center mt-5'>
                <Link to="/checkout" >
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;<h2>Here Is The Details</h2>