import * as THREE from 'three'


const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
// recommended color format by 3js
const material = new THREE.MeshBasicMaterial({ color: 0xff000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// camera
const sizes = { 
    width: 800,
    height: 600 
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

// renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)