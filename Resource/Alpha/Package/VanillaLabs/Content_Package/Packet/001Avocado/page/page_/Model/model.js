var Content_rightInner_right=document.getElementById('content_rightInner_right');

var CHeight,CWidth;
CHeight=Content_rightInner_right.offsetHeight;
CWidth=Content_rightInner_right.offsetWidth;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,  CWidth / CHeight , 0.1, 5000 );
const renderer = new THREE.WebGLRenderer( { antialias: true } );

renderer.setSize( CWidth, CHeight );

Content_rightInner_right.appendChild( renderer.domElement );

var loader = new THREE.GLTFLoader();
loader.load('page_/Model/avocado.gltf', function(gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.y-=1;
    gltf.scene.rotation.y=2.8;
})

var light1 = new THREE.AmbientLight(0xffffff,0.8);
var light2 = new THREE.PointLight(0xffffff,0.2);
//var light3 = new THREE.DirectionalLight(0xffffff,0.5);

scene.add(light1);
scene.add(light2);
//scene.add(light3);
scene.background=new THREE.Color(0x565656);

camera.position.x = 4;
camera.position.y = 2;

const controls= new THREE.OrbitControls(camera,renderer.domElement);
controls.addEventListener('change',renderer);

controls.enableDamping=true;
controls.dampingFactor = 0.06;

function animate() {
    light2.position.set(camera.position.x,camera.position.y,camera.position.z);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
    controls.update();
}
animate();