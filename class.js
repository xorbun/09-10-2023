class user
{
    constructor(_FirstName, _lastName,_Age,_Address)
    {
        this.FirstName=_FirstName;
        this.LastName=_lastName;
        this.Age=_Age;
        this.Address=_Address;
    }
    findolder(x,y)
    {
        const VarA=parseInt(x);
        const VarB=parseInt(y);
        console.log(VarA);
        console.log(VarB);
        if(VarA>VarB)
        {
            console.log(`${utonto.FirstName} è più vecchio di ${utonta.FirstName}`);
        }
        else if (VarA===VarB)
        {
            console.log(`${utonta.FirstName} e ${utonto.FirstName} hanno la stessa età`);
        }
        else
        {
            console.log(`${utonta.FirstName} è più vecchia di ${utonto.FirstName}`);
        }
    }
}

const utonto= new user("Riccardo","capobianco", "60", "via garigliano");
const utonta= new user("Rosaria", "Riccio","58","Via Garigliano");
utonto.findolder(utonto.Age,utonta.Age);
