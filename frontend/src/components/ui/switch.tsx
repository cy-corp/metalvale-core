"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean
    onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, checked, onCheckedChange, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onCheckedChange?.(e.target.checked)
        }

        return (
            <label className={cn("relative inline-flex items-center cursor-pointer group", className)}>
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={handleChange}
                    ref={ref}
                    {...props}
                />
                <div
                    className={cn(
                        "w-11 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full transition-colors duration-300 ease-in-out group-hover:ring-4 group-hover:ring-primary/5",
                        checked && "bg-primary"
                    )}
                />
                <div
                    className={cn(
                        "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out shadow-sm",
                        checked && "translate-x-5"
                    )}
                />
            </label>
        )
    }
)
Switch.displayName = "Switch"

export { Switch }
