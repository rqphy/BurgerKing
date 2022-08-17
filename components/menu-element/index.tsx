import React, { ReactElement, ReactNode } from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { IProduct } from '@interfaces'
import { Button } from "@components"

export type IProps = {
    product: IProduct,
    reff: any
}

export default function MenuElement ({ product, reff }: IProps): ReactElement<IProps> {
    return (
        <section className={s.menu_element} ref={reff}>
            <div className={s.element__bg}>
                {product.title}
            </div>
            <div className={s.element__content}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className={s.button}>
                    <Button to={product.link}>
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
