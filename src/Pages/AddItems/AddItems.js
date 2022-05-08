import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (myData) => {
    const url = "https://gymactive.herokuapp.com/inventory";
    const newData = {...myData, sold: 0}
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then(result => console.log(result));

    const { data } = axios.post('https://gymactive.herokuapp.com/newitems',
      { ...myData, email: user.email, sold: 0 });
  };

  return (
    <div className="container max-w-xl mx-auto py-24">
      <h2 className="text-3xl text-slate-900 font-bold pb-8 text-center uppercase">Add Inventory</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className='hidden w-full lg:flex items-center text-sm leading-6 bg-slate-200 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' type='email' value={user?.email} placeholder="Email address" disabled />
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Name" {...register("name")} />
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Supplier" {...register("supplier")} />
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Quantity" {...register("quantity")} />
        <textarea className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Address" {...register("content", { required: true })}></textarea>
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Price" {...register("price", { required: true })} />
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' type="text" placeholder="Photo url" {...register("image")} />
        {errors.exampleRequired && <span>This field is required</span>}

        <button className="button button-black block" type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddItems;