export class User{
    name:string;
    age:number;
    password:string;
    height:number;
    weight:number;

    isOld():Boolean{
        return this.age >= 60;
    }

    isHealthy():boolean{

        //180/
        return this.height/this.weight >= 1.5 && this.height/this.weight <= 3.5 
    }



}