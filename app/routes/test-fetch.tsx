import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { getAirdrops } from "~/actions"

function RouteComponent() {
  const { data, error, isLoading } = useSuspenseQuery({
    queryKey: ["fetch"],
    queryFn: async () => {
      const res = await getAirdrops()
      console.log(res, "res")
      return res
    },
  })
  console.log(data, "data")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>
  const { airdrops, userCount } = data
  return (
    <>
      <div>{JSON.stringify(airdrops)}</div>
      <div>{JSON.stringify(userCount)}</div>
    </>
  )
}

export const Route = createFileRoute("/test-fetch")({
  component: () => <RouteComponent />,
})
