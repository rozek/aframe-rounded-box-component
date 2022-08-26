# aframe-rounded-box-component #

an A-Frame component and primitive for boxes with rounded edges








## Usage ##

Once loaded or imported, `aframe-rounded-box-component` may be used as a component of a plain A-Frame entity

```html
<a-scene>
  <a-entity rounded-box="radius:0.3" position="0 0 0"></a-entity>
</a-scene>
```

### Primitive ###

Alternatively, the primitive `a-rounded-box` may be used in order to get a more compact code:

```html
<a-scene>
  <a-assets>
    <img id="BillboardTexture" src="..."/>
  </a-assets>
  <a-rounded-box radius="0.3" material="color:green" position="0 1 0"></a-rounded-box>
</a-scene>
```

## Example ##

Here is a complete example (albeit without the HTML boilerplate)

```html
<script src="https://unpkg.com/aframe"></script>
<script src="https://unpkg.com/aframe-hemisphere-controls"></script>
<script src="https://unpkg.com/aframe-vertical-billboard-component"></script>

<a-scene embedded
  hemisphere-controls="position:0 0.5 4; target:0 0 0"
  style="width:600px; height:450px"
>
  <a-sky color="#ECECEC"></a-sky>

  <a-plane width="4" height="4" color="#7BC8A4"
    position="0 0 0" rotation="-90 0 0"></a-plane>

  <a-rounded-box radius="0.1" material="color:red"   position="-1.5 1 0"></a-rounded-box>
  <a-rounded-box radius="0.3" material="color:green" position="0    1 0"></a-rounded-box>
  <a-rounded-box radius="0.5" material="color:blue"  position="1.5  1 0"></a-rounded-box>
</a-scene>
```

![Example Screenshot](screenshot.png)

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/aframe-rounded-box-component/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

You may also look into the author's [build-configuration-study](https://github.com/rozek/build-configuration-study) for a general description of his build environment.

## License ##

[MIT License](LICENSE.md)
