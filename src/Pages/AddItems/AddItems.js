import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = "http://localhost:5000/inventory";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(result => console.log(result));
  };

  return (
    <div className="container max-w-xl mx-auto py-24">
        <h2 className="text-3xl text-slate-900 font-bold pb-8 text-center uppercase">Add Inventory</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Name" {...register("name")} />
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Supplier" {...register("supplier")} />
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Quantity" {...register("quantity")} />
        <textarea className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Address" {...register("content", { required: true })}></textarea>
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' placeholder="Price" {...register("price", { required: true })} />
        {/* <input className='ring-1' type="file" {...register("img")} /> */}
        <input className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700' type="text" placeholder="Photo url" {...register("image")} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <button className="button button-black block" type='submit'>Submit</button>
      </form>
    </div>
  );
};  

export default AddItems;