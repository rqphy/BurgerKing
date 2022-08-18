import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { Link, Button, Icon } from '@components'
import { ILink } from '@interfaces'

export type IProps = {

}

const links: ILink[] = [
    {
        to: 'https://www.burgerking.fr/',
        label: 'Accueil',
    },
    {
        to: 'https://www.burgerking.fr/',
        label: 'Notre carte',
    },
    {
        to: 'https://www.burgerking.fr/',
        label: 'Nouveautés',
    },
    {
        to: 'https://www.burgerking.fr/',
        label: 'Mon compte',
    },
    {
        to: 'https://www.burgerking.fr/',
        label: 'Bons plans',
    },
]

export default function Header (props: IProps) {
    return (
        <header className={s.header}>
            <a className={s.icon} href={links[0].to} target="_blank" rel="noreferrer">
                <Icon size="large" type="bk" />
            </a>
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
            <div className={s.button}>
                <Button to={links[0].to}>Commander</Button>
            </div>
        </header>
    )
}
