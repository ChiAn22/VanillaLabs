
function Pickup(){//待会儿换了
    alert('a');
    let ub=document.getElementById('_titleImg').style;
    ub.transform='scale(0.8,0.8)';
    setTimeout(function (){ub.transform='scale(0.8,0.8) translateY(+70px)';},1000);
}

var Content_rightInner_right=document.getElementById('content_rightInner_right');

var CHeight,CWidth;
CHeight=Content_rightInner_right.offsetHeight;
CWidth=Content_rightInner_right.offsetWidth;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 50,  CWidth / CHeight , 0.1, 5000 );
const renderer = new THREE.WebGLRenderer( { antialias: true } );

renderer.setSize( CWidth, CHeight );

Content_rightInner_right.appendChild( renderer.domElement );

var loader = new THREE.GLTFLoader();
loader.load('page_/Model/avocado.gltf', function(gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.y-=1;
    gltf.scene.rotation.y=2.8;
})

var light1 = new THREE.AmbientLight(0xffffff,0.4);
var light2 = new THREE.PointLight(0xffffff,0.6,0,5);
var light3 = new THREE.PointLight(0xffffff,1,0,0.2);

scene.add(light1);
scene.add(light2);
scene.add(light3);
light3.position.y=3;
light3.position.x=2;
light3.position.z=-2;
scene.background=new THREE.Color(0x141414);

camera.position.x = 4;

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