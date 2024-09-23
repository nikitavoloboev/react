import { createFileRoute } from "@tanstack/react-router"
import { TonConnectButton } from "@tonconnect/ui-react"

function RouteComponent() {
  return (
    <>
      <TonConnectButton />
    </>
  )
}

export const Route = createFileRoute("/new-airdrop-for-claim")({
  component: () => <RouteComponent />,
})
