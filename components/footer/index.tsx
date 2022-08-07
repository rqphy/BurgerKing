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
        label: 'Github',
        icon: 'github'
    },
    {
        to: 'https://google.com',
        label: 'Made by Raphaël',
        icon: 'copyright',
    },
    {
        to: 'https://google.com',
        label: 'Original',
        icon: 'source',
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
                            <Link label={link.label} to={link.to} icon={link.icon} key={index} />
                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}
