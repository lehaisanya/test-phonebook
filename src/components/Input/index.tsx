import React, { forwardRef, InputHTMLAttributes } from 'react'
import { classes } from 'utils/classes'

import styles from './styles.module.scss'

export const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    const cls = classes([styles.input, className])

    return <input ref={ref} className={cls} {...props} />
})
