import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { fetchAction } from "~/actions"

function RouteComponent() {
  const { data, error, isLoading } = useSuspenseQuery({
    queryKey: ["fetch"],
    queryFn: async () => {
      const res = await fetchAction()
      return res
    },
  })
  console.log(data, "data")

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>
  return (
    <>
      <div>{data.state}</div>
      <div>{data.array.join(", ")}</div>
    </>
  )
}

export const Route = createFileRoute("/fetch")({
  component: () => <RouteComponent />,
})
