# Depthkit.js - Examples

- [**Simple**](https://github.com/juniorxsound/DepthKit.js/blob/master/examples/simple.html) - a simple Three.js scene with one DepthKit character in it
- **AFRAME** - A simple A-frame component demo scene with one DepthKit character in it


---
## A-Frame Component Usage
```html
<a-entity depthkit =
 "videoPath: path/to/video/file.mp4; 
 metaPath: path/to/meta/file.txt; 
 meshScalar: 3;
 autoplay:true;
 loop: true; 
 opacity: 1.0;
 volume: 1.0 "></a-entity>
```

To play or pause via code: 

```javascript
document.querySelector("#depthkitEntity").setAttribute("depthkit", "play", true);
```


