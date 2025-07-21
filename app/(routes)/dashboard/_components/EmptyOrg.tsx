import Image from "next/image";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center lg:mt-[200px] mt-[100px]">
      <Image src="/loading-element.png" alt="Empty" height={300} width={300} />
      <h2 className="text-3xl font-semibold mt-1">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Organization to get started
      </p>
      <div className="fixed bottom-16 lg:right-20 z-50 right-16">
        <Image src="/curved-arrow.png" alt="arrow" height={200} width={200} />
      </div>
    </div>
  );
};
