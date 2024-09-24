import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <>
      <button
        onClick={() => {
          console.log("test")
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test Server Action
      </button>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
