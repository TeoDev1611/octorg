import { Path } from 'core/create.ts';
import { Utils } from 'utils/mod.ts';

export function Delete(name: string, github?: boolean) {
  let path;
  if (github != true) {
    path = Path(name);
  } else {
    path = Path(`github.com/${name}`);
  }
  Utils.Log.Info('Deleting the repository!');
  Deno.remove(path, {
    recursive: true,
  });
  Utils.Log.Done('Deleted succesfully!');
}
