//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
//2. write a loop that will log only numbers divisible by 3 between 20 - 100



//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

function getSum(a,b,c)
{
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    var sum = 0;
    sum = a+b+c;
    return sum
}


function zeroModThree()
{
    for (var i = 20; i <= 100; i++)
    {
        if (i % 3 == 0)
        {console.log(i)}
    }
}

function getAvg(arr_scores)
{
    sum = 0
    total = arr_scores.length
    for (var i = 0; i < total; i++)
    {
        sum=sum+arr_scores[i]
    }

    return sum/total;
}


console.log(getSum(num10,string8,one))
zeroModThree()
console.log(getAvg(scores))
