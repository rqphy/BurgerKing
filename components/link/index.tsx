import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { ILink } from '@interfaces'

export default function Link ({ to, label }: ILink) {
    return (
        <a className={s.link} href={to} target="_blank">
            <p>{label}</p>
        </a>
    )
}
