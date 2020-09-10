const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const { PromiseProvider } = require("mongoose");

const Game = {
    levels:{
        2:{xp:10,
            new:true},
        3:{xp:20,
            new:true},
        4:{xp:30,
            new:true},
        5:{xp:40,
            new:true},
        6:{xp:50,
            new:true},
       

    },
    
    player:{
        sneak:1,
        speed:1,
        strength:1,
        speech:1,
        health:20,
        magic:1,
        MP:10,
        bag:['HealthPotion5'],
        spells:[],
        level:1,
        weapon:'Stick',
        body:false,
        head:false,
        location:'BeachHub1',
        xp:10,
        maxHP:20,
        maxMP:10
    },
    spells:{

    },
    weapons:{
        Sword:{
            Name:'Sword',
            Attack:3,
            Magic:1,
            
        },
        Stick:{
            Name:'Stick',
            Attack:1,
            Magic:1
        }
    },
    enemies:{
        SandWorm:{
            name:'Sand Worm',
            health:10,
            attackMin:10,
            damage:2,
            checkpoint:'ShrineCheckpoint',
            xp:10
                    }
    },
    heads:{
        CoconutHat:{

        }
    },
    bodies:{
        CoconutBra:{
            

        }
    },
    items:{
        Stick:{
            type:'weapon',
            Attack:1,
            Magic:1,
                },
        Sword:{
            type:'weapon',
            Attack:3,
            Magic:1,
        },
        HealthPotion5:{
            type:'potion',
            stat:'health',
            mod:5
        },
        Bark:{
            type:'craft',

        },
        RainbowBerries:{
            type:'mainQuest',
        },
        SpiderWeb:{
            type:'craft'
        }



    }
    ,



    game:{

      
        
           
     
        intro:{
            where:'firstShore',
            src:"https://lh3.googleusercontent.com/pw/ACtC-3euveF8n4fhhLPcfK_B9gzemc7Fi1dxdphTHD0XITkZdWgNNBUvLlsKVzcX3aL2jZnOKWAPvvROzQ9jD6WFeGRa9dHd4nDD9rauHpf8Af0-1frcSd_cNs5s8hZ5zGDwOlI_eRZ5Rn9Vfzs2OpLUa74n3Q=w1213-h903-no?authuser=0",
            dialog:"You wake up to the waves crashing around you. Blue as far as the eye can see. You sit upon small rock formation that looks like it was built rather than sculpted by the ocean. You climb atop the rocks and can barley make out an island on the horizon. ",
            responses:['next'],
            next:'intro2'

        },
        intro2:{
            where:'firstShore',
            src:"https://lh3.googleusercontent.com/pw/ACtC-3euveF8n4fhhLPcfK_B9gzemc7Fi1dxdphTHD0XITkZdWgNNBUvLlsKVzcX3aL2jZnOKWAPvvROzQ9jD6WFeGRa9dHd4nDD9rauHpf8Af0-1frcSd_cNs5s8hZ5zGDwOlI_eRZ5Rn9Vfzs2OpLUa74n3Q=w1213-h903-no?authuser=0",
            dialog:"There is a rowboat tied up to a dock on the other side of the island. ",
            responses:['next'],
            next:'wall'

        },
        wall:{
            where:'firstShore',
            src:'https://lh3.googleusercontent.com/pw/ACtC-3eAIE28YY7WfPSyVH3g0CiaTt-U_huwXIroyxo3_HtrhbJf4q11ald29kAywfmwf7e1AFpT8G8yYpfklLTOd5Gzh7pqDgFsaR8LCD7tWR6fLCnxYqZOg7-69bpt9nGJIRUHPLfUWhxXJXoBj8h6ppOOMQ=w1031-h763-no?authuser=0',
            dialog:'You climb on the boat, untie the rope and push off.',
            responses:['next'],
            next:'island'
        },
        island:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3eAIE28YY7WfPSyVH3g0CiaTt-U_huwXIroyxo3_HtrhbJf4q11ald29kAywfmwf7e1AFpT8G8yYpfklLTOd5Gzh7pqDgFsaR8LCD7tWR6fLCnxYqZOg7-69bpt9nGJIRUHPLfUWhxXJXoBj8h6ppOOMQ=w1031-h763-no?authuser=0',
            dialog:'After rowing for an hour or so you are about 100 yards from the island, you keep thinking you see a flash coming from the island out of the corner of your eye but every time you look nothing is there. The water has become to shallow for your boat so you will have to wade to the beach.',
            next:'owl'
        },
        owl:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog:'Soaking wet and exhausted you collapsed on the sand with releif. Just as you start to nod off the flash is there again!  Startled you sit up and finally see the source of the light. An Owl. ',
            next:'owlIntro'

        },
        owlIntro:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog: 'In your head you hear, "Welcome to the Distant Temple, please dont be alarmed,I am here to help you. You are going to have to help me in order to help yourself though."',
            next:'owlIntro2'
        },
        owlIntro2:{
            src: 'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog:'So I need 3 things from you. There is a cave to your left that was recently sealed off by a fallen tree, and in there is the ONLY place that my favorite berry grows. Forward there is a long path that will lead you to a friend of mine that is holding a ring for me, do be warned he does bite sometimes.',
            next:'owlIntro3'
        },
        owlIntro3:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog:'To the right along the beach are sleeping rocks, if you wake them up it will not be pretty. But there is an old sword on a shrine that you will need before I can get you off this Island.',
            next:'boatGone'
        }, 
        boatGone:{
            src:'boat bye bye pic',
            dialog:'Oh also your boat seems to have left you, and on its way back home. Such a good boat...',
            next:'BeachHub1'
        },
        BeachHub1:{
            // here is where the quest area should propogate with the current quests. Should be a "hub area that you can go to each place and put in a save state here also"
            movement:['Cave','Rocks','Jungle'],
            dialog:'Where are you going?',
            next:'Obelisk',
            checkpoint:"allThree",
            src:'https://lh3.googleusercontent.com/pw/ACtC-3e3u5jsSWNdJStvJF5lllH7fMfA0xsTbZE_GJIx7t24jMCy4RmPlviJ8jofiU8hUM8Z4mdzus8tMCbEA4wiKRlHe2nfU06BjnD3FlwdCCYDfKyjkTloNvhGKOwuTnWR3M_c902GMm_UivbdmXUq8Q2esw=w1180-h843-no?authuser=0'
        
        },
        Cave:{
            checkpoint:'log',
            choice:['Attack Log','Move Log'],
            dialog:'A large log blocks the entrance to the cave, what would you like to do?',
            enter:'InsideCave',
            back:'BeachHub1',
            dialog2:'The log is now out of the way, cool air rushes past you from the mouth of the cave. Go in or back? '
            

            
        },
        LogBreaks:{
            item:'Bark',
            src:'cave bark',
            dialog:'You break the log in half with your strength. A piece of the log splinters off, you pick it up and put it in your pocket.',
            next:'LogCheckpoint',
            

        }, 
        LogAttackFail:{
            damage:2,
            dialog:'You lose health, be carful!',
            next:'Cave',
            
            

        },
        LogCheckpoint:{
            checkpointReached:'log',
            dialog:"You have Cleared the log CHECKPOINT",
            next:'Cave'


        },
        InsideCave:{
            dialog:'You walk into the cave, water drips from stalagmites. Under each Stalagmite is a bush dotted with rainbow colored berries. Each bush also has a small lizard sleeping in front of it. All you can make out is the size of each lizard. All are different sizes ranging from a few inches to about a foot long. Which Lizard"s bush would you like to choose? ',
            movement:['Small Lizard','Medium With 2 Tails','Large no tail'],
            back:'Cave',
            checkpoint:'lizard',
            dialog2:'The lizards and the bushes seem to have turned into stalagmite versions of themselves...  ',
            enter:'BeachHub1'
        },
        SmallLizard:{
            choice:['Sneak Past Lizard', 'Attack on the lizard'],
            dialog:'There is a small lizard curled up, Would you rather step on the lizard or sneak past?'

        },
        MediumWith2Tails:{
            choice:['Sneak Past Lizard','Attack on the lizard'],
            dialog:'There is a medium sized lizard with 2 tails. What do you do?'
        },
        Largenotail:{
            choice:['Sneak Past Lizard','Attack on the lizard'],
            dialog:'The largest lizard has no tail and is snoring load. What do you do?'

        },
        LizardSneakSucc:{
            dialog:'You sneak past the sleeping lizard and pick one berry of each color. Without making a sound you sneak back out side the cave',
            next:'LizardCheckpoint',
            item:'RainbowBerries'
            


        },
        LizardAttackSucc:{
            dialog:'You crush the lizard Under your boot',
            next:'LizardCheckpoint',
            item:'RainbowBerries'
            


        },
        LizardFail:{
            dialog:'The lizard bites you but not before you grab the berries',
            next:'LizardCheckpoint',
            item:'RainbowBerries',
            damage:'2'
        },
        LizardCheckpoint:{
            dialog:'Checkpoint Reached!',
            next:'InsideCave',
            checkpointReached:'lizard',
        },
        Jungle:{
             dialog:'The path through the jungle is thick with vegitation. Deeper and Deeper into the jungle you go hoping that the Owl"s friend is easy to spot...',
             next:'DeepJungle',
             back:'BeachHub1'
             
        },
        DeepJungle:{
            dialog:'Spiderwebs block your path. There is a sign on the other side of the webs but you cant read it from here. What will you do?',
            choice:['Sneak Past The Webs','Attack The Webs'],
            back:'Jungle',
            checkpoint:'spider',
            dialog2:'The webs seem to have just disintegrated, your path is clear.',
            enter:"Sign"

        },
        SpiderSneakSucc:{
            dialog:'You carefully  sneak past the webs',
            next:'SpiderWeb',
            

            
        },
        SpiderSneakFail:{
            dialog:'You brush the webs with your shoulder, thousands of spiders stream down the web! You run but not fast enough! You are bitten!',
            damage:4,
            next:"SpiderWeb"
        },
        SpiderWeb:{
            dialog:'You pocket some of the rope like webs',
            item:'Spiderweb',
            next:'SpiderCheckpoint',

        },
        SpiderCheckpoint:{
            dialog:'Spider Checkpoint reached',
            checkpointReached:'spider',
            next:'Sign'
        },
        MoveLogSucc:{
            dialog:'You move the log out of your path.',
            next:'LogCheckpoint',
            item:"Grub"

        },
        MoveLogFail:{
            dialog:'You try hard to move the log but you only pick up a few inches then drop it on your toe! Take 2 Damage',
            damage:2,
            next:'Cave'
        },
        Sign:{
            dialog:'Sign Reads: "Welcome, I am Home". It is places next to a shallow hole. ',
            next:'Hole'
        },
        Hole:{
            dialog:'At the bottom of the hole, a snake is curled and ready to strike. "Welcome to my home! I bet that Owl sent you to take my ring." as the snake uncoils you catch a the shine of gold at the tip of its tail. What will you do?  "',
            give:'Grub',
            choice:['Attack the Snake', 'Ask Snake for the Ring'],
            checkpoint:'hole',
            dialog2:'Would you like to Help the poor guy?',
            enter:'Help The Snake',
            back:'BeachHub1'

        },
        AttackSnakeSucc:{
            dialog:'You jump down on to the snake and grab the ring before the snake can react you are out of the hole, ring in hand!',

            next:'Ring'
        },
        AttackSnakeFail:{
            dialog:'You jump in the hole but the snake moves, you grab the ring, but before you leave the hole the snake bites you! Take 4 Damage! ',
            damage:4,
            next:"Ring"
        },
        AskSnakeSucc:{
            dialog:'You ask the snake nicely for the Owl ring. After a second the answer is clear as the snake moves off of the ring. "Okay, take it, no use to me anyways!" You pick up the Ring',
            next:'Ring'
        },
        AskSnakeFail:{  
            dialog:'"FIGHT ME FOR IT!',
            choice:['Attack the Snake'],
            

        },
        Ring:{
            dialog:'You pocket the Gold ring with a blue stone',
            item:'Ring',
            next:'HoleCheckpoint'
        },
        HoleCheckpoint:{
            dialog:'As you leave the hole it collapses around the snake, you can hear muffled screams coming from the ruble',
            checkpointReached:'hole',
            next:'Hole'
        },
        HelpTheSnake:{
            dialog:'You cant help....',
            back:'Hole',
        },
        AttackWebSucc:{
            dialog:'You run so fast through the webs that the spiders dont have time to bite you.',
            next:'SpiderWeb'
        },
        AttackWebFail:{
            dialog:'You are to slow, the spiders rush you, biting your exposed skin! Take 4 damage',
            damage:4,
            next:'SpiderWeb'
        },
        Rocks:{
            dialog:"The boulders move up and down. You can feel warm air coming from under them. The only passage is through 2 of them. What would you like to do?",
            choice:['Run Through The Rocks','Sneak Though The Rocks', 'Ask Rock For Safe Passage'],
            dialog2: 'The rocks know you are not a threat so they let you pass',
            checkpoint:'rock',
            enter:'BehindRocks'
        },
        RunRockSucc:{
            dialog:'Sprinting as fast as you can you move past the rocks before they can close the passageway',
            next:'BehindRocks'
        },
        RunRockFail:{
            dialog:'You run face first into the boulders. They seem to chuckle as you collect yourself. Take 3 damage',
            next:'Rocks',
            damage:3


        },
        SneakRockSucc:{
            dialog:"You walk past the rocks and they never knew you were there....",
            next:'BehindRocks'

        },
        SneakRockFail:{
            dialog:'The boulders close the passage as you approach it....',
            next:'Rocks'
        },
        AskRock:{
            dialog:"Sure thing! Thank you for asking nicely! RockPoint reached!",
            checkpointReached:'rock',
            next:'BehindRocks'
        },
        BehindRocks:{
            dialog:'You can make out a small shrine at the edge of the Jungle. You walk to the shrine.',
            next:'Shrine'
        },
        Shrine:{
            dialog:'Carved stone with characters you have never seen before on it. Laying on the shrine is the sword that the Owl told you about.',
            next:'Sword',
            checkpoint:'sandWorm',
            dialog2:'Only a pile of sand remains...',
            enter:'BeachHub1'


        },
        Sword:{
            dialog:'This old sword has seen better days but is still sharp. You nik your finger with the blade. A small drop of blood lands on the sand',
            weapon:'Sword', 
            next:'SandWorm'
        },
        ShrineCheckpoint:{
            dialog:'The worms flesh turns to sand, it lands and bursts into a small pile of sand...',
            checkpointReached:'sandWorm',
            next:'Shrine'
        },
        SandWorm:{
            dialog:'A large worm burst from the sand where your blood dropped onto the sand. You must fight him to get back to get back to the path or try to make a run for it.  ',
            enemy:'SandWorm',
            next:'ShrineCheckpoint',
        
        },
        LevelUP:{
            dialog:'WOW you leveled up! Please select a trait to increase by 1. You also get 5 extra Hp on every level',
            level:['Speed',"Strength",'Magic'],
            levelBack:'BeachHub1'

        },
     











      

    },
    save:'intro',
    checkPoint:{
        log:false,
        lizard:false,
        spider:false,
        rock:false,
        shrine:false,
        sandWorm:false, 
    }
  

}







router.post('/newGame', function (req, res, next) {
    //need to add the players to the game Model

    console.log(req.body)
    let j = 1

    

    console.log(j)

    db.Game.create({ game: Game })
        .then((data) => {
            console.log(data)
            // function that will put the players nested in the correct spot in the game data
            db.User.findOneAndUpdate(
                { email:req.body.email},
                { $push: { games: data._id } },
                function (err, data) {
                    console.log(err)
                }
            )

           



            // write a map here that will push each player to the array



        })



})
router.get('/:id', function (req, res, callback) {

    db.Game.findById(req.params.id)
        .then(Game => {
            console.log(Game)
            res.json(Game)
        })
})
router.post('/:id', function (req, res, callback) {

    db.Game.findOneAndUpdate({ _id: req.params.id },
        { game: req.body }
    ).then(data => { console.log(data) }

    )
})

module.exports = router