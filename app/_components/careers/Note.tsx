import Button from "../common/Button";

interface NoteProps {
  note: string;
  buttonText: string;
  buttonLink?: string;
  onClick?: () => void;
  children: React.ReactNode; // icon
}
export default function Note({
  note,
  buttonText,
  buttonLink,
  onClick,
  children,
}: NoteProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-solid border-slate-400 px-6 py-4 text-slate-400">
      <div className="flex items-center gap-2">
        <div>{children}</div>
        <p className="max-w-[36rem] text-pretty">{note}</p>
      </div>
      <Button text={buttonText} href={buttonLink} notRounded />
    </div>
  );
}
