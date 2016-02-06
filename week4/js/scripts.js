/**
 * Created by endof on 1/28/2016.
 */

window.onload = init();
function init() {

    var minusPlus = (function() {
        var lastName;
        var firstName;
        var userAddress;
        var object = {
            tagName: {
                lastName: '',
                firstName: '',
                address: ''
            }
        };
        function doWork(lastName, firstName, userAddress) {
           object.tagName.lastName = lastName;
           object.tagName.firstName = firstName;
           object.tagName.address = userAddress;

            return object.tagName;
        }

        function remove(lastName, firstName, userAddress) {
            object.tagName.lastName = lastName;
            object.tagName.firstName = firstName;
            object.tagName.address = userAddress;

        }

        return {
            add: function(lastName, firstName, userAddress) {
               var output = doWork(lastName, firstName, userAddress);
                return output;
            },
            minus: function() {
                remove(lastName, firstName, userAddress);
            },
            doWriting: function() {
                return object.tagName;
            }
        };
    })(); // End Minus

    var userOne = minusPlus.add('Murphy', 'Keith', '812 SE Mill st');
    console.log(userOne);
    var userTwo = minusPlus.add('doe', 'Jane', '23432 NE Stark st');
    console.log(userTwo);

    var users = {
        userOne: userOne //,
        //userTwo: userTwo
    };
    console.log(users);
}