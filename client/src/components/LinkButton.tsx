import NextLink from 'next/link'
import {FC} from "react";
import {Button} from "@mui/material";
import {ButtonProps} from "@mui/material/Button/Button";

export type LinkButtonProps = {
  href: string
  muiButtonProps?: Omit<ButtonProps, 'href'>
}

export const LinkButton: FC<LinkButtonProps> = (props) => {
  const { href, muiButtonProps } = props
  return (
    <NextLink href={href} passHref>
      <Button {...{...muiButtonProps, href}}>
        LinkButton
      </Button>
    </NextLink>
  )
}
