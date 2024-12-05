import Image from "next/image";

export function SecondBlock() {
    return (
        <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album.jpg" className='w-full' width={120} height={120} alt='Capa Wasting Light Foo Fighters' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Wallows, Coin in Red, and more...</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album.jpg" className='w-full' width={120} height={120} alt='Capa Wasting Light Foo Fighters' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Wallows, Coin in Red, and more...</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album.jpg" className='w-full' width={120} height={120} alt='Capa Wasting Light Foo Fighters' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Wallows, Coin in Red, and more...</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album.jpg" className='w-full' width={120} height={120} alt='Capa Wasting Light Foo Fighters' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Wallows, Coin in Red, and more...</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album.jpg" className='w-full' width={120} height={120} alt='Capa Wasting Light Foo Fighters' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Wallows, Coin in Red, and more...</span>
            </a>
        </div>
    )
}