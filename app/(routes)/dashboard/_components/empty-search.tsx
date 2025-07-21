import Image from "next/image"


export const EmptySearch = () => {
    return (
        <div className="h-full flex flex-col items-center justify-cente lg:mt-[200px] mt-[100px]">
         <Image src="/not-found.png" alt="Empty" height={300} width={300} />
         <h2 className="text-3xl font-semibold mt-2">
            No result found!
         </h2>
         <p className="text-muted-foreground text-sm mt-1"> 
            Try searching for something else
         </p>
        </div>
    )
}