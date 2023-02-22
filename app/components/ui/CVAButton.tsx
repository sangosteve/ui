import React,{ButtonHTMLAttributes} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


const buttonStyles = cva(`rounded-md relative px-4 py-2`,{
    variants:{
       variant:{
        default:"bg-white text-gray-300 border border-gray-100",
        primary:"bg-blue-500 text-white",
        destructive:"bg-red-500 text-white",
        monochrome:"bg-green-500 text-white"
       },
       modifier:{
        outline:"bg-transparent border border-current shadow-md",
        plain:"shadow-none bg-transparent border-none"
       },
       fullWidth:{
        true:"w-full"
       }
    },
    compoundVariants:[
    {
        modifier:"outline",
        variant:"primary",
        className:"text-blue-500 border border-blue-500"
    },
    {
        modifier:"outline",
        variant:"destructive",
        className:"text-red-500 border border-red-500"
    },
    {
        modifier:"outline",
        variant:"monochrome",
        className:"text-green-500 border border-green-500"
    }
]
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonStyles>{
    children:React.ReactNode;
}

export const Button = ({children, variant,modifier,fullWidth}:ButtonProps)=>{
    return <button className={twMerge(buttonStyles({variant,modifier,fullWidth}))}>{children}</button>
}
export default Button;