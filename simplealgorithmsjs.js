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

//Count how many time substr appears in string. len(string1) > len(string2)
function Iterate(str)
{
Ct = 0;
 for(i=0;i<str.length;i++)
    {
        if(str[i] == str2[0])
        {
         IterateSubstr(i,Ct);
        }
    }
    alert("Substring appears in String " + Ct.toString() + " Times");
}

function IterateSubstr(index,count)
{
   IsIn = null;
    for(c=0;c<str2.length;c++)
    {
        if(str2[c] == str[index])
        {
            IsIn = true;
        }else
        {
             IsIn = false;
        }
       index++
    }
    if(IsIn === true)
    {
        Ct++;
    }
}
function main()
{
str = "thedogwentttheothethadthethth";
str2= "the";
Iterate(str);
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
