import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Article } from "@/types"

type ArticleListProps = {
    articles: Article[];
};

export default function ArticleList ({ articles }: ArticleListProps) {
  return (
    <div>
        {articles.map((article) => (
            <article className='shadow my-4' key={article.id}>
                <Link href="#" className='hover:opacity-75'>
                    {/* UnsplashのAPI, next.config.jsの設定 */}
                    <Image 
                    src="https://source.unsplash.com/1000x500/?motorsports=6"
                    alt="" 
                    width={1000} 
                    height={500} 
                />
                </Link>
                <div className='bg-white flex flex-col justify-start p-6'>
                    <Link href="#" className='text-red-600 pb-0 text-3xl font-semibold'>Blog</Link>
                    <p className='text-[12px] pb-3 text-slate-400'>{article.createdAt}</p>
                    <Link href="#" className='text-slate-900 font-semibold text-xl hover:text-gray-700 pb-3'>{article.title}</Link>
                    
                    <Link href="#" className='text-slate-700 pb-6'>
                        {article.content}
                    </Link>
                    <button className='bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600'>
                        <Link href="#" className='text-white pb-1'>more</Link>
                    </button>
                </div>
            </article>
    //   <article className='shadow my-4'>
    //     <Link href="#" className='hover:opacity-75'>
    //         {/* UnsplashのAPI, next.config.jsの設定 */}
    //         <Image src="https://source.unsplash.com/1000x500/?motorsports=8"
    //         alt="" 
    //         width={1000} 
    //         height={500} 
    //     />
    //     </Link>
    //     <div className='bg-white flex flex-col justify-start p-6'>
    //         <Link href="#" className='text-red-600 pb-0 text-3xl font-semibold'>News</Link>
    //         <p className='text-[12px] pb-3 text-slate-400'>2023/05/07</p>
    //         <Link href="#" className='text-slate-900 font-semibold text-xl hover:text-gray-700 pb-3'>マルク、イメージカラーのレッドで復帰戦へ</Link>
            
    //         <Link href="#" className='text-slate-700 pb-6'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic molestias consectetur placeat unde expedita veritatis perspiciatis? Cum, totam soluta harum debitis necessitatibus inventore qui vel non quia, velit vitae?
    //         </Link>
    //         <button className='bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600'>
    //             <Link href="#" className='text-white pb-1'>more</Link>
    //         </button>
    //     </div>
    //   </article>
    //   <article className='shadow my-4'>
    //     <Link href="#" className='hover:opacity-75'>
    //         {/* UnsplashのAPI, next.config.jsの設定 */}
    //         <Image src="https://source.unsplash.com/1000x500/?motorsports=12" 
    //         alt="" 
    //         width={1000} 
    //         height={500} 
    //     />
    //     </Link>
    //     <div className='bg-white flex flex-col justify-start p-6'>
    //         <Link href="#" className='text-red-600 pb-0 text-3xl font-semibold'>Race</Link>
    //         <p className='text-[12px] pb-3 text-slate-400'>2023/05/07</p>
    //         <Link href="#" className='text-slate-900 font-semibold text-xl hover:text-gray-700 pb-3'>2024年度スポンサード継続決定</Link>
            
    //         <Link href="#" className='text-slate-700 pb-6'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic molestias consectetur placeat unde expedita veritatis perspiciatis? Cum, totam soluta harum debitis necessitatibus inventore qui vel non quia, velit vitae?
    //         </Link>
    //         <button className='bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600'>
    //             <Link href="#" className='text-white pb-1'>more</Link>
    //         </button>
    //     </div>
    //   </article>
    //   <article className='shadow my-4'>
    //     <Link href="#" className='hover:opacity-75'>
    //         {/* UnsplashのAPI, next.config.jsの設定 */}
    //         <Image src="https://source.unsplash.com/1000x500/?wrc=10" 
    //         alt="" 
    //         width={1000} 
    //         height={500} 
    //     />
    //     </Link>
    //     <div className='bg-white flex flex-col justify-start p-6'>
    //         <Link href="#" className='text-red-600 pb-0 text-3xl font-semibold'>Event</Link>
    //         <p className='text-[12px] pb-3 text-slate-400'>2023/05/07</p>
    //         <Link href="#" className='text-slate-900 font-semibold text-xl hover:text-gray-700 pb-3'>ピット体験ツアー決定</Link>
            
    //         <Link href="#" className='text-slate-700 pb-6'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic molestias consectetur placeat unde expedita veritatis perspiciatis? Cum, totam soluta harum debitis necessitatibus inventore qui vel non quia, velit vitae?
    //         </Link>
    //         <button className='bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600'>
    //             <Link href="#" className='text-white pb-1'>more</Link>
    //         </button>
    //     </div>
    //   </article>
    //   <article className='shadow my-4'>
    //     <Link href="#" className='hover:opacity-75'>
    //         {/* UnsplashのAPI, next.config.jsの設定 */}
    //         <Image src="https://source.unsplash.com/1000x500/?suzuka=1" 
    //         alt="" 
    //         width={1000} 
    //         height={500} 
    //     />
    //     </Link>
    //     <div className='bg-white flex flex-col justify-start p-6'>
    //         <Link href="#" className='text-red-600 pb-0 text-3xl font-semibold'>Event</Link>
    //         <p className='text-[12px] pb-3 text-slate-400'>2023/05/07</p>
    //         <Link href="#" className='text-slate-900 font-semibold text-xl hover:text-gray-700 pb-3'>サーキット歩き初め予約開始</Link>
            
    //         <Link href="#" className='text-slate-700 pb-6'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic molestias consectetur placeat unde expedita veritatis perspiciatis? Cum, totam soluta harum debitis necessitatibus inventore qui vel non quia, velit vitae?
    //         </Link>
    //         <button className='bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600'>
    //             <Link href="#" className='text-white pb-1'>more</Link>
    //         </button>
    //     </div>
    //   </article>
      ))}
      
    </div>
  )
}
