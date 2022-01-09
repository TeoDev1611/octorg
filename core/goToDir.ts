import { Utils } from "utils/mod.ts";
export function GoTooctorg(repo?: string) {
  let cmd;
  if (typeof repo == "string") {
    cmd = repo.replace("https://", "");
    console.log(Utils.Files.Get.OctoOrgDir(cmd));

    Deno.exit(2);
  }
  cmd = Utils.Files.Get.OctoOrgDir("  ");
  console.log(cmd);
  Deno.exit(1);
}
