import Image, { StaticImageData } from "next/image";
interface CareersCardProps {
  variant?: "small" | "large";
  image: StaticImageData;
  title: string;
  description: string;
}
export default function CareersCard({
  variant = "large",
  image,
  title,
  description,
}: CareersCardProps) {
  return (
    <div
      className={`border-1 items-center rounded-2xl border border-slate-300 p-2 ${
        variant === "small" ? "flex gap-2" : ""
      }`}
    >
      <Image src={image} alt="" className="rounded-xl max-md:w-24" />
      <div className="w-[18rem] md:p-4">
        <h3 className="text-lg font-semibold text-main-color">{title}</h3>
        <p className="text-main-dark">{description}</p>
      </div>
    </div>
  );
}
