import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');

  const groupRef = useRef();

  const [rotationY, setRotationY] = useState(0);

  useFrame((state, delta) => {

    groupRef.current.position.y = -1
    
    setRotationY((rotationY) => rotationY + 0.2 * delta);
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[0.212 * 1.5, 0.212 * 1.5 , 1 * 1.5]}>
          <mesh geometry={nodes.PaloCentral002_1.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.PaloCentral002_2.geometry} material={materials['Scene_-_Root']} />
        </group>
      </group>
    </group>
  );
}
