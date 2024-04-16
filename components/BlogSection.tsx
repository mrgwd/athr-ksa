import ArticleSlider from './ArticleSlider'
import Section from './Section'
import img1 from '@/public/images/blog/1.jpg'
const articles = [
  {
    name: '4',
    img: img1,
  },
  {
    name: '3',
    img: img1,
  },
  {
    name: '2',
    img: img1,
  },
  {
    name: '1',
    img: img1,
  },
]
export default function BlogSection() {
  return (
    <Section name="blogSection">
      <ArticleSlider articles={articles} />
    </Section>
  )
}
