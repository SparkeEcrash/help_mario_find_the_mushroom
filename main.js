var mushroom_block_order = [];
var last_mushroom_picked;

var sound_coin = new Audio("sound/coin.wav");
var sound_jump = new Audio("sound/jump.wav");
var sound_mushroom = new Audio("sound/mushroom.wav");
var sound_congratulation = new Audio("sound/congratulation.wav");
var sound_mamma_mia = new Audio("sound/mamma_mia.wav");
var sound_course_clear = new Audio("sound/course_clear.wav");
var sound_lost_a_life = new Audio("sound/lost_a_life.wav");
var sound_yeah_ha_ha_ha = new Audio("sound/yeah_ha_ha_ha.wav");
var sound_good_news = new Audio("sound/good_news.wav");
var sound_here_we_go = new Audio("sound/here_we_go.wav");

var up_distance = "-=165%";
var down_distance = "+=165%";

function play_sound_congratulation() {
    sound_congratulation.play();
}

function play_sound_mamma_mia() {
    sound_mamma_mia.play();
}

function show_play_again() {
    $('#message h1').text('Play again?').css('width', '30%').fadeIn(120).fadeOut(120).fadeIn(120).fadeIn(120).fadeOut(120).fadeIn(120);

    function add_refresh_handler() {
        $("#message h1").unbind().click(refresh);
    }

    setTimeout(add_refresh_handler, 710);
}

function get_numbers() {
    var good_mushroom_order;
    var bad_mushroom_order;
    var order_array = [];
    while (good_mushroom_order === bad_mushroom_order) {
        good_mushroom_order = Math.floor(Math.random() * 10) + 1;
        bad_mushroom_order = Math.floor(Math.random() * 10) + 1;
    }
    order_array[0] = good_mushroom_order;
    order_array[1] = bad_mushroom_order;

    return order_array;
}


function box_animation(box) {
    $(box).css('display', 'none');
    $(box).siblings(".opened").css('display', 'block');
    $(box).siblings(".opened").effect("shake", {direction: "up", distance: "15", times: "1"});
}

function mario_animation(box) {
    var order = $(box).data('number');
    var mario_id;
    switch (order) {
        case 1:
            mario_id = 'one-mario';
            break;
        case 2:
            mario_id = 'two-mario';
            break;
        case 3:
            mario_id = 'three-mario';
            break;
        case 4:
            mario_id = 'four-mario';
            break;
        case 5:
            mario_id = 'five-mario';
            break;
        case 6:
            mario_id = 'six-mario';
            break;
        case 7:
            mario_id = 'seven-mario';
            break;
        case 8:
            mario_id = 'eight-mario';
            break;
        case 9:
            mario_id = 'nine-mario';
            break;
        case 10:
            mario_id = 'ten-mario';
            break;
    }

    $('#' + mario_id).fadeIn(100).animate({
        "margin-top": "-=30px",
    }, 80, function () {
        $('#' + mario_id).animate({
            "margin-top": "+=30px"
        }, 80, function () {
            $('#' + mario_id).fadeOut(100);
        });
    });
    sound_jump.play();

}

function pop_box(box) {
    var inside_item;
    var the_guess = $(box).data('number');
    var the_correct_number = mushroom_block_order[0];
    var the_wrong_number = mushroom_block_order[1];

    if (the_guess === the_wrong_number) {
        inside_item = $(box).siblings(".bad_mushroom");
        last_mushroom_picked = $(inside_item).attr('id');
        $("#message h1").text('You killed Mario!');
        $(".box").addClass('popped');
        setTimeout('show_play_again()', 3000);
    } else if (the_guess > the_correct_number) {
        inside_item = $(box).siblings(".coin");
        $("#message h1").text('To the left!').fadeIn(120).fadeOut(120).fadeIn(120).fadeIn(120).fadeOut(120).fadeIn(120);
    } else if (the_guess < the_correct_number) {
        inside_item = $(box).siblings(".coin");
        $("#message h1").text('To the right!').fadeIn(120).fadeOut(120).fadeIn(120).fadeIn(120).fadeOut(120).fadeIn(120);
    } else {
        inside_item = $(box).siblings(".mushroom");
        last_mushroom_picked = $(inside_item).attr('id');
        $("#message h1").text('You found the mushroom!');
        $(".box").addClass('popped');
        setTimeout('show_play_again()', 7500);
    }

    if ($(inside_item).hasClass('coin')) {
        sound_coin.cloneNode(true).play();
        $(inside_item).css('display', 'block').animate({
            "margin-top": up_distance,
        }, function () {
            $(inside_item).animate({
                "margin-top": down_distance
            });
        })
    } else {
        sound_mushroom.play();
        if ($(inside_item).hasClass('mushroom')) {
            sound_course_clear.play();
            setTimeout('play_sound_congratulation()', 1000);
        } else {
            sound_lost_a_life.play();
            setTimeout('play_sound_mamma_mia()', 1000);
        }
        $(inside_item).css('display', 'block').animate({
            "margin-top": up_distance
        });
    }
}

function submit_guess() {
    var box = this;
    if (!$(box).hasClass('popped')) {
        $(box).addClass('popped');
        box_animation(box);
        pop_box(box);
        mario_animation(box);
    }
}

function refresh() {
    $("#message h1").off();
    console.log("refreshed");
    sound_yeah_ha_ha_ha.play();
    $('.coin').css('display', 'none');
    $('#' + last_mushroom_picked).animate({
        "margin-top": down_distance
    }, function () {
        $('#' + last_mushroom_picked).css('display', 'none');
    });
    $('.opened').css('display', 'none');
    $('.box').css('display', 'block').removeClass('popped');
    $("#message h1").css('width','70%');
    initialize_game();
}

function initialize_game() {
    $("#message h1").text('Help Mario find the mushroom!');
    $(".box").click(submit_guess);
    mushroom_block_order = get_numbers();
    console.log(mushroom_block_order);
}

function remove_intro_screen() {
    $("#intro-screen").fadeOut(1000);
    sound_good_news.play();
    sound_here_we_go.play();
    $("#intro-screen h1").fadeIn(120).fadeOut(120).fadeIn(120).fadeIn(120).fadeOut(120).fadeIn(120);
}

$("body").ready(function () {
    $("#intro-screen h1").click(remove_intro_screen);
    initialize_game();
});

