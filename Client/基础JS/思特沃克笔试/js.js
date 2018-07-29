function CreateMaze(col, row, inputString) {
	this.col = col;
	this.row = row;
	this.inputString = inputString;
}
CreateMaze.prototype.create = function() {
	this.mazeArr = [];
	let r = [];
	for(let i = 0; i < 2 * this.col + 1; i++) {
		let arr = [];
		for(let j = 0; j < 2 * this.row + 1; j++) {
			if(i % 2 == 0 || j % 2 == 0) {
				arr.push('[W]');
			} else {
				arr.push('[R]');
			}
		}
		this.mazeArr[i] = arr;
	}
}
CreateMaze.prototype.handlestring = function() {
	this.stringList = this.inputString.split(';');
	this.roadList = [];
	for(let i = 0; i < this.stringList.length; i++) {
		this.stringList[i] = this.stringList[i].split(' ');
		let m = this.stringList[i];
		for(let j = 0; j < m.length; j++) {
			m[j] = m[j].split(',');
			m[j][0] = parseInt(m[j][0]) * 2 + 1;
			m[j][1] = parseInt(m[j][1]) * 2 + 1;
		}
		let x = (m[0][0] + m[1][0]) / 2;
		let y = (m[0][1] + m[1][1]) / 2;
		this.roadList.push([x, y]);
	}
}
CreateMaze.prototype.drawRoad = function() {
	for(let i = 0; i < this.roadList.length; i++) {
		let m = this.roadList[i];
		console.log(m[0], m[1]);
		this.mazeArr[m[0]][m[1]] = '[R]';
	}
	console.log(this.mazeArr);
}