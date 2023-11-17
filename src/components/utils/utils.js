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

export const generateRandomNumber = () => {
  const lowerRange1 = 20;
  const upperRange1 = 40;
  const lowerRange2 = 100;
  const upperRange2 = 165;

  const randomRange = Math.random() < 0.5 ? 1 : 2;

  if (randomRange === 1) {
    return (
      Math.floor(Math.random() * (upperRange1 - lowerRange1 + 1)) + lowerRange1
    );
  } else {
    return (
      Math.floor(Math.random() * (upperRange2 - lowerRange2 + 1)) + lowerRange2
    );
  }
};
