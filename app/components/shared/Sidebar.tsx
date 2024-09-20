"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn,SignedOut } from '@clerk/nextjs'
import { navLinks } from '@/app/constants'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
const Sidebar = () => {
  const pathname=usePathname();
  return (
    <aside className='hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex'
    >
      <div className='flex size-full flex-col gap-3'>
        <Link href={"/"} className='flex items-center gap-2 md:py-2'>
        <Image src={"/assets/images/logo-text.svg"} alt='' width={'180'} height={'28'}>
          </Image></Link>
        <nav className=' h-full flex-col justify-between md:flex md:gap-4'>
           <SignedIn>
                  <ul className='hidden w-full flex-col items-start gap-2 md:flex'>
                     {navLinks.map((link)=>{
                      const isActive=link.route===pathname
                      return (
                        <li key={link.route} className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-purple-100 hover:shadow-inner${isActive?'bg-purple-gradient text-white':'text-gray-700'}cursor-pointer p-2`} onClick={()=>{link.route}}>
                          <Link href={link.route} className=' p-16-semibold flex size-full'>
                          <Image src={link.icon} alt='logo' width={24} height={24} className={`${isActive && "brightness-200"}`}></Image>
                          {link.label}
                          </Link>
                            
                        </li>
                 
                      )
                     })}
                     <li className='flex-center cursor-pointer gap-2 p-4'>
                        <UserButton></UserButton>
                     </li>
                   </ul>
           </SignedIn>
           <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href={"/sign-in"}>SIgnin</Link>
            </Button>
           </SignedOut>
        </nav>
      </div>
      </aside>
  )
}

export default Sidebar