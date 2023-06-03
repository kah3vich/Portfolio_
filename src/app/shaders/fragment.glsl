uniform float time;
uniform float u_opacity;
varying vec3 v_position;
varying vec2 vUv;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
	return a + b*cos( 6.28318*(c*t+d) );
}

void main () {
	vec3 position = v_position;
	vec3 col = palette(vUv.y, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(2.0,1.0,0.0),vec3(0.5,0.20,0.25) );


	vec3 color = vec3(0.129, 230, 217);
	gl_FragColor = vec4(color, 1);
}