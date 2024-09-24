import { createServerFn } from "@tanstack/start"
import { create } from "ronin"

export const createAirdropWalletToClaim = createServerFn("POST", async () => {})

export const testAction = createServerFn("POST", async () => {
  const res = await create.airdropWalletToClaim.with({
    walletAddress: "test",
  })
  console.log(res)
})
