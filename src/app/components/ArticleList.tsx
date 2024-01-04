import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function ArticleList () {
  return (
    <div>
      <article>
        <Link href="#">
            {/* UnsplashのAPI, next.config.jsの設定 */}
            <Image src="https://source.unsplash.com/1000x500/?motorsports=6" 
            alt="" 
            width={1000} 
            height={500} 
        />
        </Link>
        <div>
            <Link href="#">News</Link>
            <Link href="#">Wetコンディションに強いタイヤが登場！</Link>
            <p>2023/05/07</p>
            <Link href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic molestias consectetur placeat unde expedita veritatis perspiciatis? Cum, totam soluta harum debitis necessitatibus inventore qui vel non quia, velit vitae?
            </Link>
            <Link href="#">more detail</Link>
        </div>
        
    
      </article>
    </div>
  )
}
