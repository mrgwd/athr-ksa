import FAQs from './FAQs'
import Section from './Section'
interface FAQsSectionProps {
  name: string
}
export default function FAQsSection({ name }: FAQsSectionProps) {
  return (
    <Section name={name}>
      <FAQs name={name} />
    </Section>
  )
}
