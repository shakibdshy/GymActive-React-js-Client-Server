import React from 'react';
import BlogItem from '../../Pages/Blog/BlogItem';

const BlogComponent = () => {
    return (
        <>
            <section className='pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]'>
                <div className='mb-16 container mx-auto text-center'>
                    <span className="mb-2 font-bold text-xl text-center text-red-500 block uppercase">Blog</span>
                    <h2 className='text-4xl text-black uppercase font-bold'>
                        LATEST <span className='text-red-600'>News</span> & ARTICLES
                    </h2>
                </div>
                <BlogItem />
            </section>
        </>
    );
};

export default BlogComponent;