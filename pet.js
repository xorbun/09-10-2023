class animale
{
    constructor(_PetName,_OwnerName,_Species,_Breed)
    {
        this.PetName=_PetName;
        this.OwnerName=_OwnerName;
        this.Species=_Species;
        this.Breed=_Breed;
    }
    checkowner(x,y)
    {
        console.log(x);
        if (x===y)
        {
            console.log("è lo stesso padrone");
        }
        else
        {
           console.log("non è lo stesso padrone");
        }
    }
}


const operation=document.getElementById("submit");
let i=0;
const primo=[];
operation.addEventListener("click",function()
{
    const var1=document.getElementById("petname");
    const var2=document.getElementById("ownerName");
    const var3=document.getElementById("species");
    const var4=document.getElementById("breed");
    primo[i]= new animale(var1.value,var2.value,var3.value,var4.value);
    i++;
    if(i===2)
    {
        primo[i].checkowner(primo[0].OwnerName,primo[1].OwnerName);
    }
})