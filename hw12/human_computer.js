/* Music File Variable*/
let song;

/* Preload Load Music File */
function preload() {
  song = loadSound('sound.wav');
}

/* Setup */
function setup() {
  /* Song on Repeat */
  song.loop();
  /* Framerate */
  frameRate(10);
  createCanvas(900, 600);
}

function draw() {
  background(0);
  /* Inital RGB */
  R = 0, G = 0, B = 0;
  R1 = 0, G1 = 0, B1 = 0;
  R2 = 0, G2 = 0, B2 = 0;
  R3 = 0, G3 = 0, B3 = 0;
  R4 = 0, G4 = 0, B4 = 0;
  R5 = 0, G5 = 0, B5 = 0;
  R6 = 0, G6 = 0, B6 = 0;
  R7 = 0, G7 = 0, B7 = 0;
  R8 = 0, G8 = 0, B8 = 0;
  R9 = 0, G9 = 0, B9 = 0;
  R10 = 0, G10 = 0, B10 = 0;
  R11 = 0, G11 = 0, B11 = 0;
  R12 = 0, G12 = 0, B12 = 0;
  R13 = 0, G13 = 0, B13 = 0;
  R14 = 0, G14 = 0, B14 = 0;
  R15 = 0, G15 = 0, B15 = 0;
  R16 = 0, G16 = 0, B16 = 0;
  R17 = 0, G17 = 0, B17 = 0;
  R18 = 0, G18 = 0, B18 = 0;
  R19 = 0, G19 = 0, B19 = 0;
  R20 = 0, G20 = 0, B20 = 0;
  R21 = 0, G21 = 0, B21 = 0;
  R22 = 0, G22 = 0, B22 = 0;
  R23 = 0, G23 = 0, B23 = 0;
  R24 = 0, G24 = 0, B24 = 0;
  R25 = 0, G25 = 0, B25 = 0;
  R26 = 0, G26 = 0, B26 = 0;
  R27 = 0, G27 = 0, B27 = 0;
  R28 = 0, G28 = 0, B28 = 0;
  R29 = 0, G29 = 0, B29 = 0;
  R30 = 0, G30 = 0, B30 = 0;
  R31 = 0, G31 = 0, B31 = 0;
  R32 = 0, G32 = 0, B32 = 0;
  R33 = 0, G33 = 0, B33 = 0;
  R34 = 0, G34 = 0, B34 = 0;
  R35 = 0, G35 = 0, B35 = 0;
  R36 = 0, G36 = 0, B36 = 0;
  R37 = 0, G37 = 0, B37 = 0;
  R38 = 0, G38 = 0, B38 = 0;
  R39 = 0, G39 = 0, B39 = 0;
  R40 = 0, G40 = 0, B40 = 0;
  R41 = 0, G41 = 0, B41 = 0;
  R42 = 0, G42 = 0, B42 = 0;
  R43 = 0, G43 = 0, B43 = 0;
  R44 = 0, G44 = 0, B44 = 0;
  R45 = 0, G45 = 0, B45 = 0;
  R46 = 0, G46 = 0, B46 = 0;
  R47 = 0, G47 = 0, B47 = 0;
  R48 = 0, G48 = 0, B48 = 0;
  R49 = 0, G49 = 0, B49 = 0;
  R50 = 0, G50 = 0, B50 = 0;
  R51 = 0, G51 = 0, B51 = 0;
  R52 = 0, G52 = 0, B52 = 0;
  R53 = 0, G53 = 0, B53 = 0;
  R54 = 0, G54 = 0, B54 = 0;
  R55 = 0, G55 = 0, B55 = 0;
  R56 = 0, G56 = 0, B56 = 0;
  R57 = 0, G57 = 0, B57 = 0;
  R58 = 0, G58 = 0, B58 = 0;
  R59 = 0, G59 = 0, B59 = 0;
  R60 = 0, G60 = 0, B60 = 0;
  R61 = 0, G61 = 0, B61 = 0;
  R62 = 0, G62 = 0, B62 = 0;
  R63 = 0, G63 = 0, B63 = 0;
  R64 = 0, G64 = 0, B64 = 0;
  R65 = 0, G65 = 0, B65 = 0;
  R66 = 0, G66 = 0, B66 = 0;
  R67 = 0, G67 = 0, B67 = 0;
  R68 = 0, G68 = 0, B68 = 0;
  R69 = 0, G69 = 0, B69 = 0;
  R70 = 0, G70 = 0, B70 = 0;
  R71 = 0, G71 = 0, B71 = 0;
  R72 = 0, G72 = 0, B72 = 0;
  R73 = 0, G73 = 0, B73 = 0;
  R74 = 0, G74 = 0, B74 = 0;
  R75 = 0, G75 = 0, B75 = 0;
  R76 = 0, G76 = 0, B76 = 0;
  R77 = 0, G77 = 0, B77 = 0;
  R78 = 0, G78 = 0, B78 = 0;
  R79 = 0, G79 = 0, B79 = 0;
  R80 = 0, G80 = 0, B80 = 0;
  R81 = 0, G81 = 0, B81 = 0;
  R82 = 0, G82 = 0, B82 = 0;
  R83 = 0, G83 = 0, B83 = 0;
  R84 = 0, G84 = 0, B84 = 0;
  R85 = 0, G85 = 0, B85 = 0;
  R86 = 0, G86 = 0, B86 = 0;
  R87 = 0, G87 = 0, B87 = 0;
  R88 = 0, G88 = 0, B88 = 0;
  R89 = 0, G89 = 0, B89 = 0;
  R90 = 0, G90 = 0, B90 = 0;
  R91 = 0, G91 = 0, B91 = 0;
  R92 = 0, G92 = 0, B92 = 0;
  R93 = 0, G93 = 0, B93 = 0;
  R94 = 0, G94 = 0, B94 = 0;
  R95 = 0, G95 = 0, B95 = 0;
  R96 = 0, G96 = 0, B96 = 0;
  R97 = 0, G97 = 0, B97 = 0;
  R98 = 0, G98 = 0, B98 = 0;
  R99 = 0, G99 = 0, B99 = 0;
  R100 = 0, G100 = 0, B100 = 0;
  R101 = 0, G101 = 0, B101 = 0;
  R102 = 0, G102 = 0, B102 = 0;
  R103 = 0, G103 = 0, B103 = 0;
  R104 = 0, G104 = 0, B104 = 0;
  R105 = 0, G105 = 0, B105 = 0;
  R106 = 0, G106 = 0, B106 = 0;
  R107 = 0, G107 = 0, B107 = 0;
  R108 = 0, G108 = 0, B108 = 0;
  R109 = 0, G109 = 0, B109 = 0;
  R110 = 0, G110 = 0, B110 = 0;
  R111 = 0, G111 = 0, B111 = 0;
  R112 = 0, G112 = 0, B112 = 0;
  R113 = 0, G113 = 0, B113 = 0;
  R114 = 0, G114 = 0, B114 = 0;
  R115 = 0, G115 = 0, B115 = 0;
  R116 = 0, G116 = 0, B116 = 0;
  R117 = 0, G117 = 0, B117 = 0;
  R118 = 0, G118 = 0, B118 = 0;
  R119 = 0, G119 = 0, B119 = 0;
  R120 = 0, G120 = 0, B120 = 0;
  R121 = 0, G121 = 0, B121 = 0;
  R122 = 0, G122 = 0, B122 = 0;
  R123 = 0, G123 = 0, B123 = 0;
  R124 = 0, G124 = 0, B124 = 0;
  R125 = 0, G125 = 0, B125 = 0;
  R126 = 0, G126 = 0, B126 = 0;
  R127 = 0, G127 = 0, B127 = 0;
  R128 = 0, G128 = 0, B128 = 0;
  R129 = 0, G129 = 0, B129 = 0;
  R130 = 0, G130 = 0, B130 = 0;
  R131 = 0, G131 = 0, B131 = 0;
  R132 = 0, G132 = 0, B132 = 0;
  R133 = 0, G133 = 0, B133 = 0;
  R134 = 0, G134 = 0, B134 = 0;
  R135 = 0, G135 = 0, B135 = 0;
  R136 = 0, G136 = 0, B136 = 0;
  R137 = 0, G137 = 0, B137 = 0;
  R138 = 0, G138 = 0, B138 = 0;
  R139 = 0, G139 = 0, B139 = 0;
  R140 = 0, G140 = 0, B140 = 0;
  R141 = 0, G141 = 0, B141 = 0;
  R142 = 0, G142 = 0, B142 = 0;
  R143 = 0, G143 = 0, B143 = 0;
  R144 = 0, G144 = 0, B144 = 0;
  R145 = 0, G145 = 0, B145 = 0;
  R146 = 0, G146 = 0, B146 = 0;
  R147 = 0, G147 = 0, B147 = 0;
  /* End of Inital RGB */
  
  /* Mouse Pressed Event */
  if (mouseIsPressed){
    /* Mouse Click Event */
    mouseClicked();
  }
  
  /* 0 section */
  fill(R, G, B);
  stroke("#ffffff");
  strokeWeight(2);
  triangle(62, 0, 82, 27, 98, 0);
  
  /* 1 */
  fill(R1, G1, B1);
  quad(0, 0, 0, 26, 81, 26, 61, 0);
  
  /* 2 */
  fill(R2, G2, B2);
  quad(0, 26, 0, 66, 29, 117, 82, 27);
  
  /* 3 */
  fill(R3, G3, B3);
  triangle(0, 66, 0, 117, 29, 117);
  
  /* 4 */
  fill(R4, G4, B4);
  triangle(0, 117, 0, 169, 29, 117);
  
  /* 5 */
  fill(R5, G5, B5);
  quad(0, 169, 0, 208, 80, 208, 29, 117);
  
  /* 6 */
  fill(R6, G6, B6);
  quad(0, 208, 0, 247, 29, 300, 80, 208);
  
  /* 7 */
  fill(R7, G7, B7);
  triangle(0, 248, 0, 299, 29, 300);
  
  /* 8 */
  fill(R8, G8, B8);
  triangle(0, 299, 0, 351, 29, 299);
  
  /* 9 */
  fill(R9, G9, B9);
  quad(0, 351, 0, 390, 82, 390, 29, 300);
  
  /* 10 */
  fill(R10, G10, B10);
  quad(0, 390, 0, 430, 29, 481, 82, 390);
  
  /* 11 */
  fill(R11, G11, B11);
  triangle(0, 430, 0, 481, 29, 481);
  
  /* 12 */
  fill(R12, G12, B12);
  triangle(0, 481, 0, 533, 29, 481);
  
  /* 13 */
  fill(R13, G13, B13);
  quad(0, 533, 0, 572, 82, 572, 29, 481);
  
  /* 14 */
  fill(R14, G14, B14);
  quad(0, 572, 0, 600, 66, 600, 82, 572);
  
  /* 15 */
  fill(R15, G15, B15);
  triangle(66, 600, 82, 572, 97, 600);
  
  /* 16 */
  fill(R16, G16, B16);
  quad(82, 572, 97, 600, 171, 600, 187, 572);
  
  /* 17 */
  fill(R17, G17, B17);
  triangle(171, 600, 188, 572, 203, 600);
  
  /* 18 */
  fill(R18, G18, B18);
  quad(187, 572, 203, 600, 276, 600, 292, 572);
  
  /* 19 */
  fill(R19, G19, B19);
  triangle(276, 600, 292, 572, 308, 600);
  
  /* 20 */
  fill(R20, G20, B20);
  quad(292, 572, 308, 600, 381, 600, 397, 573);
  
  /* 21 */
  fill(R21, G21, B21);
  triangle(381, 600, 397, 573, 412, 600);
  
  /* 22 */
  fill(R22, G22, B22);
  quad(397, 573, 413, 600, 486, 600, 502, 573);
  
  /* 23 */
  fill(R23, G23, B23);
  triangle(486, 600, 502, 573, 518, 600);
  
  /* 24 */
  fill(R24, G24, B24);
  quad(502, 573, 518, 600, 592, 600, 607, 573);
  
  /* 25 */
  fill(R25, G25, B25);
  triangle(592, 600, 607, 573, 623, 600);
  
  /* 26 */
  fill(R26, G26, B26);
  quad(607, 573, 623, 600, 697, 600, 712, 572);
  
  /* 27 */
  fill(R27, G27, B27);
  triangle(697, 600, 712, 573, 728, 600);
  
  /* 28 */
  fill(R28, G28, B28);
  quad(712, 572, 728, 600, 802, 600, 818, 572);
  
  /* 29 */
  fill(R29, G29, B29);
  triangle(802, 600, 818, 573, 833, 600);
  
  /* 30 */
  fill(R30, G30, B30);
  quad(818, 572, 833, 600, 900, 600, 900, 572);
  
  /* 31 */
  fill(R31, G31, B31);
  quad(818, 572, 870, 482, 900, 533, 900, 572);
  
  /* 32 */
  fill(R32, G32, B32);
  triangle(870, 482, 900, 533, 900, 482);
  
  /* 33 */
  fill(R33, G33, B33);
  triangle(870, 482, 900, 430, 900, 482);
  
  /* 34 */
  fill(R34, G34, B34);
  quad(818, 391, 870, 482, 900, 436, 900, 391);
  
  /* 35 */
  fill(R35, G35, B35);
  quad(818, 391, 870, 300, 900, 351, 900, 391);
  
  /* 36 */
  fill(R36, G36, B36);
  triangle(870, 300, 900, 351, 900, 300);
  
  /* 37 */
  fill(R37, G37, B37);
  triangle(870, 300, 900, 249, 900, 300);
  
  /* 38 */
  fill(R38, G38, B38);
  quad(818, 209, 870, 300, 900, 249, 900, 209);
  
  /* 39 */
  fill(R39, G39, B39);
  quad(818, 209, 870, 118, 900, 168, 900, 209);
  
  /* 40 */
  fill(R40, G40, B40);
  triangle(870, 118, 900, 168, 900, 118);
  
  /* 41 */
  fill(R41, G41, B41);
  triangle(870, 118, 900, 67, 900, 118);

  /* 42 */
  fill(R42, G42, B42);
  quad(817, 27, 870, 118, 900, 67, 900, 27);
  
  /* 43 */
  fill(R43, G43, B43);
  quad(817, 27, 833, 0, 900, 0, 900, 27);

  /* 44 */
  fill(R44, G44, B44);
  triangle(802, 0, 817, 27, 833, 0);
  
  /* 45 */
  fill(R45, G45, B45);
  quad(712, 27, 728, 0, 802, 0, 817, 27);
  
  /* 46 */
  fill(R46, G46, B46);
  triangle(696, 0, 712, 27, 728, 0);
  
  /* 47 */
  fill(R47, G47, B47);
  quad(607, 27, 623, 0, 696, 0, 712, 27);
  
  /* 48 */
  fill(R48, G48, B48);
  triangle(591, 0, 607, 27, 623, 0);
  
  /* 49 */
  fill(R49, G49, B49);
  quad(502, 27, 518, 0, 591, 0, 607, 27);
  
  /* 50 */
  fill(R50, G50, B50);
  triangle(486, 0, 502, 27, 518, 0);
  
  /* 51 */
  fill(R51, G51, B51);
  quad(397, 27, 413, 0, 487, 0, 502, 27);
  
  /* 52 */
  fill(R52, G52, B52);
  triangle(381, 0, 397, 27, 413, 0);
  
  /* 53 */
  fill(R53, G53, B53);
  quad(292, 27, 308, 0, 381, 0, 397, 27);
  
  /* 54 */
  fill(R54, G54, B54);
  triangle(276, 0, 292, 27, 308, 0);
  
  /* 55 */
  fill(R55, G55, B55);
  quad(187, 27, 203, 0, 276, 0, 292, 27);
  
  /* 56 */
  fill(R56, G56, B56);
  triangle(171, 0, 187, 27, 203, 0);
  
  /* 57 */
  fill(R57, G57, B57);
  quad(82, 27, 98, 0, 171, 0, 187, 27);
  
  /* 58 */
  fill(R58, G58, B58);
  triangle(29, 117, 82, 27, 135, 118);
  
  /* 59 */
  fill(R59, G59, B59);
  triangle(29, 117, 82, 208, 135, 118);
  
  /* 60 */
  fill(R60, G60, B60);
  triangle(82, 27, 135, 118, 187, 27);
  
  /* 61 */
  fill(R61, G61, B61);
  triangle(82, 208, 135, 118, 187, 209);
  
  /* 62 */
  fill(R62, G62, B62);
  triangle(134, 118, 187, 27, 239, 118);
  
  /* 63 */
  fill(R63, G63, B63);
  triangle(134, 118, 187, 208, 239, 118);
  
  /* 64 */
  fill(R64, G64, B64);
  triangle(187, 27, 239, 118, 292, 27);
  
  /* 65 */
  fill(R65, G65, B65);
  triangle(187, 209, 239, 118, 292, 209);
  
  /* 66 */
  fill(R66, G66, B66);
  triangle(239, 118, 292, 27, 344, 118);
  
  /* 67 */
  fill(R67, G67, B67);
  triangle(239, 118, 292, 209, 344, 118);
  
  /* 68 */
  fill(R68, G68, B68);
  triangle(292, 27, 345, 118, 397, 27);
  
  /* 69 */
  fill(R69, G69, B69);
  triangle(292, 209, 345, 118, 397, 209);
  
  /* 70 */
  fill(R70, G70, B70);
  triangle(345, 118, 397, 27, 450, 118);
  
  /* 71 */
  fill(R71, G71, B71);
  triangle(345, 118, 397, 209, 450, 118);
  
  /* 72 */
  fill(R72, G72, B72);
  triangle(397, 27, 450, 118, 502, 27);
  
  /* 73 */
  fill(R73, G73, B73);
  triangle(397, 209, 450, 118, 502, 209);
  
  /* 74 */
  fill(R74, G74, B74);
  triangle(450, 118, 502, 27, 554, 118);
  
  /* 75 */
  fill(R75, G75, B75);
  triangle(450, 118, 502, 208, 555, 118);
  
  /* 76 */
  fill(R76, G76, B76);
  triangle(502, 27, 555, 118, 607, 27);
  
  /* 77 */
  fill(R77, G77, B77);
  triangle(502, 209, 555, 118, 607, 209);
  
  /* 78 */
  fill(R78, G78, B78);
  triangle(555, 118, 607, 27, 660, 118);
  
  /* 79 */
  fill(R79, G79, B79);
  triangle(555, 118, 607, 209, 660, 118);
  
  /* 80 */
  fill(R80, G80, B80);
  triangle(607, 27, 660, 118, 712, 27);
  
  /* 81 */
  fill(R81, G81, B81);
  triangle(607, 209, 660, 118, 712, 209);
  
  /* 82 */
  fill(R82, G82, B82);
  triangle(660, 118, 712, 27, 765, 118);
  
  /* 83 */
  fill(R83, G83, B83);
  triangle(660, 118, 712, 209, 765, 118);
  
  /* 84 */
  fill(R84, G84, B84);
  triangle(713, 27, 765, 118, 817, 27);
  
  /* 85 */
  fill(R85, G85, B85);
  triangle(712, 209, 765, 118, 817, 209);
  
  /* 86 */
  fill(R86, G86, B86);
  triangle(765, 118, 818, 27, 870, 118);
  
  /* 87 */
  fill(R87, G87, B87);
  triangle(765, 118, 818, 209, 870, 118);
  
  /* 88 */
  fill(R88, G88, B88);
  triangle(29, 299, 82, 208, 134, 299);
  
  /* 89 */
  fill(R89, G89, B89);
  triangle(29, 299, 82, 390, 134, 299);
  
  /* 90 */
  fill(R90, G90, B90);
  triangle(82, 208, 134, 299, 187, 208);
  
  /* 91 */
  fill(R91, G91, B91);
  triangle(82, 390, 134, 299, 187, 390);
  
  /* 92 */
  fill(R92, G92, B92);
  triangle(134, 299, 187, 208, 239, 299);
  
  /* 93 */
  fill(R93, G93, B93);
  triangle(134, 299, 187, 390, 239, 299);
  
  /* 94 */
  fill(R94, G94, B94);
  triangle(187, 209, 240, 299, 292, 209);
  
  /* 95 */
  fill(R95, G95, B95);
  triangle(187, 390, 239, 300, 291, 390);
  
  /* 96 */
  fill(R96, G96, B96);
  triangle(240, 300, 292, 209, 344, 300);
  
  /* 97 */
  fill(R97, G97, B97);
  triangle(240, 300, 292, 391, 344, 300);
  
  /* 98 */
  fill(R98, G98, B98);
  triangle(292, 209, 344, 300, 397, 209);
  
  /* 99 */
  fill(R99, G99, B99);
  triangle(292, 391, 345, 300, 397, 391);

  /* 100 */
  fill(R100, G100, B100);
  triangle(344, 300, 397, 209, 450, 300);
  
  /* 101 */
  fill(R101, G101, B101);
  triangle(344, 300, 397, 391, 449, 300);
  
  /* 102 */
  fill(R102, G102, B102);
  triangle(397, 209, 450, 299, 502, 209);
  
  /* 103 */
  fill(R103, G103, B103);
  triangle(397, 391, 449, 300, 502, 391);
  
  /* 104 */
  fill(R104, G104, B104);
  triangle(450, 300, 502, 209, 555, 300);
  
  /* 105 */
  fill(R105, G105, B105);
  triangle(450, 300, 502, 391, 555, 300);
  
  /* 106 */
  fill(R106, G106, B106);
  triangle(502, 208, 555, 299, 607, 208);
  
  /* 107 */
  fill(R107, G107, B107);
  triangle(502, 391, 555, 300, 607, 391);
  
  /* 108 */
  fill(R108, G108, B108);
  triangle(555, 299, 607, 209, 659, 299);
  
  /* 109 */
  fill(R109, G109, B109);
  triangle(555, 300, 607, 391, 660, 300);
  
  /* 110 */
  fill(R110, G110, B110);
  triangle(608, 209, 660, 300, 712, 209);
  
  /* 111 */
  fill(R111, G111, B111);
  triangle(607, 391, 660, 300, 712, 391);
  
  /* 112 */
  fill(R112, G112, B112);
  triangle(660, 300, 712, 209, 765, 300);
  
  /* 113 */
  fill(R113, G113, B113);
  triangle(660, 300, 712, 391, 765, 300);
  
  /* 114 */
  fill(R114, G114, B114);
  triangle(712, 209, 765, 300, 817, 209);
  
  /* 115 */
  fill(R115, G115, B115);
  triangle(713, 391, 765, 300, 817, 391);
  
  /* 116 */
  fill(R116, G116, B116);
  triangle(765, 300, 817, 209, 870, 300);
  
  /* 117 */
  fill(R117, G117, B117);
  triangle(765, 300, 817, 391, 870, 300);
  
  /* 118 */
  fill(R118, G118, B118);
  triangle(29, 481, 82, 390, 134, 481);
  
  /* 119 */
  fill(R119, G119, B119);
  triangle(29, 481, 81, 572, 134, 481);
  
  /* 120 */
  fill(R120, G120, B120);
  triangle(82, 390, 134, 481, 187, 390);
  
  /* 121 */
  fill(R121, G121, B121);
  triangle(82, 572, 134, 481, 187, 572);
  
  /* 122 */
  fill(R122, G122, B122);
  triangle(135, 481, 187, 390, 239, 481);
  
  /* 123 */
  fill(R123, G123, B123);
  triangle(134, 481, 187, 572, 239, 481);
  
  /* 124 */
  fill(R124, G124, B124);
  triangle(187, 390, 239, 481, 292, 390);
  
  /* 125 */
  fill(R125, G125, B125);
  triangle(187, 572, 239, 481, 292, 572);
  
  /* 126 */
  fill(R126, G126, B126);
  triangle(239, 481, 292, 390, 344, 481);
  
  /* 127 */
  fill(R127, G127, B127);
  triangle(239, 481, 292, 572, 344, 481);
  
  /* 128 */
  fill(R128, G128, B128);
  triangle(292, 391, 345, 481, 397, 391);
  
  /* 129 */
  fill(R129, G129, B129);
  triangle(292, 572, 344, 482, 397, 572);
  
  /* 130 */
  fill(R130, G130, B130);
  triangle(345, 482, 397, 391, 449, 482);
  
  /* 131 */
  fill(R131, G131, B131);
  triangle(345, 482, 397, 572, 449, 482);
  
  /* 132 */
  fill(R132, G132, B132);
  triangle(397, 391, 449, 482, 502, 391);
  
  /* 133 */
  fill(R133, G133, B133);
  triangle(397, 573, 450, 482, 502, 573);
  
  /* 134 */
  fill(R134, G134, B134);
  triangle(449, 482, 502, 391, 554, 482);
  
  /* 135 */
  fill(R135, G135, B135);
  triangle(449, 482, 502, 573, 554, 482);
  
  /* 136 */
  fill(R136, G136, B136);
  triangle(502, 391, 555, 482, 607, 391);
  
  /* 137 */
  fill(R137, G137, B137);
  triangle(502, 572, 555, 482, 607, 572);
  
  /* 138 */
  fill(R138, G138, B138);
  triangle(555, 481, 607, 391, 660, 481);
  
  /* 139 */
  fill(R139, G139, B139);
  triangle(555, 481, 607, 572, 660, 481);
  
  /* 140 */
  fill(R140, G140, B140);
  triangle(607, 391, 660, 481, 712, 391);
  
  /* 141 */
  fill(R141, G141, B141);
  triangle(607, 572, 660, 481, 712, 572);
  
  /* 142 */
  fill(R142, G142, B142);
  triangle(660, 481, 712, 391, 765, 481);
  
  /* 143 */
  fill(R143, G143, B143);
  triangle(660, 481, 712, 572, 765, 481);
  
  /* 144 */
  fill(R144, G144, B144);
  triangle(713, 391, 765, 482, 817, 391);
  
  /* 145 */
  fill(R145, G145, B145);
  triangle(712, 572, 765, 482, 817, 572);
  
  /* 146 */
  fill(R146, G146, B146);
  triangle(765, 482, 817, 391, 870, 482);
  
  /* 147 */
  fill(R147, G147, B147);
  triangle(765, 482, 818, 573, 870, 482);
  
  /* End of Sections */
}

