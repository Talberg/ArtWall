import React from 'react'
import ImageHolder from '../ImageHolder/ImageHolder'
import API from '../../utils/API'
var d20 = require('d20')

function TextArea(props) {
    let setRooms = props.setRooms
    let rooms = props.rooms
    let player = props.rooms.player
    let saveState = props.rooms.game[props.rooms.save]
    let save = saveState.next
    console.log(save)
    console.log(saveState)
    let enemy= rooms.enemies[saveState.enemy]
    let dialog = saveState.dialog
    let CurrentWeapon = rooms.weapons[player.weapon]
    let NewWeapon = rooms.weapons[saveState.weapon]
    console.log(CurrentWeapon)

    function AttackEnemy() {
        let playerRoll = 11
        // roll(21)+parseInt(CurrentWeapon.Attack)
        if(playerRoll>enemy.attackMin){
            // add the weapon damage and then the attack of the player.
            let damage = parseInt(player.strength) + parseInt(CurrentWeapon.Attack)
            console.log(damage)
            let EnemyNewHealth= parseInt(enemy.health)- damage
            console.log(EnemyNewHealth)
            setRooms({
                ...rooms,
                enemies:{...rooms.enemies,
                    [saveState.enemy]:{
                        ...enemy,
                        health:EnemyNewHealth
                    }
                },
                game:{...rooms.game,
                    AttackEnemySucc:{
                
                        dialog:` Your attack lands and ${enemy.name} Takes ${damage} `,
                        next:saveState.enemy
                    }        
                },
                save:'AttackEnemySucc',

            })
            


        }
        else{
            
            // route to the AttackEnemyFail that then does the damage from there
            setRooms({
                ...rooms,
                
                game:{...rooms.game,
                    AttackEnemyFail:{
                        damage:enemy.damage,
                        dialog:` Your attack fails and ${enemy.name} lands an attack on you for ${enemy.damage} `,
                        next:saveState.enemy
                    }        
                },
                save:'AttackEnemyFail',

            })

        }

        console.log(playerRoll)
        //if the roll is greatere than the cap, then do damage of the sword 


    }
    function RunFromEnemy() {

    }

    function weapon() {
        setRooms({
            ...rooms,
            player: {
                ...player,
                weapon: saveState.weapon
            },
            save:save
        })
    }

    function pickup() {
        setRooms({
            ...rooms,
            save: save,
            player: {
                ...player, bag: [...player.bag, saveState.item]
            }

        })
    }


    function checkpoint() {
        console.log(save)
        setRooms({
            ...rooms, checkPoint: { ...rooms.checkPoint, [saveState.checkpointReached]: true }, save: save
        })
    }


    function roll() {
        return Math.floor(Math.random() * Math.floor(21));
    }

    function damage(damage) {
        // change the health value on the 
        let newHealth = parseInt(player.health) - parseInt(damage)
        console.log(Object.keys(saveState))
        setRooms({
            ...rooms, save: save,
            player: {
                ...player, health: newHealth
            }
        })


    }
    function movement(place) {
        // set the location of the 
        let split = place.split(' ')
        let join = split.join('')


        setRooms(
            {
                ...rooms, save: join
            }
        )
    }


    function button(buttonValue) {
        function roll() {
            return Math.floor(Math.random() * Math.floor(21));
        }

        //find the correct function and run it here 
        let split = buttonValue.split(' ')
        console.log(split[0])
        let join = split.join('')
        console.log(join)
        console.log(props.game)




        let rollvalue = parseInt(roll())
        console.log(rollvalue)

        console.log(rollvalue)
        let action = API[join](rollvalue)
        console.log(action)
        console.log(props.game[action])
        // change rooms here **************************************************************************

        if (split[0] === 'Attack') {
            let newRoll = roll() + parseInt(player.strength)
            console.log('attack mod')
            setRooms({ ...rooms, save: action })
        }
        if (split[0] === 'Run') {
            let newRoll = roll() + parseInt(player.strength)
            console.log('attack mod')
            setRooms({ ...rooms, save: action })
        }
        if (split[0] === 'Move') {
            let newRoll = roll() + parseInt(player.strength)
            console.log('attack mod')
            setRooms({ ...rooms, save: action })
        }
        if (split[0] === 'Ask') {
            let newRoll = roll() + parseInt(player.speech)
            console.log('speech')
            setRooms({ ...rooms, save: action })
        }
        if (split[0] === 'Sneak') {
            let newRoll = roll() + parseInt(player.sneak)
            console.log('attack mod')
            setRooms({ ...rooms, save: action, lastRoll: newRoll })
        }
        else {
            setRooms({
                ...rooms, save: action
            })
        }

    }

    function next() {
        console.log(props.game[saveState.next])
        props.changeState(props.game[saveState.next])
        let newSave = props.rooms.game[props.rooms.save].next
        console.log(newSave)
        //ROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOMS
        props.setRooms({
            ...props.rooms, save: newSave
        })

        console.log(props.state)
    }

    return (
        <div className='col-8 display '>
            {/* this should be made into a componet and then fed in the values with props */}
            <div className='holder col-12'> <div className='textHolder speech-bubble '>

                <p>{rooms.checkPoint[saveState.checkpoint] ? <>{saveState.dialog2}</> : <>  {saveState.dialog}</>} </p><div className='col-4 ' >



                    <div className='Next' >
                        {/* if the checkpoint is reached  */}
                        {saveState.back ? <button onClick={() => movement(saveState.back)}>Back</button> : <></>}
                        {/* Weapon Gate */}
                        {saveState.weapon ?
                            //Player Weapon Gate
                            player.weapon ?
                        <><button onClick={() => weapon(player.weapon)}> KEEP {player.weapon} <ul><li>{player.weapon}</li><li>Attack:{CurrentWeapon.Attack}</li><li>Magic:{CurrentWeapon.Magic}</li></ul></button> 
                        <button onClick={() => weapon(player.weapon)}> TAKE {saveState.weapon} <ul><li>{saveState.weapon}</li><li>Attack:{NewWeapon.Attack}</li><li>Magic:{NewWeapon.Magic}</li></ul></button> </>
                                : <></>
                            //Enemy Gate need to make the gate only open if the enemy is alive
                            // need to make the first gate to if enmey then do the health 
                            : <>
                            
                            
                            
                             {saveState.enemy? rooms.enemies[saveState.enemy].health>0 ? <><button onClick={AttackEnemy}> Attack with {player.weapon}</button> <button onClick={RunFromEnemy}>Run from {saveState.enemy}</button> </>  
                            :<><button onClick={next}>Next</button> </>     
                             
                                //Item Gate
                                : <>   {saveState.item ? <button onClick={pickup} >Pick up {saveState.item}</button>
                                    : <>  {rooms.checkPoint[saveState.checkpoint] === true
                                        ? <>
                                            <button onClick={() => movement(saveState.enter)}  > {saveState.enter} </button>
                                        </>
                                        //Checkpoint Reached Gate
                                        : <> {saveState.checkpointReached
                                            ?
                                            <button onClick={() => checkpoint()} > Checkpoint</button>
                                            //Damage Gate
                                            : <> {saveState.damage
                                                ? <>
                                                    <button onClick={() => damage(saveState.damage)} > TAKE DAMAGE</button></>
                                                //Choice Gate
                                                : <>
                                                    {saveState.choice
                                                        ? <> {saveState.choice.map(choice => {
                                                            return (<button onClick={() => button(choice)}   >{choice}</button>)
                                                        })}</>
                                                        //Movement Gate
                                                        : <> {saveState.movement
                                                            ? <>
                                                                {/* if all tou can do is move the state will only have the values of movement */}
                                                                {saveState.movement.map(button => {
                                                                    return (<button onClick={() => movement(button)}> {button}</button>)
                                                                })}</>
                                                            //LAST GATE
                                                            : <><button onClick={next}>Next</button> </>}
                                                        </>}</>}</>}</>}</>}</>}
                            </>}



                        {/* if damage is true then take the damage */}






                    </div>
                </div>

            </div>
            </div>
            <div className='holder col-12'>
                <ImageHolder src={saveState.src} ></ImageHolder>
            </div>
        </div>
    )
}
export default TextArea 