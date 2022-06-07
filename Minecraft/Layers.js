function init() {
    enablePicking();
}

function createLayer(cz,sx,sy,texture,material){

    //local root node - switch
    var root = new ee497.Switch();

    //create grid of voxels (sx x sy)
    for(var x=-sx; x<sx; x+=1) {
        for (var y = -sy; y < sy; y += 1) {

            //create transform matrix
            var tm = new osg.Matrix.create();
            tm = osg.Matrix.makeTranslate(x, y, cz, tm);

            //create transform group
            var tg = new osg.MatrixTransform();
            tg.setMatrix(tm);

            //create voxel
            var vox = osg.createTexturedBoxGeometry(0, 0, 0, 1, 1, 1);

            //wrap in material
            vox.getOrCreateStateSet().setAttributeAndMode(material);

            //wrap in texture
            vox.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL(texture));

            //add voxel to transform group
            tg.addChild(vox);

            //add onpick function to transform group
            //calls parent switch node - switches itself off
            tg.onpick = function() {
                var sn = this.getParents()[0];
                sn.setChildValue(this,false);
            }

            //add transform group to root
            root.addChild(tg,true);

        }
    }

    //return root
    return root;

}