//numbers 1 and 2
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

//number 3
function mult()
{

  $num1 = document.getElementsByClassName("num1")[0].value;
  $num2 = document.getElementsByClassName("num2")[0].value;
  var result = $num1 * $num2;
  console.log(result);
  $result = document.getElementsByClassName("result")[0];
  $result.innerHTML = "the result is: " + result;


}

function divide()
{

  $num1 = document.getElementsByClassName("num1")[0].value;
  $num2 = document.getElementsByClassName("num2")[0].value;
  var result = $num1 / $num2;
  console.log(result);
  $result = document.getElementsByClassName("result")[0];
  $result.innerHTML = "the result is: " + result;


}

//number 4
function whereAmI()
{
  console.log(window.location.href);
  $loc = document.getElementsByClassName("loc")[0];
  $loc.innerHTML = "we are at: " + window.location.href;

}

//number 5
function reverseNum()
{
  $reversee = document.getElementsByClassName("reversee")[0].value;

  function twist(num)
  {
    console.log(num)
    var stringy = num.toString();
    
    var spin = stringy.split("").reverse().join();
    
    console.log(spin)
    return spin;
  }

  document.getElementsByClassName("reversed")[0].innerHTML = "the result is: " + twist($reversee);

}

//number 6
function findsecondHi (arr)
{
  var greatest = Math.max.apply(Math, arr);
  var second = Math.min.apply(Math, arr);
  
  for (var i = 0; i < arr.length; i++)
  {

    if (arr[i] > second && arr[i] != greatest)
    {

      second = arr[i];

    }

  }

  return second;
}

function findsecondLow (arr)
{
  console.log(arr[0]);
  var second = Math.max.apply(Math, arr);
  console.log(second);
  var min = Math.min.apply(Math, arr);
  console.log(min);
  
  for (var i = 0; i < arr.length; i++)
  {

    if (arr[i] < second && arr[i] != min)
    {

      second = arr[i];

    }

  }

  return second;
}

function getLowHI()
{

  var numbers = [10,27,32,69,82];
  var big = findsecondHi(numbers);
  var small = findsecondLow(numbers);

  document.getElementsByClassName("lowHi")[0].innerHTML = "second highest: " + big +  " the second smallest: " + small;

}

function minMax()
{
  var $min = document.getElementsByClassName("min")[0].value;
  var $max = document.getElementsByClassName("max")[0].value;
  var result = range($min, $max);
  document.getElementsByClassName("minMaxAnswer")[0].innerHTML = result
}

//number 7
function range(num1, num2)
{

  var newarr = [];
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  for (var i = num1 + 1; i < num2; i++)
  {
    console.log(i);
    newarr.push(i)
  }

  console.log(newarr);
  return newarr;

}

//number 8
function mergeSort (arr) 
{
  // stop if one element or less
  if (arr.length <= 1) 
  {
    return arr;
  }
  // find middle to cut in half
  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  
  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) 
{
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // compare indexes and add the larger then advance that index
  while (leftIndex < left.length && rightIndex < right.length) 
  {
    if (left[leftIndex] < right[rightIndex]) 
    {
      resultArray.push(left[leftIndex]);
      leftIndex++; //advance the index
    } else 
    {
      resultArray.push(right[rightIndex]);
      rightIndex++; // advance the index
    }
  }

  // finish by tacking on the last element remaining
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

console.log(mergeSort([7,2,3,4,9,1]));

//number 9
function findBiggest()
{

  var bigNum = Math.max(1, 3, 91, 69, 72);
  alert("its " + bigNum);

}

//number 10
function isNum (x)
{
  return(" is " + x + " not a number " + isNaN(x));
}
console.log(isNum("fefsr"));

//number 11
function isSame (x, y)
{
  if (x === y)
  {
    return(x + " does equal " + y);
  }else
  {
    return(x + " does not equal " + y);
  }
}

console.log(isSame(1,2))
console.log(isSame(2,2))
console.log(isSame(1,"1"))
console.log(isSame("one", "one"))
console.log(isSame("2","2"))