function solution(rsp) {
  let result = "";

  for (let i of rsp) {
    switch (i) {
      case "2":
        result += "0";
        break;
      case "0":
        result += "5";
        break;
      case "5":
        result += "2";
        break;
    }
  }

  return result;
}