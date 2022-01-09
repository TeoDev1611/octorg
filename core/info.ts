import { Run } from "exec/exec.ts";
import * as log from "utils/logs.ts";
import { open } from "https://deno.land/x/opener@v1.0.1/mod.ts";

export async function ShowTheInfo() {
  log.info("VERSION ABOUT THE TOOLS:");
  const denoV = Deno.version;
  console.log(`Deno Version: ${denoV.deno}`);
  console.log(`V8 Version: ${denoV.v8}`);
  console.log(`Typescript Version: ${denoV.typescript}`);
  await Run("git --version");
}

export async function OpenTheRepoIssue() {
  log.info("Opening the repo issue page!");
  await open("https://github.com/TeoDev1611/octorg/issues");
  log.Done("Opened the issue page!");
}
