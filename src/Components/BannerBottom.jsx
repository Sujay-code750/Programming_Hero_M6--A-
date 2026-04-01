import React from 'react';

const BannerBottom = () => {
    return (
        <div className='primaryGradient py-10'>
            <div className='w-7xl mx-auto flex justify-around'>
                <div>
                    <h1 className='text-white text-[60px] font-bold'>50K+</h1>
                    <p className='text-white text-[24px]'>Active Users</p>
                </div>
                <div className='relative'>
                    <div className='bannerBottom-border px-[200px]'>
                        <h1 className='text-white text-[60px] font-bold'>200+</h1>
                    <p className='text-white text-[24px]'>Premium Tools</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-white text-[60px] font-bold'>4.9</h1>
                    <p className='text-white text-[24px]'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;