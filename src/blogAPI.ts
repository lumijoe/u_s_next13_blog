// JSON形式のモックアップデータを読み込むAPIの作成
import { Article } from './types';

// データ処理方法：非同期処理とするためのasync
// レンダリング方法：SSR方式（Next12でのサーバーサイドプロップスからcache: "no-store"定義に変更）
// export default async funcion getAllArticles(): Promise<Article> {
//     const res = await fetch(`http://localhost:3001/posts`, {
//         cache: "no-store" })

//     const articles = await res.json();

// };

export const getAllArticles = async (): Promise<Article[]> => {
    const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); // SSR

    // JOSNデータをシリアライズ（テキストや文字列形式などに変換させるプロセス、軽量化）
    const articles = await res.json();

    // returnでarticlesで返す
    return articles;
} 