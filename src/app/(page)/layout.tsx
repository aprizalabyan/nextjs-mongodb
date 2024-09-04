import React from 'react'
import { DialogProvider } from "@/components/DialogContext"

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <DialogProvider>
        <div className="main-page">{children}</div>
      </DialogProvider>
    </div>
  )
}
