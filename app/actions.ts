import { createServerFn } from "@tanstack/start"

export const testAction = createServerFn(
  "POST",
  async (data: { something: string }) => {
    const { something } = data
    console.log(something, "something")
    throw new Error("broke")
  },
)

export const testFetch = createServerFn("GET", async () => {
  return {
    test: "test",
    array: [1, 2, 3, 4, 5],
  }
})
