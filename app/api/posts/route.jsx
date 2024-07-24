import { NextResponse } from "next/server";
import connect from "@/db";
import Products from '@/models/Product'

export const GET = async (req,res) => {
  try{
    await connect();
    const products = await Products.find();
    return new NextResponse(JSON.stringify(products) , {status:200})
  }catch(error){
    return new NextResponse("Error in fetching post" + error, {status: 500})
  }
}