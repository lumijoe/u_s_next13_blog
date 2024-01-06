// src/types.ts
// 記事内要素のタイプを定義する

export type Article = {
    id: string;        // 記事のURL
    title: string;     // 記事タイトル
    content: string;   // 記事本文
    createdAt: string; // 記事を作成した年/月/日
};