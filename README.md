# Firehose - Raydium

## Quickstart

> Get Firehose API Key from https://pinax.network

```bash
# Set your API Key
export PINAX_KEY=f98f••••••••••••••••••••5247

# Run Firehose
grpcurl -keepalive-time 30 -max-msg-sz 50241867 -d '{"start_block_num": -100}' -H "X-Api-Key: $PINAX_KEY" solana.firehose.pinax.network:443 sf.firehose.v2.Stream.Blocks
```

Raydium has used (and continues to use) multiple program IDs on Solana, each corresponding to different parts of its ecosystem—AMM, staking (a.k.a. “Fusion” pools), AcceleRaytor (IDO), router functionality, etc. Over time, Raydium has also released new versions of some programs. Consequently, there isn’t a single “master list” published in one place, and some older program IDs may have been deprecated or replaced.

Below are **some** of the well-known Raydium program IDs on Solana mainnet, as of public information floating around the ecosystem. Always verify via Raydium’s official docs, GitHub, or by exploring on-chain directly (e.g. using Solana Explorer or a block explorer like Solscan):

---

Below are GitHub references for the commonly known Raydium programs. Most of the on-chain programs (AMM, staking, IDO, router) live under the **[raydium-io/raydium-contracts](https://github.com/raydium-io/raydium-contracts)** repository. Within that repo, each core program has its own folder under `programs/`:

---

### 1) Raydium AMM Program (Liquidity Pool V4)
**Program ID**: `675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8`
- **GitHub Source**:
  [raydium-contracts/programs/amm](https://github.com/raydium-io/raydium-amm)
- This code handles Raydium’s liquidity pools and swap logic.
- Constant product AMM integrated with the [OpenBook](https://github.com/openbook-dex/program) CLOB
- The Raydium AMM is an on-chain smart contract based on the “constant product” in a permissionless and decentralized manner built on the Solana blockchain.And it also shares its liquidity according to the Fibonacci sequence in the form of limit orders on [OpenBook](https://github.com/openbook-dex/program), the primary central limit order book (CLOB) of Solana

---

### 2) Raydium CLMM Program (Uniswap V3, Raydium’s CLMM, Orca Whirlpools)
**Program ID**: `CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK`
- **GitHub Source**:
  [raydium-io/raydium-clmm](https://github.com/raydium-io/raydium-clmm)
- This program is used for Raydium’s Concentrated Liquidity (CLMM) pools.
- CLMM (e.g., Uniswap V3, Raydium’s CLMM, Orca Whirlpools) lets LPs concentrate their liquidity in a desired price range, boosting capital efficiency but increasing complexity and requiring more active management.
- CLMM is a more advanced AMM model allowing concentrated liquidity ranges.

---

### 3) Raydium CPMM Program (Uniswap V2, Raydium V1 AMM)
**Program ID**: `CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C`
- **GitHub Source**:
  [raydium-io/raydium-clmm](https://github.com/raydium-io/raydium-clmm)
- This program is used for Raydium’s Constant Product Market Maker (CPMM) pools.
- CPMM (e.g., Uniswap V2, Raydium V1 AMM) is straightforward, but less capital-efficient.
- CPMM is a basic AMM model using 𝑥×𝑦=𝑘.

---

### 4) Raydium Router Program
**Program ID**: `routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS`
- Handles routing swaps internally between different Raydium pools and sometimes across other Solana AMMs.

---

## Notes & Tips

1. **Multiple Versions**
   Raydium has evolved over time, deploying updated or migrated programs. You may find older versions within the same repo or in older commits.

2. **On-Chain Verification**
   To confirm a particular Program ID matches a specific repo, you can use `solana program dump` or a Solana explorer (e.g., [Solscan](https://solscan.io), [Solana Explorer](https://explorer.solana.com)) to inspect the on-chain bytecode and compare it to compiled code from GitHub.

3. **Official Sources**
   - Main repo: [Raydium Contracts on GitHub](https://github.com/raydium-io/raydium-contracts)
   - Official docs: [docs.raydium.io](https://docs.raydium.io/)
