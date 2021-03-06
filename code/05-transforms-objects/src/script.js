import './style.css'
import * as THREE from 'three'
import  gsap from 'gsap'
console.log(gsap)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//animation

// TODO:
// 三种保证无论帧率是多少，都运动速度一样的方法
// 1. 使用Date对象获取时间，得到这一帧和上一帧的时间差




// 2. 使用Three.js中自带的Clock对象，计算已经流逝的时间

// 3. GSAP包
// const clock=new THREE.Clock()
gsap.to (mesh.position,{duration:1,delay:1,x:2})
gsap.to (mesh.position,{duration:1,delay:2,x:0})
gsap.to (mesh.position,{duration:1,delay:3,x:-1})
gsap.to (mesh.position,{duration:1,delay:4,x:0})

const tick=()=>{
// const elapsedtime=clock.getElapsedTime()
// console.log(elapsedtime)
// mesh.position.y=Math.cos(2*Math.PI*elapsedtime)
// mesh.position.x=Math.sin(2*Math.PI*elapsedtime)
renderer.render(scene,camera)
window.requestAnimationFrame(tick)
}
tick()
