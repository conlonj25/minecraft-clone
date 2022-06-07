function createScene() {

    //almighty root node
    var root = new osg.Node();

    //map dimensions
    var mapX =20;
    var mapY =20;

    //create anchor
    //normally put this at the origin - it's offset a little bit here so we can see it
    root.addChild(createAnchor(-mapX-0.8,-mapY-0.8,-0.8));

    //create basic colorless material to reflect ambient light
    var basicMaterial = new osg.Material();
    basicMaterial.setAmbient([0.5, 0.5, 0.5, 1]);

    //create gold material
    var gold = new osg.Material();
    gold.setAmbient([0.24725, 0.1995, 0.0745, 1]);
    gold.setDiffuse([0.75164, 0.60648, 0.22648, 1]);
    gold.setSpecular([0.628281, 0.555802, 0.366065, 1]);
    gold.setShininess(51.2);

    //create chrome material
    var chrome = new osg.Material();
    chrome.setAmbient([0.25, 0.25, 0.25, 1]);
    chrome.setDiffuse([0.4, 0.4, 0.4, 1]);
    chrome.setSpecular([0.774597, 0.774597, 0.774597, 1]);
    chrome.setShininess(76.8);

    //bedrock
    bedrock = osg.createTexturedBoxGeometry(-0.5, -0.5, -0.5, 2*mapX,2*mapY,0.001);
    root.addChild(bedrock);

    //create dirt base layer
    l0 = createLayer(0,mapX,mapY,"res/textures/dirt.png",basicMaterial);
    root.addChild(l0);

    //create grass layer above that
    l1 = createLayer(1,mapX,mapY,"res/textures/grass.png",basicMaterial);
    root.addChild(l1);

    //create ambient light source with default values
    root.addChild(createAmbientLight());

    //create sun
    sun = createCelestialBody(-100,10,30,0.0,[1.0,0.9,0.9],1.0);
    root.addChild(sun);

    //create moon
    moon = createCelestialBody(-100,5,30,Math.PI,[1.0,1.0,1.0],2.0);
    root.addChild(moon);

    //creep 1
    var creep1 = createCreeper(0, 0, 1.5, basicMaterial, true)
    root.addChild(creep1);

    //creep 2
    var creep2 = createCreeper(8, 5, 1.5, gold, false)
    root.addChild(creep2);

    //creep 3
    var creep3 = createCreeper(-5, -7, 1.5, chrome, false)
    root.addChild(creep3);

    console.log(root);
    return root;
}