import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type RingButtonSize = "sm" | "md" | "lg"

type RingButtonProps = {
  text: string
  href?: string
  icon?: React.ElementType | React.ReactNode
  size?: RingButtonSize
  className?: string
  target?: string
  rel?: string
}

const ringButtonSizeStyles: Record<
  RingButtonSize,
  {
    buttonSize: "sm" | "default" | "lg"
    buttonPadding: string
    textSize: string
    iconSize: string
  }
> = {
  sm: {
    buttonSize: "sm",
    buttonPadding: "px-3 py-1.5 md:py-2",
    textSize: "text-xs md:text-sm",
    iconSize: "h-3.5 w-3.5 sm:h-4 sm:w-4",
  },
  md: {
    buttonSize: "default",
    buttonPadding: "px-4 py-2 md:py-3",
    textSize: "text-xs md:text-base",
    iconSize: "h-4 w-4 sm:h-5 sm:w-5",
  },
  lg: {
    buttonSize: "lg",
    buttonPadding: "px-6 py-2 md:py-4",
    textSize: "text-xs md:text-lg",
    iconSize: "h-4 w-4 sm:h-5 sm:w-5",
  },
}

const RingButton = ({ text, href, icon: Icon, size = "lg" ,className, target, rel }: RingButtonProps) => {
  const sizeStyles = ringButtonSizeStyles[size]

  let iconNode = null;
  if (Icon) {
    if (typeof Icon === 'function') {
      iconNode = <Icon className={sizeStyles.iconSize} />;
    } else {
      iconNode = React.isValidElement(Icon)
        ? React.cloneElement(Icon as React.ReactElement<{ className?: string }>, {
            className: cn((Icon.props as { className?: string })?.className, sizeStyles.iconSize),
          })
        : null;
    }
  }

  const content = (
    <>
      {iconNode}
      <span className={cn(sizeStyles.textSize)}>
        {text}
      </span>
      <span className="pointer-events-none absolute -inset-[4px] border border-[#1C1C1F] rounded-lg" />
    </>
  );

  if (href) {
    return (
      <Button
        asChild
        size={sizeStyles.buttonSize}
        className={cn(
          "relative flex items-center gap-2 rounded-md border border-[#39393D] transition-colors  ",
          sizeStyles.buttonPadding
        )}
      >
        <Link href={href} target={target} rel={rel}>{content}</Link>
      </Button>
    )
  }

  return (
    <Button
      size={sizeStyles.buttonSize}
      className={cn(
        "relative flex items-center gap-2 rounded-md border border-[#39393D] transition-colors hover:bg-[#1C1C1F]/50 scale-100 hover:scale-[0.99]",
        sizeStyles.buttonPadding
      )}
    >
      {content}
    </Button>
  )
}

export default RingButton