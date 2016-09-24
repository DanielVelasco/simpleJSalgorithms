/*Transpose matrix - try alternative ways to do this later*/
for(i=0;i<array[0].length;i++)
{
	b = 0;
    while(b <array.length)
    {
    /*alert(array[b][i]);*/
     t = array[b][i];
     narray[i][b] = t;
    b++
    }
}
return narray
// Find the last N elements of an array of unknown length
var array = [1,2,3,4,5,6,7,8,13,5,3,2];

function Collect(bufferNum){
var buffer = []; //create buffer
for(i=0;i<array.length;i++)
{
	if(i >= bufferNum)
    {
    	for(c=0;c<buffer.length;c++)
        {
        buffer[c] = buffer[c+1]; //shift 
        }
        buffer[bufferNum-1] = array[i]; //replace last element in buffer
    }else{
    buffer[i] = array[i]; //fill buffer up until full, after shift and push element to bottom of buffer
    }

}
alert(buffer);
}
Collect(6); //buffer is 6 in this case

// one string contains another string
Str = "catuinthehat";
Sub = "tu";
function contains(index,Bstring,substring)
{
flag = true;
if( ( (index) + substring.length) > Bstring.length)
{
	console.log("boundaries exceeded");
	return false;
}
for(z = 0; z < substring.length;z++)
{
	if(substring[z] != Bstring[index])
    	{
        	flag = false;
        }
        index++;
}
return flag;
}
function iterate(substring,string)
{
	for(i=0;i<string.length;i++)
    	{
        	if(substring[0] == string[i])
            {
            	l = contains(i,string,substring);
               	if(l == true)
                {
			console.log(l);
                	break;
                }
            }
        }
}
iterate(Sub,Str);
//rotate matrix 90degrees in place
function Rmatrix(matrix)
{
	for(i=0;i<matrix.length;i++)
    {
    	for(c=i;c<matrix[i].length;c++)
        {
        	temp = matrix[i][c];
        	matrix[i][c] = matrix[c][i]
            matrix[c][i] = temp;
        }
    }
    console.log(matrix);
}

function main()
{
matrix = [[1,1,1],[2,2,2],[3,3,3]];
Rmatrix(matrix);
}
main();

//fib
 array = [1,1];
 size = array.length;
 index = size;
 
 function FibN(nth,numberOf){
 for (x = 1;x<(numberOf+1)-size;x++)
 {
 	n = array[x] + array[x-1];
    array[index] = n;
    if(index == (nth-1))
    {
    	console.log(array[index]);
    }
    index++;
 }
 console.log(array);
 }
 FibN(3,10);

//Check if a string is a palindrome

function CheckPalindrome(string)
{
string = string.toLowerCase();
length = string.length - 1;
flag = true;
	for(i=0;i<string.length;i++)
    {
    	if(string[i] != string[length])
        {
        	flag = false;
        	break;
        }
       length--;
    }
    return flag;
}

function main()
{
string = "Straw Warts";
isPalindrome = CheckPalindrome(string);
alert(isPalindrome);
}
main();






//Find the sum of all the integers in an array except for the current index.

function Rarray(array)
{
NewArray = [];
index = 0;
for(i=0;i<array.length;i++)
    {
    Sum = 0;
    	for(c=0;c<array.length;c++)
        {
        	if(array[i] != array[c])
            {
            	Sum += array[c];
            }
        }
        NewArray[index] = Sum;
        index++;
    }
    return NewArray;
}
function main()
{
array = [1,2,4,8,9];
NArray = Rarray(array);
alert(NArray);
}
main();




//Remove Duplicates from an unsorted list of integers

function checkDuplicates(array)
{
CheckArray = [];
RArray = [];
index = 0;
for(i=0;i<array.length;i++)
{
flag = false;
	for(c=0;c<CheckArray.length;c++)
    {
    	if(array[i] == CheckArray[c])
        {
        	flag = true;
            break;
        }
    }
    if(flag == false)
    {
    	CheckArray[index] = array[i];
        RArray[index] = array[i];
        index++;
    }
}
return RArray;
}

function main()
{
array = [1,4,3,3,8,10,10,1,1,3,7];
RetArray = checkDuplicates(array);
alert(RetArray);
}
main();

// merge arrays in order
 function main()
{
array1 = [3,27,38,43];
array2 = [9,10,82];
merge(array1,array2);
}
function merge(array1,array2)
{
NewArray = [];
totalLength = array1.length + array2.length;
pt1 = 0;
pt2 = 0;
i = 0;
while(NewArray.length != totalLength)
{
	if(array1[pt1] < array2[pt2])
    {
    	NewArray[i] = array1[pt1];
        pt1++;
    } else
    {
    	NewArray[i] = array2[pt2];
        pt2++;
    }
    i++;
    alert(NewArray);
}
}
main();

//Rotate Array
function rotate(array,steps)
{
var newArray = [];
index = steps;
	for(i=0;i<array.length;i++)
    {
    	newArray[index] = array[i];
        index++;
        if(index == array.length)
        {
        	index = 0;
        }
    }
   return newArray;
}
function main()
{
    var array = [1,2,3,4,5,6,7];
    array = rotate(array,3);
    alert(array);
}
//main();

//Compare values at indicies and choose larger
function CompareWith(array1,array2)
{
    for(i=0;i<array1.length;i++)
    {
        if(array2[i] >= array1[i])
        {
            array1[i] = array2[i];
        }
        if(i == array1.length || i == array2.length)
        {
        	break;
        }
    }
    return array1;
}
  
function main()
{
array1 = [1,2,5,7,4,7];
array2 = [1,4,6,9,10,11];
array1 = CompareWith(array1,array2);
alert(array1);
}
main();

//Track dupes in array
var array = [11,33,4,5,6,11,4,99,33,99]; //glb
var ct = 0; //glb
var ctD = 0; //glb
var arrayDouble = []; //glb
var DupeArray = []; //glb

function Iterate(array)
{
	for(i=0;i<array.length;i++)
    {
    	DoubleCheck(array[i]);
    }
	return DupeArray;
}

function DoubleCheck(number)
{
flag = false;
	for(b=0;b<arrayDouble.length;b++)
    {
    	if(arrayDouble[b] == number)
        {
        	flag = true;
            DupeArray[ctD] = number;
            ctD++;
            break;
        }
    }
    if(flag == false)
    {
    	arrayDouble[ct] = number;
        ct++;
    }
}

function main()
{
Rarray = Iterate(array);
alert(Rarray);
}

main();

 //Bubble sort ascending by default
function SortA(array)
{
	for(i=0;i<array1.length;i++)
	{
		for(b=i;b<array1.length;b++)
		{
			if(array1[i] > array1[b])
			{
				temp = array1[b];
				array1[b] = array1[i];
				array1[i] = temp;
			}
		}
	}
alert(array1); 
 }
 
 function main()
 {
 	array = [11,6,9,3,5,3,2,2,2];
 	Sarray = SortA(array);
 	alert(Sarray);
 }
 //SortA(array1); function call
