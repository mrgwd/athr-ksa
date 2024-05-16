import Section from '../Section'
import Statistic from './statistic'

export default function Statistics() {
  const stats = 'learnings.statistics'
  return (
    // <div></div>
    // <Section name={stats}>
    <div className="container text-center mt-20 max-md:gap-y-10 mx-auto grid grid-cols-2 md:grid-cols-4 md-max:justify-items-center">
      <Statistic name={`${stats}.courses`} />
      <Statistic name={`${stats}.instructors`} />
      <Statistic name={`${stats}.students`} />
      <Statistic name={`${stats}.hours`} />
    </div>
    // </Section>
  )
}
