import * as THREE from 'three';


//Scene
const scene = new THREE.Scene()

//Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64) //parameters = radius , widthSegments, heightSegments
const material = new THREE.MeshBasicMaterial({
    color: '#00ff83',
})
const mesh =  new THREE.Mesh(geometry, material)
scene.add(mesh)
//Light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(100, 10, 10)
scene.add(light)

//Camera
const camera = new THREE.PerspectiveCamera (45, 800/600, 0.1,100 ) // parameters = Feild of View, Aspect Ratio = 800*600
camera.position.z = 10 
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(800, 600);
renderer.render(scene, camera);


