---
theme: wordman
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  presenterOnly: true
defaults:
  layout: default
title: Reactivity in Angular Applications - Signals vs. Observables
monaco: false
layout: cover
mdc: true
transition: slide-left

---

# Reactivity in Angular Applications
Signals vs Observables

<style>
p {
  margin-top: 1.5rem !important;
  font-size: 2.5rem;
}
</style>

---
layout: image-left
image: ./headshot.png
---
<div class='flex items-center h-full'>
  <div class="grid grid-cols-2 gap-4">
    <card title='Developer Advocate' imagePath='jbLogo.png' imageAlt='JetBrains Logo'></card>
    <card title='Core Team Member' imagePath='rxLogo.png' imageAlt='RxJS Logo'></card>
    <card title='GDE' imagePath='angularLogo.png' imageAlt='Angular Logo'></card>
    <card title='Host' imagePath='podcastLogo.png' imageAlt='Angular Plus Show Podcast Logo'></card>
  </div>
</div>

---
transition: view-transition
---

<div class='flex w-full h-full items-center justify-center'>
  <div class='text-6xl pr-1' style='view-transition-name: left'> Reactive </div>
  <div class='text-6xl pl-1' style='view-transition-name: right'> Primitive </div>
</div>


---
transition: view-transition
---
<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1' style='view-transition-name: left'> Reactive </div>
    <div class='text-4xl pl-1' style='view-transition-name: right'> Primitive </div>
  </div>
  
  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text'></div>
    <div  style='view-transition-name: right-text'></div>
  </div>
</div>

---
transition: view-transition
---
<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1' style='view-transition-name: left'> Reactive </div>
    <div class='text-4xl pl-1 text-gray-600' style='view-transition-name: right'> Primitive </div>
  </div>

  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text' class='flex-1'>
      <ul>
        <li>Propagation of Change</li>
        <li>react to data changes/events</li>
      </ul>
    </div>
    <div  style='view-transition-name: right-text' class='flex-1'></div>
  </div>
</div>

---
transition: view-transition
---
<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1 text-gray-600' style='view-transition-name: left'> Reactive </div>
    <div class='text-4xl pl-1' style='view-transition-name: right'> Primitive </div>
  </div>

  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text' class='text-gray-600 flex-1'>
      <ul>
        <li>Propagation of Change</li>
        <li>react to data changes/events</li>
      </ul>
    </div>
    <div  style='view-transition-name: right-text' class='flex-1'>
      <ul>
        <li>"a pre-Renaissance painter"</li>
        <li>Fundamental Data Type</li>
        <li>First-Class support</li>
      </ul>
    </div>
  </div>
</div>

---
transition: view-transition
---
<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1' style='view-transition-name: left'> Signals </div>
    <div class='text-4xl pl-1' style='view-transition-name: right'> Observables </div>
  </div>

  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text' class='flex-1'>
    </div>
    <div style='view-transition-name: right-text' class='flex-1'></div>
  </div>
</div>

---
transition: view-transition
---
<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1' style='view-transition-name: left'> Signals </div>
    <div class='text-4xl pl-1 text-gray-600' style='view-transition-name: right'> Observables </div>
  </div>

  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text' class='flex-1'>
      <ul>
        <li>synchronous</li>
        <li>imperative</li>
        <li>publicly exposed Producer</li>
      </ul>
    </div>
    <div style='view-transition-name: right-text' class='flex-1'></div>
  </div>
</div>

---
---
<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1 text-gray-600' style='view-transition-name: left'> Signals </div>
    <div class='text-4xl pl-1' style='view-transition-name: right'> Observables </div>
  </div>

  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text' class='flex-1 text-gray-600'>
      <ul>
        <li>synchronous</li>
        <li>imperative</li>
        <li>publicly exposed producer</li>
      </ul>
    </div>
    <div style='view-transition-name: right-text' class='flex-1'>
      <ul>
        <li>asynchronous or synchronous</li>
        <li>declarative</li>
        <li>hidden producer</li>
      </ul>
    </div>
  </div>
</div>

---
---

# Let's have a look at Observables

---
---

# Let's have a look at Signals

---
preload: false
---
<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1' style='view-transition-name: left'> Signals </div>
    <div class='text-4xl pl-1' style='view-transition-name: right'> Observables </div>
  </div>
  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text' class='flex-1'>
      <ul>
        <li>synchronous</li>
        <li>imperative</li>
        <li>publicly exposed producer</li>
      </ul>
    </div>
    <div style='view-transition-name: right-text' class='flex-1'>
      <ul>
        <li>asynchronous or synchronous</li>
        <li>declarative</li>
        <li>hidden producer</li>
      </ul>
    </div>
  </div>
