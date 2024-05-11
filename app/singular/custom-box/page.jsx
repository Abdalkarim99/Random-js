import SelectedBox from '@/components/SelectedBox';
import React from 'react';

function CustomBoxPage() {
  return (
   
      <div className=' bg-black/70 shadow-lg rounded-lg p-4 w-auto flex items-start justify-center h-screen'>
      <h1 className='mb-4 text-gray-500'>Custom Box Page</h1>
      <SelectedBox/>
      </div>
    
  );
}

export default CustomBoxPage;