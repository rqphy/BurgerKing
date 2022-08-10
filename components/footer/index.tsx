import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { Link } from '@components'
import { ILink } from '@interfaces'

export type IProps = {

}

const links: ILink[] = [
    {
        to: 'https://github.com/rqphy/BurgerKing',
        label: 'Github',
        icon: 'github'
    },
    {
        to: 'https://f-raphael.netlify.app/',
        label: 'Made by Raphaël',
        icon: 'copyright',
    },
    {
        to: 'https://www.burgerking.fr/',
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
                        <li key={index}>
                            <Link label={link.label} to={link.to} icon={link.icon} />
                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}
