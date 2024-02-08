import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex items-center justify-center h-full bg-">
      {children}
    </div>
  )
}