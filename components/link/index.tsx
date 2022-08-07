import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { ILink } from '@interfaces'
import { Icon } from '@components'

export default function Link ({ to, label, icon }: ILink) {
    return (
        <a className={s.link} href={to} target="_blank">
            {
                icon && <Icon type={icon} color="main-dark" size="medium" />
            }
            <p>{label}</p>
        </a>
    )
}
