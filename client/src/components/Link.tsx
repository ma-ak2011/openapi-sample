import NextLink, {LinkProps} from 'next/link'
import { Link as MuiLink } from '@mui/material'
import {LinkProps as MuiLinkProps} from "@mui/material/Link/Link";
import React, {forwardRef} from "react";

export type LinkButtonProps = {
  href: LinkProps["href"]
  muiLinkProps?: Omit<LinkProps, 'href' | 'children'>
  children?: MuiLinkProps['children']
}

export const Link = forwardRef<HTMLAnchorElement, LinkButtonProps>(function Link(props, forwardedRef) {
  const { href, children, muiLinkProps } = props
  return (
    <NextLink href={href}>
      <MuiLink {...muiLinkProps} ref={forwardedRef}>
        {children}
      </MuiLink>
    </NextLink>
  )
})
