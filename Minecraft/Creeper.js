function createCreeper(cx, cy, cz, material, isTexture){

    //move entire node as specified
    //create translate transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(cx, cy, cz, tm);
    var tg = new osg.MatrixTransform();
    tg.setMatrix(tm);

    //add children and return
    tg.addChild(createHead(material,isTexture));
    tg.addChild(createBody(material,isTexture));
    tg.addChild(createFrontFoot(material,isTexture));
    tg.addChild(createBackFoot(material,isTexture));
    return tg;
}

function createCuboid(sx, sy, sz) {

    //define vertices
    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(
        [
            //body
            0, 0, sz,
            0, 0, 0,
            sx, 0, 0,
            sx, 0, sz,
            0, 0, sz,
            sx, 0, 0,
            sx, 0, 0,
            sx, sy, 0,
            sx, 0, sz,
            sx, sy, sz,
            sx, 0, sz,
            sx, sy, 0,
            sx, sy, 0,
            0, sy, 0,
            sx, sy, sz,
            0, sy, sz,
            sx, sy, sz,
            0, sy, 0,
            0, sy, 0,
            0, 0, 0,
            0, sy, sz,
            0, 0, sz,
            0, sy, sz,
            0, 0, 0,

            //top
            0, sy, sz,
            0, 0, sz,
            sx, 0, sz,
            sx, sy, sz,
            0, sy, sz,
            sx, 0, sz,

            //bottom
            0, sy, 0,
            sx, sy, 0,
            0, 0, 0,
            sx, 0, 0,
            0, 0, 0,
            sx, sy, 0

        ]));

    //define normals
    var normalAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 3);
    normalAttribArray.setElements(new Float32Array(
        [
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            0, -1, 0,
            0, -1, 0,
            0, -1, 0,

            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            0, 1, 0,
            0, 1, 0,
            0, 1, 0,

            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,

            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            0, 0, 1,
            0, 0, 1,
            0, 0, 1,

            0, 0, -1,
            0, 0, -1,
            0, 0, -1,

            0, 0, -1,
            0, 0, -1,
            0, 0, -1
        ]));

    //create geometry
    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.setVertexAttribArray('Normal', normalAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.TRIANGLES, 0, 36));

    //return geometry
    return geometry;

}

function createHead(material, isTexture){

    //create cuboid for the head
    var head = createCuboid(1,1,1);

    //apply material
    head.getOrCreateStateSet().setAttributeAndMode(material);

    //apply head texture coordinates if required
    if(isTexture){
        var textureAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 2);
        textureAttribArray.setElements(new Float32Array(
            [
                //body
                0.66, 1.0,
                0.66, 0.0,
                1.0, 0.0,

                1.0, 1.0,
                0.66, 1.0,
                1.0, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //top
                0.0, 1.0,
                0.0, 0.0,
                0.33, 0.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //bottom
                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0
            ]));
        head.setVertexAttribArray('TexCoord0', textureAttribArray);
        head.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL('res/textures/creeper.png'));
    }

    //translate to appropriate position
    //create translate transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(0, 0.25, 2.5, tm);
    var tg = new osg.MatrixTransform();
    tg.setMatrix(tm);

    tg.addChild(head);
    return tg;

}

function createBody(material, isTexture){

    //create cuboid for the head
    var head = createCuboid(1,0.5,1.5);

    //apply material
    head.getOrCreateStateSet().setAttributeAndMode(material);

    //apply head texture coordinates if required
    if(isTexture){
        var textureAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 2);
        textureAttribArray.setElements(new Float32Array(
            [
                //body
                0.0, 1.0,
                0.0, 0.0,
                0.33, 0.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //top
                0.0, 1.0,
                0.0, 0.0,
                0.33, 0.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //bottom
                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0
            ]));
        head.setVertexAttribArray('TexCoord0', textureAttribArray);
        head.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL('res/textures/creeper.png'));
    }

    //translate to appropriate position
    //create translate transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(0, 0.5, 1, tm);
    var tg = new osg.MatrixTransform();
    tg.setMatrix(tm);

    tg.addChild(head);
    return tg;

}

function createFrontFoot(material, isTexture){

    //create cuboid for the head
    var head = createCuboid(1,0.5,1);

    //apply material
    head.getOrCreateStateSet().setAttributeAndMode(material);

    //apply head texture coordinates if required
    if(isTexture){
        var textureAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 2);
        textureAttribArray.setElements(new Float32Array(
            [
                //body
                0.33, 1.0,
                0.33, 0.0,
                0.66, 0.0,

                0.66, 1.0,
                0.33, 1.0,
                0.66, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.33, 0.0,
                0.66, 0.0,
                0.33, 1.0,

                0.66, 1.0,
                0.33, 1.0,
                0.66, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //top
                0.0, 1.0,
                0.0, 0.0,
                0.33, 0.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //bottom
                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0
            ]));
        head.setVertexAttribArray('TexCoord0', textureAttribArray);
        head.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL('res/textures/creeper.png'));
    }

    //translate to appropriate position
    //create translate transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(0, 0, 0, tm);
    var tg = new osg.MatrixTransform();
    tg.setMatrix(tm);

    tg.addChild(head);
    return tg;

}

function createBackFoot(material, isTexture){

    //create cuboid for the head
    var head = createCuboid(1,0.5,1);

    //apply material
    head.getOrCreateStateSet().setAttributeAndMode(material);

    //apply head texture coordinates if required
    if(isTexture){
        var textureAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 2);
        textureAttribArray.setElements(new Float32Array(
            [
                //body
                0.33, 1.0,
                0.33, 0.0,
                0.66, 0.0,

                0.66, 1.0,
                0.33, 1.0,
                0.66, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.33, 0.0,
                0.66, 0.0,
                0.33, 1.0,

                0.66, 1.0,
                0.33, 1.0,
                0.66, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //top
                0.0, 1.0,
                0.0, 0.0,
                0.33, 0.0,

                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                //bottom
                0.33, 1.0,
                0.0, 1.0,
                0.33, 0.0,

                0.0, 0.0,
                0.33, 0.0,
                0.0, 1.0
            ]));
        head.setVertexAttribArray('TexCoord0', textureAttribArray);
        head.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL('res/textures/creeper.png'));
    }

    //translate to appropriate position
    //create translate transform group
    var tm = new osg.Matrix.create();
    tm = osg.Matrix.makeTranslate(0, 1, 0, tm);
    var tg = new osg.MatrixTransform();
    tg.setMatrix(tm);

    tg.addChild(head);
    return tg;

}