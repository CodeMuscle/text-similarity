import React, { FC, forwardRef, HTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const paragraphVariants = cva("max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center", {
    variants: {
      size: {
        default: 'text-base sm:text-large',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    }
});


interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {
  
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(({ className, size, children, ...props }, ref) => {
    return <p ref={ref} {...props} className={cn(paragraphVariants({ size, className }))}>{children}</p>
}) 

Paragraph.displayName = 'Paragraph'

export default Paragraph