// Instruction Button Code

const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});


// Components Button Code

const Second = document.getElementById('second');
const Second_Data = document.getElementById('Second_Data')
const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
});

const check_button = document.getElementById('check');

const bread_but=document.getElementById("breadbutton");
const supply_but=document.getElementById("supplybutton");
const input_but=document.getElementById("inputbutton");
const ic1_but=document.getElementById("ic1button");
const ic2_but=document.getElementById("ic2button");
const led_but=document.getElementById("ledbutton");

// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    bread_but.disabled=true;
    bread_but.style.cursor="not-allowed";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
        instance.addEndPoint(4.2, 'board', 'row1', 'r1', [0, 0, 0, -1, 59, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r2', [0, 0, 0, -1, 72.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r4', [0, 0, 0, -1, 99.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r5', [0, 0, 0, -1, 113, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r3', [0, 0, 0, -1, 86, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r9', [0, 0, 0, -1, 180.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r11', [0, 0, 0, -1, 221, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r8', [0, 0, 0, -1, 167, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r6', [0, 0, 0, -1, 140, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r10', [0, 0, 0, -1, 194, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r15', [0, 0, 0, -1, 275, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r7', [0, 0, 0, -1, 153.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r16', [0, 0, 0, -1, 302, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r20', [0, 0, 0, -1, 356, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r18', [0, 0, 0, -1, 329, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r21', [0, 0, 0, -1, 383, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r13', [0, 0, 0, -1, 248, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r22', [0, 0, 0, -1, 396.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r23', [0, 0, 0, -1, 410, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row1', 'r25', [0, 0, 0, -1, 437, 26], 'blue');



        instance.addEndPoint(4.2, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r33', [0, 0, 0, 1, 167, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r50', [0, 0, 0, 1, 437, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 39.5], 'blue');



        instance.addEndPoint(4.2, 'board', 'row3', 'r51', [0, 0, 0, -1, 478, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r71', [0, 0, 0, -1, 802, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 26], 'blue');
        instance.addEndPoint(4.2, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 26], 'blue');



        instance.addEndPoint(4.2, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r76', [0, 0, 0, 1, 478, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 39.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 39.5], 'blue');


        instance.addEndPoint(4.2, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row5', 'r125', [0, 0, 0, 0, 434.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 282.5], 'blue');



        instance.addEndPoint(4.2, 'board', 'row7', 'r151', [0, 0, 0, 0, 478, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r172', [0, 0, 0, -1, 814.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 269], 'blue');
        instance.addEndPoint(4.2, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 269], 'blue');


        instance.addEndPoint(4.2, 'board', 'row8', 'r176', [0, 0, 0, 1, 478, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r177', [0, 0, 0, 1, 491.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r180', [0, 0, 0, 1, 532, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r178', [0, 0, 0, 1, 505, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r182', [0, 0, 0, 1, 572.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r181', [0, 0, 0, 1, 559, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r179', [0, 0, 0, 1, 518.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r187', [0, 0, 0, 1, 653.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r183', [0, 0, 0, 1, 586, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r186', [0, 0, 0, 1, 640, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r185', [0, 0, 0, 1, 613, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r184', [0, 0, 0, 1, 599.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r188', [0, 0, 0, 1, 667, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r189', [0, 0, 0, 1, 680.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r191', [0, 0, 0, 1, 721, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r190', [0, 0, 0, 1, 694, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r192', [0, 0, 0, 1, 734.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r193', [0, 0, 0, 1, 748, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r194', [0, 0, 0, 1, 761.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r196', [0, 0, 0, 1, 802, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r195', [0, 0, 0, 1, 775, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r197', [0, 0, 0, 1, 815.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r198', [0, 0, 0, 1, 829, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r199', [0, 0, 0, 1, 842.5, 282.5], 'blue');
        instance.addEndPoint(4.2, 'board', 'row8', 'r200', [0, 0, 0, 1, 856, 282.5], 'blue');
    }

    disabledButton();
}

function inputs() {
    var x = document.getElementById("inputs");
    x.style.visibility = "visible";

    input_but.disabled=true;
    input_but.style.cursor="not-allowed";

    var inputs = new BoardController();
    inputs.setJsPlumbInstance(jsPlumb);
    inputs.setCircuitContainer('mid');

    inputs.addEndPoint(4.2, 'inputs', 'input_A', 'input_A', [0, 0, 0, 0, 40, 10], 'red');
    inputs.addEndPoint(4.2, 'inputs', 'input_B', 'input_B', [0, 0, 0, 0, 108, 10], 'red');
    inputs.addEndPoint(4.2, 'inputs', 'input_C', 'input_C', [0, 0, 0, 0, 177, 10], 'red');
    inputs.addEndPoint(4.2, 'inputs', 'input_D', 'input_D', [0, 0, 0, 0, 246, 10], 'red');
    disabledButton();
}

function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    supply_but.disabled=true;
    supply_but.style.cursor="not-allowed";

    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');

    supply.addEndPoint(7, 'supply', 'VCC', 'VCC', [0, 0, -1, 0, 40, 45], 'blue','red');
    supply.addEndPoint(7, 'supply', 'GND', 'GND', [0, 0, 1, 0, 80, 45], 'red','black');

    disabledButton();
}

function ic74138() {
    var x = document.getElementById("ic1");
    x.style.visibility = "visible";

    ic1_but.disabled=true;
    ic1_but.style.cursor="not-allowed";

    var x = document.getElementById("ic3");
    x.style.visibility = "visible";

    var ic74138 = new BoardController();
    ic74138.setJsPlumbInstance(jsPlumb);
    ic74138.setCircuitContainer('mid');

    {
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_VCC', 'ic1_VCC01', [0, 0, 1, -1, 9, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_VCC', 'ic1_VCC02', [0, 0, 1, -1, 9, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_VCC', 'ic1_VCC03', [0, 0, 1, -1, 9, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_VCC', 'ic1_VCC04', [0, 0, 1, -1, 9, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y0', 'ic1_Y01', [0, 0, 1, -1, 22.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y0', 'ic1_Y02', [0, 0, 1, -1, 22.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y0', 'ic1_Y03', [0, 0, 1, -1, 22.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y0', 'ic1_Y04', [0, 0, 1, -1, 22.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y1', 'ic1_Y11', [0, 0, 1, -1, 36, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y1', 'ic1_Y12', [0, 0, 1, -1, 36, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y1', 'ic1_Y13', [0, 0, 1, -1, 36, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y1', 'ic1_Y14', [0, 0, 1, -1, 36, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y2', 'ic1_Y21', [0, 0, 1, -1, 49.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y2', 'ic1_Y22', [0, 0, 1, -1, 49.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y2', 'ic1_Y23', [0, 0, 1, -1, 49.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y2', 'ic1_Y24', [0, 0, 1, -1, 49.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y3', 'ic1_Y31', [0, 0, 1, -1, 63, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y3', 'ic1_Y32', [0, 0, 1, -1, 63, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y3', 'ic1_Y33', [0, 0, 1, -1, 63, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y3', 'ic1_Y34', [0, 0, 1, -1, 63, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y4', 'ic1_Y41', [0, 0, 1, -1, 76.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y4', 'ic1_Y42', [0, 0, 1, -1, 76.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y4', 'ic1_Y43', [0, 0, 1, -1, 76.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y4', 'ic1_Y44', [0, 0, 1, -1, 76.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y5', 'ic1_Y51', [0, 0, 1, -1, 90, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y5', 'ic1_Y52', [0, 0, 1, -1, 90, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y5', 'ic1_Y53', [0, 0, 1, -1, 90, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y5', 'ic1_Y54', [0, 0, 1, -1, 90, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y6', 'ic1_Y61', [0, 0, 1, -1, 103.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y6', 'ic1_Y62', [0, 0, 1, -1, 103.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y6', 'ic1_Y63', [0, 0, 1, -1, 103.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y6', 'ic1_Y64', [0, 0, 1, -1, 103.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_A', 'ic1_A2', [0, 0, 0, 1, 9, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_A', 'ic1_A3', [0, 0, 0, 1, 9, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_A', 'ic1_A4', [0, 0, 0, 1, 9, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_A', 'ic1_A5', [0, 0, 0, 1, 9, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_B', 'ic1_B2', [0, 0, 0, 1, 22.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_B', 'ic1_B3', [0, 0, 0, 1, 22.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_B', 'ic1_B4', [0, 0, 0, 1, 22.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_B', 'ic1_B5', [0, 0, 0, 1, 22.5, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_C', 'ic1_C2', [0, 0, 0, 1, 36, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_C', 'ic1_C3', [0, 0, 0, 1, 36, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_C', 'ic1_C4', [0, 0, 0, 1, 36, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_C', 'ic1_C5', [0, 0, 0, 1, 36, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2A', 'ic1_G2A', [0, 0, 0, 1, 49.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2A', 'ic1_G2A', [0, 0, 0, 1, 49.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2A', 'ic1_G2A', [0, 0, 0, 1, 49.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2A', 'ic1_G2A', [0, 0, 0, 1, 49.5, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2B', 'ic1_G2B', [0, 0, 0, 1, 63, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2B', 'ic1_G2B', [0, 0, 0, 1, 63, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2B', 'ic1_G2B', [0, 0, 0, 1, 63, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G2B', 'ic1_G2B', [0, 0, 0, 1, 63, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G1', 'ic1_G1', [0, 0, 0, 1, 76.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G1', 'ic1_G1', [0, 0, 0, 1, 76.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G1', 'ic1_G1', [0, 0, 0, 1, 76.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_G1', 'ic1_G1', [0, 0, 0, 1, 76.5, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y7', 'ic1_Y72', [0, 0, 0, 1, 90, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y7', 'ic1_Y73', [0, 0, 0, 1, 90, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y7', 'ic1_Y74', [0, 0, 0, 1, 90, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_Y7', 'ic1_Y75', [0, 0, 0, 1, 90, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_GND', 'ic1_GND2', [0, 0, 0, 1, 103.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_GND', 'ic1_GND3', [0, 0, 0, 1, 103.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_GND', 'ic1_GND4', [0, 0, 0, 1, 103.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic1', 'ic1_GND', 'ic1_GND5', [0, 0, 0, 1, 103.5, 152], 'red');

    }

    {
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_VCC', 'ic3_VCC01', [0, 0, 1, -1, 9, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_VCC', 'ic3_VCC02', [0, 0, 1, -1, 9, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_VCC', 'ic3_VCC03', [0, 0, 1, -1, 9, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_VCC', 'ic3_VCC04', [0, 0, 1, -1, 9, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y0', 'ic3_Y01', [0, 0, 1, -1, 22.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y0', 'ic3_Y02', [0, 0, 1, -1, 22.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y0', 'ic3_Y03', [0, 0, 1, -1, 22.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y0', 'ic3_Y04', [0, 0, 1, -1, 22.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y1', 'ic3_Y11', [0, 0, 1, -1, 36, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y1', 'ic3_Y12', [0, 0, 1, -1, 36, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y1', 'ic3_Y13', [0, 0, 1, -1, 36, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y1', 'ic3_Y14', [0, 0, 1, -1, 36, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y2', 'ic3_Y21', [0, 0, 1, -1, 49.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y2', 'ic3_Y22', [0, 0, 1, -1, 49.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y2', 'ic3_Y23', [0, 0, 1, -1, 49.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y2', 'ic3_Y24', [0, 0, 1, -1, 49.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y3', 'ic3_Y31', [0, 0, 1, -1, 63, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y3', 'ic3_Y32', [0, 0, 1, -1, 63, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y3', 'ic3_Y33', [0, 0, 1, -1, 63, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y3', 'ic3_Y34', [0, 0, 1, -1, 63, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y4', 'ic3_Y41', [0, 0, 1, -1, 76.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y4', 'ic3_Y42', [0, 0, 1, -1, 76.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y4', 'ic3_Y43', [0, 0, 1, -1, 76.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y4', 'ic3_Y44', [0, 0, 1, -1, 76.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y5', 'ic3_Y51', [0, 0, 1, -1, 90, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y5', 'ic3_Y52', [0, 0, 1, -1, 90, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y5', 'ic3_Y53', [0, 0, 1, -1, 90, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y5', 'ic3_Y54', [0, 0, 1, -1, 90, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y6', 'ic3_Y61', [0, 0, 1, -1, 103.5, 4], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y6', 'ic3_Y62', [0, 0, 1, -1, 103.5, 17.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y6', 'ic3_Y63', [0, 0, 1, -1, 103.5, 31], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y6', 'ic3_Y64', [0, 0, 1, -1, 103.5, 44.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_A', 'ic3_A2', [0, 0, 0, 1, 9, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_A', 'ic3_A3', [0, 0, 0, 1, 9, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_A', 'ic3_A4', [0, 0, 0, 1, 9, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_A', 'ic3_A5', [0, 0, 0, 1, 9, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_B', 'ic3_B2', [0, 0, 0, 1, 22.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_B', 'ic3_B3', [0, 0, 0, 1, 22.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_B', 'ic3_B4', [0, 0, 0, 1, 22.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_B', 'ic3_B5', [0, 0, 0, 1, 22.5, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_C', 'ic3_C2', [0, 0, 0, 1, 36, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_C', 'ic3_C3', [0, 0, 0, 1, 36, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_C', 'ic3_C4', [0, 0, 0, 1, 36, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_C', 'ic3_C5', [0, 0, 0, 1, 36, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2A', 'ic3_G2A', [0, 0, 0, 1, 49.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2A', 'ic3_G2A', [0, 0, 0, 1, 49.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2A', 'ic3_G2A', [0, 0, 0, 1, 49.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2A', 'ic3_G2A', [0, 0, 0, 1, 49.5, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2B', 'ic3_G2B', [0, 0, 0, 1, 63, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2B', 'ic3_G2B', [0, 0, 0, 1, 63, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2B', 'ic3_G2B', [0, 0, 0, 1, 63, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G2B', 'ic3_G2B', [0, 0, 0, 1, 63, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G1', 'ic3_G1', [0, 0, 0, 1, 76.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G1', 'ic3_G1', [0, 0, 0, 1, 76.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G1', 'ic3_G1', [0, 0, 0, 1, 76.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_G1', 'ic3_G1', [0, 0, 0, 1, 76.5, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y7', 'ic3_Y72', [0, 0, 0, 1, 90, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y7', 'ic3_Y73', [0, 0, 0, 1, 90, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y7', 'ic3_Y74', [0, 0, 0, 1, 90, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_Y7', 'ic3_Y75', [0, 0, 0, 1, 90, 152], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_GND', 'ic3_GND2', [0, 0, 0, 1, 103.5, 111.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_GND', 'ic3_GND3', [0, 0, 0, 1, 103.5, 125], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_GND', 'ic3_GND4', [0, 0, 0, 1, 103.5, 138.5], 'red');
        ic74138.addEndPoint(4.2, 'ic3', 'ic3_GND', 'ic3_GND5', [0, 0, 0, 1, 103.5, 152], 'red');

    }
    disabledButton();
}

function ic7404() {
    var x = document.getElementById("ic2");
    x.style.visibility = "visible";

    var x = document.getElementById("ic4");
    x.style.visibility = "visible";

    var x = document.getElementById("ic5");
    x.style.visibility = "visible";

    ic2_but.disabled=true;
    ic2_but.style.cursor="not-allowed";

    var ic7404 = new BoardController();
    ic7404.setJsPlumbInstance(jsPlumb);
    ic7404.setCircuitContainer('mid');

    {
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_VCC', 'ic2_VCC1', [0, 0, 1, -1, 9, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_VCC', 'ic2_VCC2', [0, 0, 1, -1, 9, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_VCC', 'ic2_VCC3', [0, 0, 1, -1, 9, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_VCC', 'ic2_VCC4', [0, 0, 1, -1, 9, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6A', 'ic2_6A01', [0, 0, 1, -1, 22.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6A', 'ic2_6A02', [0, 0, 1, -1, 22.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6A', 'ic2_6A03', [0, 0, 1, -1, 22.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6A', 'ic2_6A04', [0, 0, 1, -1, 22.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6Y', 'ic2_6Y01', [0, 0, 1, -1, 36, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6Y', 'ic2_6Y02', [0, 0, 1, -1, 36, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6Y', 'ic2_6Y03', [0, 0, 1, -1, 36, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_6Y', 'ic2_6Y04', [0, 0, 1, -1, 36, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5A', 'ic2_5A01', [0, 0, 1, -1, 49.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5A', 'ic2_5A02', [0, 0, 1, -1, 49.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5A', 'ic2_5A03', [0, 0, 1, -1, 49.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5A', 'ic2_5A04', [0, 0, 1, -1, 49.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5Y', 'ic2_5Y01', [0, 0, 1, -1, 63, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5Y', 'ic2_5Y02', [0, 0, 1, -1, 63, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5Y', 'ic2_5Y03', [0, 0, 1, -1, 63, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_5Y', 'ic2_5Y04', [0, 0, 1, -1, 63, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4A', 'ic2_4A01', [0, 0, 1, -1, 76.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4A', 'ic2_4A02', [0, 0, 1, -1, 76.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4A', 'ic2_4A03', [0, 0, 1, -1, 76.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4A', 'ic2_4A04', [0, 0, 1, -1, 76.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4Y', 'ic2_4Y01', [0, 0, 1, -1, 90, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4Y', 'ic2_4Y02', [0, 0, 1, -1, 90, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4Y', 'ic2_4Y03', [0, 0, 1, -1, 90, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_4Y', 'ic2_4Y04', [0, 0, 1, -1, 90, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1A', 'ic2_1A02', [0, 0, 1, -1, 9, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1A', 'ic2_1A03', [0, 0, 1, -1, 9, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1A', 'ic2_1A04', [0, 0, 1, -1, 9, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1A', 'ic2_1A05', [0, 0, 1, -1, 9, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1Y', 'ic2_1Y02', [0, 0, 1, -1, 22.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1Y', 'ic2_1Y03', [0, 0, 1, -1, 22.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1Y', 'ic2_1Y04', [0, 0, 1, -1, 22.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_1Y', 'ic2_1Y05', [0, 0, 1, -1, 22.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2A', 'ic2_2A02', [0, 0, 1, -1, 36, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2A', 'ic2_2A03', [0, 0, 1, -1, 36, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2A', 'ic2_2A04', [0, 0, 1, -1, 36, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2A', 'ic2_2A05', [0, 0, 1, -1, 36, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2Y', 'ic2_2Y02', [0, 0, 1, -1, 49.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2Y', 'ic2_2Y03', [0, 0, 1, -1, 49.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2Y', 'ic2_2Y04', [0, 0, 1, -1, 49.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_2Y', 'ic2_2Y05', [0, 0, 1, -1, 49.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3A', 'ic2_3A02', [0, 0, 1, -1, 63, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3A', 'ic2_3A03', [0, 0, 1, -1, 63, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3A', 'ic2_3A04', [0, 0, 1, -1, 63, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3A', 'ic2_3A05', [0, 0, 1, -1, 63, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3Y', 'ic2_3Y02', [0, 0, 1, -1, 76.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3Y', 'ic2_3Y03', [0, 0, 1, -1, 76.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3Y', 'ic2_3Y04', [0, 0, 1, -1, 76.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_3Y', 'ic2_3Y05', [0, 0, 1, -1, 76.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_GND', 'ic2_GND02', [0, 0, 1, -1, 90, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_GND', 'ic2_GND03', [0, 0, 1, -1, 90, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_GND', 'ic2_GND04', [0, 0, 1, -1, 90, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic2', 'ic2_GND', 'ic2_GND05', [0, 0, 1, -1, 90, 152], 'red');
    }

    {
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_VCC', 'ic4_VCC1', [0, 0, 1, -1, 9, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_VCC', 'ic4_VCC2', [0, 0, 1, -1, 9, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_VCC', 'ic4_VCC3', [0, 0, 1, -1, 9, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_VCC', 'ic4_VCC4', [0, 0, 1, -1, 9, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6A', 'ic4_6A01', [0, 0, 1, -1, 22.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6A', 'ic4_6A02', [0, 0, 1, -1, 22.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6A', 'ic4_6A03', [0, 0, 1, -1, 22.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6A', 'ic4_6A04', [0, 0, 1, -1, 22.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6Y', 'ic4_6Y01', [0, 0, 1, -1, 36, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6Y', 'ic4_6Y02', [0, 0, 1, -1, 36, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6Y', 'ic4_6Y03', [0, 0, 1, -1, 36, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_6Y', 'ic4_6Y04', [0, 0, 1, -1, 36, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5A', 'ic4_5A01', [0, 0, 1, -1, 49.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5A', 'ic4_5A02', [0, 0, 1, -1, 49.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5A', 'ic4_5A03', [0, 0, 1, -1, 49.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5A', 'ic4_5A04', [0, 0, 1, -1, 49.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5Y', 'ic4_5Y01', [0, 0, 1, -1, 63, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5Y', 'ic4_5Y02', [0, 0, 1, -1, 63, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5Y', 'ic4_5Y03', [0, 0, 1, -1, 63, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_5Y', 'ic4_5Y04', [0, 0, 1, -1, 63, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4A', 'ic4_4A01', [0, 0, 1, -1, 76.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4A', 'ic4_4A02', [0, 0, 1, -1, 76.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4A', 'ic4_4A03', [0, 0, 1, -1, 76.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4A', 'ic4_4A04', [0, 0, 1, -1, 76.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4Y', 'ic4_4Y01', [0, 0, 1, -1, 90, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4Y', 'ic4_4Y02', [0, 0, 1, -1, 90, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4Y', 'ic4_4Y03', [0, 0, 1, -1, 90, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_4Y', 'ic4_4Y04', [0, 0, 1, -1, 90, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1A', 'ic4_1A02', [0, 0, 1, -1, 9, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1A', 'ic4_1A03', [0, 0, 1, -1, 9, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1A', 'ic4_1A04', [0, 0, 1, -1, 9, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1A', 'ic4_1A05', [0, 0, 1, -1, 9, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1Y', 'ic4_1Y02', [0, 0, 1, -1, 22.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1Y', 'ic4_1Y03', [0, 0, 1, -1, 22.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1Y', 'ic4_1Y04', [0, 0, 1, -1, 22.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_1Y', 'ic4_1Y05', [0, 0, 1, -1, 22.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2A', 'ic4_2A02', [0, 0, 1, -1, 36, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2A', 'ic4_2A03', [0, 0, 1, -1, 36, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2A', 'ic4_2A04', [0, 0, 1, -1, 36, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2A', 'ic4_2A05', [0, 0, 1, -1, 36, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2Y', 'ic4_2Y02', [0, 0, 1, -1, 49.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2Y', 'ic4_2Y03', [0, 0, 1, -1, 49.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2Y', 'ic4_2Y04', [0, 0, 1, -1, 49.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_2Y', 'ic4_2Y05', [0, 0, 1, -1, 49.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3A', 'ic4_3A02', [0, 0, 1, -1, 63, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3A', 'ic4_3A03', [0, 0, 1, -1, 63, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3A', 'ic4_3A04', [0, 0, 1, -1, 63, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3A', 'ic4_3A05', [0, 0, 1, -1, 63, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3Y', 'ic4_3Y02', [0, 0, 1, -1, 76.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3Y', 'ic4_3Y03', [0, 0, 1, -1, 76.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3Y', 'ic4_3Y04', [0, 0, 1, -1, 76.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_3Y', 'ic4_3Y05', [0, 0, 1, -1, 76.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_GND', 'ic4_GND02', [0, 0, 1, -1, 90, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_GND', 'ic4_GND03', [0, 0, 1, -1, 90, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_GND', 'ic4_GND04', [0, 0, 1, -1, 90, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic4', 'ic4_GND', 'ic4_GND05', [0, 0, 1, -1, 90, 152], 'red');
    }

    {
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_VCC', 'ic5_VCC1', [0, 0, 1, -1, 9, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_VCC', 'ic5_VCC2', [0, 0, 1, -1, 9, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_VCC', 'ic5_VCC3', [0, 0, 1, -1, 9, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_VCC', 'ic5_VCC4', [0, 0, 1, -1, 9, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6A', 'ic5_6A01', [0, 0, 1, -1, 22.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6A', 'ic5_6A02', [0, 0, 1, -1, 22.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6A', 'ic5_6A03', [0, 0, 1, -1, 22.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6A', 'ic5_6A04', [0, 0, 1, -1, 22.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6Y', 'ic5_6Y01', [0, 0, 1, -1, 36, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6Y', 'ic5_6Y02', [0, 0, 1, -1, 36, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6Y', 'ic5_6Y03', [0, 0, 1, -1, 36, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_6Y', 'ic5_6Y04', [0, 0, 1, -1, 36, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5A', 'ic5_5A01', [0, 0, 1, -1, 49.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5A', 'ic5_5A02', [0, 0, 1, -1, 49.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5A', 'ic5_5A03', [0, 0, 1, -1, 49.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5A', 'ic5_5A04', [0, 0, 1, -1, 49.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5Y', 'ic5_5Y01', [0, 0, 1, -1, 63, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5Y', 'ic5_5Y02', [0, 0, 1, -1, 63, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5Y', 'ic5_5Y03', [0, 0, 1, -1, 63, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_5Y', 'ic5_5Y04', [0, 0, 1, -1, 63, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4A', 'ic5_4A01', [0, 0, 1, -1, 76.5, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4A', 'ic5_4A02', [0, 0, 1, -1, 76.5, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4A', 'ic5_4A03', [0, 0, 1, -1, 76.5, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4A', 'ic5_4A04', [0, 0, 1, -1, 76.5, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4Y', 'ic5_4Y01', [0, 0, 1, -1, 90, 4], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4Y', 'ic5_4Y02', [0, 0, 1, -1, 90, 17.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4Y', 'ic5_4Y03', [0, 0, 1, -1, 90, 31], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_4Y', 'ic5_4Y04', [0, 0, 1, -1, 90, 44.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1A', 'ic5_1A02', [0, 0, 1, -1, 9, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1A', 'ic5_1A03', [0, 0, 1, -1, 9, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1A', 'ic5_1A04', [0, 0, 1, -1, 9, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1A', 'ic5_1A05', [0, 0, 1, -1, 9, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1Y', 'ic5_1Y02', [0, 0, 1, -1, 22.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1Y', 'ic5_1Y03', [0, 0, 1, -1, 22.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1Y', 'ic5_1Y04', [0, 0, 1, -1, 22.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_1Y', 'ic5_1Y05', [0, 0, 1, -1, 22.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2A', 'ic5_2A02', [0, 0, 1, -1, 36, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2A', 'ic5_2A03', [0, 0, 1, -1, 36, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2A', 'ic5_2A04', [0, 0, 1, -1, 36, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2A', 'ic5_2A05', [0, 0, 1, -1, 36, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2Y', 'ic5_2Y02', [0, 0, 1, -1, 49.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2Y', 'ic5_2Y03', [0, 0, 1, -1, 49.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2Y', 'ic5_2Y04', [0, 0, 1, -1, 49.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_2Y', 'ic5_2Y05', [0, 0, 1, -1, 49.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3A', 'ic5_3A02', [0, 0, 1, -1, 63, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3A', 'ic5_3A03', [0, 0, 1, -1, 63, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3A', 'ic5_3A04', [0, 0, 1, -1, 63, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3A', 'ic5_3A05', [0, 0, 1, -1, 63, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3Y', 'ic5_3Y02', [0, 0, 1, -1, 76.5, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3Y', 'ic5_3Y03', [0, 0, 1, -1, 76.5, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3Y', 'ic5_3Y04', [0, 0, 1, -1, 76.5, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_3Y', 'ic5_3Y05', [0, 0, 1, -1, 76.5, 152], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_GND', 'ic5_GND02', [0, 0, 1, -1, 90, 111.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_GND', 'ic5_GND03', [0, 0, 1, -1, 90, 125], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_GND', 'ic5_GND04', [0, 0, 1, -1, 90, 138.5], 'red');
        ic7404.addEndPoint(4.2, 'ic5', 'ic5_GND', 'ic5_GND05', [0, 0, 1, -1, 90, 152], 'red');
    }

    disabledButton();
}

function led() {
    var x = document.getElementById("leds");
    x.style.visibility = "visible";

    led_but.disabled=true;
    led_but.style.cursor="not-allowed";

    var led = new BoardController();
    led.setJsPlumbInstance(jsPlumb);
    led.setCircuitContainer('mid');

    led.addEndPoint(4.2, 'led0', 'led0_C', 'led0_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led0', 'led0_C', 'led0_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led0', 'led0_C', 'led0_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led0', 'led0_C', 'led0_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led0', 'led0_A', 'led0_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led0', 'led0_A', 'led0_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led0', 'led0_A', 'led0_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led0', 'led0_A', 'led0_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led1', 'led1_C', 'led1_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led1', 'led1_C', 'led1_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led1', 'led1_C', 'led1_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led1', 'led1_C', 'led1_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led1', 'led1_A', 'led1_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led1', 'led1_A', 'led1_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led1', 'led1_A', 'led1_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led1', 'led1_A', 'led1_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led2', 'led2_C', 'led2_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led2', 'led2_C', 'led2_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led2', 'led2_C', 'led2_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led2', 'led2_C', 'led2_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led2', 'led2_A', 'led2_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led2', 'led2_A', 'led2_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led2', 'led2_A', 'led2_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led2', 'led2_A', 'led2_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led3', 'led3_C', 'led3_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led3', 'led3_C', 'led3_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led3', 'led3_C', 'led3_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led3', 'led3_C', 'led3_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led3', 'led3_A', 'led3_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led3', 'led3_A', 'led3_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led3', 'led3_A', 'led3_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led3', 'led3_A', 'led3_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led4', 'led4_C', 'led4_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led4', 'led4_C', 'led4_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led4', 'led4_C', 'led4_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led4', 'led4_C', 'led4_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led4', 'led4_A', 'led4_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led4', 'led4_A', 'led4_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led4', 'led4_A', 'led4_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led4', 'led4_A', 'led4_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led5', 'led5_C', 'led5_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led5', 'led5_C', 'led5_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led5', 'led5_C', 'led5_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led5', 'led5_C', 'led5_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led5', 'led5_A', 'led5_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led5', 'led5_A', 'led5_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led5', 'led5_A', 'led5_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led5', 'led5_A', 'led5_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led6', 'led6_C', 'led6_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led6', 'led6_C', 'led6_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led6', 'led6_C', 'led6_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led6', 'led6_C', 'led6_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led6', 'led6_A', 'led6_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led6', 'led6_A', 'led6_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led6', 'led6_A', 'led6_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led6', 'led6_A', 'led6_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led7', 'led7_C', 'led7_C2', [0, 0, 0, 1, 7, 53.5], 'red');
    led.addEndPoint(4.2, 'led7', 'led7_C', 'led7_C3', [0, 0, 0, 1, 7, 66], 'red');
    led.addEndPoint(4.2, 'led7', 'led7_C', 'led7_C4', [0, 0, 0, 1, 7, 80.5], 'red');
    led.addEndPoint(4.2, 'led7', 'led7_C', 'led7_C5', [0, 0, 0, 1, 7, 94], 'red');
    led.addEndPoint(4.2, 'led7', 'led7_A', 'led7_A2', [0, 0, 0, 0, 19.5, 53.5], 'red');
    led.addEndPoint(4.2, 'led7', 'led7_A', 'led7_A3', [0, 0, 0, 0, 19.5, 66], 'red');
    led.addEndPoint(4.2, 'led7', 'led7_A', 'led7_A4', [0, 0, 0, 0, 19.5, 80.5], 'red');
    led.addEndPoint(4.2, 'led7', 'led7_A', 'led7_A5', [0, 0, 0, 0, 19.5, 94], 'red');


    led.addEndPoint(4.2, 'led8', 'led8_C', 'led8_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led8', 'led8_C', 'led8_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led8', 'led8_C', 'led8_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led8', 'led8_C', 'led8_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led8', 'led8_A', 'led8_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led8', 'led8_A', 'led8_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led8', 'led8_A', 'led8_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led8', 'led8_A', 'led8_A5', [0, 0, 0, 0, 19.5, 90], 'red');


    led.addEndPoint(4.2, 'led9', 'led9_C', 'led9_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led9', 'led9_C', 'led9_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led9', 'led9_C', 'led9_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led9', 'led9_C', 'led9_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led9', 'led9_A', 'led9_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led9', 'led9_A', 'led9_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led9', 'led9_A', 'led9_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led9', 'led9_A', 'led9_A5', [0, 0, 0, 0, 19.5, 90], 'red');


    led.addEndPoint(4.2, 'led10', 'led10_C', 'led10_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led10', 'led10_C', 'led10_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led10', 'led10_C', 'led10_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led10', 'led10_C', 'led10_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led10', 'led10_A', 'led10_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led10', 'led10_A', 'led10_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led10', 'led10_A', 'led10_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led10', 'led10_A', 'led10_A5', [0, 0, 0, 0, 19.5, 90], 'red');


    led.addEndPoint(4.2, 'led11', 'led11_C', 'led11_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led11', 'led11_C', 'led11_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led11', 'led11_C', 'led11_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led11', 'led11_C', 'led11_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led11', 'led11_A', 'led11_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led11', 'led11_A', 'led11_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led11', 'led11_A', 'led11_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led11', 'led11_A', 'led11_A5', [0, 0, 0, 0, 19.5, 90], 'red');


    led.addEndPoint(4.2, 'led12', 'led12_C', 'led12_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led12', 'led12_C', 'led12_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led12', 'led12_C', 'led12_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led12', 'led12_C', 'led12_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led12', 'led12_A', 'led12_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led12', 'led12_A', 'led12_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led12', 'led12_A', 'led12_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led12', 'led12_A', 'led12_A5', [0, 0, 0, 0, 19.5, 90], 'red');


    led.addEndPoint(4.2, 'led13', 'led13_C', 'led13_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led13', 'led13_C', 'led13_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led13', 'led13_C', 'led13_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led13', 'led13_C', 'led13_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led13', 'led13_A', 'led13_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led13', 'led13_A', 'led13_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led13', 'led13_A', 'led13_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led13', 'led13_A', 'led13_A5', [0, 0, 0, 0, 19.5, 90], 'red');


    led.addEndPoint(4.2, 'led14', 'led14_C', 'led14_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led14', 'led14_C', 'led14_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led14', 'led14_C', 'led14_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led14', 'led14_C', 'led14_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led14', 'led14_A', 'led14_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led14', 'led14_A', 'led14_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led14', 'led14_A', 'led14_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led14', 'led14_A', 'led14_A5', [0, 0, 0, 0, 19.5, 90], 'red');


    led.addEndPoint(4.2, 'led15', 'led15_C', 'led15_C2', [0, 0, 0, 1, 7, 49.5], 'red');
    led.addEndPoint(4.2, 'led15', 'led15_C', 'led15_C3', [0, 0, 0, 1, 7, 62], 'red');
    led.addEndPoint(4.2, 'led15', 'led15_C', 'led15_C4', [0, 0, 0, 1, 7, 76.5], 'red');
    led.addEndPoint(4.2, 'led15', 'led15_C', 'led15_C5', [0, 0, 0, 1, 7, 90], 'red');
    led.addEndPoint(4.2, 'led15', 'led15_A', 'led15_A2', [0, 0, 0, 0, 19.5, 49.5], 'red');
    led.addEndPoint(4.2, 'led15', 'led15_A', 'led15_A3', [0, 0, 0, 0, 19.5, 62], 'red');
    led.addEndPoint(4.2, 'led15', 'led15_A', 'led15_A4', [0, 0, 0, 0, 19.5, 76.5], 'red');
    led.addEndPoint(4.2, 'led15', 'led15_A', 'led15_A5', [0, 0, 0, 0, 19.5, 90], 'red');

    disabledButton();
}


function disabledButton()
{

    
    
  if(window.getComputedStyle(document.getElementById('board')).visibility === "visible" && window.getComputedStyle(document.getElementById('leds')).visibility === "visible" && 
  window.getComputedStyle(document.getElementById('ic1')).visibility === "visible" && window.getComputedStyle(document.getElementById('ic2')).visibility === "visible" &&
  window.getComputedStyle(document.getElementById('ic3')).visibility === "visible" && window.getComputedStyle(document.getElementById('ic4')).visibility === "visible" &&
  window.getComputedStyle(document.getElementById('ic5')).visibility === "visible" && 
   window.getComputedStyle(document.getElementById('supply')).visibility === "visible" && 
  window.getComputedStyle(document.getElementById('input_a')).visibility === "visible" &&  window.getComputedStyle(document.getElementById('input_b')).visibility === "visible" &&
  window.getComputedStyle(document.getElementById('input_c')).visibility === "visible" &&  window.getComputedStyle(document.getElementById('input_d')).visibility === "visible"
  )
  {
  check_button.disabled=false;
  Second.disabled=true;
  Second.style.cursor="not-allowed";  
     
  }
}
