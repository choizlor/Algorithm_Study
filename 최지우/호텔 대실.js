const changeTime = (time) => {
    let [hour, minute] = time.split(":");
    return parseInt(hour) * 60 + parseInt(minute);
  };
  
  function solution(book_time) {
    let answer = [];
  
    book_time.sort().forEach((time) => {
      const start = changeTime(time[0]);
      const end = changeTime(time[1]) + 10;
  
      if (answer.length === 0) {
        answer.push(end);
      } else {
        answer.sort();
        let check = true;
        for (let i = 0; i < answer.length; i++) {
          if (start >= answer[i]) {
            answer[i] = end;
            check = false;
            break;
          }
        }
        if (check) answer.push(end);
      }
    });
    return answer.length;
  }
  
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ]);
  