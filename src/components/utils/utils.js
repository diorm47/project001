// copy to clip board
export const copyToClipBoard = (text) => {
  navigator.clipboard.writeText(text);
};

// save as text file
export const saveAsTxtFile = (filename, text) => {
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
};
