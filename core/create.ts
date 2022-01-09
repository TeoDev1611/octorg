import { Run } from "exec/exec.ts";
import { Utils } from "utils/mod.ts";

export function Path(name: string): string {
  const folders = name.split("/");
  return Utils.Files.Get.OctoOrgDir(folders?.join(Utils.Os.Separator())!);
}

export async function Create(name: string, github?: boolean) {
  let path;
  if (github != true) {
    path = Path(name);
  } else {
    path = Path(`github.com/${name}`);
  }
  Utils.Log.Info("Creating the folder and the repository!");
  Deno.mkdir(path, {
    recursive: true,
  });
  await Run(`git init ${path}`);
  Utils.Log.Done("Initialized the repo!");
}
