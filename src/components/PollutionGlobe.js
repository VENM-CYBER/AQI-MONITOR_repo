import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function PollutionGlobe() {

  const mountRef = useRef();

  useEffect(() => {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, 400);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 32, 32);

    const material = new THREE.MeshBasicMaterial({
      wireframe: true
    });

    const earth = new THREE.Mesh(geometry, material);

    scene.add(earth);

    camera.position.z = 10;

    const animate = () => {

      requestAnimationFrame(animate);

      earth.rotation.y += 0.002;

      renderer.render(scene, camera);

    };

    animate();

  }, []);

  return (

    <div>

      <h2>🛰 Satellite Pollution Globe</h2>

      <div ref={mountRef}></div>

    </div>

  );

}

export default PollutionGlobe;