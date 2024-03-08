import { DirectionalLight, PhysicsImpostor, Vector3 } from "@babylonjs/core";
import {Script} from "sm-babylonjs";

export default class Camera extends Script {
    initial: () => void = () => {
        this.app.camera.setTarget(this.entity.meshes[1]);
        this.app.camera.setPosition(new Vector3(-25, 50, 100));
        const light = new DirectionalLight("", new Vector3(0, -1, 0), this.app.scene);
        const physics = new PhysicsImpostor(this.entity.meshes[1], PhysicsImpostor.MeshImpostor, {mass: 0}, this.app.scene);
        this.entity.meshes[1].id = this.entity.name;
        this.app.collisionCallback.addEventListener("onPointerDown", this.entity.name, () => {
            if (this.entity.animationGroups[1].isPlaying)
                this.entity.animationGroups[1].pause();
            else
                this.entity.animationGroups[1].play(true);
        });
        this.entity.meshes[2].id = "size";
        this.app.collisionCallback.addEventListener("onPointerMove", "size", (event, pickInfo) => {
            console.log(event, light, physics);
            pickInfo.pickedMesh?.scaling.scale(2);
        })
    };

    update: () => void = () => {

    };
}