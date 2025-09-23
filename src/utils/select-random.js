export function selectRandomItem(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('無効なjsonファイルです');
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
