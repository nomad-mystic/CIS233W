/**
 * Created by Nomad_Mystic on 1/13/2016.
 */

//DEFINE A BASE TYPE OF VEHICLE

    function Vehicle(Year,Make,Model,Style){
        this.Year = Year;
        this.Make = Make;
        this.Model = Model;
        this.Style = Style;
        this.Odometer = 0;
        this.FuelAvailable=100;
    }


Vehicle.prototype.honk = function(){
    var s = this.Year + " " + this.Make + " " + this.Model + " " + this.Style + " Says HONK and I have " + this.FuelAvailable + " gallons Of Fuel Left and My Odometer reads " + this.Odometer;
    alert(s);
}

Vehicle.prototype.drive = function(miles){
    this.Odometer+=miles;
    this.FuelAvailable-=(miles/25);
}






//DEFINE A SUBTYPE OF CAR.....NOT REALLY INHERITENCE YET
Car.prototype = new Vehicle();
Car.prototype.constructor=Car;
function Car(Year,Make,Model,Style){
    this.Year = Year;
    this.Make = Make;
    this.Model = Model;
    this.Style = Style;

}




//DEFINE A SUBTYPE OF TRUCK......HERE we are really getting Inheritence

function Truck(Year,Make,Model,Style){
    Vehicle.call(this,Year,Make,Model,Style);


}
Truck.prototype = new Vehicle();
Truck.prototype.drive = function(miles){
    this.Odometer+=miles;
    this.FuelAvailable-=(miles/10);
}





function MakeCars(){

    var v = new Vehicle("2015","Toyota","Tundra","CrewCab");
    v.drive(100);
    v.honk();

    var c = new Car("2016","Toyota","Sequoia","Limited");
    c.drive(100);
    c.honk();

    var t = new Truck("2000","Ford","Raptor","LT");
    t.drive(100);
    t.honk();
}



function getJSONData(){

    var text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    return text;
}

function Populate(){


    var JSONString = getJSONData();

    var obj = JSON.parse(JSONString);


    var lst = document.getElementById("lstEmployees");


    for(i = 0; i < obj.employees.length; i++) {
        opt = document.createElement("option");
        opt.text = obj.employees[i]["firstName"] + " " + obj.employees[i]["lastName"]
        lst.add(opt);
    }
}
