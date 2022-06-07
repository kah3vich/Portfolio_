// Base
import React, { useEffect, useRef, useState } from 'react'

// Three JS - 3D Animation
import * as THREE from 'three'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'

// Shaders
import fragment from '../shaders/fragment.glsl'
import vertex from '../shaders/vertex.glsl'

const SceneTJ = () => {
	const [loadings_, setLoadings_] = useState(false)

	const sceneContainers = useRef(null)

	useEffect(() => {
		setTimeout(() => {
			setLoadings_(true)
		}, 1800)
	}, [])

	// link canvas 3D animation
	const __three = useRef(null)
	const titles = useRef(null)

	// 3D animation - threejs
	useEffect(() => {
		// Canvas
		const canvas = __three.current

		// Scene
		const mouse = new THREE.Vector2()
		const scene = new THREE.Scene()

		// Objects
		const geometry = new THREE.IcosahedronGeometry(4, 32)

		// Materials

		const material = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 0 },
				u_factor: { value: 0.5 },
				u_opacity: { value: 0 },
			},
			vertexShader: vertex,
			fragmentShader: fragment,
		})

		// Mesh
		const sphere = new THREE.Points(geometry, material)
		sphere.scale.set(0.5, 0.5, 0.5)
		scene.add(sphere)

		// Sizes
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		}

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = sceneContainers.innerWidth
			sizes.height = sceneContainers.innerHeight

			// Update camera
			camera.aspect = 1.5
			camera.updateProjectionMatrix()

			// Update renderer
			renderer.setSize(1440, 630)
		})

		// Camera
		const camera = new THREE.PerspectiveCamera(
			50,
			sizes.width / sizes.height,
			0.001,
			100
		)
		camera.position.x = 0
		camera.position.y = 0
		camera.position.z = 6
		camera.updateProjectionMatrix()
		scene.add(camera)

		// Renderer
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
			canvas: canvas,
		})
		renderer.setSize(1440, 630)
		renderer.setClearColor(0x000000, 0)

		// Animation

		$('.scenetj').hover(
			() => {
				gsap.to(material.uniforms.u_factor, {
					value: 1.0,
				})
				gsap.to(camera.position, {
					duration: 0.3,
					ease: 'Expo.ease',
					z: 10,
				})
			},
			() => {
				gsap.to(material.uniforms.u_factor, {
					value: 0.5,
				})
				gsap.to(camera.position, {
					duration: 0.3,
					ease: 'Expo.ease',
					z: 6,
				})
			}
		)

		const clock = new THREE.Clock()

		const render_ = () => {
			camera.lookAt(scene.position)
			renderer.render(scene, camera)

			material.uniforms.time.value = clock.getElapsedTime()

			// Update objects
			sphere.rotation.y += 0.005
			sphere.rotation.x += 0.003

			// Render
			requestAnimationFrame(() => {
				render_()
			})
		}

		render_()
	}, [])

	return (
		<div className='containers'>
			<div className='scenetj' ref={sceneContainers}>
				<div
					className='loader'
					style={{ opacity: loadings_ === false ? '1' : '0' }}
				>
					<div className='ball'></div>
					<div className='ball'></div>
					<div className='ball'></div>
				</div>
				<canvas
					id='__three'
					ref={__three}
					style={{ opacity: loadings_ === false ? '0' : '1' }}
				></canvas>
			</div>
		</div>
	)
}

export default SceneTJ
