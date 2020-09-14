
function  main()
{
  var string1 ="INTIMETEC";
  let i,count;
  let n=10;
  for (i = 0; i < n; i++)
  {
    count++;
    if (count == 3)
    {
      string11[i] = string1[i+1];
      i++;
      count = 0;
    }
    if (i == n-1)
    {
      i = 0;
      n--;
    }
    if (n == 1)
    {
      n = 0;
    }
  }
}
main();
//console.log()


/*void main()
{
  var str = "INTIMETEC";
  var counter = 3, i;
  for(i = 0; i != '\0'; i++ )
  {
    if(i == counter-1)
    {
      str[i] = str[i + 1];
    }
    i = counter;
  }
  console.log("The final string is :", str[i]);
} */







