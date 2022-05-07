import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const navigateToInventoryDetails = (id) => {
        navigate(`/inventory/${id}`);
    }

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/newitems?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();
    }, [user]);

    const handelDelete = id => {
        const process = window.confirm("Are you sure you want to delete this item?");

        if (process) {
            const url = `http://localhost:5000/newitems/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    setItems(items.filter(item => item._id !== id));
                });
        }
    }

    return (
        <>
            <div className='container mx-auto py-24'>
                <div className='flex flex-wrap'>
                    {
                        items.map((inventory) => {
                            return (
                                <div key={inventory._id} className='w-full md:w-1/2 xl:w-1/3 px-4 mt-8'>
                                    <div className='rounded-xl relative'>
                                        <img
                                            className='rounded-xl w-full h-[270px] object-cover'
                                            src={inventory.image}
                                            alt=''
                                        />
                                        <span className='py-1 px-3 absolute bottom-4 left-4 inline-block uppercase text-sm font-semibold rounded bg-red-600 text-white'>
                                            ${inventory.price}
                                        </span>
                                    </div>
                                    <div className='inventory-content mt-8 py-6 px-8 bg-[#F6F6F6] rounded-[10px] transition-all ease-in-out duration-300 hover:bg-red-500'>
                                        <ul className='flex flex-wrap items-center gap-4'>
                                            <li>
                                                <span className='font-semibold text-black'>Supplier:</span>
                                                <span className='ml-2 text-[#777777]'>{inventory.supplier}</span>
                                            </li>
                                            <li>
                                                <span className='font-semibold text-black'>Quantity:</span>
                                                <span className='ml-2 text-[#777777]'>{inventory.quantity}</span>
                                            </li>
                                        </ul>
                                        <h3 className='mt-4 font-bold text-xl text-black hover:text-red-500 cursor-pointer transition-all ease-in-out duration-300'>
                                            <span onClick={() => navigateToInventoryDetails(inventory._id)}>{inventory.name}</span>
                                        </h3>
                                        <p className='mt-4 text-[#777777]'>
                                            {inventory.content.slice(0, 100)}
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-4">
                                            <button onClick={() => navigateToInventoryDetails(inventory._id)} className="button button-black">Manage</button>
                                            <button onClick={() => handelDelete(inventory._id)} className="button button-red">Delete</button>
                                        </div>
                                    </div>
                                </div>

                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default MyItems;