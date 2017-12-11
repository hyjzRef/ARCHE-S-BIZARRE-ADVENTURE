/**
 * Created by Administrator on 2017/10/19.
 */
var res = {
    //monster
    monster_lmmm_png : "res/monster/lmmm.png",  // 龙猫妹妹
    monster_lmmm_plist : "res/monster/lmmm.plist",  // 龙猫妹妹

    arche_normal_plist : "res/arche/arche_normal.plist",

    //background
    bg_viridianscape_sky : "res/resources/Terrain/viridianscape/viridianscape_sky.png",
    bg_viridianscape_bg1 : "res/resources/Terrain/viridianscape/viridianscape_bg1.png",
    bg_viridianscape_bg2 : "res/resources/Terrain/viridianscape/viridianscape_bg2.png",

    //ccs
    ccs_logo_logoLayer : "res/files/LogoScene.json",
    ccs_test_testLayer : "res/files/TestScene.json",

    //joystick
    joystick : "res/joystick/Joystick.png",
    joystick_bg : "res/joystick/JoystickBG.png",

    //maps
    maps_test1_tmx : "res/maps/viridianscape3.tmx",
    maps_test1_tsx : "res/maps/viridianscape3.tsx",
    maps_test1_png : "res/maps/viridianscape3.png",

    maps_test3_tmx : "res/maps/ground.tmx",
    maps_test3_tsx : "res/maps/ground.tsx",
    maps_test3_png : "res/maps/ground.png",

    // font
};
var g_resources = [];
for(var i in res){
    g_resources.push(res[i]);
}