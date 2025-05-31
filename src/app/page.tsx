import Image from "next/image";
import CursorGlow from './components/CursorGlow';

export default function Home() {
  return (
    <CursorGlow>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-sans-serif)]">
      <header className="row-start-1 flex items-center center">
        <div className ="text-6xl font-bold tracking-[-.01em]">
          <a className = "tracking-[-.01em] text-foreground">
            Horizon Avionics
          </a>
        </div>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h4 className="tracking-[-.01em]">
            Hackclub's first open source flight computer
          </h4>
          <a className="tracking-[-.01em]">
            3 Microcontrollers and all the features you could ever need
          </a>
          <a className="tracking-[-.01em]">
            Designed for the Hackclubers, by Hackclubbers 
          </a>  

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-15 sm:h-17 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/Horizon-Avionics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark"
              src="/github.svg"
              alt="Vercel logomark"
              width={35}
              height={35}
            />
            Check out the repositories!
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-15 sm:h-17 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://docs.google.com/document/d/1rhxR0z3o1-5nPLaZscAGfexemYaoFTkNt6UDeAldLvw/edit?pli=1&tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
    </CursorGlow>
  );
}
