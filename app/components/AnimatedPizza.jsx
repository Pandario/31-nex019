import { Canvas,  useFrame,  useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useRef } from 'react';

function PizzaPlanet() {
    const texture = useLoader(TextureLoader, '/assets/pizzaPlanet.jpg');
    const { viewport } = useThree();
    const pizzaRef = useRef();
    const isAnimationComplete = useRef(false);

    const startPosition = [-viewport.width / 11,0,0];
    const endPosition = [ 0, 0, 0];

    const {position} = useSpring({
      from: {position: startPosition},
      to: {position: endPosition},
      config: {mass: 77, tension: 170, friction: 50},
      onRest: () => {isAnimationComplete.current = true},
    })

    useFrame(() => {
      if(!isAnimationComplete.current){
        pizzaRef.current.rotation.y += 0.01;
      }
    })

    return(
      <animated.mesh position={position} ref={pizzaRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </animated.mesh>
    )
  }
  
  export default function AnimatedPizza() {
    return(
      <Canvas>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <PizzaPlanet/>
        <OrbitControls enableZoom={false} rotateSpeed={0.2}/>
      </Canvas>
    )
  }