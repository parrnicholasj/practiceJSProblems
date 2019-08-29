function updateTime()
{

  var dt = new Date();

  var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes(), s = dt.getSeconds();
    var $time = (h > 12) ? (h-12 + ':' + m + ':' + s + ' PM') : (h + ':' + m + ':' + s + ' AM');
  
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  var dayNum = dt.getDate(), monthNum = dt.getMonth(), yearNum = dt.getFullYear();
  
  var todayIs = weekday[dt.getDay()];
  
  var $date = document.getElementsByClassName("date");
  console.log($date);
  $date[0].innerHTML = "Today is: " + todayIs + " " + $time  + " todays date is " + dayNum + "/" + monthNum + "/" + yearNum;

}

function mult()
{

  $num1 = document.getElementsByClassName("num1")[0].value;
  $num2 = document.getElementsByClassName("num2")[0].value;
  var result = $num1 * $num2;
  console.log(result);
  $result = document.getElementsByClassName("result")[0];
  $result.innerHTML = "the result is: " + result;


}
