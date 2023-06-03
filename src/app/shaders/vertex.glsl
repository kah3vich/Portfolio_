varying vec3 v_position;
varying vec2 vUv;

uniform float time;
uniform float scroll;
uniform float u_factor;

mat3 rotation3dX(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat3(
        1.0, 0.0, 0.0,
        0.0, c, s,
        0.0, -s, c
    );
}

mat3 rotation3dY(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat3(
        c, 0.0, -s,
        0.0, 1.0, 0.0,
        s, 0.0, c
    );
}


void main () {
    vUv = uv;
    vec3 new_position = position;

    float wave = 0.0;
    wave += 0.10 * sin(time + position.x) + 0.05 * sin(1.0 * time + position.x) + 0.05 * sin(0.25 * time + position.x);
    wave += 0.15 * sin(time + position.y) + 0.05 * sin(2.0 * time + position.y) + 0.05 * sin(0.25 * time + position.y);
    wave += 0.20 * sin(time + position.z) + 0.05 * sin(0.5 * time + position.z) + 0.05 * sin(0.25 * time + position.z);

    new_position *= mix(u_factor, 1.0, wave);

    new_position *= rotation3dX(scroll * 0.001);
    new_position *= rotation3dY(scroll * 0.002);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( new_position, 1.0 );
    gl_PointSize = 1.5;

    v_position = new_position;
}