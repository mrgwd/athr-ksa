interface CourseDetailsProps {
  children: React.ReactNode;
  name: string;
  number: number;
}
export default function CourseDetails({
  children,
  name,
  number,
}: CourseDetailsProps) {
  return (
    <div className="flex gap-1 text-main-dark max-sm:text-sm">
      <div className="text-main-color">{children}</div>
      <p className="text-nowrap">
        {number} {name}
      </p>
    </div>
  );
}
