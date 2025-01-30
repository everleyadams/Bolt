//Team Members: Evan Smith & Everley Adams
//Date: 1.24.2025
//Program: Maze
//Hardware: Bolt #CF6D

//Begin Program
async function startProgram() {

//Start and Say Start
//Bolt will say Start acrossed the LED's & say it out loud
//Driver:Everley
//Navigator:Evan

	await scrollMatrixText('Start!', { r: 43, g: 211, b: 255 }, 15, true);
	await speak("Start", true);



//Green Checkpoint
//LED's turn Green
//Driver:Evan
//Navigator:Everley

	setSpeed(37);
	await delay (4.55);
	setSpeed(0);
	await delay (1.5);
	setMainLed({ r: 0, g: 255, b: 0 });



//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver:Everley
//Navigator:Evan

	await roll((getHeading() + 90), 49, 2.4);
	setSpeed(0);
	await delay (1);
	await roll((getHeading() + 90), 42, 1.25);
	await Sound.Animal.Monkey.play(true);
	setSpeed(0);
	await delay (1);


//Red Checkpoint
//LED's turn Red
//Driver:Evan
//Navigator:Everley

	await roll((getHeading() + 40), 28, 3.2);
	setSpeed(0);
	await delay (1);
	await roll((getHeading() - 90), 28, 1);
	setMainLed({ r: 255, g: 0, b: 0 });

//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver:Everley
//Navigator:Evan

	setSpeed(27);
	await delay (1.05);
	setSpeed(0);
	await delay (1);
	await roll((getHeading() - 90), 29, 3.45);
	await roll((getHeading() + 90), 28, 2.1);
	await Sound.RobotTalk.EnemyDetected.play(true);






//Purple Checkpoint
//LED's turn Purple
//Driver:Evan
//Navigator:Everley

	setSpeed(28);
	await delay (0.75);
	setSpeed(0);
	await delay (1);
	await roll((getHeading() + 60), 27, 1.9);
	setMainLed({ r: 255, g: 0, b: 255 });

//Sound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver:Everley
//Navigator:Evan




//Blue Checkpoint
//LED's turn Blue
//Driver:Evan
//Navigator:Everley



//Finished and Say Finished
//Bolt will say Finished acrossed the LED's & say it out loud
//Driver:Everley
//Navigator:Evan




//End Program
}
