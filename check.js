// check.js — 브라우저 없이 규칙 확인하기. P6 에서 채우고 P7 에서 한 번 더 늘립니다.
//
// 상황: 규칙이 맞는지 매번 브라우저를 열고 표를 눈으로 대 보기는 번거롭고, 빠뜨리기 쉽습니다.
// 할 일: 손으로 만든 daily 로 logic.js 의 함수를 불러 console.log 합니다.
//       console.log 줄마다 오른쪽에 예상 결과를 주석으로 "실행하기 전에" 적습니다.
// 실행: 터미널에서 node check.js
// 확인: 출력이 주석의 예상과 전부 같습니다.
// 커밋 메시지: p6: check (P7 에서 늘린 것은 p7: reasons 에 같이)

import { toDays, isGoodDay, summarize, reasons } from "./logic.js";


const daily = {
    time: ["11-21", "11-22", "11-23", "11-24"],
    temperature_2m_max: [16, 18, 20, 15],
    precipitation_probability_max: [20, 30, 40, 10],
    wind_speed_10m_max: [8, 10, 7, 12]
};


const limits = {
    rain: 30,
    wind: 10
};


const days = toDays(daily);


console.log("첫 번째 날:", days[0]);



console.log("첫째 날:", isGoodDay(days[0], limits)); // true
console.log("둘째 날:", isGoodDay(days[1], limits)); // true
console.log("셋째 날:", isGoodDay(days[2], limits)); // false
console.log("넷째 날:", isGoodDay(days[3], limits)); // false


console.log("전체 요약:", summarize(days, limits));



console.log("빈 배열:", summarize([], limits));


const testLimits = { rain: 30, wind: 10 };


console.log(reasons({ rain: 20, wind: 6.7 }, testLimits)); // 예상: []


console.log(reasons({ rain: 30, wind: 10 }, testLimits)); // 예상: []


console.log(reasons({ rain: 31, wind: 5 }, testLimits)); // 예상: ["rain"]


console.log(reasons({ rain: 0, wind: 11.8 }, testLimits)); // 예상: ["wind"]


console.log(reasons({ rain: 57, wind: 11.2 }, testLimits)); // 예상: ["rain", "wind"]

