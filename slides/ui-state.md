# Signals for UI State

````md magic-move
```angular-ts
@Component({
  standalone: true,
  template: `
     <div *ngFor="let item of source$ | async"></div>
  `,
})
export class FooComponent {
  source$ = inject(Service).someMethod();
}
```

```angular-ts
@Component({
  standalone: true,
  template: `
     <div *ngFor="let item of source()"></div>
  `,
})
export class FooComponent {
  source = toSignal(inject(Service).someMethod());
}
```

```angular-ts
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  standalone: true,
  template: `
     <div *ngFor="let item of source()"></div>
  `,
})
export class FooComponent {
  source = toSignal(inject(Service).someMethod());
}
```
````
