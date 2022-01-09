import Denomander from "https://deno.land/x/denomander@0.9.1/mod.ts";
import { CloneRepo } from "git/clone.ts";
import { GoTooctorg } from "git/goToDir.ts";

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
      CloneRepo(repo, github, nofast);
    }
  });
app
  .command("cd", "Go to the path")
  .option("-r --repo", "Add the repo url for go more fast!")
  .action(() => {
    if (typeof app.repo == "string") {
      if (app.repo != " ") {
        GoTooctorg(app.repo);
      }
    }
    GoTooctorg();
  });

app.parse(Deno.args);
