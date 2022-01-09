import * as files from "utils/files.ts";
export function GoTooctorg(repo?: string) {
  let cmd;
  if (typeof repo == "string") {
    cmd = repo.replace("https://", "");
    console.log(files.GetoctorgPath(cmd));

    Deno.exit(2);
  }
  cmd = files.GetoctorgPath("  ");
  console.log(cmd);
  Deno.exit(1);
}
