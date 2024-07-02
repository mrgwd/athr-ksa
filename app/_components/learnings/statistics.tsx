// import Section from '../Section'
import Statistic from "./statistic";

export default async function Statistics({ locale }: { locale: string }) {
  const stats = "learnings.statistics";
  return (
    // <div></div>
    // <Section name={stats}>
    <div className="md-max:justify-items-center container mx-auto mt-20 grid grid-cols-2 text-center max-md:gap-y-10 md:grid-cols-4">
      <Statistic locale={locale} name={`${stats}.courses`} />
      <Statistic locale={locale} name={`${stats}.instructors`} />
      <Statistic locale={locale} name={`${stats}.students`} />
      <Statistic locale={locale} name={`${stats}.hours`} />
    </div>
    // </Section>
  );
}
