import React from 'react'

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="main-page">{children}</div>
    </div>
  )
}
