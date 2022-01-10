import * as files from 'utils/files.ts';
import * as log from 'utils/logs.ts';
import * as os from 'utils/os.ts';

export const Utils = {
  Log: {
    Error: (msg: string) => log.error(msg),
    Info: (msg: string) => log.info(msg),
    Warn: (msg: string) => log.warn(msg),
    Done: (msg: string) => log.Done(msg),
    Header: log.Headers,
  },
  Files: {
    Dirs: {
      Current: files.currentDir,
      Config: files.configDir,
      Home: files.homeDir,
    },
    Get: {
      LogDir: (file: string) => files.getLogPath(file),
      ConfigDir: (file: string) => files.getConfigDir(file),
      OctoOrgDir: (folder: string) => files.getOctorgPath(folder),
    },
    Json: {
      Write: (path: string, data: Record<string, unknown>) =>
        files.writeJson(path, data),
    },
    Utils: {
      ExistFile: (file: string): boolean => files.existsFile(file),
    },
  },
  Os: {
    Platform: os.platform,
    CheckPlatform: {
      IsWindows: (): boolean => os.IsWindows(),
    },
    Separator: (): string => files.GetSep(),
  },
};
