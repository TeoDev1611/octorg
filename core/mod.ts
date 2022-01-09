import * as dir from "core/goToDir.ts";
import * as clone from "core/clone.ts";
import * as info from "core/info.ts";

export const Core = {
  Git: {
    Clone: (repo: string, github?: boolean, fast?: boolean) => {
      clone.CloneRepo(repo, github, fast);
    },
  },
  Dirs: {
    Cd: (repo?: string) => {
      dir.GoTooctorg(repo);
    },
  },
  Info: {
    Version: () => {
      info.ShowTheInfo();
    },
    Issues: () => {
      info.OpenTheRepoIssue();
    },
  },
};
