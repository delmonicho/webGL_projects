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
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 0.5
scene.add(mesh)

const ceilingGeometry = new THREE.BoxGeometry(6, 0.5, 2)
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const ceilingMesh = new THREE.Mesh(ceilingGeometry, ceilingMaterial)
ceilingMesh.position.x = 0
ceilingMesh.position.z = -1
ceilingMesh.position.y = 2
scene.add(ceilingMesh)

const floorGeometry = new THREE.BoxGeometry(6, 0.5, 2)
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
floorMesh.position.x = 0
floorMesh.position.z = -1
floorMesh.position.y = -2
scene.add(floorMesh)

console.log(mesh.position.length()) // returns length of distance of object position from center of scene
console.log(mesh.position.distanceTo(new THREE.Vector3(0,1,2))) // returns distance from another vector3

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