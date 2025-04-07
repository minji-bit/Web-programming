//여기는 자바스크립트 문법입니다.


 //여기는 javaScript영역입니다.
/*여러줄 주석!*/
//브라우저에 출력
document.write("<h1 style='color:red'>출력되니?</h1>");
//콘솔 출력
console.log("난 어디에 나와?");

//마우스를 오버했을 때 기능
function mouseOver(th){//th변수는 this가 전달된다.
    th.style.backgroundColor="red";
    th.style.color="white";
}
//마우스를 아웃했을 때 기능
function mouseOut(th){
    th.style.backgroundColor="white";
    th.style.color="black";
}