import { Navigation } from "@/components/Navigation/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/bins")({
  component: Index,
})

function Index() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-16">
      <div className="grid gap-4">
        <Navigation />

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-3">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Card key={i}>
                <CardHeader>Private Bins</CardHeader>
                <CardContent>Wowowow</CardContent>
                <CardFooter className="justify-end">
                  <Button variant="destructive">Delete</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
