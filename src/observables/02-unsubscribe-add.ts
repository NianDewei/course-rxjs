import { Observable, Observer, Subscription } from 'rxjs';

export const countObserver: Observer<number> = {
    next: (value) => console.log("next: ", value),
    error: (err) => console.warn("error: ", err),
    complete: () => console.log("completed")
}
export const intervalo$ = new Observable<number>(subs => {

    /* create a counter, 1,2,3,4,5,... */
    let count: number = 0
    const interval = setInterval(() => {
        // every second
        count++
        subs.next(count)
        // message setInterval
        console.log('->', count)
    }, 1000)

    setTimeout(() => {
        subs.complete()
    }, 2500)

    return () => {
        clearInterval(interval)
        console.log('Interval destroyed')
    }

})


// const subs1: Subscription = intervalo$.subscribe(countObserver)
// const subs2: Subscription = intervalo$.subscribe(countObserver)
// const subs3: Subscription = intervalo$.subscribe(countObserver)

// subs1.add(subs2)
// subs1.add(subs3)

// setTimeout(() => {
//     subs1.unsubscribe()
//     // subs2.unsubscribe()
//     // subs3.unsubscribe()
//     // message
//     console.log('completed timeout')
// }, 6000)