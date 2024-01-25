'use strict';

import React, { Component, useState } from 'react';

import {StyleSheet, View} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroARImageMarker,
  ViroNode,
  ViroARTrackingTargets,
  ViroAnimations,
  ViroSpotLight,
  Viro3DObject,
  ViroQuad,
  ViroVideo,

} from 'react-viro';

export default class VideoAR extends Component {

       

  constructor() {
    super();

    // Set initial state here
    this.state = {
      pause : false
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  
  render() {

    
    return (
      <ViroARScene  >
        
        <ViroARImageMarker
          target="TomAndJerry"
          onAnchorFound={()=> this.setState({runAnimation: true})} >

            <ViroVideo
                source={require('./res/TnJ.mp4')}
                volume={1}
                paused={this.state.pause}
                onClick={this._onInitialized}
                loop={true}
                scale={[0.05, 0.025, 0.2]}
                rotation={[270, 0, 0]}
            />

         </ViroARImageMarker>

         {/* <ViroARImageMarker
          target="video"
          onAnchorFound={()=> this.setState({runAnimation: true})} >

            <ViroVideo
                source={require('./res/video.mp4')}
                loop={true}
                volume={1}
                paused={this.state.pause}
                onClick={this._onInitialized}
                scale={[0.2, 0.15, 0]}
                rotation={[270, 0, 0]}
                
            />

         </ViroARImageMarker> */}
        
      </ViroARScene>
    );
  }



  _onInitialized(state, reason) {
    if (this.state.pause == false) {
      this.setState({
        pause : true
      });
    } else if (this.state.pause == true) {
        this.setState({
            pause : false
          });
    }
  }

  
}


ViroARTrackingTargets.createTargets({
  "TomAndJerry" : {
    source : require('./res/TnJ.png'),
    orientation : "Up",
    physicalWidth : 0.03 // real world width in meters
  }
});

// ViroARTrackingTargets.createTargets({
//     "video" : {
//       source : require('./res/logo.png'),
//       orientation : "Up",
//       physicalWidth : 0.03 // real world width in meters
//     }
//   });



ViroAnimations.registerAnimations({
  sideup: {
    properties: {positionZ: 0, opacity: 1.0},
    easing: 'Bounce',
    duration: 700,

  },
  rotate: {
    properties: {rotateZ: '+=0'},
    duration: 500,
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 10,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = VideoAR;