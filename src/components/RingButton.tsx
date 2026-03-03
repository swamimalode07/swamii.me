import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { LucideIcon } from "lucide-react"

type RingButtonProps = {
  text: string
  href?: string
  icon?: LucideIcon
}

const RingButton = ({ text, href, icon: Icon }: RingButtonProps) => {
  const content = (
    <>
      {Icon && (
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      )}

      <span className="text-xs md:text-lg hover:text-white/70">
        {text}
      </span>

      <span className="pointer-events-none absolute -inset-[4px] border border-[#1C1C1F] rounded-lg" />
    </>
  )

  if (href) {
    return (
      <Button
        asChild
        size="lg"
        className="relative flex items-center gap-2 bg-grey border border-[#39393D] px-6 py-2 md:py-4 rounded-md transition-colors"
      >
        <Link href={href}>
          {content}s
        </Link>
      </Button>
    )
  }

  return (
    <Button
      size="lg"
      className="relative flex items-center gap-2 border border-[#39393D] px-6 py-4 rounded-md transition-colors"
    >
      {content}
    </Button>
  )
}

export default RingButton