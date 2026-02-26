import React from 'react'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3 bg-blue-600'>
            <div className='p-6'>
                <h3 className='mb-7 text-6xl font-bold'>Prospective<br/><span>customer</span><br/>segmentation</h3>
                <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam a nemo esse autem! Autem sequi suscipit, quod ratione officiis excepturi nemo, nam deserunt nulla porro cumque ullam, cum ut?</p>
            </div>
            <div className='text-8xl'>
               <i className='ri-arrow-right-up-line'></i>
            </div>
        </div>
    )
}

export default LeftContent