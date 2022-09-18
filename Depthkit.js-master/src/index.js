//Depthkit.js class
import Depthkit from './depthkit'

//Make it global
if(typeof window !== 'undefined' && typeof window.THREE === 'object'){
  window.Depthkit = Depthkit;
} else {
  console.warn('[Depthkit.js] It seems like THREE is not included in your code, try including it before Depthkit.js');
}

/* Made into an A-Frame component
 *  @author Chaitanya Shah / http://www.chaitanyashah.com
 */

AFRAME.registerComponent('depthkit', {
  schema: {
      videoPath: {type: 'string'},
      metaPath: {type: 'string'},
      loop: {type: 'boolean', default: false},
      autoplay: {type: 'boolean', default: false},
      opacity:{type:'number', default: 1},
      volume: {type:'number', default : 1},
      meshScalar :{type:'number', default: 4,  oneOf: [1,2,3,4],},
      play:{type: 'boolean', default: false},
  },
  init: function () {
      this.character = new Depthkit();
      this.depthkitLoadedFlag = false;
          
      //--
      let scope= this;
      let data= this.data;
      let el = this.el;
      
      let geometry = new THREE.BoxGeometry(1,1,1);
     
      let material = new THREE.MeshBasicMaterial( {color: 0x00ff00,opacity:0.0} );
      material.transparent = true;
      material.depthWrite = false;
      
      let dkMesh = new THREE.Mesh( geometry,material);
      
      el.setObject3D( 'mesh',dkMesh );  
      

      let depthkitLoadedCallback = this.depthkitLoaded.bind(this);
    
      if(data.videoPath && data.metaPath)
      {
          this.character.load(data.metaPath,data.videoPath,depthkitLoadedCallback);
     
          dkMesh.add(this.character);
      }
      
  },
  depthkitLoaded()
  {
      let data = this.data;
      console.log(this);
      this.depthkitLoadedFlag = true;
      this.character.setOpacity(data.opacity);
      this.character.setVolume(data.volume);
      if(data.autoplay)
      {
          this.character.play();   
      }
      else
      {
          this.character.stop();
      }
    
      
      this.character.setMeshScalar(data.meshScalar);
  },

  update: function (previousData) {
      //Optimise: Check for the change in the new updated data as compared to the previous data
      let data = this.data;
      let character = this.character;
      if(this.depthkitLoadedFlag)
      {

          if(data.play)
          {
              character.play();   
          }
          else
          {
              character.stop();
          }
          character.setLoop(data.loop);
          character.setOpacity(data.opacity);
          character.setVolume(data.volume);
          character.setMeshScalar(data.meshScalar);
      }
    
      
    

  },
  remove: function () {
    this.el.removeObject3D('mesh');
  },

});

export { Depthkit };
