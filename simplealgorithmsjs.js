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



//Count how many time string appears in string. Will alert every time string has occured. could create a counter to count occurences

str = "thedogwenttothe";
str2= "the";


function isTrue(index)
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
        alert("in");
    }
    
    
}

function main()
{
    
    for(i=0;i<str.length;i++)
    {
        
        if(str[i] == str2[0])
        {
         isTrue(i);
            
            
        }
        
    }
   
}

//main(); function call

//Count how many times pairs of dupes appear in the array.
array1 = [11,33,4,5,6,11,4,99,33];
arrayDouble = [];
num = 0;

function DoubleCheck(number)
{

isIn = false;
	for(b=0;b<arrayDouble.length;b++)
    {
    
    	if(arrayDouble[b] == number)
        {
        	isIn = true;
         	alert("twice");
            break;
        
        }
    
    }
    
    if(isIn == false)
    {
    	
    	arrayDouble[num] = number;
        num++;
    
	}


}


function main()
{

	for(i=0;i<array1.length;i++)
    {
    
    	DoubleCheck(array1[i]);
    
    }
	


}



 //main();
 
 //Bubble sort ascending by default
 
 array1 = [11,6,9,3,5,3,2,2,2];

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
 
 //SortA(array1); function call
 

 
