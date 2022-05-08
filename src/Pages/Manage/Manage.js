import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventory from "../../Hooks/useInventory";
import useNewInventory from "../../Hooks/useNewInventory";

const Manage = () => {
  const [inventories, setInventories] = useInventory();
  const navigate = useNavigate();

  const handelDelete = id => {
    const process = window.confirm("Are you sure you want to delete this item?");

    if (process) {
      const url = `https://gymactive.herokuapp.com/inventory/${id}`;

      fetch(url, {
        method: "DELETE",
      })
      .then(res => res.json())
        .then(result => {
          console.log(result);
        setInventories(inventories.filter(inventory => inventory._id !== id));
      });
    }
  }

  const navigateToInventoryDetails = (id) => {
    navigate(`/inventory/2@${id}`);
  };

  return (
    <>
      <div className='container max-w-6xl mx-auto py-24'>
        <div className="mb-8">
          <Link to='/add' className='button button-black'>Add New Item</Link>
        </div>
        <div className='flex flex-col gap-8'>
          {inventories.map((inventory) => {
            return (
              <div
                key={inventory._id}
                className='w-full flex flex-col md:flex-row'>
                <div className='rounded-xl relative flex-auto md:w-2/5'>
                  <img
                    className='rounded-xl md:rounded-l-xl md:rounded-r-none w-full h-[270px] object-cover'
                    src={inventory.image}
                    alt=''
                  />
                  <span className='py-1 px-3 absolute bottom-4 left-4 inline-block uppercase text-sm font-semibold rounded bg-red-600 text-white'>
                    ${inventory.price}
                  </span>
                </div>
                <div className='inventory-content mt-8 md:mt-0 py-6 px-8 bg-[#F6F6F6] rounded-[10px] md:rounded-r-[10px] md:rounded-l-none transition-all ease-in-out duration-300 hover:bg-slate-700'>
                  <ul className='flex flex-wrap items-center gap-4'>
                    <li>
                      <span className='font-semibold text-black'>
                        Supplier:
                      </span>
                      <span className='ml-2 text-[#777777]'>
                        {inventory.supplier}
                      </span>
                    </li>
                    <li>
                      <span className='font-semibold text-black'>
                        Quantity:
                      </span>
                      <span className='ml-2 text-[#777777]'>
                        {inventory.quantity}
                      </span>
                    </li>
                  </ul>
                  <h3 className='mt-4 font-bold text-xl text-black hover:text-red-500 transition-all ease-in-out duration-300'>
                    <button
                      onClick={() => navigateToInventoryDetails(inventory._id)}>
                      {inventory.name}
                    </button>
                  </h3>
                  <p className='mt-4 text-[#777777]'>
                    {inventory.content?.slice(0, 200)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigateToInventoryDetails(inventory._id)}
                    className='button button-black inline-block shadow-lg'>
                    Manage
                  </button>
                  <button
                    onClick={() => handelDelete(inventory._id)}
                    className='button button-red inline-block shadow-lg'>
                    Delete
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Manage;
