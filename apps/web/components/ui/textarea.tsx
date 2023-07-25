import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] max-h-[320px] w-full rounded-md border-[1.5px] focus:border-[2px] border-input/70 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground placeholder:leading-6 focus-visible:outline-none focus-visible:border-emerald-300 disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
