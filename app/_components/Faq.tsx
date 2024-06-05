import { ArrowDown2 } from 'iconsax-react'

interface FaqProps {
  question: string
  answer: string
  isOpen: boolean
  handleOpen: () => void
}
export default function Faq({
  question,
  answer,
  isOpen,
  handleOpen,
}: FaqProps) {
  return (
    <div
      className="p-4 px-6 sm:p-8 sm:px-12 cursor-pointer bg-slate-100 transition-all text-main-color rounded-xl hover:bg-main-color/10"
      onClick={handleOpen}
    >
      <div className="flex justify-between gap-2">
        <h3 className="sm:text-xl font-semibold">{question}</h3>
        <ArrowDown2
          variant="Bold"
          className={`transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <p
        className={`text-gray-700 transition-all overflow-hidden ${
          isOpen ? 'h-auto mt-8' : 'h-0'
        }`}
      >
        {answer}
      </p>
    </div>
  )
}
