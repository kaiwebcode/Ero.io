import Image from "next/image"


export const EmptyFav = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center lg:mt-[200px] mt-[100px]">
         <Image src="/no-fav.png" alt="Empty" height={300} width={300} />
         <h2 className="text-3xl font-semibold mt-2">
            No Favorite boards
         </h2>
         <p className="text-muted-foreground text-sm mt-1"> 
            Try favoriting a board
         </p>
        </div>
    )
}