import { fs } from "@/deps.ts";
import { Utils } from "utils/mod.ts";

export async function List(name: string) {
  const dir = Utils.Files.Get.OctoOrgDir(name);
  Utils.Log.Info("Folders managed by octorg!");
  for await (
    const i of fs.walk(dir, {
      includeFiles: false,
    })
  ) {
    if (!i.path.includes(".git")) {
      console.log(i.path);
    }
  }
  Utils.Log.Done("Checked all paths!");
}
