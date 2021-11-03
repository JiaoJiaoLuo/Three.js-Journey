import './style.css'
import * as THREE from 'three'

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

const tick = () => {

    mesh.rotation.y += 0.01
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
tick()