import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"

export type IProps = {
    children: any
}

export default function Scrollbar ({ children }: IProps) {
    return (
        <aside className={s.scrollbar}>
            { children }
        </aside>
    )
}
