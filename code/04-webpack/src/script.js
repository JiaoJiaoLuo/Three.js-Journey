import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, 1);
camera.position.z = 8;



scene.add(camera);

const colorNew = new THREE.Color(255, 0, 0);
const colorLiteral = { r: 255, g: 255, b: 255 };

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'rgb(255, 100, 100)' })
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
renderer.render(scene, camera);

let vx = 0.02;
let vy = 0.07;

setInterval(() => {
    camera.position.x += vx;
    camera.position.y += vy;

    if (camera.position.x < -1 || camera.position.x > 1) {
        vx = -vx;
    }


    if (camera.position.y < -1 || camera.position.y > 1) {
        vy = -vy;
    }

    renderer.render(scene, camera);
}, 50);

class Person {
    

    constructor(name, weight) {
        // 创建一个空对象
        /**
         * let o = {};
         * let this = o;
         */

        this.name = name;
        this.weight = weight;

        this.age = 10;

        // 返回这个对象
        /**
         * return this;
         */
    }

    sayHello() {
        console.log(
            '我叫' + this.name + ', 我现在' + this.weight + '斤' + '，我今年' + this.age + '岁'
        );
    }

    

}

let yuejiao = new Person('马月娇', 100);
yuejiao.sayHello();
yuejiao.age = 22;
yuejiao.sayHello();

new Person('马月娇bb', 120).sayHello()