import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { Link } from '@components'
import { ILink } from '@interfaces'

export type IProps = {

}

const links: ILink[] = [
    {
        to: 'https://google.com',
        label: 'Github'
    },
    {
        to: 'https://google.com',
        label: 'Made by Raphaël'
    },
    {
        to: 'https://google.com',
        label: 'Original'
    },
]

export default function Footer (props: IProps) {
    return (
        <footer className={s.footer}>
            <ul className={s.links}>
                {
                    links.map((link, index) =>
                    (
                        <li>
                            <Link label={link.label} to={link.to} key={index} />
                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}
