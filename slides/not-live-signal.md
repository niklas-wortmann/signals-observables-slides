# Signals are not live by Default

````md magic-move
```angular-ts
@Injectable({providedIn: "root"})
export class StateService {
  private _state = signal(undefined);
  public get state() {
    return this._state.asReadonly()
  }
}
```

```angular-ts
@Component({
  standalone: true,
  template: `
     {{value}}
  `,
})
export class FooComponent {
  service = inject(StateService)
  public value = this.service.state()
}
```

```angular-ts
@Component({
  standalone: true,
  template: `
     {{value()}}
  `,
})
export class FooComponent {
  service = inject(StateService)
  public value = this.service.state
}
```

```angular-ts
@Component({
  standalone: true,
  template: `
     {{service.value()}}
  `,
})
export class FooComponent {
  service = inject(StateService)
}
```
````
