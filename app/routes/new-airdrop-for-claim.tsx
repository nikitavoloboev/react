import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return <></>
}

export const Route = createFileRoute("/new-airdrop-for-claim")({
  component: () => <RouteComponent />,
})