</div>
<div class='absolute w-full h-full' style='top: 45%'>
  <div class='flex w-full items-center justify-around flex-1'>
    <div v-motion :initial="{ opacity: 0, rotate: '0deg' }" :enter="{ opacity: 1,  rotate: '-45deg' }" class='text-6xl font-bold text-red-600 rotate-315'>UI State</div>
    <div v-motion :initial="{ opacity: 0, rotate: '0deg' }" :enter="{ opacity: 1,  rotate: '-45deg' }" class='text-6xl font-bold text-red-600 rotate-315 text-center'>
        <span>'Everything'</span><br><span>Else</span></div>
  </div>
</div>

---
transition: view-transition
---

<div class='flex w-full h-full items-center justify-around flex-col'>
  <span class='text-4xl'>Fine-Grained Reactivity</span>
  <span class='text-2xl text-gray-400' style='view-transition-name: conjunction'>vs</span>
  <span class='text-4xl'>Corse-Grained Reactivity</span>
</div>

---
---

<div class='flex w-full h-full items-center justify-around flex-col'>
  <span class='text-4xl'>Fine-Grained Reactivity</span>
  <span class='text-2xl text-gray-400' style='view-transition-name: conjunction'>and</span>
  <span class='text-4xl'>Corse-Grained Reactivity</span>
</div>

---
layout: cover
---
# But How?

---
transition: view-transition
---

<h1>Basically *every* Angular Application</h1>
<div class="flex flex-col items-center justify-center" style="height: calc(100% - 80px); view-transition-name='state-container'">
</div>

<style>
.bar {
    background: white;
    color: black
}
</style>

---
transition: view-transition
---

<h1 style="view-transition-name:'headline'">Basically *every* Angular Application</h1>
<div class="flex flex-col items-center justify-center" style="height: calc(100% - 80px); view-transition-name:'state-container'">
    <div class="w-full h-5 flex items-center mb-1 justify-center bar p-6 rounded-md">State</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md">Abstraction</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md">UI</div>
</div>

<style>
.bar {
    background: white;
    color: black
}
</style>

---
transition: view-transition
---

<h1 style="view-transition-name:'headline'">Signals?</h1>
<div class="flex flex-col items-center justify-center" style="height: calc(100% - 80px); view-transition-name:'state-container'">
    <div class="w-full h-5 flex items-center mb-1 justify-center bar p-6 rounded-md" style="view-transition-name:'bar-1'">State</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md" style="view-transition-name:'bar-2'">Abstraction</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md" style="view-transition-name:'bar-3'">UI</div>
</div>

<style>
.bar {
    background: white;
    color: black
}
</style>

---
transition: view-transition
---

<h1 style="view-transition-name:'headline'">Signals?</h1>
<div class="flex flex-col items-center justify-center" style="height: calc(100% - 80px); view-transition-name:'state-container'">
    <div class="w-full h-5 flex items-center mb-1 justify-center bar p-6 rounded-md" style="view-transition-name:'bar-1'">State</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md bar-active" style="view-transition-name:'bar-2'">Abstraction</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md bar-active" style="view-transition-name:'bar-3'">UI</div>
</div>

<style>
.bar {
    background: white;
    color: black
}

.bar-active {
    background: var(--onu-colors-cyan400);
    color: white
}
</style>

---
---

<h1 style="view-transition-name:'headline'">Observables?</h1>
<div class="flex flex-col items-center justify-center" style="height: calc(100% - 80px); view-transition-name:'state-container'">
    <div class="w-full h-5 flex items-center mb-1 justify-center bar p-6 rounded-md bar-active" style="view-transition-name:'bar-1'">State</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md bar-active" style="view-transition-name:'bar-2'">Abstraction</div>
    <div class="w-full h-5 flex items-center m-1 justify-center bar p-6 rounded-md" style="view-transition-name:'bar-3'">UI</div>
</div>

<style>
.bar {
    background: white;
    color: black
}

.bar-active {
    background: var(--onu-colors-pink700);
    color: white
}
</style>

---
layout: image
image: ./inception-deeper.gif
backgroundSize: inherit

---


---
---

````md magic-move

```angular-ts

Component({

  standalone: true,

  template:`<div *ngIf="someCondition">

     <div *ngFor="let item of source$ | async"></div>

  </div>`,

})

export class FooComponent {

  source$ = inject(Service).someMethod();

}

```


```angular-ts

@Component({

  standalone: true,

  template:`{{ counter() }}`,

})

export class FooComponent {

  counter$ = interval(1000);

  counter = toSignal(this.counter$, { initialValue: 0 });

}

```

````

---
---

# Thanks for listening 🙏

<div class="flex w-full items-center justify-center">
    <a href="https://wordman.dev/talk/2024/ngconf">
        <qrcode value="https://wordman.dev/talk/2024/ngconf" class="mb-2 mt-2"> </qrcode>
        <span>https://wordman.dev/talk/2024/ngconf</span>
    </a>
</div>


