# Semantic UI Tutorial

- Semantic UI website shows all the elements next to it and shows examples with code
- A lot of people compare semantic ui to bootstrap and they're quite similar
  - Semantic gives a lot more to work with, but it's much more diffcult at the same time
- We will include CDN and create a cheatsheet with the markup of the main stuff to use

## Container

- This picks a width and puts everything in the middle and makes it responsive by default

- Add ui to specify semantic ui

```html
<div class="ui container"></div>
```

## Header

- In the container lets do some headings
- You can add styling

```html
<h1 class="ui header">Heading 1</h1>
<h1 class="ui small header">Heading 1</h1>
<h1 class="ui tiny header">Heading 1</h1>
<h1 class="ui medium header">Heading 1</h1>
<h1 class="ui large header">Heading 1</h1>
<h1 class="ui huge header">Heading 1</h1>
```

## Button

```html
<button class="ui button">Read More</button>
```

- Semantic UI has a tonne of buttons stuff
- It has context classes also positive and negatives

```html
<button class="ui primary button">Read More</button>
<button class="ui secondary button">Read More</button>
<button class="ui positive button">Read More</button>
<button class="ui negative button">Read More</button>
```

- Lots of colors
  - red
  - blue
  - green
  - purple
  - yellow
  - brown
  - orange
  - olive
  - teal
  - violet
  - grey

```html
<button class="ui orange button">Read More</button>
```

- Can add disabled tag
- Can add loading tag
