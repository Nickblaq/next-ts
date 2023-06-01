

interface BlogProps {
    children?: React.ReactNode
  }

  
  export default function BlogLayout({ children }: BlogProps) {
    return (
      <div className="container overflow-hidden min-h-screen mx-auto space-y-6">
            {children}
        </div>
    )
  }