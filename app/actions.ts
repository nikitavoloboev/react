import { createServerFn } from "@tanstack/start"

export const testAction = createServerFn(
  "POST",
  async (data: { something: string }) => {
    const { something } = data
    console.log(something, "something")
    return "ok"
    // throw new Error("broke")
  },
)

export const fetchAction = createServerFn("GET", async () => {
  return {
    state: "test-state",
    array: [1, 2, 3, 4, 5],
    time: new Date().toISOString(),
  }
})

export const refetchAction = createServerFn("GET", async () => {
  return {
    state: "new-state",
    array: [1, 2, 3, 4, 5],
  }
})
