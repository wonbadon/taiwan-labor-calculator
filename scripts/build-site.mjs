import { build } from 'vite'
import { finalizeStaticFiles } from './finalize-static-files.mjs'

async function main() {
  await build()
  await finalizeStaticFiles()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})