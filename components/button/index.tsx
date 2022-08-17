import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"

export type IProps = {
    children: React.ReactNode,
    to: string
}

export default function Button ({ children, to }: IProps) {
    return (
        <a href={to} target="_blank" className={s.button} rel="noreferrer">
            <button>
                {children}
            </button>
        </a>
    )
}
