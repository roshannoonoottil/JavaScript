class car{
    constructor( name, mileage,max_speed){
        this.name=name;
        this.mileage = mileage ; 
        this.max_Speed = max_speed;
        console.log("Name : "+name);
        console.log("Milleage : "+mileage);
        console.log("Max speed : "+max_speed);
    }
}
const obj=new car("Land Rover Defender",9.2,191)