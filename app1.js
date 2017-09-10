
//Functional Way of Coding
var arr = ['2', '3', 'sdsd', '3', 'error', '6'];

var result = arr.map(x => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((t, x) => t + x);

console.log(result);

//Reactive Tutorial

//Create the source, which iterates through the item every 400 ms
var source = Rx.Observable.interval(400).take(arr.length)
    .map(i => arr[i]);

//Map & Reduce the source to get the sum of all the integer element of the array
var reactiveSource = source.map(x => parseInt(x))
    .filter(x => !(isNaN(x)))
    .reduce((r, x) => r + x);


//Subscribe to final reactiveSource
reactiveSource.subscribe({
        onNext: x => console.log(x),
        onError: ex => console.log('Error Log:' + ex.message),
        onCompleted: () => console.log('Completed !!')
    });


