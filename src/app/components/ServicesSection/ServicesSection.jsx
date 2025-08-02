'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        const loadServices = async () => {
            const res = await fetch('/services.json');
            const data = await res.json();
            setServices(data);
        };

        loadServices();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="card bg-base-100 shadow-md p-6 border">
                        <Image src={service.img} width={314} height={208} alt={service.title} className='rounded-xl' />
                        <p className="text-gray-600 font-bold">{service.title}</p>
                        <p className="text-red-600">Price : ${service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
