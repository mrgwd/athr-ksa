"use client"
import { usePathname } from "next/navigation"
export default function Test() {
  const router = usePathname()
  console.log(router)
  return (
    router
  )
}

