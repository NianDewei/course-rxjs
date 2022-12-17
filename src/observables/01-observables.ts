import { Observable, Observer} from 'rxjs';

export const obs$ = new Observable<string>((subs) => {
	subs.next("Hola")
	subs.next("Mundo")
	subs.next("Gilver Rolando")
})

export const observer: Observer<string> = {
	next: (value) => console.log("next: ", value),
	error: (err) => console.warn("error: ", err),
	complete: () => console.log("completed")
}



// obs$.subscribe({ next: console.log })
obs$.subscribe(observer)