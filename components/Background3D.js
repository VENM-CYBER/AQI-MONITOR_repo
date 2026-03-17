import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Background3D() {

  const mountRef = useRef(null);

  useEffect(()=>{

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1,32,32);
    const material = new THREE.MeshBasicMaterial({wireframe:true});

    const sphere = new THREE.Mesh(geometry,material);

    scene.add(sphere);

    camera.position.z = 5;

    const animate = ()=>{
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene,camera);
    };

    animate();

  },[]);

  return <div ref={mountRef} style={{position:"fixed",zIndex:-1}} />;

}

export default Background3D;