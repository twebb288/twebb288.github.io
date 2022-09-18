# Depthkit.js


A plugin for visualising [Depthkit](http://www.depthkit.tv/) volumteric captures using [Three.js](https://github.com/mrdoob/three.js) in WebGL. The plugin requires Three.js and a Depthkit *combined-per-pixel* video export.

![Depthkit.js screencapture](https://raw.githubusercontent.com/ScatterCo/DepthKit.js/master/assets/gh/banner.gif)

Include ```depthkit.js``` or ```depthkit.min.js``` after loading ```three.js``` in your project.

## **Using A-Frame Component**
## Getting Started

```html
<a-entity id = "depthkitEntity" depthkit =
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

## Properties

| Property      | Description                                                                                                    | Default Value |
|---------------|----------------------------------------------------------------------------------------------------------------|---------------|
| videoPath | url link or path to the combined-per-pixel video file                                                                         |          |
| metaPath       | url link or path to the meta text file                                                     |          |
| meshScalar   | This adjust the mesh decimation. - 1 being lowest decimation (Highest Quality) while 4 is highest decimation (Low Quality)| 4        |
| loop    | To loop the depthkit playback                                                              | false          |
| autoplay   | To autoplay depthkit character       | false            |
| opacity | Controls the opacity of depthkit character mesh            | 1             |
| volume        | How loud to play the sound.                                                                                    | 0.5             |
|play | Toggle for playing or pausing the video | false|


### Known issues

- Autoplay is not working on Chrome/Safari because of media protocols in chrome




---




## **Using ThreeJS** 
### Creating a character
```JavaScript
var depthkit = new DepthKit();
depthkit.load(
	"myClip.txt",
	"myClip.mp4",
	character => {
		scene.add(character);
	}
);
```
Where the first and second arguments are the path to the metadata file and the *combined-per-pixel* video exported by Depthkit.
The third argument is a callback that is passed a THREE.Object3D object representing the Depthkit character.

### Controlling a character
Calling ```new DepthKit()``` returns an object that has the neccesery methods to control the playback and rendering of the character

```depthkit.play()``` - Play the video

```depthkit.pause()``` - Pause the video

```depthkit.stop()``` - Stop and rewind to begining

```depthkit.setLoop(isLooping)``` - Set loop to true or false

```depthkit.setVolume(volume)``` - Change the volume of the audio

```depthkit.setOpacity(opacity)``` - Change opacity

```depthkit.dispose()```
- Dispose and clean the character instance

## Examples:
[Simple Depthkit example](https://juniorxsound.github.io/DepthKit.js/examples/simple.html)

## How to contribute:
1. Fork/Clone/Download
1. Install all dependcies using ```npm install```
1. Use the following node commands:

```npm run start``` uses ```concurrently``` to start an ```http-server``` and to run ```watchify``` and bundle on every change to ```build/depthkit.js```

```npm run build``` to bundle and minify to ```build/depthkit.min.js```

## Credits
The Depthkit.js plugin was developed for [Tzina: A Symphony of Longing](https://tzina.space) and ported with permission from Scatter's Unity Depthkit Plugin.

## Thanks
A-Frame component written by [@chetu3319](https://github.com/chetu3319).

Originally written by [@mrdoob](https://github.com/mrdoob) and [@obviousjim](https://github.com/obviousjim) ported and modified by [@juniorxsound](https://github.com/juniorxsound) and [@avnerus](https://github.com/Avnerus). Special thank you to [Shirin Anlen](https://www.shirin.works/) and all the Tzina crew, [@ZEEEVE](https://github.com/zivschneider), [@jhclaura](https://github.com/jhclaura)
