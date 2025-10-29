import React from "react";
import {Button} from "../../components/ui/button"

interface CommonButtonProps {
    className? : string;
    onClick ?: any;
    title : React.ReactNode;
}

export const CommonButton:React.FC<CommonButtonProps>=({
    className,
    onClick ,
    title
})=>{
    return(
        <>
        <Button className={className} onClick={onClick}>{title}</Button>
        </>
    )
}