
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Cart = ({ handleCart}) => {
    const [user, setUser] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([])
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/users", { cache: 'no-store' });
                const userData = await response.json();
                setUser(userData);
                const userCart = userData.map((user)=> user.cart );
                setCart(userCart);
            } catch (error) {
                console.error('Failed to fetch cart data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        calculateTotal(); 
    }, [user]);

    
    const handleIncrement = (id) => {
        
        const updatedUser = user.map(item => {
            const updatedCart = item.cart.map(data => 
                id == data._id 
                ?
                { ...data, productQuantity: data.productQuantity + 1, totalAmount: data.productAmount * (data.productQuantity + 1)}
                
                : data
                )
                return {...item, cart: updatedCart}
                }
            )
            
        setUser(updatedUser);
    };

    
  

    const handleDecrement = (id) => {
        const updatedUser = user.map(item => {
            const updatedCart = item.cart.map(data => 
                id == data._id 
                ?
                { ...data, productQuantity: data.productQuantity - 1, totalAmount: data.productAmount * (data.productQuantity - 1)}
                
                : data
                )
                return {...item, cart: updatedCart}
                }
            )
            
        setUser(updatedUser);
    };
    
    
    const calculateTotal = () => {
        const dataCart = user.flatMap(item => 
        item.cart.map(data=> data.totalAmount ))

        const totalAmount = dataCart.reduce((accu,curr) => (accu) += Number(curr),0);
        setTotal(totalAmount);
        console.log(totalAmount)
        
    };    

    
    

  return (
    <div className='h-screen w-[50%] grid right-0 fixed bg-gray-500 border-t-2 border-l-2 border-black shadow-white shadow-xl md:w-[25%]  md:h-full md:mt-[1060px] text-sm md:text-xl' >
        <div className='flex justify-between bg-gradient-to-r from-[#d71313] to-black h-10 text-white'>
            <h2 className='text-3xl flex items-center ml-1'>Your cart</h2>
            <span className='bg-black  w-6 justify-center items-center flex text-center cursor-pointer hover:text-red-500' onClick={handleCart}>X</span>
        </div>
        <div className=' flex flex-col w-[100%] absolute mt-12'>
            {user.map(item => 
                item.cart.map(data=>

                <div className='bg-slate-800 grid grid-cols-3 h-24 justify-between p-3 mt-1 w-[100%]' key={data._id}>
                    
                    <Image src={`/${data.productImage}`} width={50} height={50} alt='Cart item' className='h-20 w-14'/>
                    <div className='flex items-center gap-3'>
                        <button onClick={() => handleDecrement(data._id)}>-</button>
                        <h2>{data.productQuantity}</h2>
                        <button onClick={() => handleIncrement(data._id)} >+</button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>₱</span><h2>{data.totalAmount}</h2>
                        
                    </div>
                </div>
                )
            )}
            <div className='flex text-center items-center text-white fixed bottom-0 w-[50%] '>
                <h2 className='bg-blue-400  w-[50%] md:w-[25%]'><span className='mr-2'>₱</span>{total}</h2><span className='bg-blue-700 w-[50%] md:w-[25%]  cursor-pointer'>Checkout</span>
            </div>
        </div>
    </div>
    );
}

export default Cart