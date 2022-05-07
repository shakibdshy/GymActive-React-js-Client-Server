import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory, setinventory] = useState({});
    const { _id, name, content, image, price, supplier, quantity, sold } = inventory;

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setinventory(data));
    }, [inventoryId]);

    function removeOne(id) {
        let newQuantity = quantity - 1;
        let newSold = parseInt(sold) + 1;
        const newObject = { ...inventory, quantity: newQuantity, sold: newSold };
        setinventory(newObject);
        fetch(`http://localhost:5000/update-quantity/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObject)
        })
    }
    
    return (
        <>
            <div className="py-24">
                <div className="container max-w-7xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 p-4">
                            <img src={image} alt="" className="w-full h-[580px] object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 p-4">
                            <p className="text-xl font-medium flex flex-wrap gap-4"><strong>Product Id:</strong> <span className='text-md font-open text-gray-500'>{_id}</span></p>
                            <h2 className="text-3xl font-bold flex flex-wrap gap-4 mt-4"><strong>Product Name:</strong> <span>{name}</span></h2>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Supplier:</strong> <span className='text-md font-open'>{supplier}</span></p>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Price:</strong> <span className='text-md font-open'>${price}</span></p>
                            <p className="text-xl text-gray-800 flex gap-4 mt-4"><strong>Product Description:</strong> <span className='text-md font-open'>{content}</span></p>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Quantity:</strong> <span className='text-md font-open'>{quantity}</span></p>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Sold:</strong> <span className='text-md font-open'>{sold}</span></p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button onClick={() => removeOne(_id)} className="button button-red">Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    );
};

export default InventoryDetails;