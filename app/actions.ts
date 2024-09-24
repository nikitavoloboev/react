import { createServerFn } from "@tanstack/start"
import { create } from "ronin"

export const createAirdropWalletToClaim = createServerFn("POST", async () => {})

export const testAction = createServerFn(
  "POST",
  async (data: { walletAddress: string }) => {
    const { walletAddress } = data
    // console.log(walletAddress, "wallet address")
    // console.log(process.env.RONIN_TOKEN, "ronin token")
    // const res = await create.airdropWalletToClaim.with({
    //   walletAddress: "test",
    // })
    throw new Error("broke")
    // console.log(res)
    // return true
  },
)
