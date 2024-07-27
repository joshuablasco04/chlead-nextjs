import { NextResponse } from "next/server";
import connect from "@/db";
import Cart from '@/models/Cart';

export const GET = async (req,res) => {
  try{
    await connect();
    const cart = await Cart.find();
    return new NextResponse(JSON.stringify(cart) , {status:200})
  }catch(error){
    return new NextResponse("Error in fetching post" + error, {status: 500})
  }
}