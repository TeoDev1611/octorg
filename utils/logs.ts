import * as log from "https://deno.land/std@0.120.0/log/mod.ts";
import { colors } from "@/deps.ts";
import { getLogPath } from "utils/files.ts";

export const Headers = {
  octorgHeader: `octorg ->`,
  logsSym: {
    info: "ⓘ INFO:",
    error: "✗ ERROR:",
    warn: "⚠ WARNING:",
  },
};

await log.setup({
  handlers: {
    file: new log.handlers.FileHandler("INFO", {
      filename: getLogPath("octorg.log"),
      formatter: "[ octorg ]: {levelName} -> {msg}",
    }),
    infoFormatter: new log.handlers.ConsoleHandler("INFO", {
      formatter: (logRecord: any) => {
        const InfoSym = colors.brightCyan(Headers.logsSym.info);
        return `${InfoSym} ${logRecord.msg}`;
      },
    }),
    errorFormatter: new log.handlers.ConsoleHandler("ERROR", {
      formatter: (logRecord: any) => {
        const ErrorSym = colors.brightRed(Headers.logsSym.error);
        return `${ErrorSym} ${logRecord.msg}`;
      },
    }),
    warnFormatter: new log.handlers.ConsoleHandler("WARNING", {
      formatter: (logRecord: any) => {
        const WarnSym = colors.brightYellow(Headers.logsSym.warn);
        return `${WarnSym} ${logRecord.msg}`;
      },
    }),
  },

  loggers: {
    infoFmt: {
      level: "INFO",
      handlers: ["file", "infoFormatter"],
    },
    errorFmt: {
      level: "ERROR",
      handlers: ["file", "errorFormatter"],
    },
    warnFmt: {
      level: "WARNING",
      handlers: ["file", "warnFormatter"],
    },
  },
});

/**
 * Log to the info level and add to the octorg.log file
 * @param message Message to log
 */
export function info(message: string) {
  log.getLogger("infoFmt").info(`${Headers.octorgHeader} ${message} `);
}

/**
 * Log to the warning level and add to the octorg.log file
 * @param message Message to log
 */
export function warn(message: string) {
  log.getLogger("warnFmt").warning(`${Headers.octorgHeader} ${message}`);
}

/**
 * Log to the error level, add to the octorg.log and exit to 2 code
 * @param message Message to log
 */
export function error(message: string) {
  log.getLogger("errorFmt").error(`${Headers.octorgHeader} ${message}`);
  Deno.exit(2);
}
