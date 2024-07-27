import { notFound } from 'next/navigation'
import Products from '@/Components/Products'

export const metadata = {
  title: "CH Lead | Products",
  description: "Generated by create next app",
};

async function getData(){
    const res = await fetch("http://localhost:3000/api/products");
    if(!res.ok) return notFound();
    return res.json();
}

const page = async() => {

    const data = await getData();

  return (
    <div>
      <Products data={data}/>
    </div>
    )
}

export default page