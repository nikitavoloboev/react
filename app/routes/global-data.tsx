import { createFileRoute } from "@tanstack/react-router"
import { useProxy } from "valtio/utils"
import { globalState } from "./__root"

function RouteComponent() {
  const global = useProxy(globalState)
  return (
    <>
      <div>{global.name}</div>
    </>
  )
}

export const Route = createFileRoute("/global-data")({
  component: RouteComponent,
})
