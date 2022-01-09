import * as dir from "core/goToDir.ts";
import * as clone from "core/clone.ts";
import * as info from "core/info.ts";
import * as create from "core/create.ts";
import * as remove from "core/delete.ts";

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
  Create: {
    InitRepo: (name: string, github?: boolean) => create.Create(name, github),
    Path: (name: string) => create.Path(name),
  },
  Delete: {
    RemoveRepo: (name: string, github?: boolean) => remove.Delete(name, github),
  },
};
