import { collectionsNameObj, dbConnect } from '@/lib/dbConnect';
import { MdInsertChartOutlined } from 'react-icons/md';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaNetworkWired } from 'react-icons/fa6';

const ServicesDetailsPage = async ({ params }) => {
    const { id } = await params
    const serviceCollection = dbConnect(collectionsNameObj().servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(id) })
    console.log(data);
    return (
        <div>
            <section className='py-12 flex justify-center'>
                <figure className='relative '>
                    <Image src={'/assets/images/checkout/checkout.png'} width={1137} height={300} alt={data.title} />
                    <div className='transparent-layer bg-gradient-to-l from-[#15151549] to-[#151515bd] absolute  w-full h-full rounded-xl top-0'>
                        <div className='w-full h-full flex items-center ps-8'>
                            <div>
                                <h1 className='text-white font-bold text-2xl'>Service Details</h1>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>
            <section className='lg:max-w-[1137px] mx-auto'>
                <div className='lg:flex gap-8'>
                    <div className='w-6/2'>
                        <figure >
                            <Image src={data.img} width={752} height={422} alt={data.title} className='rounded-2xl' />
                        </figure>
                        <h1 className='text-3xl font-bold pt-12 pb-8'>{data.title}</h1>
                        <p>
                            {data.description}
                        </p>
                    </div>
                    <div className='w-6/4'>
                        <div className=' p-8 bg-base-200 rounded-2xl'>
                            <h1 className='px-5 text-2xl font-semibold mb-3'>Services</h1>
                            <div className='space-y-4 '>
                                <Link href={''} className='flex items-center justify-between rounded bg-white hover:text-white hover:bg-accent p-5'>Full Car Repair <FaArrowRight className='text-red-btn' /></Link>
                                <Link href={''} className='flex items-center justify-between rounded bg-white hover:text-white hover:bg-accent p-5'>EngineRepair <FaArrowRight className='text-red-btn' /></Link>
                                <Link href={''} className='flex items-center justify-between rounded bg-white hover:text-white hover:bg-accent p-5'>Automatic Services <FaArrowRight className='text-red-btn' /></Link>
                                <Link href={''} className='flex items-center justify-between rounded bg-white hover:text-white hover:bg-accent p-5'>Engine Oil Change <FaArrowRight className='text-red-btn' /></Link>
                                <Link href={''} className='flex items-center justify-between rounded bg-white hover:text-white hover:bg-accent p-5'>Battery Change <FaArrowRight className='text-red-btn' /></Link>
                            </div>
                        </div>
                        <div className='py-12'>
                            <div className='p-8  bg-[#151515] text-white rounded-2xl'>
                                <h1 className='font-bold text-2xl'>Download</h1>
                                <div className='space-y-4 mt-4'>
                                    <Link href={''} className='flex items-center justify-between w-full'>
                                        <div className='flex items-center gap-4'>
                                            <MdInsertChartOutlined size={28} />
                                            <div>
                                                <h4>Our Brochure</h4>
                                                <p>Download</p>
                                            </div>
                                        </div>
                                        <div className='rounded p-4 bg-accent text-white'>
                                            <FaArrowRight />
                                        </div>
                                    </Link>
                                    <Link href={''} className='flex items-center justify-between w-full'>
                                        <div className='flex items-center gap-4'>
                                            <MdInsertChartOutlined size={28} />
                                            <div>
                                                <h4>Our Brochure</h4>
                                                <p>Download</p>
                                            </div>
                                        </div>
                                        <div className='rounded p-4 bg-accent text-white'>
                                            <FaArrowRight />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ServicesDetailsPage;