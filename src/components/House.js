import React, { Suspense } from 'react'
import { useRef } from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls , PerspectiveCamera, Sky, useGLTF} from '@react-three/drei'
import {useLoader,useFrame} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
// import Model from './Txtr';
import { Clock } from 'three';
import Model from './Hope'

function House(Props) {
  // const house = useLoader(GLTFLoader,'/Hope.gltf');
  const mesh = useRef();
  // useFrame(()=>{
  //   mesh.current.rotation.y +=0.01;
  // })
  return (
    <div className='relative h-[70vh] w-[70vw] grid-cols-2 justify-between'>
      <Canvas className ='w-[60%] float-right' camera={{fov:75,position:[8,6,5]} }>
        <Suspense fallback={null}>
        <OrbitControls zoom0={false} />
        <PerspectiveCamera position={[20,20,20]}/>
        <pointLight position={[20,20,20]} />
        <pointLight position={[-20,-20,-50]} />
        {/* <Sky 
          distance={5000}
          inclination={0.6}
          azimuth={0.25}
          {...Props}
          
        /> */}
          <Model ref={mesh}
          position={[-4,-2,-4]}
           />

        </Suspense>

      </Canvas>       
      
    </div>
  )
 
}


export default House