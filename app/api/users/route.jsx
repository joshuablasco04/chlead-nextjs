import { NextResponse } from "next/server";
import connect from "@/db";
import Users from '@/models/User';

export const GET = async (req,res) => {
  try{
    await connect();
    const users = await Users.find();
    return new NextResponse(JSON.stringify(users) , {status:200})
  }catch(error){
    return new NextResponse("Error in fetching post" + error, {status: 500})
  }
}