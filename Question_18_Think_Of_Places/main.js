var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 18: Think Of Countries.
var countriesToVisit = ['China', 'Denmark', 'Brazil', 'Argentina'];
console.log("Original Order:", countriesToVisit);
// Print the Array In Alphabetical Order
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show the Array Still in Original Order.
console.log("Still in Original Order:", countriesToVisit);
// Printing the Array in reverse Order.
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Again Show the Array Still in Original Order.
console.log("Still in Original Order:", countriesToVisit);
// We have changed the Original Array in Reverse Order.
console.log("Original Array Is Reversed:", countriesToVisit.reverse());
// We have changed the Reversed Array to it's Original Position
console.log("Reversed Array to It's Original Position:", countriesToVisit.reverse());
// Sort the Array In Alphabatical Order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have Again changed the Alphabetical Order Array in Reverse Order.
console.log("Original Array Is Reversed Again:", countriesToVisit.reverse());
