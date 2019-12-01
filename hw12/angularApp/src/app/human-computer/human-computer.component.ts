import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-human-computer',
  templateUrl: './human-computer.component.html',
  styleUrls: ['./human-computer.component.css']
})
export class HumanComputerComponent implements OnInit {
  private p5;
  @ViewChild("computerDiv", { static: true }) computerDiv: ElementRef;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.p5 = new p5((p: any) => {
      let rgbArr = [];

      p.setup = () => {
        /* Framerate */
        p.frameRate(10);
        p.createCanvas(900, 600);
      }

      p.draw = () => {
        p.background(0);

        /* Inital RGB */

        for (let i = 0; i < 148; i++) rgbArr[i] = { R: 0, G: 0, B: 0 };

        /* Randomize RGB */
        randomizeColor();

        /* 0 section */
        p.fill(rgbArr[0].R, rgbArr[0].G, rgbArr[0].B);
        p.stroke("#ffffff");
        p.strokeWeight(2);
        p.triangle(62, 0, 82, 27, 98, 0);

        /* 1 */
        p.fill(rgbArr[1].R, rgbArr[1].G, rgbArr[1].B);
        p.quad(0, 0, 0, 26, 81, 26, 61, 0);

        /* 2 */
        p.fill(rgbArr[2].R, rgbArr[2].G, rgbArr[2].B);
        p.quad(0, 26, 0, 66, 29, 117, 82, 27);

        /* 3 */
        p.fill(rgbArr[3].R, rgbArr[3].G, rgbArr[3].B);
        p.triangle(0, 66, 0, 117, 29, 117);

        /* 4 */
        p.fill(rgbArr[4].R, rgbArr[4].G, rgbArr[4].B);
        p.triangle(0, 117, 0, 169, 29, 117);

        /* 5 */
        p.fill(rgbArr[5].R, rgbArr[5].G, rgbArr[5].B);
        p.quad(0, 169, 0, 208, 80, 208, 29, 117);

        /* 6 */
        p.fill(rgbArr[6].R, rgbArr[6].G, rgbArr[6].B);
        p.quad(0, 208, 0, 247, 29, 300, 80, 208);

        /* 7 */
        p.fill(rgbArr[7].R, rgbArr[7].G, rgbArr[7].B);
        p.triangle(0, 248, 0, 299, 29, 300);

        /* 8 */
        p.fill(rgbArr[8].R, rgbArr[8].G, rgbArr[8].B);
        p.triangle(0, 299, 0, 351, 29, 299);

        /* 9 */
        p.fill(rgbArr[9].R, rgbArr[9].G, rgbArr[9].B);
        p.quad(0, 351, 0, 390, 82, 390, 29, 300);

        /* 10 */
        p.fill(rgbArr[10].R, rgbArr[10].G, rgbArr[10].B);
        p.quad(0, 390, 0, 430, 29, 481, 82, 390);

        /* 11 */
        p.fill(rgbArr[11].R, rgbArr[11].G, rgbArr[11].B);
        p.triangle(0, 430, 0, 481, 29, 481);

        /* 12 */
        p.fill(rgbArr[12].R, rgbArr[12].G, rgbArr[12].B);
        p.triangle(0, 481, 0, 533, 29, 481);

        /* 13 */
        p.fill(rgbArr[13].R, rgbArr[13].G, rgbArr[13].B);
        p.quad(0, 533, 0, 572, 82, 572, 29, 481);

        /* 14 */
        p.fill(rgbArr[14].R, rgbArr[14].G, rgbArr[14].B);
        p.quad(0, 572, 0, 600, 66, 600, 82, 572);

        /* 15 */
        p.fill(rgbArr[15].R, rgbArr[15].G, rgbArr[15].B);
        p.triangle(66, 600, 82, 572, 97, 600);

        /* 16 */
        p.fill(rgbArr[16].R, rgbArr[16].G, rgbArr[16].B);
        p.quad(82, 572, 97, 600, 171, 600, 187, 572);

        /* 17 */
        p.fill(rgbArr[17].R, rgbArr[17].G, rgbArr[17].B);
        p.triangle(171, 600, 188, 572, 203, 600);

        /* 18 */
        p.fill(rgbArr[18].R, rgbArr[18].G, rgbArr[18].B);
        p.quad(187, 572, 203, 600, 276, 600, 292, 572);

        /* 19 */
        p.fill(rgbArr[19].R, rgbArr[19].G, rgbArr[19].B);
        p.triangle(276, 600, 292, 572, 308, 600);

        /* 20 */
        p.fill(rgbArr[20].R, rgbArr[20].G, rgbArr[20].B);
        p.quad(292, 572, 308, 600, 381, 600, 397, 573);

        /* 21 */
        p.fill(rgbArr[21].R, rgbArr[21].G, rgbArr[21].B);
        p.triangle(381, 600, 397, 573, 412, 600);

        /* 22 */
        p.fill(rgbArr[22].R, rgbArr[22].G, rgbArr[22].B);
        p.quad(397, 573, 413, 600, 486, 600, 502, 573);

        /* 23 */
        p.fill(rgbArr[23].R, rgbArr[23].G, rgbArr[23].B);
        p.triangle(486, 600, 502, 573, 518, 600);

        /* 24 */
        p.fill(rgbArr[24].R, rgbArr[24].G, rgbArr[24].B);
        p.quad(502, 573, 518, 600, 592, 600, 607, 573);

        /* 25 */
        p.fill(rgbArr[25].R, rgbArr[25].G, rgbArr[25].B);
        p.triangle(592, 600, 607, 573, 623, 600);

        /* 26 */
        p.fill(rgbArr[26].R, rgbArr[26].G, rgbArr[26].B);
        p.quad(607, 573, 623, 600, 697, 600, 712, 572);

        /* 27 */
        p.fill(rgbArr[27].R, rgbArr[27].G, rgbArr[27].B);
        p.triangle(697, 600, 712, 573, 728, 600);

        /* 28 */
        p.fill(rgbArr[28].R, rgbArr[28].G, rgbArr[28].B);
        p.quad(712, 572, 728, 600, 802, 600, 818, 572);

        /* 29 */
        p.fill(rgbArr[29].R, rgbArr[29].G, rgbArr[29].B);
        p.triangle(802, 600, 818, 573, 833, 600);

        /* 30 */
        p.fill(rgbArr[30].R, rgbArr[30].G, rgbArr[30].B);
        p.quad(818, 572, 833, 600, 900, 600, 900, 572);

        /* 31 */
        p.fill(rgbArr[31].R, rgbArr[31].G, rgbArr[31].B);
        p.quad(818, 572, 870, 482, 900, 533, 900, 572);

        /* 32 */
        p.fill(rgbArr[32].R, rgbArr[32].G, rgbArr[32].B);
        p.triangle(870, 482, 900, 533, 900, 482);

        /* 33 */
        p.fill(rgbArr[33].R, rgbArr[33].G, rgbArr[33].B);
        p.triangle(870, 482, 900, 430, 900, 482);

        /* 34 */
        p.fill(rgbArr[34].R, rgbArr[34].G, rgbArr[34].B);
        p.quad(818, 391, 870, 482, 900, 436, 900, 391);

        /* 35 */
        p.fill(rgbArr[35].R, rgbArr[35].G, rgbArr[35].B);
        p.quad(818, 391, 870, 300, 900, 351, 900, 391);

        /* 36 */
        p.fill(rgbArr[36].R, rgbArr[36].G, rgbArr[36].B);
        p.triangle(870, 300, 900, 351, 900, 300);

        /* 37 */
        p.fill(rgbArr[37].R, rgbArr[37].G, rgbArr[37].B);
        p.triangle(870, 300, 900, 249, 900, 300);

        /* 38 */
        p.fill(rgbArr[38].R, rgbArr[38].G, rgbArr[38].B);
        p.quad(818, 209, 870, 300, 900, 249, 900, 209);

        /* 39 */
        p.fill(rgbArr[39].R, rgbArr[39].G, rgbArr[39].B);
        p.quad(818, 209, 870, 118, 900, 168, 900, 209);

        /* 40 */
        p.fill(rgbArr[40].R, rgbArr[40].G, rgbArr[40].B);
        p.triangle(870, 118, 900, 168, 900, 118);

        /* 41 */
        p.fill(rgbArr[41].R, rgbArr[41].G, rgbArr[41].B);
        p.triangle(870, 118, 900, 67, 900, 118);

        /* 42 */
        p.fill(rgbArr[42].R, rgbArr[42].G, rgbArr[42].B);
        p.quad(817, 27, 870, 118, 900, 67, 900, 27);

        /* 43 */
        p.fill(rgbArr[43].R, rgbArr[43].G, rgbArr[43].B);
        p.quad(817, 27, 833, 0, 900, 0, 900, 27);

        /* 44 */
        p.fill(rgbArr[44].R, rgbArr[44].G, rgbArr[44].B);
        p.triangle(802, 0, 817, 27, 833, 0);

        /* 45 */
        p.fill(rgbArr[45].R, rgbArr[45].G, rgbArr[45].B);
        p.quad(712, 27, 728, 0, 802, 0, 817, 27);

        /* 46 */
        p.fill(rgbArr[46].R, rgbArr[46].G, rgbArr[46].B);
        p.triangle(696, 0, 712, 27, 728, 0);

        /* 47 */
        p.fill(rgbArr[47].R, rgbArr[47].G, rgbArr[47].B);
        p.quad(607, 27, 623, 0, 696, 0, 712, 27);

        /* 48 */
        p.fill(rgbArr[48].R, rgbArr[48].G, rgbArr[48].B);
        p.triangle(591, 0, 607, 27, 623, 0);

        /* 49 */
        p.fill(rgbArr[49].R, rgbArr[49].G, rgbArr[49].B);
        p.quad(502, 27, 518, 0, 591, 0, 607, 27);

        /* 50 */
        p.fill(rgbArr[50].R, rgbArr[50].G, rgbArr[50].B);
        p.triangle(486, 0, 502, 27, 518, 0);

        /* 51 */
        p.fill(rgbArr[51].R, rgbArr[51].G, rgbArr[51].B);
        p.quad(397, 27, 413, 0, 487, 0, 502, 27);

        /* 52 */
        p.fill(rgbArr[52].R, rgbArr[52].G, rgbArr[52].B);
        p.triangle(381, 0, 397, 27, 413, 0);

        /* 53 */
        p.fill(rgbArr[53].R, rgbArr[53].G, rgbArr[53].B);
        p.quad(292, 27, 308, 0, 381, 0, 397, 27);

        /* 54 */
        p.fill(rgbArr[54].R, rgbArr[54].G, rgbArr[54].B);
        p.triangle(276, 0, 292, 27, 308, 0);

        /* 55 */
        p.fill(rgbArr[55].R, rgbArr[55].G, rgbArr[55].B);
        p.quad(187, 27, 203, 0, 276, 0, 292, 27);

        /* 56 */
        p.fill(rgbArr[56].R, rgbArr[56].G, rgbArr[56].B);
        p.triangle(171, 0, 187, 27, 203, 0);

        /* 57 */
        p.fill(rgbArr[57].R, rgbArr[57].G, rgbArr[57].B);
        p.quad(82, 27, 98, 0, 171, 0, 187, 27);

        /* 58 */
        p.fill(rgbArr[58].R, rgbArr[58].G, rgbArr[58].B);
        p.triangle(29, 117, 82, 27, 135, 118);

        /* 59 */
        p.fill(rgbArr[59].R, rgbArr[59].G, rgbArr[59].B);
        p.triangle(29, 117, 82, 208, 135, 118);

        /* 60 */
        p.fill(rgbArr[60].R, rgbArr[60].G, rgbArr[60].B);
        p.triangle(82, 27, 135, 118, 187, 27);

        /* 61 */
        p.fill(rgbArr[61].R, rgbArr[61].G, rgbArr[61].B);
        p.triangle(82, 208, 135, 118, 187, 209);

        /* 62 */
        p.fill(rgbArr[62].R, rgbArr[62].G, rgbArr[62].B);
        p.triangle(134, 118, 187, 27, 239, 118);

        /* 63 */
        p.fill(rgbArr[63].R, rgbArr[63].G, rgbArr[63].B);
        p.triangle(134, 118, 187, 208, 239, 118);

        /* 64 */
        p.fill(rgbArr[64].R, rgbArr[64].G, rgbArr[64].B);
        p.triangle(187, 27, 239, 118, 292, 27);

        /* 65 */
        p.fill(rgbArr[65].R, rgbArr[65].G, rgbArr[65].B);
        p.triangle(187, 209, 239, 118, 292, 209);

        /* 66 */
        p.fill(rgbArr[66].R, rgbArr[66].G, rgbArr[66].B);
        p.triangle(239, 118, 292, 27, 344, 118);

        /* 67 */
        p.fill(rgbArr[67].R, rgbArr[67].G, rgbArr[67].B);
        p.triangle(239, 118, 292, 209, 344, 118);

        /* 68 */
        p.fill(rgbArr[68].R, rgbArr[68].G, rgbArr[68].B);
        p.triangle(292, 27, 345, 118, 397, 27);

        /* 69 */
        p.fill(rgbArr[69].R, rgbArr[69].G, rgbArr[69].B);
        p.triangle(292, 209, 345, 118, 397, 209);

        /* 70 */
        p.fill(rgbArr[70].R, rgbArr[70].G, rgbArr[70].B);
        p.triangle(345, 118, 397, 27, 450, 118);

        /* 71 */
        p.fill(rgbArr[71].R, rgbArr[71].G, rgbArr[71].B);
        p.triangle(345, 118, 397, 209, 450, 118);

        /* 72 */
        p.fill(rgbArr[72].R, rgbArr[72].G, rgbArr[72].B);
        p.triangle(397, 27, 450, 118, 502, 27);

        /* 73 */
        p.fill(rgbArr[73].R, rgbArr[73].G, rgbArr[73].B);
        p.triangle(397, 209, 450, 118, 502, 209);

        /* 74 */
        p.fill(rgbArr[74].R, rgbArr[74].G, rgbArr[74].B);
        p.triangle(450, 118, 502, 27, 554, 118);

        /* 75 */
        p.fill(rgbArr[75].R, rgbArr[75].G, rgbArr[75].B);
        p.triangle(450, 118, 502, 208, 555, 118);

        /* 76 */
        p.fill(rgbArr[76].R, rgbArr[76].G, rgbArr[76].B);
        p.triangle(502, 27, 555, 118, 607, 27);

        /* 77 */
        p.fill(rgbArr[77].R, rgbArr[77].G, rgbArr[77].B);
        p.triangle(502, 209, 555, 118, 607, 209);

        /* 78 */
        p.fill(rgbArr[78].R, rgbArr[78].G, rgbArr[78].B);
        p.triangle(555, 118, 607, 27, 660, 118);

        /* 79 */
        p.fill(rgbArr[79].R, rgbArr[79].G, rgbArr[79].B);
        p.triangle(555, 118, 607, 209, 660, 118);

        /* 80 */
        p.fill(rgbArr[80].R, rgbArr[80].G, rgbArr[80].B);
        p.triangle(607, 27, 660, 118, 712, 27);

        /* 81 */
        p.fill(rgbArr[81].R, rgbArr[81].G, rgbArr[81].B);
        p.triangle(607, 209, 660, 118, 712, 209);

        /* 82 */
        p.fill(rgbArr[82].R, rgbArr[82].G, rgbArr[82].B);
        p.triangle(660, 118, 712, 27, 765, 118);

        /* 83 */
        p.fill(rgbArr[83].R, rgbArr[83].G, rgbArr[83].B);
        p.triangle(660, 118, 712, 209, 765, 118);

        /* 84 */
        p.fill(rgbArr[84].R, rgbArr[84].G, rgbArr[84].B);
        p.triangle(713, 27, 765, 118, 817, 27);

        /* 85 */
        p.fill(rgbArr[85].R, rgbArr[85].G, rgbArr[85].B);
        p.triangle(712, 209, 765, 118, 817, 209);

        /* 86 */
        p.fill(rgbArr[86].R, rgbArr[86].G, rgbArr[86].B);
        p.triangle(765, 118, 818, 27, 870, 118);

        /* 87 */
        p.fill(rgbArr[87].R, rgbArr[87].G, rgbArr[87].B);
        p.triangle(765, 118, 818, 209, 870, 118);

        /* 88 */
        p.fill(rgbArr[88].R, rgbArr[88].G, rgbArr[88].B);
        p.triangle(29, 299, 82, 208, 134, 299);

        /* 89 */
        p.fill(rgbArr[89].R, rgbArr[89].G, rgbArr[89].B);
        p.triangle(29, 299, 82, 390, 134, 299);

        /* 90 */
        p.fill(rgbArr[90].R, rgbArr[90].G, rgbArr[90].B);
        p.triangle(82, 208, 134, 299, 187, 208);

        /* 91 */
        p.fill(rgbArr[91].R, rgbArr[91].G, rgbArr[91].B);
        p.triangle(82, 390, 134, 299, 187, 390);

        /* 92 */
        p.fill(rgbArr[92].R, rgbArr[92].G, rgbArr[92].B);
        p.triangle(134, 299, 187, 208, 239, 299);

        /* 93 */
        p.fill(rgbArr[93].R, rgbArr[93].G, rgbArr[93].B);
        p.triangle(134, 299, 187, 390, 239, 299);

        /* 94 */
        p.fill(rgbArr[94].R, rgbArr[94].G, rgbArr[94].B);
        p.triangle(187, 209, 240, 299, 292, 209);

        /* 95 */
        p.fill(rgbArr[95].R, rgbArr[95].G, rgbArr[95].B);
        p.triangle(187, 390, 239, 300, 291, 390);

        /* 96 */
        p.fill(rgbArr[96].R, rgbArr[96].G, rgbArr[96].B);
        p.triangle(240, 300, 292, 209, 344, 300);

        /* 97 */
        p.fill(rgbArr[97].R, rgbArr[97].G, rgbArr[97].B);
        p.triangle(240, 300, 292, 391, 344, 300);

        /* 98 */
        p.fill(rgbArr[98].R, rgbArr[98].G, rgbArr[98].B);
        p.triangle(292, 209, 344, 300, 397, 209);

        /* 99 */
        p.fill(rgbArr[99].R, rgbArr[99].G, rgbArr[99].B);
        p.triangle(292, 391, 345, 300, 397, 391);

        /* 100 */
        p.fill(rgbArr[100].R, rgbArr[100].G, rgbArr[100].B);
        p.triangle(344, 300, 397, 209, 450, 300);

        /* 101 */
        p.fill(rgbArr[101].R, rgbArr[101].G, rgbArr[101].B);
        p.triangle(344, 300, 397, 391, 449, 300);

        /* 102 */
        p.fill(rgbArr[102].R, rgbArr[102].G, rgbArr[102].B);
        p.triangle(397, 209, 450, 299, 502, 209);

        /* 103 */
        p.fill(rgbArr[103].R, rgbArr[103].G, rgbArr[103].B);
        p.triangle(397, 391, 449, 300, 502, 391);

        /* 104 */
        p.fill(rgbArr[104].R, rgbArr[104].G, rgbArr[104].B);
        p.triangle(450, 300, 502, 209, 555, 300);

        /* 105 */
        p.fill(rgbArr[105].R, rgbArr[105].G, rgbArr[105].B);
        p.triangle(450, 300, 502, 391, 555, 300);

        /* 106 */
        p.fill(rgbArr[106].R, rgbArr[106].G, rgbArr[106].B);
        p.triangle(502, 208, 555, 299, 607, 208);

        /* 107 */
        p.fill(rgbArr[107].R, rgbArr[107].G, rgbArr[107].B);
        p.triangle(502, 391, 555, 300, 607, 391);

        /* 108 */
        p.fill(rgbArr[108].R, rgbArr[108].G, rgbArr[108].B);
        p.triangle(555, 299, 607, 209, 659, 299);

        /* 109 */
        p.fill(rgbArr[109].R, rgbArr[109].G, rgbArr[109].B);
        p.triangle(555, 300, 607, 391, 660, 300);

        /* 110 */
        p.fill(rgbArr[110].R, rgbArr[110].G, rgbArr[110].B);
        p.triangle(608, 209, 660, 300, 712, 209);

        /* 111 */
        p.fill(rgbArr[111].R, rgbArr[111].G, rgbArr[111].B);
        p.triangle(607, 391, 660, 300, 712, 391);

        /* 112 */
        p.fill(rgbArr[112].R, rgbArr[112].G, rgbArr[112].B);
        p.triangle(660, 300, 712, 209, 765, 300);

        /* 113 */
        p.fill(rgbArr[113].R, rgbArr[113].G, rgbArr[113].B);
        p.triangle(660, 300, 712, 391, 765, 300);

        /* 114 */
        p.fill(rgbArr[114].R, rgbArr[114].G, rgbArr[114].B);
        p.triangle(712, 209, 765, 300, 817, 209);

        /* 115 */
        p.fill(rgbArr[115].R, rgbArr[115].G, rgbArr[115].B);
        p.triangle(713, 391, 765, 300, 817, 391);

        /* 116 */
        p.fill(rgbArr[116].R, rgbArr[116].G, rgbArr[116].B);
        p.triangle(765, 300, 817, 209, 870, 300);

        /* 117 */
        p.fill(rgbArr[117].R, rgbArr[117].G, rgbArr[117].B);
        p.triangle(765, 300, 817, 391, 870, 300);

        /* 118 */
        p.fill(rgbArr[118].R, rgbArr[118].G, rgbArr[118].B);
        p.triangle(29, 481, 82, 390, 134, 481);

        /* 119 */
        p.fill(rgbArr[119].R, rgbArr[119].G, rgbArr[119].B);
        p.triangle(29, 481, 81, 572, 134, 481);

        /* 120 */
        p.fill(rgbArr[120].R, rgbArr[120].G, rgbArr[120].B);
        p.triangle(82, 390, 134, 481, 187, 390);

        /* 121 */
        p.fill(rgbArr[121].R, rgbArr[121].G, rgbArr[121].B);
        p.triangle(82, 572, 134, 481, 187, 572);

        /* 122 */
        p.fill(rgbArr[122].R, rgbArr[122].G, rgbArr[122].B);
        p.triangle(135, 481, 187, 390, 239, 481);

        /* 123 */
        p.fill(rgbArr[123].R, rgbArr[123].G, rgbArr[123].B);
        p.triangle(134, 481, 187, 572, 239, 481);

        /* 124 */
        p.fill(rgbArr[124].R, rgbArr[124].G, rgbArr[124].B);
        p.triangle(187, 390, 239, 481, 292, 390);

        /* 125 */
        p.fill(rgbArr[125].R, rgbArr[125].G, rgbArr[125].B);
        p.triangle(187, 572, 239, 481, 292, 572);

        /* 126 */
        p.fill(rgbArr[126].R, rgbArr[126].G, rgbArr[126].B);
        p.triangle(239, 481, 292, 390, 344, 481);

        /* 127 */
        p.fill(rgbArr[127].R, rgbArr[127].G, rgbArr[127].B);
        p.triangle(239, 481, 292, 572, 344, 481);

        /* 128 */
        p.fill(rgbArr[128].R, rgbArr[128].G, rgbArr[128].B);
        p.triangle(292, 391, 345, 481, 397, 391);

        /* 129 */
        p.fill(rgbArr[129].R, rgbArr[129].G, rgbArr[129].B);
        p.triangle(292, 572, 344, 482, 397, 572);

        /* 130 */
        p.fill(rgbArr[130].R, rgbArr[130].G, rgbArr[130].B);
        p.triangle(345, 482, 397, 391, 449, 482);

        /* 131 */
        p.fill(rgbArr[131].R, rgbArr[131].G, rgbArr[131].B);
        p.triangle(345, 482, 397, 572, 449, 482);

        /* 132 */
        p.fill(rgbArr[132].R, rgbArr[132].G, rgbArr[132].B);
        p.triangle(397, 391, 449, 482, 502, 391);

        /* 133 */
        p.fill(rgbArr[133].R, rgbArr[133].G, rgbArr[133].B);
        p.triangle(397, 573, 450, 482, 502, 573);

        /* 134 */
        p.fill(rgbArr[134].R, rgbArr[134].G, rgbArr[134].B);
        p.triangle(449, 482, 502, 391, 554, 482);

        /* 135 */
        p.fill(rgbArr[135].R, rgbArr[135].G, rgbArr[135].B);
        p.triangle(449, 482, 502, 573, 554, 482);

        /* 136 */
        p.fill(rgbArr[136].R, rgbArr[136].G, rgbArr[136].B);
        p.triangle(502, 391, 555, 482, 607, 391);

        /* 137 */
        p.fill(rgbArr[137].R, rgbArr[137].G, rgbArr[137].B);
        p.triangle(502, 572, 555, 482, 607, 572);

        /* 138 */
        p.fill(rgbArr[138].R, rgbArr[138].G, rgbArr[138].B);
        p.triangle(555, 481, 607, 391, 660, 481);

        /* 139 */
        p.fill(rgbArr[139].R, rgbArr[139].G, rgbArr[139].B);
        p.triangle(555, 481, 607, 572, 660, 481);

        /* 140 */
        p.fill(rgbArr[140].R, rgbArr[140].G, rgbArr[140].B);
        p.triangle(607, 391, 660, 481, 712, 391);

        /* 141 */
        p.fill(rgbArr[141].R, rgbArr[141].G, rgbArr[141].B);
        p.triangle(607, 572, 660, 481, 712, 572);

        /* 142 */
        p.fill(rgbArr[142].R, rgbArr[142].G, rgbArr[142].B);
        p.triangle(660, 481, 712, 391, 765, 481);

        /* 143 */
        p.fill(rgbArr[143].R, rgbArr[143].G, rgbArr[143].B);
        p.triangle(660, 481, 712, 572, 765, 481);

        /* 144 */
        p.fill(rgbArr[144].R, rgbArr[144].G, rgbArr[144].B);
        p.triangle(713, 391, 765, 482, 817, 391);

        /* 145 */
        p.fill(rgbArr[145].R, rgbArr[145].G, rgbArr[145].B);
        p.triangle(712, 572, 765, 482, 817, 572);

        /* 146 */
        p.fill(rgbArr[146].R, rgbArr[146].G, rgbArr[146].B);
        p.triangle(765, 482, 817, 391, 870, 482);

        /* 147 */
        p.fill(rgbArr[147].R, rgbArr[147].G, rgbArr[147].B);
        p.triangle(765, 482, 818, 573, 870, 482);

        /* End of Sections */
      }

      function randomizeColor() {
        for (let i = 0; i < 148; i++) {
          rgbArr[i] = { R: p.random(50, 60), G: p.random(50, 130), B: p.random(150, 180) };
        }
      }
    }, this.computerDiv.nativeElement);
  }
}