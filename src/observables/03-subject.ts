import { Observer, Observable, Subject, Subscription } from 'rxjs';

export const countObserverTwo: Observer<number> = {
    next: (value) => console.log("next: ", value),
    error: (err) => console.warn("error: ", err),
    complete: () => console.log("completed")
}


const intervaloTwo$: Observable<number> = new Observable<number>((subs) => {
    const intervaloId: number = setInterval(() => subs.next(Math.random()), 1000)
    return () => {
        clearInterval(intervaloId)
        console.log('Interval destroyed :)')
    }
})

/**SUBJECT
 * 1- multiple cast.
 * 2- is also an observer
 * 3. next, error and complete
 */
// ------Subject
const subject$: Subject<number> = new Subject<number>()

// ------Observable
const subsInterval = intervaloTwo$.subscribe(subject$)

// const subs1:Subscription = intervaloTwo$.subscribe(countObserverTwo)
// const subs2:Subscription = intervaloTwo$.subscribe(countObserverTwo)

const su1: Subscription = subject$.subscribe(countObserverTwo)
const su2: Subscription = subject$.subscribe(countObserverTwo)

setTimeout(() => {
    subject$.next(9) //send data
    subject$.complete()
    subsInterval.unsubscribe()
}, 3500)