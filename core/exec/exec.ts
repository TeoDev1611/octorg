export async function Run(cmd: string) {
  const command = cmd.split(" ");
  const prg = Deno.run({
    cmd: command,
  });
  await prg.status();
}
