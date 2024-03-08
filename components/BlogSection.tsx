import ArticeCard from './ArticleCard'
import ArticleSlider from './ArticleSlider'
import Section from './Section'
import img1 from '@/public/images/blog/bird.jpg'
const articles = [
  {
    name: 'article1',
    img: img1,
  },
  {
    name: 'article2',
    img: img1,
  },
  {
    name: 'article3',
    img: img1,
  },
  {
    name: 'article1',
    img: img1,
  },
]
export default function BlogSection() {
  return (
    <Section name="blog">
      {/* <div className="md:flex gap-12 justify-center">
        <ArticeCard articleID="article1" img={img1} />
        <ArticeCard articleID="article2" img={img1} />
      </div> */}
      <ArticleSlider articles={articles} />
    </Section>
  )
}
