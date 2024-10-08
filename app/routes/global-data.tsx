import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <>
      {/* TODO: render global state after moving from home route */}
      <div></div>
    </>
  )
}

export const Route = createFileRoute("/global-data")({
  component: RouteComponent,
})
