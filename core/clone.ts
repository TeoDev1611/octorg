import { Run } from "exec/exec.ts";
import { Utils } from "utils/mod.ts";
export async function CloneRepo(
  repo: string,
  github?: boolean,
  fast?: boolean,
) {
  if (repo.substring(0, 8) === "https://") {
    repo = `https://${repo}`;
  }
  if (github === true && repo.substring(0, 8) != "https://") {
    repo = `https://github.com/${repo}`;
  }
  let cmd = "";
  if (fast === true) {
    cmd = `git clone --depth=1 ${repo} ${
      Utils.Files.Get.OctoOrgDir(repo.replace("https://", ""))
    }`;
  } else {
    cmd = `git clone ${repo} ${
      Utils.Files.Get.OctoOrgDir(repo.replace("https://", ""))
    }`;
  }
  Utils.Log.Info(`Repo to clone!: ${repo}`);
  Utils.Log.Info(`Cmd to execute!: ${cmd}`);
  await Run(cmd);
}
