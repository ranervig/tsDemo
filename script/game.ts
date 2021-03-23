	
		let targetNumber :number =0;	//this global variable will store the target number to be guessed in the Hi-Low Game
		
		//1. Create an array called numberRanges for the following numbers 5,10,20

        let numberRanges :number[] = [5,10,20];
		
		//2. Use the numberRanges array to populate the topNumber dropdown list

        function populateTopNumber(number :number) {
            let option = document.createElement("option");
            option.text = option.value = (number as any) as string;
            (document.querySelector("#topNumber") as HTMLSelectElement).add(option);
        }
	
		function getTargetNumber() {
			//3. The onChange event handler fires it will call this function. Get the selected value from the list using document.querySelector()
            let selectedNumber :number = (document.querySelector("#topNumber") as HTMLSelectElement).value as any;
            //console.log(selectedNumber);
			//4. Call the randomNumber function and pass it the chosen number as a parameter. Capture the retun value in targetNumber	

            targetNumber = randomNumber(selectedNumber);
		}
	
		function hiLowGame() {
            
            let inNumb : number = (document.querySelector("#inputNumber") as HTMLInputElement).value as any as number;
            let outputDisplay = document.querySelector("#outResults");


			if( inNumb == targetNumber )
			{
                //6. display CORRECT!!!	
                outputDisplay.innerHTML = "CORRECT!!!";
			}
			else
			{
				if( inNumb < targetNumber)
				{
                    //7. display HIGHER!
                    outputDisplay.innerHTML = "HIGHER";
				}
				else
				{
                    //8. display LOWER
                    outputDisplay.innerHTML = "LOWER";	
				}
			}
			
		}
		
		function randomNumber(inTopNum :number) {
			return Math.floor(Math.random()* inTopNum) + 1;	//random number from 1 to inTopNum	
		}
        
        window.addEventListener("DOMContentLoaded", (event) => {
            numberRanges.forEach(populateTopNumber);
            document.querySelector("#topNumber").addEventListener("change", getTargetNumber);
            document.querySelector("#game").addEventListener("submit", function(event){
                //prevent page reloading from submiting form
                event.preventDefault();
                //runs game when enter or button is pressed
                hiLowGame();
            });
            //reset the result area on reset
            document.querySelector("#game").addEventListener("reset", function(){
                document.querySelector("#outResults").innerHTML = "";
            })
        });
	