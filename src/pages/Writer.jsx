import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WriterDetails from '../components/WriterDetails';

const Writer = () => {
    const writer= useLoaderData()
    
    return (
        <section>
        <div className="bg-graybg h-32 flex items-center justify-center rounded-2xl">
        <h1 className="text-center font-bold text-3xl ">List of Writer</h1>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-4 lg:px-0 gap-6 mt-8'>
            
           {
            writer.map( item => (<WriterDetails key={item.id} item={item}></WriterDetails> ))
           }

        </div>
        </section>
    );
};

export default Writer;