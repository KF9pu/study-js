"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertToEmbedUrl(url) {
    // 정규식 패턴을 사용하여 다양한 YouTube URL 형식을 처리
    const youtubeUrlRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|watch\?list=)?([\w-]+)/;
    const match = url.match(youtubeUrlRegex);
    if (match && match[1]) {
        const videoId = match[1].split("?")[0]; // URL 쿼리 문자열 이후의 부분을 제거
        return `https://www.youtube.com/embed/${videoId}`;
    }
    // YouTube URL 형식이 아닌 경우 입력된 URL을 그대로 반환
    return url;
}
exports.default = convertToEmbedUrl;
