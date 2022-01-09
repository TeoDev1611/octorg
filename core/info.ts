import { Run } from "exec/exec.ts";
import { Utils } from "utils/mod.ts";
import { open } from "https://deno.land/x/opener@v1.0.1/mod.ts";

export async function ShowTheInfo() {
  Utils.Log.Info("VERSION ABOUT THE TOOLS:");
  const denoV = Deno.version;
  console.log(`Deno Version: ${denoV.deno}`);
  console.log(`V8 Version: ${denoV.v8}`);
  console.log(`Typescript Version: ${denoV.typescript}`);
  await Run("git --version");
}

export async function OpenTheRepoIssue() {
  Utils.Log.Info("Opening the repo issue page!");
  await open("https://github.com/TeoDev1611/octorg/issues");
  Utils.Log.Done("Opened the issue page!");
}
