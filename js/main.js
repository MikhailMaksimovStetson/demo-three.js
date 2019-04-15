let scene, camera, renderer;
let controls;
let cube;

init();
animate();

/**
 * Sets up the 3D scene.
 */
function init()
{
    window.addEventListener( 'resize', onWindowResize, false );

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let texture = new THREE.TextureLoader().load( 'textures/crate.jpg' );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    let material = new THREE.MeshBasicMaterial( { map: texture } );
    cube = new THREE.Mesh( geometry, material );

    scene.add( cube );
    camera.position.z = 2;

    controls = new THREE.OrbitControls( camera );
    controls.enableDamping = true;
    controls.dampingFactor = .1;
    controls.screenSpacePanning = true;
    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.rotateSpeed = 0.1;
    controls.panSpeed = .08;
}

/**
 * Updates the scene repeatedly.
 */
function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}

/**
 * Resize the renderer to match the browser window size.
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
