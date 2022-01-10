import { dirs, fs, path } from '@/deps.ts';
import * as log from 'utils/logs.ts';
import { IsWindows } from 'utils/os.ts';

export const currentDir: string = Deno.cwd();

export const configDir: string = dirs.baseDirs.setup().configDir;
export const homeDir: string = dirs.baseDirs.setup().homeDir;

/**
 * The function to generate and create if dont exists the logs folder
 * @param file File to joint to the log path
 * @returns {string} Path to the octorg log folder
 */
export function getLogPath(file: string): string {
  const cacheDir: string = dirs.baseDirs.setup().cacheDir;
  if (existsFile(path.join(cacheDir, 'octorg')) != true) {
    Deno.mkdir(path.join(cacheDir, 'octorg'));
    log.info('octorg folder created');
  }
  return path.join(cacheDir, 'octorg', file);
}

/**
 * Function to generate the folder and get the path
 * @param file File to join to the config dir
 * @returns {string} Path to the octorg config folder
 */
export function getConfigDir(file: string): string {
  if (existsFile(path.join(configDir, 'octorg')) != true) {
    Deno.mkdir(path.join(configDir, 'octorg'));
    log.info('octorg config folder created');
  }
  return path.join(configDir, 'octorg', file);
}

export function getOctorgPath(folderName?: string): string {
  if (existsFile(path.join(homeDir, 'octorg')) != true) {
    Deno.mkdir(path.join(homeDir, 'octorg'));
    log.info('octorg Path base is created!');
  }
  return path.join(homeDir, 'octorg', folderName!);
}

/**
 * Write a json to any path and log
 * @param path Path to write the json
 * @param data Data to write the json
 */
export function writeJson(path: string, data: Record<string, unknown>) {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data));
    log.info('Writed the new config.json file!');
  } catch (e) {
    log.error(e);
  }
}

/**
 * Check if file or folder exists
 * @param file File or folder to check if exists
 * @returns {boolean} Result true if exists or false if not
 */
export function existsFile(file: string): boolean {
  if (fs.existsSync(file)) {
    return true;
  } else {
    return false;
  }
}

export function GetSep(): string {
  if (IsWindows()) {
    return `\\`;
  } else {
    return '/';
  }
}
