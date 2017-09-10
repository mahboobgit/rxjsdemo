import { Observable } from "rxjs";

let numbers = [1, 2, 3];

let source = Observable.from<number>(numbers);

class MyCustomObserver{
    next(value){
        console.log( `From my custom class: ${value}`)
    }

    error(e){
        console.log(`From my custom class. Error occured: ${e}`)
    }

    complete(){
        console.log("From my custom class. Done!!")
    }

}

//1st Way of subscribing
source.subscribe(new MyCustomObserver());


//2st Way of subscribing
source.subscribe(
    value => console.log( `my value is ${value}`),
    e => console.log(`Error occured: ${e}`),
    () => console.log("Done!!")
);