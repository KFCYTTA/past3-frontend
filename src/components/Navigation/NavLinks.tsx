import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import { links } from "./links"

export function NavLinks() {
  const location = useLocation()

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <Fragment key={link.to}>
          <Button
            variant="link"
            asChild
            className={cn("h-max p-0 text-lg", {
              "!underline": link.to === location.pathname,
            })}
          >
            <Link to={link.to}>{link.label}</Link>
          </Button>

          <div className="last:hidden">/</div>
        </Fragment>
      ))}
    </div>
  )
}
