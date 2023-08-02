import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Objects
 */

const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.2
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube1.position.x = -1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube3.position.x = 1.5
group.add(cube3)

group.scale.set(0.75, 1.5, 0.05)


// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.set(0.7, -0.6, 0.5)
// mesh.scale.set(2, 0.25, 0.5)
// mesh.rotation.set( Math.PI * 0.25, Math.PI * 0.25, 0)
// scene.add(mesh)

const ceilingGeometry = new THREE.BoxGeometry(6, 0.5, 2)
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const ceilingMesh = new THREE.Mesh(ceilingGeometry, ceilingMaterial)
ceilingMesh.position.set(0, 2, -1)
scene.add(ceilingMesh)

const floorGeometry = new THREE.BoxGeometry(6, 0.5, 2)
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
floorMesh.position.set(0, -2, -1)
scene.add(floorMesh)

// console.log(mesh.position.length()) // returns length of distance of object position from center of scene
// console.log(mesh.position.distanceTo(new THREE.Vector3(0,1,2))) // returns distance from another vector3

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
//camera.lookAt(new THREE.Vector3(0, - 1, 0))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)