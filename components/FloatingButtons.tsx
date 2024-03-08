import { CallCalling, Whatsapp } from 'iconsax-react'

export default function FloatingContactButton() {
  return (
    <div className="float fixed bottom-4 right-4 z-20 sm:bottom-12 sm:right-12">
      <div className="overflow-hidden p-2 transition duration-300 child:mb-2 child:block child:rounded-full child:p-4 child:child:text-white child:transition-all child-hover:scale-105">
        <a href="tel:+966506354147" target="_blank" className="bg-gray-800">
          <CallCalling variant="Bold" />
        </a>
        <a
          href="https://wa.me/+966506354147"
          target="_blank"
          className="bg-wd-service"
        >
          <Whatsapp variant="Bold" />
        </a>
      </div>
    </div>
  )
}