/* On Mouse Click Random RGB */
/* RANDOM : Within Blue Range */
function mouseClicked() {
  /* Start of Random RGB */
  
  /* 0 RANDOM RGB */
  R = random(50, 60);
  G = random(50, 130);
  B = random(150, 180);

  /* 1 */
  R1 = random(50, 60);
  G1 = random(50, 130);
  B1 = random(150, 180);
  
  /* 2 */
  R2 = random(50, 60);
  G2 = random(50, 130);
  B2 = random(150, 180);
  
  /* 3 */
  R3 = random(50, 60);
  G3 = random(50, 130);
  B3 = random(150, 180);
  
  /* 4 */
  R4 = random(50, 60);
  G4 = random(50, 130);
  B4 = random(150, 180);
  
  /* 5 */
  R5 = random(50, 60);
  G5 = random(50, 130);
  B5 = random(150, 180);
  
  /* 6 */
  R6 = random(50, 60);
  G6 = random(50, 130);
  B6 = random(150, 180);
  
  /* 7 */
  R7 = random(50, 60);
  G7 = random(50, 130);
  B7 = random(150, 180);
  
  /* 8 */
  R8 = random(50, 60);
  G8 = random(50, 130);
  B8 = random(150, 180);
  
  /* 9 */
  R9 = random(50, 60);
  G9 = random(50, 130);
  B9 = random(150, 180);
  
  /* 10 */
  R10 = random(50, 60);
  G10 = random(50, 130);
  B10 = random(150, 180);

  /* 11 */
  R11 = random(50, 60);
  G11 = random(50, 130);
  B11 = random(150, 180);
  
  /* 12 */
  R12 = random(50, 60);
  G12 = random(50, 130);
  B12 = random(150, 180);
  
  /* 13 */
  R13 = random(50, 60);
  G13 = random(50, 130);
  B13 = random(150, 180);
  
  /* 14 */
  R14 = random(50, 60);
  G14 = random(50, 130);
  B14 = random(150, 180);
  
  /* 15 */
  R15 = random(50, 60);
  G15 = random(50, 130);
  B15 = random(150, 180);
  
  /* 16 */
  R16 = random(50, 60);
  G16 = random(50, 130);
  B16 = random(150, 180);
  
  /* 17 */
  R17 = random(50, 60);
  G17 = random(50, 130);
  B17 = random(150, 180);
  
  /* 18 */
  R18 = random(50, 60);
  G18 = random(50, 130);
  B18 = random(150, 180);
  
  /* 19 */
  R19 = random(50, 60);
  G19 = random(50, 130);
  B19 = random(150, 180);
  
  /* 20 */
  R20 = random(50, 60);
  G20 = random(50, 130);
  B20 = random(150, 180);

  /* 21 */
  R21 = random(50, 60);
  G21 = random(50, 130);
  B21 = random(150, 180);
  
  /* 22 */
  R22 = random(50, 60);
  G22 = random(50, 130);
  B22 = random(150, 180);
  
  /* 23 */
  R23 = random(50, 60);
  G23 = random(50, 130);
  B23 = random(150, 180);
  
  /* 24 */
  R24 = random(50, 60);
  G24 = random(50, 130);
  B24 = random(150, 180);
  
  /* 25 */
  R25 = random(50, 60);
  G25 = random(50, 130);
  B25 = random(150, 180);
  
  /* 26 */
  R26 = random(50, 60);
  G26 = random(50, 130);
  B26 = random(150, 180);
  
  /* 27 */
  R27 = random(50, 60);
  G27 = random(50, 130);
  B27 = random(150, 180);
  
  /* 28 */
  R28 = random(50, 60);
  G28 = random(50, 130);
  B28 = random(150, 180);
  
  /* 29 */
  R29 = random(50, 60);
  G29 = random(50, 130);
  B29 = random(150, 180);
  
  /* 30 */
  R30 = random(50, 60);
  G30 = random(50, 130);
  B30 = random(150, 180);

  /* 31 */
  R31 = random(50, 60);
  G31 = random(50, 130);
  B31 = random(150, 180);
  
  /* 32 */
  R32 = random(50, 60);
  G32 = random(50, 130);
  B32 = random(150, 180);
  
  /* 33 */
  R33 = random(50, 60);
  G33 = random(50, 130);
  B33 = random(150, 180);
  
  /* 34 */
  R34 = random(50, 60);
  G34 = random(50, 130);
  B34 = random(150, 180);
  
  /* 35 */
  R35 = random(50, 60);
  G35 = random(50, 130);
  B35 = random(150, 180);
  
  /* 36 */
  R36 = random(50, 60);
  G36 = random(50, 130);
  B36 = random(150, 180);
  
  /* 37 */
  R37 = random(50, 60);
  G37 = random(50, 130);
  B37 = random(150, 180);
  
  /* 38 */
  R38 = random(50, 60);
  G38 = random(50, 130);
  B38 = random(150, 180);
  
  /* 39 */
  R39 = random(50, 60);
  G39 = random(50, 130);
  B39 = random(150, 180);
  
  /* 40 */
  R40 = random(50, 60);
  G40 = random(50, 130);
  B40 = random(150, 180);

  /* 41 */
  R41 = random(50, 60);
  G41 = random(50, 130);
  B41 = random(150, 180);
  
  /* 42 */
  R42 = random(50, 60);
  G42 = random(50, 130);
  B42 = random(150, 180);
  
  /* 43 */
  R43 = random(50, 60);
  G43 = random(50, 130);
  B43 = random(150, 180);
  
  /* 44 */
  R44 = random(50, 60);
  G44 = random(50, 130);
  B44 = random(150, 180);
  
  /* 45 */
  R45 = random(50, 60);
  G45 = random(50, 130);
  B45 = random(150, 180);
  
  /* 46 */
  R46 = random(50, 60);
  G46 = random(50, 130);
  B46 = random(150, 180);
  
  /* 47 */
  R47 = random(50, 60);
  G47 = random(50, 130);
  B47 = random(150, 180);
  
  /* 48 */
  R48 = random(50, 60);
  G48 = random(50, 130);
  B48 = random(150, 180);
  
  /* 49 */
  R49 = random(50, 60);
  G49 = random(50, 130);
  B49 = random(150, 180);
  
  /* 50 */
  R50 = random(50, 60);
  G50 = random(50, 130);
  B50 = random(150, 180);

  /* 51 */
  R51 = random(50, 60);
  G51 = random(50, 130);
  B51 = random(150, 180);
  
  /* 52 */
  R52 = random(50, 60);
  G52 = random(50, 130);
  B52 = random(150, 180);
  
  /* 53 */
  R53 = random(50, 60);
  G53 = random(50, 130);
  B53 = random(150, 180);
  
  /* 54 */
  R54 = random(50, 60);
  G54 = random(50, 130);
  B54 = random(150, 180);
  
  /* 55 */
  R55 = random(50, 60);
  G55 = random(50, 130);
  B55 = random(150, 180);
  
  /* 56 */
  R56 = random(50, 60);
  G56 = random(50, 130);
  B56 = random(150, 180);
  
  /* 57 */
  R57 = random(50, 60);
  G57 = random(50, 130);
  B57 = random(150, 180);
  
  /* 58 */
  R58 = random(50, 60);
  G58 = random(50, 130);
  B58 = random(150, 180);
  
  /* 59 */
  R59 = random(50, 60);
  G59 = random(50, 130);
  B59 = random(150, 180);
  
  /* 60 */
  R60 = random(50, 60);
  G60 = random(50, 130);
  B60 = random(150, 180);

  /* 61 */
  R61 = random(50, 60);
  G61 = random(50, 130);
  B61 = random(150, 180);
  
  /* 62 */
  R62 = random(50, 60);
  G62 = random(50, 130);
  B62 = random(150, 180);
  
  /* 63 */
  R63 = random(50, 60);
  G63 = random(50, 130);
  B63 = random(150, 180);
  
  /* 64 */
  R64 = random(50, 60);
  G64 = random(50, 130);
  B64 = random(150, 180);
  
  /* 65 */
  R65 = random(50, 60);
  G65 = random(50, 130);
  B65 = random(150, 180);
  
  /* 66 */
  R66 = random(50, 60);
  G66 = random(50, 130);
  B66 = random(150, 180);
  
  /* 67 */
  R67 = random(50, 60);
  G67 = random(50, 130);
  B67 = random(150, 180);
  
  /* 68 */
  R68 = random(50, 60);
  G68 = random(50, 130);
  B68 = random(150, 180);
  
  /* 69 */
  R69 = random(50, 60);
  G69 = random(50, 130);
  B69 = random(150, 180);
  
  /* 70 */
  R70 = random(50, 60);
  G70 = random(50, 130);
  B70 = random(150, 180);

  /* 71 */
  R71 = random(50, 60);
  G71 = random(50, 130);
  B71 = random(150, 180);
  
  /* 72 */
  R72 = random(50, 60);
  G72 = random(50, 130);
  B72 = random(150, 180);
  
  /* 73 */
  R73 = random(50, 60);
  G73 = random(50, 130);
  B73 = random(150, 180);
  
  /* 74 */
  R74 = random(50, 60);
  G74 = random(50, 130);
  B74 = random(150, 180);
  
  /* 75 */
  R75 = random(50, 60);
  G75 = random(50, 130);
  B75 = random(150, 180);
  
  /* 76 */
  R76 = random(50, 60);
  G76 = random(50, 130);
  B76 = random(150, 180);
  
  /* 77 */
  R77 = random(50, 60);
  G77 = random(50, 130);
  B77 = random(150, 180);
  
  /* 78 */
  R78 = random(50, 60);
  G78 = random(50, 130);
  B78 = random(150, 180);
  
  /* 79 */
  R79 = random(50, 60);
  G79 = random(50, 130);
  B79 = random(150, 180);
  
  /* 80 */
  R80 = random(50, 60);
  G80 = random(50, 130);
  B80 = random(150, 180);

  /* 81 */
  R81 = random(50, 60);
  G81 = random(50, 130);
  B81 = random(150, 180);
  
  /* 82 */
  R82 = random(50, 60);
  G82 = random(50, 130);
  B82 = random(150, 180);
  
  /* 83 */
  R83 = random(50, 60);
  G83 = random(50, 130);
  B83 = random(150, 180);
  
  /* 84 */
  R84 = random(50, 60);
  G84 = random(50, 130);
  B84 = random(150, 180);
  
  /* 85 */
  R85 = random(50, 60);
  G85 = random(50, 130);
  B85 = random(150, 180);
  
  /* 86 */
  R86 = random(50, 60);
  G86 = random(50, 130);
  B86 = random(150, 180);
  
  /* 87 */
  R87 = random(50, 60);
  G87 = random(50, 130);
  B87 = random(150, 180);
  
  /* 88 */
  R88 = random(50, 60);
  G88 = random(50, 130);
  B88 = random(150, 180);
  
  /* 89 */
  R89 = random(50, 60);
  G89 = random(50, 130);
  B89 = random(150, 180);
  
  /* 90 */
  R90 = random(50, 60);
  G90 = random(50, 130);
  B90 = random(150, 180);

  /* 91 */
  R91 = random(50, 60);
  G91 = random(50, 130);
  B91 = random(150, 180);
  
  /* 92 */
  R92 = random(50, 60);
  G92 = random(50, 130);
  B92 = random(150, 180);
  
  /* 93 */
  R93 = random(50, 60);
  G93 = random(50, 130);
  B93 = random(150, 180);
  
  /* 94 */
  R94 = random(50, 60);
  G94 = random(50, 130);
  B94 = random(150, 180);
  
  /* 95 */
  R95 = random(50, 60);
  G95 = random(50, 130);
  B95 = random(150, 180);
  
  /* 96 */
  R96 = random(50, 60);
  G96 = random(50, 130);
  B96 = random(150, 180);
  
  /* 97 */
  R97 = random(50, 60);
  G97 = random(50, 130);
  B97 = random(150, 180);
  
  /* 98 */
  R98 = random(50, 60);
  G98 = random(50, 130);
  B98 = random(150, 180);
  
  /* 99 */
  R99 = random(50, 60);
  G99 = random(50, 130);
  B99 = random(150, 180);
  
  /* 100 */
  R100 = random(50, 60);
  G100 = random(50, 130);
  B100 = random(150, 180);

  /* 101 */
  R101 = random(50, 60);
  G101 = random(50, 130);
  B101 = random(150, 180);
  
  /* 102 */
  R102 = random(50, 60);
  G102 = random(50, 130);
  B102 = random(150, 180);
  
  /* 103 */
  R103 = random(50, 60);
  G103 = random(50, 130);
  B103 = random(150, 180);
  
  /* 104 */
  R104 = random(50, 60);
  G104 = random(50, 130);
  B104 = random(150, 180);
  
  /* 105 */
  R105 = random(50, 60);
  G105 = random(50, 130);
  B105 = random(150, 180);
  
  /* 106 */
  R106 = random(50, 60);
  G106 = random(50, 130);
  B106 = random(150, 180);
  
  /* 107 */
  R107 = random(50, 60);
  G107 = random(50, 130);
  B107 = random(150, 180);
  
  /* 108 */
  R108 = random(50, 60);
  G108 = random(50, 130);
  B108 = random(150, 180);
  
  /* 109 */
  R109 = random(50, 60);
  G109 = random(50, 130);
  B109 = random(150, 180);
  
  /* 110 */
  R110 = random(50, 60);
  G110 = random(50, 130);
  B110 = random(150, 180);

  /* 111 */
  R111 = random(50, 60);
  G111 = random(50, 130);
  B111 = random(150, 180);
  
  /* 112 */
  R112 = random(50, 60);
  G112 = random(50, 130);
  B112 = random(150, 180);
  
  /* 113 */
  R113 = random(50, 60);
  G113 = random(50, 130);
  B113 = random(150, 180);
  
  /* 114 */
  R114 = random(50, 60);
  G114 = random(50, 130);
  B114 = random(150, 180);
  
  /* 115 */
  R115 = random(50, 60);
  G115 = random(50, 130);
  B115 = random(150, 180);
  
  /* 116 */
  R116 = random(50, 60);
  G116 = random(50, 130);
  B116 = random(150, 180);
  
  /* 117 */
  R117 = random(50, 60);
  G117 = random(50, 130);
  B117 = random(150, 180);
  
  /* 118 */
  R118 = random(50, 60);
  G118 = random(50, 130);
  B118 = random(150, 180);
  
  /* 119 */
  R119 = random(50, 60);
  G119 = random(50, 130);
  B119 = random(150, 180);
  
  /* 120 */
  R120 = random(50, 60);
  G120 = random(50, 130);
  B120 = random(150, 180);

  /* 121 */
  R121 = random(50, 60);
  G121 = random(50, 130);
  B121 = random(150, 180);
  
  /* 122 */
  R122 = random(50, 60);
  G122 = random(50, 130);
  B122 = random(150, 180);
  
  /* 123 */
  R123 = random(50, 60);
  G123 = random(50, 130);
  B123 = random(150, 180);
  
  /* 124 */
  R124 = random(50, 60);
  G124 = random(50, 130);
  B124 = random(150, 180);
  
  /* 125 */
  R125 = random(50, 60);
  G125 = random(50, 130);
  B125 = random(150, 180);
  
  /* 126 */
  R126 = random(50, 60);
  G126 = random(50, 130);
  B126 = random(150, 180);
  
  /* 127 */
  R127 = random(50, 60);
  G127 = random(50, 130);
  B127 = random(150, 180);
  
  /* 128 */
  R128 = random(50, 60);
  G128 = random(50, 130);
  B128 = random(150, 180);
  
  /* 129 */
  R129 = random(50, 60);
  G129 = random(50, 130);
  B129 = random(150, 180);
  
  /* 130 */
  R130 = random(50, 60);
  G130 = random(50, 130);
  B130 = random(150, 180);

  /* 131 */
  R131 = random(50, 60);
  G131 = random(50, 130);
  B131 = random(150, 180);
  
  /* 132 */
  R132 = random(50, 60);
  G132 = random(50, 130);
  B132 = random(150, 180);
  
  /* 133 */
  R133 = random(50, 60);
  G133 = random(50, 130);
  B133 = random(150, 180);
  
  /* 134 */
  R134 = random(50, 60);
  G134 = random(50, 130);
  B134 = random(150, 180);
  
  /* 135 */
  R135 = random(50, 60);
  G135 = random(50, 130);
  B135 = random(150, 180);
  
  /* 136 */
  R136 = random(50, 60);
  G136 = random(50, 130);
  B136 = random(150, 180);
  
  /* 137 */
  R137 = random(50, 60);
  G137 = random(50, 130);
  B137 = random(150, 180);
  
  /* 138 */
  R138 = random(50, 60);
  G138 = random(50, 130);
  B138 = random(150, 180);
  
  /* 139 */
  R139 = random(50, 60);
  G139 = random(50, 130);
  B139 = random(150, 180);
  
  /* 140 */
  R140 = random(50, 60);
  G140 = random(50, 130);
  B140 = random(150, 180);

  /* 141 */
  R141 = random(50, 60);
  G141 = random(50, 130);
  B141 = random(150, 180);
  
  /* 142 */
  R142 = random(50, 60);
  G142 = random(50, 130);
  B142 = random(150, 180);
  
  /* 143 */
  R143 = random(50, 60);
  G143 = random(50, 130);
  B143 = random(150, 180);
  
  /* 144 */
  R144 = random(50, 60);
  G144 = random(50, 130);
  B144 = random(150, 180);
  
  /* 145 */
  R145 = random(50, 60);
  G145 = random(50, 130);
  B145 = random(150, 180);
  
  /* 146 */
  R146 = random(50, 60);
  G146 = random(50, 130);
  B146 = random(150, 180);
  
  /* 147 */
  R147 = random(50, 60);
  G147 = random(50, 130);
  B147 = random(150, 180);
}