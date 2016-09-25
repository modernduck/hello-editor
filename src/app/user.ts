export class User{
    name:string;
    age:number;
    height:number;
    weight:number;

    isOld():Boolean{
        return this.age >= 60;
    }

    

}