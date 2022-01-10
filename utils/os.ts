import os from 'https://deno.land/x/dos@v0.11.0/mod.ts';

export const platform: string = os.platform();

export function IsWindows(): boolean {
  if (platform == 'windows') {
    return true;
  } else {
    return false;
  }
}
