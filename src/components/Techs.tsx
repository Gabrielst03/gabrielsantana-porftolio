import Image from "next/image";

interface Props {
    title: string;
    imageUrl: string;
}

export function Tech({ title, imageUrl }: Props) {
    return (
        <>
            <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-14 h-14 md:h-20 md:w-20 rounded-full border border-gray-800 mt-3 hover:bg-zinc-800 transition-colors cursor-pointer">
                    <Image src={imageUrl} width={100} height={100} alt="" />
                </div>
                <h1 className='text-3xl font-medium'>{title}</h1>
            </div>
        </>
    )
}