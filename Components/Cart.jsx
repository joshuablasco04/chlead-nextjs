
import Image from 'next/image'


const Cart = ({ handleCart}) => {

 
  return (
    <div className=' h-screen w-[50%] grid right-0 fixed bg-gray-500 border-t-2 border-l-2 border-black shadow-white shadow-xl md:w-[25%]  md:h-full md:mt-[1060px] text-sm md:text-xl' >
        <div className='flex justify-between bg-gradient-to-r from-[#d71313] to-black h-10 text-white'>
            <h2 className='text-3xl flex items-center ml-1'>Your cart</h2><span className='bg-black  w-6 justify-center items-center flex text-center cursor-pointer hover:text-red-500' onClick={handleCart}>X</span>
        </div>
        <div className=' absolute right-0 w-[100%]'>
            <div className='bg-slate-800 grid grid-cols-3 h-24 justify-between p-3 absolute w-[100%] mt-12'>
                <Image src={'/1.webp'} width={50} height={100} alt='Cart item'/>
                <div className='flex items-center gap-3'>
                    <button>-</button>
                    <h2>0</h2>
                    <button>+</button>
                </div>
                <div className='flex items-center gap-2'>
                    <span>₱</span><h2>9800</h2>
                </div>
            </div>
            <div className='flex text-center items-center text-white fixed bottom-0 w-[50%] '>
                <h2 className='bg-blue-400  w-[50%] md:w-[25%]'><span className='mr-2'>₱</span>0.00</h2><span className='bg-blue-700 w-[50%] md:w-[25%]  cursor-pointer'>Checkout</span>
            </div>
        </div>
    </div>
    )
}

export default Cart