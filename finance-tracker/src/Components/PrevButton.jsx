"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function PrevButton() {  
    const router=useRouter()
    const prevPage=()=>{
        router.back()
    }
  return (
<svg onClick={prevPage} className='md:hidden block ml-3 mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
</svg>
  )
}

export default PrevButton