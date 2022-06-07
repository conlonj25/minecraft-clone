function createCelestialBody(distance,size,period,phase,color,attenuation) {

    //local root node
    var root = new osg.Node();

    //create body
    var body = osg.createTexturedSphere(size, 20, 20);

    //wrap in an emissive material
    var material = new osg.Material();
    material.setEmission([1.0, 1.0, 1.0, 1.0]);
    body.getOrCreateStateSet().setAttributeAndModes(material);

    //create light source
    var light = createPointLight(color[0], color[1], color[2], attenuation, 0.0, 0.0);
    light.getLight().setEnabled(true);

    //create transform matrix
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(0, 0, 0, tm);

    //create transform group
    var tg = new osg.MatrixTransform();
    tg.setMatrix(tm);

    //add callback
    tg.addUpdateCallback(new celestialRotation(distance,period,phase));

    //add children and return
    tg.addChild(body);
    tg.addChild(light);
    root.addChild(tg);
    return root;
}

//ECMAScript 2015 style
class celestialRotation{

    constructor(distance,period,phase){
        this.distance = distance;
        this.period = period;
        this.phase = phase;
    }

    update(node, nodeVisitor){
        //get time from nodeVisitor
        var currentTimeSeconds = nodeVisitor.getFrameStamp().getSimulationTime();

        //get matrix from node
        var matrix = node.getMatrix();

        //get rotation period from main page
        this.period = document.getElementById("rotationPeriodControl").value;

        //calculate angle
        var radsPerSecond = (2 * Math.PI / this.period);
        var angle = (currentTimeSeconds * radsPerSecond) + this.phase;

        //calculate axis coordinates
        var x = 100*Math.cos(angle);
        var z = 100*Math.sin(angle);

        //translate around y axis
        osg.Matrix.makeTranslate(x, this.distance, z, matrix);

        return true;
    }

}