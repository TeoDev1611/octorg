import { Run } from "exec/exec.ts";
import * as files from "utils/files.ts";
import * as log from "utils/logs.ts";

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
      files.GetoctorgPath(repo.replace("https://", ""))
    }`;
  } else {
    cmd = `git clone ${repo} ${
      files.GetoctorgPath(repo.replace("https://", ""))
    }`;
  }
  log.info(`Repo to clone!: ${repo}`);
  log.info(`Cmd to execute!: ${cmd}`);
  await Run(cmd);
}
