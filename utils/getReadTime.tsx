export default function getReadTime(words: number, wpm: number = 200) {
  return Math.ceil(words / wpm)
}
