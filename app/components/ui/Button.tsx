import React,{ButtonHTMLAttributes} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";


const buttonStyles = cva("flex items-center rounded-md px-4 py-2",{
  variants:{
    variant:{
      info:"bg-indigo-500 text-white",
      warning:"bg-orange-500 text-white",
      success:"bg-green-500 text-white",
      error:"bg-red-500 text-white"
    },
    intent:{
      filled:"",
      outline:"bg-transparent border border-current",
      ghost:"",
      link:"bg-transparent border-none shadow-none"
    },

    fullWidth:{
      true:"w-full"
    }
    
  },
  compoundVariants:[
    //INFO 
  {

    variant:"info",
    intent:"filled",
    className:"bg-indigo-500 text-white border-none"
  },
  {
    variant:"info",
    intent:"outline",
    className:"bg-transparent text-indigo-500 border border-current"
  },
  {
    variant:"info",
    intent:"ghost",
    className:"bg-indigo-50 text-indigo-500 border-none"
  },
  {
    variant:"info",
    intent:"link",
    className:"bg-transparent text-indigo-500"
  },
  //WARNING
  {

    variant:"warning",
    intent:"filled",
    className:"bg-orange-500 text-white border-none"
  },
  {
    variant:"warning",
    intent:"outline",
    className:"bg-transparent text-orange-500 border border-current"
  },
  {
    variant:"warning",
    intent:"ghost",
    className:"bg-orange-50 text-orange-500 border-none"
  },
  {
    variant:"warning",
    intent:"link",
    className:"bg-transparent text-orange-500"
  },

  //SUCCESS
  {

    variant:"success",
    intent:"filled",
    className:"bg-green-500 text-white border-none"
  },
  {
    variant:"success",
    intent:"outline",
    className:"bg-transparent text-green-500 border border-current"
  },
  {
    variant:"success",
    intent:"ghost",
    className:"bg-green-50 text-green-500 border-none"
  },
  {
    variant:"success",
    intent:"link",
    className:"bg-transparent text-green-500"
  },

  //ERROR
  {

    variant:"error",
    intent:"filled",
    className:"bg-red-500 text-white border-none"
  },
  {
    variant:"error",
    intent:"outline",
    className:"bg-transparent text-red-500 border border-current"
  },
  {
    variant:"error",
    intent:"ghost",
    className:"bg-red-50 text-red-500 border-none"
  },
  {
    variant:"error",
    intent:"link",
    className:"bg-transparent text-red-500"
  },


],
  defaultVariants:{
    variant:"info",
    intent:"filled"
  }
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonStyles>{
  children:React.ReactNode;
  // variant?:"info"|"error"|"success"|"warning",
  // intent?:"filled"|"link"|"ghost"|"outine",
  // fullWidth?:boolean,
}

export const Button = ({children, variant,intent,fullWidth}:ButtonProps)=>{
  return <button className={twMerge(buttonStyles({variant,intent,fullWidth}))} children={children}>{children}</button>
}
export default Button;