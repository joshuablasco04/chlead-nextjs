import React from 'react'
import Image from 'next/image'

const Purchased = () => {
  return (
    <div className='max-w-screen-lg bg-slate-800 p-2 m-5 md:m-auto overflow-auto md:text-xl text-sm text-white md:mt-10 h-[720px]' >
        <table className='grid'>
            <thead className='bg-slate-600 p-2 grid  text-center  '>
                <tr className=' grid grid-cols-6 items-center border-y-2' >
                    <td>Date</td>
                    <td>Item description</td>
                    <td>Amount</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody className='bg-slate-400 p-2 grid text-center'>
                <tr className='grid grid-cols-6 items-center border-b-2 justify-between' > 
                    <td>January 1, 1991</td>
                    <td className='grid justify-center items-center gap-2 md:flex'><Image src={'/1.webp'} width={50} height={100} alt='Image'></Image> Ball Valve</td>
                    <td><span>₱</span>9800</td>
                    <td>2</td>
                    <td><span>₱</span>19600</td>
                    <td>Waiting for payment</td>
                </tr>
            
            </tbody>
        </table>
        

        <div className="flex flex-col items-center mb-0 absolute bottom-20 right-0 left-0 ">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
            </span>
            
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Prev
                </button>
                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </div>
       

    </div>
  )
}

export default Purchased