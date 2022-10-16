import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Lower() {
  return (
    <>
        <div className='p-4 bg-white shadow-sm d-flex align-items-center justify-content-between' style={{"height": "30vh"}}>
          <Canvas>
            <MyRotatingBox />
            <ambientLight intensity={0.1} />
            <directionalLight />
          </Canvas>
          <div><p className='text-center'>OTHER DATA HERE</p></div>
          <Canvas>
            <MyRotatingBox />
            <ambientLight intensity={0.1} />
            <directionalLight />
          </Canvas>
        </div>
    </>
  )
};

function MyRotatingBox() {
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh ref={myMesh}>
      <boxBufferGeometry />
      <meshPhongMaterial color="#007569" />
    </mesh>
  );
}

export default Lower