// ===============================
// 3D STADIUM EXPERIENCE
// ===============================


// Create Scene

const scene = new THREE.Scene();

scene.background =
new THREE.Color(0x87ceeb);


// Create Camera

const camera =
new THREE.PerspectiveCamera(

    60,

    window.innerWidth /
    window.innerHeight,

    0.1,

    1000

);


camera.position.set(
    18,
    15,
    25
);


// Create Renderer

const renderer =
new THREE.WebGLRenderer({

    antialias: true

});


renderer.setSize(

    window.innerWidth,

    window.innerHeight

);


renderer.shadowMap.enabled =
true;


document
.getElementById("stadium3d")
.appendChild(
    renderer.domElement
);


// ===============================
// LIGHTING
// ===============================


// Sun Light

const sunlight =
new THREE.DirectionalLight(

    0xffffff,

    2

);


sunlight.position.set(
    20,
    30,
    20
);


sunlight.castShadow =
true;


scene.add(
    sunlight
);


// Ambient Light

const ambientLight =
new THREE.AmbientLight(

    0xffffff,

    1.5

);


scene.add(
    ambientLight
);


// ===============================
// GROUND
// ===============================

const groundGeometry =
new THREE.PlaneGeometry(
    100,
    100
);


const groundMaterial =
new THREE.MeshStandardMaterial({

    color:
    0x2e7d32

});


const ground =
new THREE.Mesh(

    groundGeometry,

    groundMaterial

);


ground.rotation.x =
-Math.PI / 2;


ground.receiveShadow =
true;


scene.add(
    ground
);


// ===============================
// FOOTBALL PITCH
// ===============================

const pitchGeometry =
new THREE.BoxGeometry(

    20,
    0.5,
    12

);


const pitchMaterial =
new THREE.MeshStandardMaterial({

    color:
    0x1b5e20

});


const pitch =
new THREE.Mesh(

    pitchGeometry,

    pitchMaterial

);


pitch.position.y =
0.3;


pitch.castShadow =
true;


scene.add(
    pitch
);


// ===============================
// STADIUM SEATING
// ===============================

function createStand(

    width,

    height,

    depth,

    x,

    y,

    z

) {

    const geometry =
    new THREE.BoxGeometry(

        width,

        height,

        depth

    );


    const material =
    new THREE.MeshStandardMaterial({

        color:
        0x1565c0

    });


    const stand =
    new THREE.Mesh(

        geometry,

        material

    );


    stand.position.set(

        x,

        y,

        z

    );


    stand.castShadow =
    true;


    stand.receiveShadow =
    true;


    scene.add(
        stand
    );

}


// North Stand

createStand(
    24,
    5,
    3,
    0,
    3,
    -9
);


// South Stand

createStand(
    24,
    5,
    3,
    0,
    3,
    9
);


// East Stand

createStand(
    3,
    5,
    18,
    14,
    3,
    0
);


// West Stand

createStand(
    3,
    5,
    18,
    -14,
    3,
    0
);


// ===============================
// VIP SECTION
// ===============================

const vipGeometry =
new THREE.BoxGeometry(

    12,
    3,
    3

);


const vipMaterial =
new THREE.MeshStandardMaterial({

    color:
    0xffd700

});


const vip =
new THREE.Mesh(

    vipGeometry,

    vipMaterial

);


vip.position.set(

    0,

    6,

    -10

);


scene.add(
    vip
);


// ===============================
// STADIUM LIGHTS
// ===============================

function createLightTower(

    x,

    z

) {

    const towerGeometry =
    new THREE.BoxGeometry(

        1,

        12,

        1

    );


    const towerMaterial =
    new THREE.MeshStandardMaterial({

        color:
        0x555555

    });


    const tower =
    new THREE.Mesh(

        towerGeometry,

        towerMaterial

    );


    tower.position.set(

        x,

        6,

        z

    );


    scene.add(
        tower
    );


    const light =
    new THREE.PointLight(

        0xffffff,

        2,

        50

    );


    light.position.set(

        x,

        12,

        z

    );


    scene.add(
        light
    );

}


// Create Four Towers

createLightTower(
    -16,
    -12
);

createLightTower(
    16,
    -12
);

createLightTower(
    -16,
    12
);

createLightTower(
    16,
    12
);


// ===============================
// CAMERA CONTROLS
// ===============================

const controls =
new THREE.OrbitControls(

    camera,

    renderer.domElement

);


controls.enableDamping =
true;


controls.dampingFactor =
0.05;


controls.minDistance =
15;


controls.maxDistance =
60;


// ===============================
// WINDOW RESIZE
// ===============================

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
        window.innerWidth /
        window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );

    }
);


// ===============================
// ANIMATION LOOP
// ===============================

function animate() {

    requestAnimationFrame(
        animate
    );


    controls.update();


    renderer.render(

        scene,

        camera

    );

}


animate();