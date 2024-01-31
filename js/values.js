var prevalue = [[
    ["5", "", "", "", "4", "", "", "", "2"],
    ["", "8", "", "2", "", "", "", "3", ""],
    ["", "", "9", "", "", "5", "6", "", ""],
    ["", "3", "", "", "5", "", "", "1", ""],
    ["6", "", "", "8", "", "3", "", "", "9"],
    ["", "1", "", "", "6", "", "", "2", ""],
    ["", "", "4", "3", "", "", "1", "", ""],
    ["", "5", "", "", "", "7", "", "6", ""],
    ["7", "", "", "", "2", "", "", "", "8"]
],
[
    ["", "", "5", "", "", "6", "", "", ""],
    ["", "9", "", "", "8", "", "", "", "6"],
    ["", "", "", "2", "", "", "", "8", "1"],
    ["", "", "4", "", "", "", "", "", ""],
    ["7", "", "", "", "", "", "", "", "3"],
    ["", "", "", "", "", "", "8", "", ""],
    ["3", "7", "", "", "", "9", "", "", ""],
    ["1", "", "", "", "7", "", "", "2", ""],
    ["", "", "", "5", "", "", "4", "", ""]
],
[
    ["5", "", "", "", "4", "", "", "2", ""],
    ["", "", "7", "1", "", "", "", "", "5"],
    ["", "9", "", "", "", "", "", "", "4"],
    ["", "", "", "", "", "6", "", "", "3"],
    ["", "3", "5", "", "", "", "6", "8", ""],
    ["6", "", "", "9", "", "", "", "", ""],
    ["3", "", "", "", "", "", "", "4", ""],
    ["1", "", "", "", "", "9", "2", "", ""],
    ["", "7", "", "", "8", "", "", "", "6"]
],
[
    ["", "", "", "4", "9", "2", "", "", ""],
    ["", "", "4", "", "", "", "", "", ""],
    ["", "1", "", "", "", "", "6", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "9", "", "", "", "", "1", "7", ""],
    ["", "", "", "", "", "8", "", "", "6"],
    ["3", "", "", "", "", "9", "", "", ""],
    ["", "", "5", "", "", "", "3", "", ""],
    ["8", "", "", "", "", "", "", "", ""]
]]

var isprevalue = [[
    [true, false, false, false, true, false, false, false, true],
    [false, true, false, true, false, false, false, true, false],
    [false, false, true, false, false, true, true, false, false],
    [false, true, false, false, true, false, false, true, false],
    [true, false, false, true, false, true, false, false, true],
    [false, true, false, false, true, false, false, true, false],
    [false, false, true, true, false, false, true, false, false],
    [false, true, false, false, false, true, false, true, false],
    [true, false, false, false, true, false, false, false, true]
], [
    [false, false, true, false, false, true, false, false, false],
    [false, true, false, false, true, false, false, false, true],
    [false, false, false, true, false, false, false, true, true],
    [false, false, true, false, false, false, false, false, false],
    [true, false, false, false, false, false, false, false, true],
    [false, false, false, false, false, false, true, false, false],
    [true, true, false, false, false, true, false, false, false],
    [true, false, false, false, true, false, false, true, false],
    [false, false, false, true, false, false, true, false, false]
],
[true, false, false, false, true, false, false, true, false, false, false, true, true, false, false, false, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, true, true, false, false, false, true, true, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, false, true, false, false, false, false, true, true, false, false, false, true, false, false, true, false, false, false, true],
[false, false, false, true, true, true, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, true, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false]
]

console.log(isprevalue.length)