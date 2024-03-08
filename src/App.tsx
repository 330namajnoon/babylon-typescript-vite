import axios from "axios"
import { useEffect } from "react"
import { serverURL } from "./config"
import { Vector3 } from "@babylonjs/core"
import scripts from "./Scripts"
import {IAsset, AppScene} from "sm-babylonjs"
function App() {
  

  useEffect(() => {
    axios.get(`${serverURL}/world/clothes`).then((response) => {
      const assets: IAsset[] = response.data.data.assets;
      const scene = new AppScene({canvas: window.document.getElementById("app") as HTMLCanvasElement,modules: [],gravity: new Vector3(0, -8.9, 0)}).start((app) => {
        console.log(scene);
        assets.forEach((asset, index) => {
          const model = app?.import3DModel("model" + index, serverURL + asset.path, asset.fileName, index === 0 ? [scripts.Camera] : []);
          console.log(model);
        })
      });
    })
  })

  return (
      <canvas width={window.innerWidth} height={window.innerHeight} id="app">

      </canvas>
  )
}

export default App
