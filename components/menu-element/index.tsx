import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { IProduct } from '@interfaces'
import { Button } from "@components"

export type IProps = {
    product: IProduct
}

export default function MenuElement ({ product }: IProps) {
    return (
        <section className={s.menu_element}>
            <div className={s.element__content}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className={s.button}>
                    <Button link={product.link}>
                        En savoir plus
                    </Button>
                </div>
            </div>
            <figure>
                <img src={product.imgSrc} alt={product.title} />
            </figure>
        </section>
    )
}
