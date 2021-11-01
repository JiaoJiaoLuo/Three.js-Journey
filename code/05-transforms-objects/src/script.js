import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/* Camera*/
const camera = new THREE.PerspectiveCamera(75, 800 / 600)

camera.position.z=3;

scene.add(camera)


/* Objects*/
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//mesh.position.x=0.5;
//mesh.position.y=-0.5;
//mesh.position.z=0.7;
mesh .position.set(0.4,-0.5,0.7);
//scale//
//mesh.scale.x=0.3
//mesh.scale.y=0.5
//mesh.scale.z= 0.4
console.log(mesh.position.distanceTo(camera.position))
//rotation
mesh.rotation.reorder('XYZ')
mesh.rotation.x=Math.PI*0.25;
mesh.rotation.y=Math.PI*0.25;





/*Renderer*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(800, 600)
renderer.render(scene, camera)


