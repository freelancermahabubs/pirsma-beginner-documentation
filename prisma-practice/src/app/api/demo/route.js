import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function POST(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.User.findMany(
            {
                include:{profile:true,post:true}
            }
        )

        // JSON Parse....
        return  NextResponse.json({status:"success",data:result})
    }


    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }

}
