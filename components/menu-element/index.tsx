import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { IProduct } from '@interfaces'

export type IProps = {
    product: IProduct
}

export default function MenuElement ({ product }: IProps) {
    return (
        <section>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </section>
    )
}
