'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

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

} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        
        <ViroARImageMarker
          target="marshalllogo"
          onAnchorFound={()=> this.setState({runAnimation: true})}
          >
          <ViroNode
            opacity={0}
            position={[0,-0.01,0.05]}
            animation= {{name:'sideup',run: this.state.runAnimation}}
          >
            <ViroText
              text="Marshall"
              extrusionDepth={2}
              scale={[0.1,0.1,0.1]}
              rotation={[-90,0,0]}
              animation={{name:'rotate',run: this.state.runAnimation, loop:true}}
              />
          </ViroNode>
        </ViroARImageMarker>

        <ViroARImageMarker
          target="naruto"
          onAnchorFound={()=> this.setState({runAnimation: true})}
          >
          <ViroText
              text="NARUTO"
              extrusionDepth={2}
              scale={[0.1,0.1,0.1]}
              rotation={[-90,0,0]}
              animation={{name:'rotate',run: this.state.runAnimation, loop:true}}
              />
        </ViroARImageMarker>

        <ViroARImageMarker
          target="think"
          onAnchorFound={()=> this.setState({runAnimation: true})}
          >
          <ViroNode
            opacity={0}
            position={[0,-0.01,0.05]}
            animation= {{name:'sideup',run: this.state.runAnimation}}
          >
            <ViroText
              text="Think and grow rich (BOOK)"
              extrusionDepth={2}
              scale={[0.1,0.1,0.1]}
              rotation={[-90,0,0]}
              animation={{name:'rotate',run: this.state.runAnimation, loop:true}}
              />
          </ViroNode>
        </ViroARImageMarker>

        <ViroARImageMarker
          target="Tesla"
          onAnchorFound={()=> this.setState({runAnimation: true})}
          >
          <ViroNode
            opacity={0}
            position={[0,-0.01,0.05]}
            animation= {{name:'sideup',run: this.state.runAnimation}}
          >
            <ViroText
              text="TESLA"
              extrusionDepth={2}
              scale={[0.1,0.1,0.1]}
              rotation={[-90,0,0]}
              animation={{name:'rotate',run: this.state.runAnimation, loop:true}}
              />
          </ViroNode>
        </ViroARImageMarker>
        
      </ViroARScene>
    );
  }



  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Welcome to our App Enjoy the Fun Learning Experience"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  "marshalllogo" : {
    source : require('./res/logo.png'),
    orientation : "Up",
    physicalWidth : 0.03 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  "naruto" : {
    source : require('./res/naruto.png'),
    orientation : "Up",
    physicalWidth : 0.03 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  "think" : {
    source : require('./res/book.png'),
    orientation : "Up",
    physicalWidth : 0.03 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  "Tesla" : {
    source : require('./res/Tesla.png'),
    orientation : "Up",
    physicalWidth : 0.03 // real world width in meters
  }
});


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

module.exports = HelloWorldSceneAR;