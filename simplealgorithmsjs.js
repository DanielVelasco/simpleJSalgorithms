//Get larger values into array1 from source if possible or retain the same values of array1

array1 = [1,2,5,7];
array2 = [1,4,6,9,10,11];


function CompareWith(index,value)
{

    for(i=0;i<array2.length;i++)
    {
        if(array2[i] >= value)
        {
          
            array1[index] = array2[i];
            break;
        }
    
    }


}
  
function sayHello1()
{
  
  for(i=0;i<array1.length;i++)
    {
      
      CompareWith(i,array1[i]);
     
      
    }
   
 
for(i=0;i<array1.length;i++)
    {
      
      alert(array1[i]);
     
      
    }
  
}

//sayHello1();

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

function sayHello2()
{
    
    for(i=0;i<str.length;i++)
    {
        
        if(str[i] == str2[0])
        {
         isTrue(i);
            
            
        }
        
    }
   
}

//sayHello2(); function call

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


function Occurence()
{

	for(i=0;i<array1.length;i++)
    {
    
    	DoubleCheck(array1[i]);
    
    }
	


}



 //Occurence();
