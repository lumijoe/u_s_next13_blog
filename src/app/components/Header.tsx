import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='py-5 px-10 border-b flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-medium'>
                    <Link href="/">Next.js v13 Blog</Link>
                </h1>
            </div>
            <div>
                <nav className='text-sm'>
                   <Link href="/articles/new" className='bg-orange-300 px-3 py-3 rounded-md'>記事を書く</Link> 
                </nav>
            </div>
        </header>
    )
}