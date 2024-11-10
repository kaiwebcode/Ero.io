import { CheckCircle, CheckCircle2, CheckCircle2Icon, CheckIcon } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
// import { CheckCircledIcon } from "@radix-ui";


interface FormSuccessProps {
    message?: string
};

export const FormSuccess = ({message} : FormSuccessProps) => {
    if(!message) return null;

    return (
        <div className="bg-emerald-500/15 p-3 rounded-lg flex items-center gap-x-2 text-sm text-emerald-500">
            <FaCheckCircle className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
}