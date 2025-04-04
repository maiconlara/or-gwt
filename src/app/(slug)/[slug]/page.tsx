    
import { redirect } from "next/navigation";


export default async function Page({  params }: { params: { slug: string } }) {
  const {slug} = params;

    return  redirect(`/${slug}/inicio`);
}

