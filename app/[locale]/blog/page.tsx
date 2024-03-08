'use client'
import ArticeCard from '@/components/ArticleCard'
import img1 from '@/public/images/blog/bird.jpg'

export default function Page() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ArticeCard img={img1} articleID="article1" />
      <ArticeCard img={img1} articleID="article2" />
      <ArticeCard img={img1} articleID="article3" />
      <ArticeCard img={img1} articleID="article3" />
    </div>
  )
}
