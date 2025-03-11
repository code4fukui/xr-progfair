import { GLTFLoader } from "https://threejs.org/examples/jsm/loaders/GLTFLoader.js";

export const loadGLB = async (path) => {
  const gltfloader = new GLTFLoader();
  const data = await (await fetch(path)).arrayBuffer();
  const mesh = (await gltfloader.parseAsync(data, "")).scene;
  return mesh;
};
