"use server"

import z from "zod"
import { Code, User } from "@/prisma/types"
import { createUser } from "@/prisma/orm/createUser"
import { CreateCode } from "@/prisma/orm/createCode"
import { redirect } from "next/navigation"

const UserSchema = z.object({
    email: z.string({
        invalid_type_error: "email address cannot be empty"
    }).email({message:"invalid email address"}),
    password: z.string({
        invalid_type_error: "password cannot be empty"
    }).min(8,{message:"password must be at least 8 characters long"})
}) 

export type State = {
    errors?:{
    email?:string[],
    password?:string[],
    }
    message?:string|null
}

export async function  register(prevState:State|undefined,formdata:FormData) {
        const data = {
            email:formdata.get("userId"),
            password:formdata.get("password")
        }

        const validated = UserSchema.safeParse(data)
        if(!validated.success)
        {
            return {
                errors:validated.error.flatten().fieldErrors,
            }
        }

        try {
            await createUser(data as User)
            return {message:"Registration successful"}
        } catch (error:any) {
            return {message:error.message}
        }
        
}


export async function UploadCode(formdata:FormData) {
        const data = {
            question : formdata.get("question"),
            answer : formdata.get("answer"),
            user:"anbu@gmail.com"
        }
        try
        {
           await CreateCode(data as Code)
        }
        catch(error){
            console.log("Error uploading code")
        }

        redirect("/home/myUploads")
}