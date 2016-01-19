/**
 * Created by Nomad_Mystic on 1/13/2016.
 */
window.onload = init;

function init() {
    var goButton = document.getElementById('goButton');
    var populateButton = document.getElementById('populateButton');

    goButton.addEventListener('click', InstantiateObjects, false);
    populateButton.addEventListener('click', populate, false);
}

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
    if (this.Running === false) {
        alert('Vehicle is not running');
    }
    this.Running = false;
};
Vehicle.prototype.Drive = function(miles) {
    if (this.Running === false) {
        this.Stop();
    } else {
        this.Odometer += miles;
        this.AvailableFuel -= (miles / 25);
    }
};

Vehicle.prototype.Honk = function() {
    var alertMessage = 'Running = ' + this.Running;
    alertMessage += ' ' + this.Color;
    alertMessage += ' ' + this.Year;
    alertMessage += ' ' + this.Make;
    alertMessage += ' ' + this.Model;
    alertMessage += ' ' + this.Style;
    alertMessage += ' Says HONK. I have';
    alertMessage += ' ' + this.AvailableFuel + ' gallons of Fuel Left and';
    alertMessage += ' my Odometer reads ' + this.Odometer + ' Miles Traveled.';
    if (this.FourWellDrive === true && this.MaxPullWeight > 1500 ) {
        alertMessage += ' This vehicle is Four Well Drive';
        alertMessage += ' and this vehicle is MaxPullWeight.';
    }
    if (this.TopSpeed >= 120 && this.HorsePower > 500) {
        alertMessage += ' This vehicle\'s top speed is ' + this.TopSpeed;
        alertMessage += ' and this vehicle has ' + this.HorsePower + ' horsepower.';
    }
    alert(alertMessage);
};

Vehicle.prototype.AddFuel = function(Gallons) {

};

SportsCar.prototype = new Vehicle({});
function SportsCar(make, model, year, color, style, TopSpeed, HorsePower) {
    var sportsCarAndVehicle = Vehicle.call(this, make, model, year, color, style);
    this.TopSpeed = TopSpeed;
    this.HorsePower = HorsePower;

    return sportsCarAndVehicle;
}

Truck.prototype = new Vehicle({});
function Truck(make, model, year, color, style, MaxPullWeight, FourWellDrive) {
    var truckAndVehicle = Vehicle.call(this, make, model, year, color, style);
    this.MaxPullWeight = MaxPullWeight;
    this.FourWellDrive = FourWellDrive;

    return truckAndVehicle;
}

Truck.prototype.Drive = function(miles) {
    if (this.Running === false) {
        this.Stop();
    } else {
        this.Odometer += miles;
        this.AvailableFuel -= (miles / 10);
    }
};

function InstantiateObjects() {

    var parentClass = new Vehicle('Honda', 'Small', 1995, 'red', 'Compact');
    parentClass.Start();
    parentClass.Drive(100);
    parentClass.Honk();

    var CarClass = new SportsCar('Honda', 'Small', 1995, 'red', 'Compact', 150, 600);
    CarClass.Start();
    CarClass.Drive(25);
    CarClass.Honk();

    var truckClass = new Truck('Ford', 'Large', 2005, 'White', 'OverSized', 10000, true);
    truckClass.Start();
    truckClass.Drive(100);
    truckClass.Honk();
}
// for the populate button functionality Adding options to the select element of the page.
function populate() {
    var employeeObject = getJSONData();
    var populateSelect = document.getElementById('populateSelect');
    var populateButton = document.getElementById('populateButton');

    for (var i = 0; i < employeeObject.employees.length; i++) {
        var option = document.createElement('option');
        option.text = employeeObject.employees[i].firstName + ' ' + employeeObject.employees[i].lastName;
        populateSelect.add(option);
    }
    populateButton.disable = true;
}
// Object for employee function
function getJSONData(){
    var text = {
        "employees" : [
            { "firstName":"John" ,
                "lastName":"Doe"
            },
            {
                "firstName":"Anna" ,
                "lastName":"Smith"
            },
            {
                "firstName":"Peter" ,
                "lastName":"Jones"
            }
        ]
    };
    return text;
}