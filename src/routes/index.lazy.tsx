import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-16">
      <Tabs defaultValue="write">
        <div className="grid gap-4">
          <nav className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="write">Write</TabsTrigger>
              <TabsTrigger value="bins">Bins</TabsTrigger>
            </TabsList>

            <Avatar>
              <AvatarImage src="https://github.com/rsamudragawang.png" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </nav>

          <TabsContent value="write">
            <div className="flex items-end justify-between">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Bin Title</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Put in a wonderful title for everyone to see"
                />
              </div>

              <div className="flex items-center gap-2">
                <Switch id="switch-preview" />
                <Label htmlFor="switch-preview">Preview</Label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bins">Change your bins here.</TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
