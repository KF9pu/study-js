export default function getYoutubeEmbedUrl(inputUrl: string) {
  const youtubeUrlRegex =
    /(?:http(?:s)?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|watch\?list=)([\w-]+)/;
  const match = inputUrl.match(youtubeUrlRegex);

  if (match && match[1]) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return null; // 유효한 YouTube URL 형식이 아닌 경우
}
