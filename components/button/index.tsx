import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"

export type IProps = {
    children: React.ReactNode,
    link: string
}

export default function Button ({ children, link }: IProps) {
    return (
        <a href={link} target="_blank" className={s.button}>
            <button>
                {children}
            </button>
        </a>
    )
}
