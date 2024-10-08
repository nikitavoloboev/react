import { createFileRoute } from "@tanstack/react-router"
import { globalState, useProxy } from "./__root"

function RouteComponent() {
  const global = useProxy(globalState)
  return <div>{global.name}</div>
}

export const Route = createFileRoute("/global-data")({
  component: RouteComponent,
})
