// app/components/ServicesSection.tsx (or jsx)
import { collectionsNameObj, dbConnect } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


const ServicesSection = async () => {
    const serviceCollection = dbConnect(collectionsNameObj().servicesCollection);
    const data = await serviceCollection.find({}).toArray();

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((service, index) => (
                    <div key={index} className="card bg-base-100 shadow-md p-6 border">
                        <Image
                            src={service.img}
                            width={314}
                            height={208}
                            alt={service.title}
                            className="rounded-xl"
                        />
                        <p className="text-gray-600 font-bold">{service.title}</p>
                        <div className='flex justify-between mt-3'>
                            <p className="text-red-600">Price : ${service.price}</p>
                            <Link href={`/services/${service._id}`}>
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
