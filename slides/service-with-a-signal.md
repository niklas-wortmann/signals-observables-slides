---
transition: view-transition
---
<h1 style="view-transition-name:service-headline"> Service with a Subject </h1>

````md magic-move
```angular-ts
@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSub = new BehaviorSubject<Record<string, CartItem>>({});

  public items$ = this.itemsSub
    .asObservable()
    .pipe(map((x) => Object.values(x)));

  public sum$ = this.items$.pipe(
    map((x) => x.reduce((acc, curr) => acc + curr.count \* curr.price, 0)),
  );

  add(product: Product) {
    const currentCart = this.itemsSub.value;
    const itemAlreadyInCart = !!currentCart[product.id];
    const itemInCart = currentCart[product.id];
    const count = !itemAlreadyInCart ? 1 : itemInCart.count + 1
    const newItem = { ...itemInCart, count };
    this.itemsSub.next({
      ...currentCart,
      [product.id]: newItem,
    });
  }
}
```

```angular-ts {*|3|5-8|10-12|20-23|all}
@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSignal = signal<Record<string, CartItem>>({});

  public items = computed(() => {
    const items = this.itemsSignal();
    return Object.values(items);
  });

  public sum = computed(() => {
    return this.items().reduce((acc, curr) => acc + curr.count * curr.price, 0);
  });

  add(product: Product) {
    const currentCart = this.itemsSignal();
    const itemAlreadyInCart = !!currentCart[product.id];
    const itemInCart = currentCart[product.id];
    const count = !itemAlreadyInCart ? 1 : itemInCart.count + 1
    const newItem = { ...itemInCart, count };
    this.itemsSignal.set({
      ...currentCart,
      [product.id]: newItem,
    });
  }
}
```
````

---

<h1 style="view-transition-name:service-headline"> Service with a Signal </h1>

```angular-ts
@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSignal = signal<Record<string, CartItem>>({});

  public items = computed(() => {
    const items = this.itemsSignal();
    return Object.values(items);
  });

  public sum = computed(() => {
    return this.items().reduce((acc, curr) => acc + curr.count * curr.price, 0);
  });

  add(product: Product) {
    const currentCart = this.itemsSignal();
    const itemAlreadyInCart = !!currentCart[product.id];
    const itemInCart = currentCart[product.id];
    const count = !itemAlreadyInCart ? 1 : itemInCart.count + 1
    const newItem = { ...itemInCart, count };
    this.itemsSignal.set({
      ...currentCart,
      [product.id]: newItem,
    });
  }
}
```
