import { Navigation } from "@/components/Navigation/Navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { createLazyFileRoute } from "@tanstack/react-router"
import { EditorProvider } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export const Route = createLazyFileRoute("/")({
  component: Index,
})

const extensions = [StarterKit]

const content = "# Hello, World!"

function Index() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-16">
      <div className="grid gap-4">
        <Navigation />

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

        <div>
          <EditorProvider
            extensions={extensions}
            content={content}
          ></EditorProvider>
        </div>
      </div>
    </div>
  )
}
