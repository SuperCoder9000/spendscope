export function formatToolName(name: string) {
  switch (name) {
    case "chatgpt":
      return "ChatGPT";

    case "cursor":
      return "Cursor";

    case "claude":
      return "Claude";

    case "copilot":
      return "GitHub Copilot";

    default:
      return name;
  }
}