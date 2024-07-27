import Image from 'next/image';


const Products = ({data}) => {

  return (
    <div>
      <section className='max-w-screen-xl m-auto'>
        <div className='  m-5 my-12 p-5 rounded-xl'>
              <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>Valves</p>
                <div className='grid grid-cols-2 gap-2 mt-5 md:grid-cols-3  md:gap-10' >
          
                    {data.map(item=> (
                        item.category == 'Valve' ? 
                            <div key={item._id} className='text-white bg-gray-500 flex flex-col justify-between items-center p-5 gap-2 shadow-md shadow-black'>
                                <Image src={`/${item.productImage}`} alt='Product Image' width={100} height={100} className='text-white h-[120px]'/>
                                    <div><span className='mr-2'>₱</span>{item.productAmount}</div>
                                    
                                    <button className='bg-blue-600 w-24 rounded p-1 hover:bg-blue-700'>Add to cart</button>
                            </div> 
                        :
                        ''
                    ))}
                </div>
        </div>
      </section>
      <section className='max-w-screen-xl m-auto'>
           <div className='  m-5 my-12 p-5 rounded-xl'>
              <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>Motors, Gear Box and Pumps</p>
                <div className='grid grid-cols-2 gap-2 mt-5 md:grid-cols-3  md:gap-10' >
          
                    {data.map(item=> (
                        item.category == 'Pumps' ? 
                            <div key={item._id} className='text-white bg-gray-500 flex flex-col justify-between items-center p-5 gap-2 shadow-md shadow-black'>
                                <Image src={`/${item.productImage}`} alt='Product Image' width={100} height={100} className='text-white h-[120px]'/>
                                    <div><span className='mr-2'>₱</span>{item.productAmount}</div>
                                    
                                    <button className='bg-blue-600 w-24 rounded p-1 hover:bg-blue-700'>Add to cart</button>
                            </div> 
                        :
                        ''
                    ))}
                </div>
        </div>
      </section>
      <section className='max-w-screen-xl m-auto'>
           <div className='  m-5 my-12 p-5 rounded-xl'>
              <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>Instrumentation and Automation</p>
                <div className='grid grid-cols-2 gap-2 mt-5 md:grid-cols-3  md:gap-10' >
          
                    {data.map(item=> (
                        item.category == 'Automation' ? 
                            <div key={item._id} className='text-white bg-gray-500 flex flex-col justify-between items-center p-5 gap-2 shadow-md shadow-black'>
                                <Image src={`/${item.productImage}`} alt='Product Image' width={100} height={100} className='text-white h-[120px]'/>
                                    <div><span className='mr-2'>₱</span>{item.productAmount}</div>
                                    
                                    <button className='bg-blue-600 w-24 rounded p-1 hover:bg-blue-700'>Add to cart</button>
                            </div> 
                        :
                        ''
                    ))}
                </div>
        </div>
      </section>
      <section className='max-w-screen-xl m-auto'>
           <div className='  m-5 my-12 p-5 rounded-xl'>
              <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>Industrial Supplies</p>
                <div className='grid grid-cols-2 gap-2 mt-5 md:grid-cols-3  md:gap-10' >
          
                    {data.map(item=> (
                        item.category == 'Industrial' ? 
                            <div key={item._id} className='text-white bg-gray-500 flex flex-col justify-between items-center p-5 gap-2 shadow-md shadow-black'>
                                <Image src={`/${item.productImage}`} alt='Product Image' width={100} height={100} className='text-white h-[120px]'/>
                                    <div><span className='mr-2'>₱</span>{item.productAmount}</div>
                                    
                                    <button className='bg-blue-600 w-24 rounded p-1 hover:bg-blue-700'>Add to cart</button>
                            </div> 
                        :
                        ''
                    ))}
                </div>
        </div>
      </section>
      <section className='max-w-screen-xl m-auto'>
           <div className='  m-5 my-12 p-5 rounded-xl'>
              <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>Electrical Supplies</p>
                <div className='grid grid-cols-2 gap-2 mt-5 md:grid-cols-3  md:gap-10' >
          
                    {data.map(item=> (
                        item.category == 'Electrical' ? 
                            <div key={item._id} className='text-white bg-gray-500 flex flex-col justify-between items-center p-5 gap-2 shadow-md shadow-black'>
                                <Image src={`/${item.productImage}`} alt='Product Image' width={100} height={100} className='text-white h-[120px]'/>
                                    <div><span className='mr-2'>₱</span>{item.productAmount}</div>
                                    
                                    <button className='bg-blue-600 w-24 rounded p-1 hover:bg-blue-700'>Add to cart</button>
                            </div> 
                        :
                        ''
                    ))}
                </div>
        </div>
      </section>
    </div>
    )
}

export default Products