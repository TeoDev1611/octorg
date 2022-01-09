import Denomander from "https://deno.land/x/denomander@0.9.1/mod.ts";
import { Core } from "core/mod.ts";

const app = new Denomander({
  app_name: "octorg",
  app_version: "1.0",
  app_description: "The best way to organize your github repos!",
});

app
  .command("get [repo]", "Clone the repo into the octorg path!")
  .option("-g --github", "Download with the github preset!")
  .option("-n --nofast", "Not clone with the depth flag")
  .action(({ repo }: any) => {
    let github;
    if (typeof app.github == "boolean") {
      if (app.github == true) {
        github = true;
      } else {
        github = false;
      }
    }
    let nofast;
    if (typeof app.nofast == "boolean") {
      if (app.nofast == true) {
        nofast = false;
      }
    }
    if (typeof repo == "string") {
      nofast = (typeof app.nofast == "undefined") ? true : nofast;
      Core.Git.Clone(repo, github, nofast);
    }
  });
app
  .command("cd", "Go to the path")
  .option("-r --repo", "Add the repo url for go more fast!")
  .action(() => {
    if (typeof app.repo == "string") {
      if (app.repo != " ") {
        Core.Dirs.Cd(app.repo);
      }
    }
    Core.Dirs.Cd();
  });

app
  .command("info", "Get the information about octorg tool")
  .option("-v --version", "Show the versions of the tools")
  .option("-i --issue", "Open the issue page for report bugs!")
  .action(() => {
    if (typeof app.version == "boolean") {
      if (app.version == true) {
        Core.Info.Version();
      }
    }
    if (typeof app.issue == "boolean") {
      if (app.issue == true) {
        Core.Info.Issues();
      }
    }
  });

app
  .command("create [name]", "Create a new repo managed by octorg!")
  .option("-g --github", "Init the repo with the github preset!")
  .alias("init")
  .action(({ name }: any) => {
    let github;
    if (typeof app.github == "boolean") {
      if (app.github == true) {
        github = true;
      } else {
        github = false;
      }
    }
    if (typeof name == "string") {
      Core.Create.InitRepo(name, github);
    }
  });

app
  .command("delete [name]", "Delete a new repo managed by octorg!")
  .option("-g --github", "Init the repo with the github preset!")
  .alias("remove", "rm")
  .action(({ name }: any) => {
    let github;
    if (typeof app.github == "boolean") {
      if (app.github == true) {
        github = true;
      } else {
        github = false;
      }
    }
    if (typeof name == "string") {
      Core.Delete.RemoveRepo(name, github);
    }
  });

app.parse(Deno.args);
