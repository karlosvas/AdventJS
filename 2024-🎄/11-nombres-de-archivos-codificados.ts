function decodeFilename(filename: string): string {
  let ext = filename.indexOf(".");
  return filename.substring(filename.indexOf("_") + 1, filename.indexOf(".", ext + 1));
}
