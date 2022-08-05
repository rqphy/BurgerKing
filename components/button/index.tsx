import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"

export type IProps = {
    children: React.ReactNode
}

export default function Button ({ children }: IProps) {
    return (
        <button>{children}</button>
    )
}
