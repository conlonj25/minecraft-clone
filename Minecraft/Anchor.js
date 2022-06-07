//create set of labelled arrows at a specified point indicating axis directions
function createAnchor(cx,cy,cz) {

    //define vertices
    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(
        [
            0.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 1.0
        ]));

    //create geometry
    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.LINES, 0, 6));

    //translate anchor to the specified location
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(cx, cy, cz, tm);
    var tg = new osg.MatrixTransform();
    tg.setMatrix(tm);

    //add children and return
    tg.addChild(geometry);
    tg.addChild(createX());
    tg.addChild(createY());
    tg.addChild(createZ());
    return tg;
}

//label x axis
function createX() {

    //define vertices
    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(
        [
            0.0, 0.0, 0.0,
            1.0, 1.0, 0.0,
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0
        ]));

    //create geometry
    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.LINES, 0, 4));

    //scale letter down to an appropriate size
    //create scale matrix and transform group
    var sm = new osg.Matrix.create();
    sm = osg.Matrix.makeScale(0.1,0.1,0,sm);
    var stg = new osg.MatrixTransform();
    stg.setMatrix(sm);

    //align letter with axis
    //create translate matrix and transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(1.05, -0.05, 0, tm);
    var ttg = new osg.MatrixTransform();
    ttg.setMatrix(tm);

    //add children and return
    stg.addChild(geometry);
    ttg.addChild(stg);
    return ttg;

}

//label y axis
function createY() {

    //define vertices
    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(
        [
            0.0, 1.0, 0.0,
            0.5, 0.5, 0.0,
            1.0, 1.0, 0.0,
            0.5, 0.5, 0.0,
            0.5, 0.5, 0.0,
            0.5, 0.0, 0.0
        ]));

    //create geometry
    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.LINES, 0, 6));

    //scale letter down to an appropriate size
    //create scale matrix and transform group
    var sm = new osg.Matrix.create();
    sm = osg.Matrix.makeScale(0.1,0.1,0,sm);
    var stg = new osg.MatrixTransform();
    stg.setMatrix(sm);

    //align letter with axis
    //create translate matrix and transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(-0.05, 1.05, 0, tm);
    var ttg = new osg.MatrixTransform();
    ttg.setMatrix(tm);

    //add children and return
    stg.addChild(geometry);
    ttg.addChild(stg);
    return ttg;

}

//label z axis
function createZ() {

    //define vertices
    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(
        [
            0.0, 0.0, 1.0,
            1.0, 0.0, 1.0,
            1.0, 0.0, 1.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 0.0,
            1.0, 0.0, 0.0
        ]));

    //create geometry
    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.LINES, 0, 6));

    //scale letter down to an appropriate size
    //create scale matrix and transform group
    var sm = new osg.Matrix.create();
    sm = osg.Matrix.makeScale(0.1,0,0.1,sm);
    var stg = new osg.MatrixTransform();
    stg.setMatrix(sm);

    //align letter with axis
    //create translate matrix and transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(-0.05, 0, 1.05, tm);
    var ttg = new osg.MatrixTransform();
    ttg.setMatrix(tm);

    //add children and return
    stg.addChild(geometry);
    ttg.addChild(stg);
    return ttg;

}