import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import './tooltip.css'

const Tooltip: React.FC<{
    text?: string
    children: React.ReactNode
}> = ({ text, children }) => {

    const [show, setShow] = useState(false)

    const [position, setPosition] = useState({
        top: 0,
        left: 0
    })

    const handleMouseEnter = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!text) {
            return
        }

        const rect = event.currentTarget.getBoundingClientRect()

        setPosition({
            top: rect.top - 8,
            left: rect.left + (rect.width / 2)
        })

        setShow(true)
    }

    const handleMouseLeave = () => {
        setShow(false)
    }

    if (!text) {
        return <>{children}</>
    }

    const formattedText = text.replace(/\\\\n/g, '\\n')

    return (
        <>
            <div
                className="tooltip-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>

            {show && createPortal(
                <span
                    className="poke-tooltip"
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`
                    }}
                >
                    {formattedText}
                </span>,
                document.body
            )}
        </>
    )
}

export default Tooltip
