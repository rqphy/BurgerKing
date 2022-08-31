import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"

export type IProps = {
    children: any,
    activeIndex: number
}

export default function Scrollbar ({ children,  activeIndex }: IProps) {
    return (
        <aside className={s.scrollbar}>
            { 
                children.map((child: any, index: number) =>
                (
                    React.cloneElement(
                        child,
                        {
                            className: index == activeIndex ? s.active : ''
                        }
                    )
                ))
            }
        </aside>
    )
}
