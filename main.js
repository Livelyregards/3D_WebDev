import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
const geometry = new THREE.TorusKnotGeometry(3, 0.003, 545, 6, 4, 5);  
//the last two numbers in this function need to be co-prime (their gcd should be 1) if you want the tori to look cool! 
// Here is where you can begin your experiment with Carmichael numbers. 

const material = new THREE.MeshStandardMaterial({ color: 0x975AE5 });

const torus = new THREE.Mesh(geometry, material);


scene.add(torus);


// Lights

const pointLight = new THREE.PointLight(0xE0DBFF);
pointLight.position.set(2, 7, 5);

const ambientLight = new THREE.AmbientLight(0xD5D9D8);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color:0x6C7DEA, normalMap: normalTexture});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(1200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('herobg.png');
scene.background = spaceTexture;



// Moons

const moonTexture = new THREE.TextureLoader().load('moon.jpg');


const moonGeom = new THREE.TorusKnotGeometry( 15, 3, 100, 10);
const moonMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: 0xFFCBF5
    
  });
const moon = new THREE.Points(moonGeom, moonMaterial);


scene.add(moon);


const moon2Geom = new THREE.TorusKnotGeometry( 16, 3, 100, 16);
const moon2Material = new THREE.PointsMaterial({
    size: 0.1,
    color: 0x5FD4DB
    
  });
const moon2 = new THREE.Points(moon2Geom, moon2Material);


scene.add(moon2);

const moon3Geom = new THREE.IcosahedronGeometry( 16, 1);
const moon3Material = new THREE.PointsMaterial({
    size: 0.1,
    color: 0xAEE091
    
  });
const moon3 = new THREE.Points(moon2Geom, moon2Material);


scene.add(moon3);








//Positions

moon.position.z = 30;
moon.position.setX(-40);

moon2.position.z = 30;
moon2.position.setX(25);

moon3.position.z = 15;
moon3.position.setX(-5);




function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.005;
  moon.rotation.y += 0.0075;
  moon.rotation.z += 0.005;

  moon2.rotation.x += 0.005;
  moon2.rotation.y += 0.0075;
  moon2.rotation.z += 0.005;

  moon3.rotation.x += 0.005;
  moon3.rotation.y += 0.0075;
  moon3.rotation.z += 0.005;

  // jeff.rotation.y += 0.005;
  // jeff.rotation.z += 0.001;

  // star2.rotation.x += 0.005;
  // star2.rotation.y += 0.001;


  torus.rotation.x += 0.005;
  torus.rotation.y += 0.0075;
  torus.rotation.z += 0.005;
 

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.002;
  camera.rotation.y = t * -0.002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.004;
  torus.rotation.y += 0.003;
  torus.rotation.z += 0.005;

  moon.rotation.x += 0.0004;
  moon.rotation.y += 0.0003;
  moon.rotation.z += 0.0005;

  moon2.rotation.x += 0.0004;
  moon2.rotation.y += 0.0003;
  moon2.rotation.z += 0.0005;

  moon3.rotation.x += 0.0004;
  moon3.rotation.y += 0.0001;
  moon3.rotation.z += 0.0008;

// Get all the sections in your HTML file
const sections = document.querySelectorAll('.scroll-section');

// Loop through each section and apply the scroll event listener
sections.forEach(function(section) {
  window.addEventListener('scroll', function() {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      section.classList.add('appear');
    } else {
      section.classList.remove('appear');
    }
  });
});

window.addEventListener('resize', onWindowResize, false);
function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}



  renderer.render(scene, camera);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


animate();
