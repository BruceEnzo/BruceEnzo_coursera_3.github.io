var names=new Array();
names[0]="Kodjo"
names[1]="Junior"
names[2]="jean"
names[3]="Amine"
names[4]="Dylan"
names[5]="Kodjo"
names[6]="Lary"
names[7]="Jeremy"
names[8]="jim"

for (var i=0; i < names.length; i++)
{


   if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
   {
    console.log("Goodbye"+ names[i])
   }
   else
   {
    console.log("Hello"+names[i])
   }
}