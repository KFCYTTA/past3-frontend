import { LinkProps } from "@tanstack/react-router"

interface NavLink {
  to: LinkProps["to"]
  label: string
}

export const links: Array<NavLink> = [
  {
    label: "Write",
    to: "/",
  },
  {
    label: "Bins",
    to: "/bins",
  },
]
