import { createFileRoute } from "@tanstack/react-router"
import toast from "react-hot-toast"
import { testAction } from "~/actions"
import { globalState, useProxy } from "./__root"

function RouteComponent() {
  const global = useProxy(globalState)

  return (
    <>
      <button
        onClick={() => {
          global.name = "nikivi new name"
        }}
      >
        Change Global State
      </button>
      <div>{global.name}</div>
      <hr className="my-4 border-gray-300" />
      <button
        onClick={async () => {
          try {
            const res = await testAction({ something: "test" })
            console.log(res, "res")
          } catch (err) {
            toast.error("error")
            console.error(err, "err")
          }
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
