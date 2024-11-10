import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required!!"
    }),
    password: z.string().min(1, {
        message: "Password is required!!"
    }).max(10)
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required!!"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }).max(10),
    name: z.string().min(1, {
        message: "Name is required"
    })
})