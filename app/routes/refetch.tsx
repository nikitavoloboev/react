import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { fetchAction, refetchAction } from "~/actions"

function RouteComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ["original-fetch"],
    queryFn: async () => {
      const res = await fetchAction()
      return res
    },
  })
  return (
    <div>
      <div>{data.time}</div>
      <button
        onClick={() => {
          const queryClient = useQueryClient()
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
