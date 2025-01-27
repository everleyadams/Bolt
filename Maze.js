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

	setSpeed(63);
	await delay (2.5);
	setSpeed(0);
	setMainLed({ r: 0, g: 255, b: 0 });
	setSpeed(0);
	await delay (1.5);



//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver:Everley
//Navigator:Evan

	await roll((getHeading() + 90), 49, 2.1);
	setSpeed(0);
	await roll((getHeading() + 90), 43, 1.1);
	await Sound.Animal.Monkey.play(true);


//Red Checkpoint
//LED's turn Red
//Driver:Evan
//Navigator:Everley






//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver:Everley
//Navigator:Evan




//Purple Checkpoint
//LED's turn Purple
//Driver:Evan
//Navigator:Everley




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






//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver:Everley
//Navigator:Evan




//Purple Checkpoint
//LED's turn Purple
//Driver:Evan
//Navigator:Everley




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
