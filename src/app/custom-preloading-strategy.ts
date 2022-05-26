import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators'
import { PreloadingStrategy, Route } from '@angular/router';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, loadMe: () => Observable<any>): Observable<any> {

        // Get the route and check the 'preload' key on data object
        if (route.data && route.data['preload']) {
            const delay: number = route.data['delay']; // Get the delay in milliseconds
            console.log('Will preload module on route *[' + route.path + ']* with specified delay of *[' + delay + ']*');
            // Add a time to load the module on delay
            return timer(delay).pipe(
                flatMap(_ => {
                    console.log('Loaded *[' + route.path + ']* module after delay of *[' + delay + ']*');
                    return loadMe(); // Loading the Module
                }));
        } else {
            console.log('no preload for the path *[' + route.path + ']*');
            return of(null);
        }
    }

}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */