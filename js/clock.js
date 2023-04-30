const clock = document.querySelector(".clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock(); //함수 즉시 실행 (1초 딜레이 x)
setInterval(getClock, 1000); //1000ms = 1초마다 getClock 함수 실행
//setInterval = 일정 간격으로 함수를 반복적으로 호출


//padStart, padEnd
//string 글자수를 늘려야할때 사용

// "1".padStart(2,"0") //string 길이가 2가 아니라면 앞에 "0"을 추가해줌
//padEnd는 뒤에 "n"을 추가해줌
//date.getHours()에는 padStart() 사용 불가
//getHours() = number

clock.classList.add("clock-detail")