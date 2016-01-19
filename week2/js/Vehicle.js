/**
 * Created by Nomad_Mystic on 1/13/2016.
 */

function Vehicle(make, model, year, color, style) {
    this.Make = make;
    this.Model = model;
    this.Year = year;
    this.Color = color;
    this.Style = style;
    this.Running = false;
    this.Odometer = 0;
    this.AvailableFuel = 25;
}

Vehicle.prototype.Start = function() {
    this.Running = true;
};

Vehicle.prototype.Stop = function() {
    this.Running = false;
};

Vehicle.prototype.Honk = function() {
    var alertMessage = this.Color;
    alertMessage += ' ' + this.Year;
    alertMessage += ' ' + this.Make;
    alertMessage += ' ' + this.Model;
    alertMessage += ' ' + this.Style;
    alertMessage += ' Says HONK. I have';
    alertMessage += ' ' + this.AvailableFuel + ' gallons of Fuel Left and';
    alertMessage += ' my Odometer reads ' + this.Odometer + ' Miles Traveled';
    alert(alertMessage);
};

Vehicle.prototype.Drive = function(miles) {
     if (this.Running === false) {

     } else {
         this.Odometer += miles;
         this.AvailableFuel -= (miles / 25);
     }
};

Vehicle.prototype.AddFuel = function(Gallons) {

};

SportsCar.prototype = new Vehicle();
SportsCar.constructor = SportsCar;
function SportsCar() {

    this.TopSpeed = 100;
    this.HorsePower = 700;
}

Truck.prototype = new Vehicle();
Truck.constructor = Truck;
function Truck() {

    this.MaxPullWeight = true;
    this.FourWhellDrive = true;
}

function InstantiateObjects() {

    var parentClass = new Vehicle('Honda', 'Small', 1995, 'red', 'Compact');

    console.log(parentClass.Honk());

}

