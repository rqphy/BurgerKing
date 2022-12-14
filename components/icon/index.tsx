import React from "react"
import s from "./styles.module.scss"
import cn from "classnames"
import { IconType, IconSize, Color } from '@types'

import Github from "./github"
import Copyright from "./copyright"
import Source from "./source"
import Bk from "./bk"

interface IProps {
    type: IconType
    size: IconSize
    color?: Color | "none"
}

interface IIcons {
    [String: string]: JSX.Element
}

const Icons: IIcons = {
    github: <Github />,
    copyright: <Copyright />,
    source: <Source />,
    bk: <Bk />,
}

const sizes: any = {
    none: "unset",
    medium: "2rem",
    large: "4.8rem",
}

export default function Icon ({
    type,
    size,
    color = "none"
  }: IProps) {
    return (
      <div
        className={cn(s[color], s.icon)}
        style={{ width: sizes[size], height: sizes[size] }}
      >
        {Icons[type]}
      </div>
    )
  }
