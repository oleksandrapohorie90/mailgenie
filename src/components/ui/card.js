import * as React from "react"
import { cn } from "@/lib/utils"

const Card = ({ className, children }) => {
  return (
    <div className={cn("p-4 shadow-md rounded-lg bg-white", className)}>
      {children}
    </div>
  )
}

export { Card }
