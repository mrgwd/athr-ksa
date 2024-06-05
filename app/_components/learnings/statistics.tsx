// import Section from '../Section'
import Statistic from './statistic'

export default async function Statistics({ locale }: { locale: string }) {
  const stats = 'learnings.statistics'
  return (
    // <div></div>
    // <Section name={stats}>
    <div className="container text-center mt-20 max-md:gap-y-10 mx-auto grid grid-cols-2 md:grid-cols-4 md-max:justify-items-center">
      <Statistic locale={locale} name={`${stats}.courses`} />
      <Statistic locale={locale} name={`${stats}.instructors`} />
      <Statistic locale={locale} name={`${stats}.students`} />
      <Statistic locale={locale} name={`${stats}.hours`} />
    </div>
    // </Section>
  )
}
