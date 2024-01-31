// // Function to generate a random integer between min and max (inclusive)
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Function to shuffle an array in place
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Function to generate a random Sudoku problem
// function generateRandomSudokuProblem() {
//     const problem = [];
//     const base = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//     // Create an empty 9x9 Sudoku grid
//     for (let i = 0; i < 9; i++) {
//         problem.push(Array(9).fill(""));
//     }

//     // Fill the main diagonal of each 3x3 subgrid with random numbers
//     for (let row = 0; row < 9; row += 3) {
//         for (let col = 0; col < 9; col += 3) {
//             const shuffleBase = shuffleArray([...base]);
//             for (let i = 0; i < 3; i++) {
//                 for (let j = 0; j < 3; j++) {
//                     problem[row + i][col + j] = shuffleBase.pop();
//                 }
//             }
//         }
//     }

//     // Solve the Sudoku puzzle (you can implement your own solver here)

//     // Remove a random number of digits from the solved puzzle to create a problem
//     const emptyCells = getRandomInt(30, 50);
//     for (let k = 0; k < emptyCells; k++) {
//         const row = getRandomInt(0, 8);
//         const col = getRandomInt(0, 8);
//         problem[row][col] = "";
//     }

//     return problem;
// }

// // Generate a random Sudoku problem
// const prevalue = generateRandomSudokuProblem();
// const isprevalue=[]
// for(i of prevalue){
//     let t=[]
//     for(j of i){
//         console.log(typeof j)
//         if(j==""){
//             t.push(false)
//         }
//         else{
//             t.push(true)
//         }
//     }
//     isprevalue.push(t)
// }

// // Print the generated Sudoku problem to the console
// // console.log("Random Sudoku Problem:");
// // console.log(prevalue);
// // console.log(isprevalue)
