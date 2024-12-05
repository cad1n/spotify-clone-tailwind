import { FirstBlock } from '@/components/FirstBlock';
import { Footer } from '@/components/Footer';
import { SecondBlock } from '@/components/SecondBlock';
import { Sidebar } from '@/components/Sidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <FirstBlock />
          <h2 className='font-semibold text-2xl mt-10'>Made for User</h2>
          <SecondBlock />
        </main>
      </div>
      <Footer />
    </div>
  );
}
