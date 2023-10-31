export function createFilenameByDate() {
  // 현재 날짜와 시간 가져오기
  const now = new Date();

  // 년, 월, 일, 시, 분 정보 가져오기
  const year = now.getFullYear() % 100; // 년도에서 뒤의 두 자리만 가져옴
  const month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // 두 자리 숫자로 포맷팅
  const formattedYear = year.toString().padStart(2, "0");
  const formattedMonth = month.toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // YYMMDDHHMM 형식의 문자열 생성
  return `${formattedYear}${formattedMonth}${formattedDay}${formattedHours}${formattedMinutes}`;
}
