import { createServerFn } from "@tanstack/start"
import { create } from "ronin"

export const createAirdropWalletToClaim = createServerFn(
  "POST",
  async (data: { walletAddress: string }) => {
    const { walletAddress } = data
    const res = await create.airdropWalletToClaim.with({
      walletAddress,
    })
    console.log(res)
  },
)

export const testAction = createServerFn(
  "POST",
  async (data: { something: string }) => {
    const { something } = data
    console.log(something, "something")
    throw new Error("broke")
  },
)
