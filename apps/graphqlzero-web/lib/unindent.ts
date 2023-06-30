export function unindent(text: string) {
  let lines = text.split("\n");
  if (lines.length < 3) {
    return text;
  }
  lines = lines.slice(1, -1);
  let spaces = text.length;
  for (const line of lines) {
    let i = 0;
    for (; i < line.length && line[i] === " "; ++i) {}
    if (i < line.length) {
      spaces = Math.min(spaces, i);
    }
  }
  return lines.map((line) => line.substr(spaces)).join("\n");
}
