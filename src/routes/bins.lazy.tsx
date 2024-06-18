import { Navigation } from "@/components/Navigation/Navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/bins")({
  component: Index,
})

function Index() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-16">
      <div className="grid gap-4">
        <Navigation />
        bins baby
      </div>
    </div>
  )
}
