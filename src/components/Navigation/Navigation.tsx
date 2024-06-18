import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavLinks } from "./NavLinks"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <NavLinks />

      <Avatar>
        <AvatarImage src="https://github.com/rsamudragawang.png" />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
    </nav>
  )
}
