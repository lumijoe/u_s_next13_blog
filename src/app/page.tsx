import React from 'react'
import ArticleList from './components/ArticleList'
import Link from 'next/link'
import { getAllArticles } from '@/blogAPI';


export default async function Home() {
  const articles = await getAllArticles();
  // console.log(articles); 
  // ↑も、SSRだとサーバーサイドでレンダリングのためブラウザで確認できない
  // SSRはローカルサーバー=ターミナルでないと確認できない
  // クライアントで確認するときはファイル先頭に"use client";を記述すれば確認できるが、レンダリングが
  // クライアントになりSSRで無くなるので読み込み速度が変わってしまうので要注意
  // 基本的にはSSRで実装したらSSRで確認すること。ポリシー。
  // console.logでデータのAPI成功していたらconsole.logは削除する



  return (
    <div className='md:flex'>
      <section className='w-full md:w-2/3 flex flex-col items-center px-3'>
        <ArticleList articles={articles}/>
      </section>

      <aside className='w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6' >
        
        <div className='bg-white shadow-md rounded p-4 mb-6 mt-4'>
          <h3 className='font-semibold mb-2 text-black'>About</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius nostrum vel, voluptatum consectetur quaerat nulla quis quidem aperiam magni adipisci commodi in saepe rem incidunt. Laboriosam dolorem quod rerum.
          </p>
        </div>
        
        <div className='bg-white shadow-md rounded p-4 mb-6 mt-4 w-full'>
          <h3 className='font-semibold mb-2 text-black'>Category</h3>
          <ul className="text-gray-600 mt-2">
            {/* イベント情報 */}
            <li>
              <Link href="#">Event</Link>
            </li>
            {/* ラリー情報 */}
            <li>
              <Link href="#">Rally</Link>
            </li>
            {/* お知らせ */}
            <li>
              <Link href="#">News</Link>
            </li>
            {/* ブログ */}
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
      
      </aside>
    
    </div>
  )
}
