import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'



const Services = () => {
    const [services, setServices] =useState([]);
    useEffect(()=>{
        fetch('https://peaceful-reaches-09947.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='services' className='mt-5 text-center container'>
            <h2>Services:{services.length}</h2>
            <div className='row'>
              {
                  services.map(service =><Service
                  key={service._id}
                  service = {service}
                  ></Service> )
              }
            </div>
        </div>
    );
};

export default Services;