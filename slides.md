---
theme: wordman
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
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
favicon: ./favicon.png
---

# Reactivity in Angular Applications

Signals vs Observables

<style>
p {
  margin-top: 1.5rem !important;
  font-size: 2.5rem;
  color: var(--onu-colors-cyan800);
}
</style>

---
layout: quote
author: George Santayana
quote: Those who cannot remember the past are condemned to repeat it.
image: ./george-santayana.jpg
---

# Those who cannot remember the past are condemned to repeat it.

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
      </ul>
    </div>
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
        <li>publicly exposed producer</li>
      </ul>
    </div>
    <div style='view-transition-name: right-text' class='flex-1'></div>
  </div>
</div>

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

# Let's have a look at Observables

---

# Let's have a look at Signals

---

<div class='flex flex-col h-full'>
  <div class='flex w-full items-center justify-around'>
    <div class='text-4xl pr-1' style='view-transition-name: left'> Signals </div>
    <div class='text-4xl pl-1' style='view-transition-name: right'> Observables </div>
  </div>
  <div class='flex w-full items-center justify-around flex-1'>
    <div style='view-transition-name: left-text' class='flex-1'>
      <ul class="list">
        <li class="list-item">synchronous</li>
        <li class="list-item">imperative</li>
        <li class="list-item">publicly exposed producer</li>
      </ul>
    </div>
    <div style='view-transition-name: right-text' class='flex-1'>
      <ul class="list">
        <li class="list-item">asynchronous or synchronous</li>
        <li class="list-item">declarative</li>
        <li class="list-item">hidden producer</li>
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
src: ./slides/ui-state.md
---

---
src: ./slides/service-with-a-signal.md
---

---
transition: view-transition
---

<h1 style="view-transition-name='slide-headline"> Never Do This </h1>
<div class='text-8xl absolute z-5' style="color: var(--onu-colors-red600); right: 0; bottom: 165px"><mdi:close-thick /></div>

````md magic-move
```angular-ts
@Component({})
export class AppComponent {
  private city = signal('Kansas City');
  private weather = signal({});

  constructor(private weatherService: WeatherService) {
    effect(async () => {
      const weather = await this.weatherService.getWeather(this.city());
      this.weather.set(weather)
    }, {allowSignalWrites: true});
  }
}
```

```angular-ts
@Injectable()
export class AppComponent {
  private city = signal('Kansas City');
  private weather = signal({});

  constructor(private weatherService: WeatherService) {
    effect(async () => {
      const weather = await this.weatherService.getWeather(this.city());
      this.weather.set(weather)
    }, {allowSignalWrites: true});
  }
}
```
````

---
preload: false
---

<h1 style="view-transition-name='slide-headline"> Do This Instead </h1>
<div class='text-8xl absolute z-5' style="color: var(--onu-colors-green600); right: 0; bottom: 165px"><mdi:check-thick v-motion v-motion-roll-visible-right/></div>

```console
$ ng add ngxtension
```

```angular-ts
import { computedAsync } from 'ngxtension/computed-async';

@Component({})
export class AppComponent {
  private city = signal('Kansas City');
  private weather = computedAsync(() => this.weatherService.getWeather(this.city()));
}
```

<style>
.shiki {margin-bottom: 2.5rem}

h1 {margin-bottom: 2rem!important;}
</style>

---

# Thanks for Listening 🙏

<div class="flex w-full items-center justify-center">
    <a href="https://wordman.dev/talk/2024/ngconf">
        <qrcode value="https://wordman.dev/talk/2024/ngconf" class="mb-2 mt-2"> </qrcode>
        <span>https://wordman.dev/talk/2024/ngconf</span>
    </a>
</div>
