import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


/**
 * Animate
 */
const clock = new THREE.Clock()

// let time = Date.now()

const tick = () => 
{
    const elapsedTime = clock.getElapsedTime()
    // Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    // Update objects
    // Rotation with deltaTime native JS
    // mesh.rotation.y += 0.001 * deltaTime
    // mesh.rotation.z += 0.001 * deltaTime

    // Position with elapsedTime clock
    // mesh.position.x = Math.cos(elapsedTime)
    // mesh.position.y = Math.sin(elapsedTime)

    // Rotation with elapsedTime clock
    // mesh.rotation.y = elapsedTime
    // mesh.rotation.z = elapsedTime    

    // Animate camera with clock method
    camera.position.x = Math.cos(elapsedTime)
    camera.position.y = Math.sin(elapsedTime)
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()