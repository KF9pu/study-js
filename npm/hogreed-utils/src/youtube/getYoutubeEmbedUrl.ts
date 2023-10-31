export default function getYoutubeEmbedUrl(inputUrl: string): string {
  try {
    const url = new URL(inputUrl);
    if (url.hostname === "www.youtube.com" || url.hostname === "youtu.be") {
      const searchParams = new URLSearchParams(url.search);
      const videoId = searchParams.get("v") || url.pathname.split("/").pop();
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  } finally {
    return inputUrl; // YouTube URL 형식이 아닌 경우 입력된 URL을 그대로 반환
  }
}
