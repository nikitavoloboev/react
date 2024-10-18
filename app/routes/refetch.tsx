import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { fetchAction } from "~/actions"

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ["original-fetch"],
    queryFn: async () => {
      const res = await fetchAction()
      return res
    },
  })
  const queryClient = useQueryClient()
  return (
    <div>
      <div>{data.time}</div>
      <button
        onClick={() => {
          queryClient.invalidateQueries({
            queryKey: ["original-fetch"],
            refetchType: "all",
          })
        }}
      >
        Refetch
      </button>
    </div>
  )
}

export const Route = createFileRoute("/refetch")({
  component: () => <RouteComponent />,
})
