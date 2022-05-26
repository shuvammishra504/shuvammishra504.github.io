function start() {
    document.querySelector(".initiate button").addEventListener("click", function commence(){
        document.querySelector(".initiate").style.display = "none";
        let scoreboard = document.createElement("div");
        scoreboard.classList.add("scoreboard");
        let scoreboard0 = document.createElement("div");
        scoreboard0.classList.add("scoreboard1");
        let scoreboard1 = document.createElement("div");
        scoreboard1.classList.add("scoreboard2");
        let scoreboard2 = document.createElement("div");
        let scoreboard3 = document.createElement("div");
        let player1 = document.createElement("div");
        let player2 = document.createElement("div");
        let player1Score = document.createElement("div");
        let player2Score = document.createElement("div");
        player1.innerHTML = "O";
        player2.innerHTML = "X";
        player1ScoreVal = 0;
        player2ScoreVal = 0;
        player1Score.innerHTML = player1ScoreVal;
        player2Score.innerHTML = player2ScoreVal;
        scoreboard2.classList.add("player1");
        scoreboard3.classList.add("player2");
        document.querySelector("body").appendChild(scoreboard);
        scoreboard.appendChild(scoreboard0);
        scoreboard.appendChild(scoreboard1);
        scoreboard0.appendChild(scoreboard2);
        scoreboard1.appendChild(scoreboard3);
        scoreboard2.appendChild(player1);
        scoreboard3.appendChild(player2);
        scoreboard2.appendChild(player1Score);
        scoreboard3.appendChild(player2Score);
        let winPage = document.createElement("div");
        document.querySelector("body").appendChild(winPage);
        winPage.classList.add("winPage");
        let winTitle = document.createElement("div");
        let winButton = document.createElement("div");
        winPage.appendChild(winTitle);
        winTitle.classList.add("winTitle");
        let playAgain = document.createElement("button")
        winPage.appendChild(winButton);
        winButton.appendChild(playAgain);
        winButton.classList.add("playAgainButt");
        playAgain.innerHTML = "Play Again";
        let newDiv = document.createElement("div");
        newDiv.classList.add("table");
        let subDivs = [];
        document.querySelector("body").appendChild(newDiv);
        for(let i = 0; i <= 8; i++){
            subDivs[i] = document.createElement("div");
            subDivs[i].classList.add(`rDiv${i}`);
            newDiv.appendChild(subDivs[i]);
        }  

        let winLines = [];
        for(let i = 0; i <= 7; i++){
            winLines[i] = document.createElement("span");
            winLines[i].classList.add("winLine");
            winLines[i].classList.add(`wL${i + 1}`);
            newDiv.appendChild(winLines[i]);
        };

        let winLoseArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        let randomNum = 1;
        let noOfClicks = 0;
        let drawNum = 0;

        subDivs[0].addEventListener("click", function box1(){
            drawNum += 1;
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[0].appendChild(img);
                subDivs[0].style.pointerEvents = "none";
                winLoseArr[0] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[0].appendChild(img);
                subDivs[0].style.pointerEvents = "none";
                winLoseArr[0] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })

        subDivs[1].addEventListener("click", function box2(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[1].appendChild(img);
                subDivs[1].style.pointerEvents = "none";
                winLoseArr[1] = "O";
                console.log(winLoseArr);
            }                

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[1].appendChild(img);
                subDivs[1].style.pointerEvents = "none";
                winLoseArr[1] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })

        subDivs[2].addEventListener("click", function box3(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[2].appendChild(img);
                subDivs[2].style.pointerEvents = "none";
                winLoseArr[2] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[2].appendChild(img);
                subDivs[2].style.pointerEvents = "none";
                winLoseArr[2] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })

        subDivs[3].addEventListener("click", function box4(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[3].appendChild(img);
                subDivs[3].style.pointerEvents = "none";
                winLoseArr[3] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[3].appendChild(img);
                subDivs[3].style.pointerEvents = "none";
                winLoseArr[3] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })
        
        subDivs[4].addEventListener("click", function box5(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[4].appendChild(img);
                subDivs[4].style.pointerEvents = "none";
                winLoseArr[4] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[4].appendChild(img);
                subDivs[4].style.pointerEvents = "none";
                winLoseArr[4] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })
        
        subDivs[5].addEventListener("click", function box6(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[5].appendChild(img);
                subDivs[5].style.pointerEvents = "none";
                winLoseArr[5] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[5].appendChild(img);
                subDivs[5].style.pointerEvents = "none";
                winLoseArr[5] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })
        
        subDivs[6].addEventListener("click", function box7(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[6].appendChild(img);
                subDivs[6].style.pointerEvents = "none";
                winLoseArr[6] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[6].appendChild(img);
                subDivs[6].style.pointerEvents = "none";
                winLoseArr[6] = "X";
                console.log(winLoseArr);
            }

            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })
        
        subDivs[7].addEventListener("click", function box8(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[7].appendChild(img);
                subDivs[7].style.pointerEvents = "none";
                winLoseArr[7] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[7].appendChild(img);
                subDivs[7].style.pointerEvents = "none";
                winLoseArr[7] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })
        
        subDivs[8].addEventListener("click", function box9(){
            drawNum += 1;
            console.log(randomNum)
            if(randomNum === 0){
                let img = document.createElement("img");
                img.src = 'Circle.png';
                subDivs[8].appendChild(img);
                subDivs[8].style.pointerEvents = "none";
                winLoseArr[8] = "O";
                console.log(winLoseArr);
            }

            if(randomNum === 1){
                let img = document.createElement("img");
                img.src = 'Cross.png';
                subDivs[8].appendChild(img);
                subDivs[8].style.pointerEvents = "none";
                winLoseArr[8] = "X";
                console.log(winLoseArr);
            }
            if(randomNum === 0){
                randomNum = 1;
            }
            else{
                randomNum = 0;
            }
            noOfClicks += 1;
        })

        function WinnerFunc(){
            if(winLoseArr[0] === winLoseArr[1] && winLoseArr[0] === winLoseArr[2]){
                if(winLoseArr[0] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[0].style.display = "block";
                                winLines[0].style.width = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;
                }

                if(winLoseArr[0] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[0].style.display = "block";
                                winLines[0].style.width = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;
                }
            }
            if(winLoseArr[0] === winLoseArr[4] && winLoseArr[0] === winLoseArr[8]){
                if(winLoseArr[0] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[6].style.display = "block";
                                winLines[6].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;
                }

                if(winLoseArr[0] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[6].style.display = "block";
                                winLines[6].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;
                }
            }
            if(winLoseArr[0] === winLoseArr[3] && winLoseArr[0] === winLoseArr[6]){
                if(winLoseArr[0] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[3].style.display = "block";
                                winLines[3].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;                   
                }

                if(winLoseArr[0] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[3].style.display = "block";
                                winLines[3].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;                   
                }
            }
            if(winLoseArr[1] === winLoseArr[4] && winLoseArr[1] === winLoseArr[7]){
                if(winLoseArr[1] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[4].style.display = "block";
                                winLines[4].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;                
                }

                if(winLoseArr[1] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[4].style.display = "block";
                                winLines[4].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;                  
                }
            }
            if(winLoseArr[2] === winLoseArr[5] && winLoseArr[2] === winLoseArr[8]){
                if(winLoseArr[2] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[5].style.display = "block";
                                winLines[5].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;                                       
                }

                if(winLoseArr[2] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[5].style.display = "block";
                                winLines[5].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;                                      
                }
            }
            if(winLoseArr[3] === winLoseArr[4] && winLoseArr[3] === winLoseArr[5]){
                if(winLoseArr[3] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[1].style.display = "block";
                                winLines[1].style.width = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;                                       
                }

                if(winLoseArr[3] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[1].style.display = "block";
                                winLines[1].style.width = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;                                         
                }
            }
            if(winLoseArr[6] === winLoseArr[7] && winLoseArr[6] === winLoseArr[8]){
                if(winLoseArr[6] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[2].style.display = "block";
                                winLines[2].style.width = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;                                          
                }

                if(winLoseArr[6] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[2].style.display = "block";
                                winLines[2].style.width = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;                                            
                }
            }
            if(winLoseArr[2] === winLoseArr[4] && winLoseArr[2] === winLoseArr[6]){
                if(winLoseArr[2] === "X"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[7].style.display = "block";
                                winLines[7].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player X wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player2ScoreVal += 1;
                    player2Score.innerHTML = player2ScoreVal;                                           
                }

                if(winLoseArr[2] === "O"){
                    enLarge();
                    function enLarge(){
                        let id = null;
                        let widthe = 0;
                        clearInterval(id);
                        id = setInterval(enLarge1, 5);
                        function enLarge1(){
                            if(widthe === 200){
                                clearInterval(id);
                            }
                            else{
                                complete();
                                widthe += 8;
                                console.log(widthe);
                                winLines[7].style.display = "block";
                                winLines[7].style.height = widthe + "px";
                            }
                        }
                    }
                    winTitle.innerHTML = "Player O wins!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    player1ScoreVal += 1;
                    player1Score.innerHTML = player1ScoreVal;                                         
                }
            }

        }

        let drawFunc = () => {
            if(drawNum === 9){
                if(winLoseArr[0] === winLoseArr[1] && winLoseArr[0] === winLoseArr[2] || winLoseArr[0] === winLoseArr[4] && winLoseArr[0] === winLoseArr[8] || winLoseArr[0] === winLoseArr[3] && winLoseArr[0] === winLoseArr[6] || winLoseArr[1] === winLoseArr[4] && winLoseArr[1] === winLoseArr[7] || winLoseArr[2] === winLoseArr[5] && winLoseArr[2] === winLoseArr[8] || winLoseArr[3] === winLoseArr[4] && winLoseArr[3] === winLoseArr[5] || winLoseArr[6] === winLoseArr[7] && winLoseArr[6] === winLoseArr[8] || winLoseArr[2] === winLoseArr[4] && winLoseArr[2] === winLoseArr[6]){

                }
                else{
                    winTitle.innerHTML = "Draw!"
                    setTimeout(() => { winPage.style.display = "flex"; }, 600);
                    drawNum = 0;
                    randomNum = 1;
                    winLoseArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    complete();
                }
            } 
        }
        let drawFunction = setInterval(drawFunc, 500)
        let winFunc = setInterval(WinnerFunc, 500);
        function complete(){
            clearInterval(winFunc)
        }

        playAgain.addEventListener("click", function playAgainFunc(){
            winPage.style.display = "none";
            for(let i = 0; i <= 8; i++){
                while(subDivs[i].hasChildNodes()){
                    subDivs[i].removeChild(subDivs[i].firstChild);
                }
                subDivs[i].style.pointerEvents = "all";
            }

            for(let k = 0; k <=7; k++){
                winLines[k].style.display = "none";
            }
            randomNum = 1;
            winLoseArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            console.log(randomNum);
            winFunc = setInterval(WinnerFunc, 500);
            drawNum = 0;
        })

    })
}

start();