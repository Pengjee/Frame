import { WRONG_FORMAT,CONNECTIVITY_ERROR } from './error';
import { message } from 'antd';

function CreateMaze(col, row, inputString) {
    this.col = col;
    this.row = row;
    this.inputString = inputString;
}
CreateMaze.prototype.create = function() {
    this.mazeArr = [];
    for(let i = 0; i < 2 * this.col + 1; i++) {
        let arr = [];
        for(let j = 0; j < 2 * this.row + 1; j++) {
            if(i % 2 === 0 || j % 2 === 0) {
                arr.push({
                    label:'[W]',
                    id:`${i}-${j}-[W]`
                });
            } else {
                arr.push({
                    label:'[R]',
                    id:`${i}-${j}-[R]`
                });
            }
        }
        this.mazeArr[i] = arr;
    }
}
CreateMaze.prototype.handlestring = function() {
    this.stringList = this.inputString.split(';');
    const roadList = [];
    for(let i = 0; i < this.stringList.length; i++) {
        this.stringList[i] = this.stringList[i].split(' ');
        let m = this.stringList[i];
        for(let j = 0; j < m.length; j++) {
            m[j] = m[j].split(',');
            // 判定是否是字符串格式错误
            if (m[j][0] && m[j][1]) {
                m[j][0] = parseInt(m[j][0]) * 2 + 1;
                m[j][1] = parseInt(m[j][1]) * 2 + 1;
            } else {
                return {
                    type:false,
                    msg:WRONG_FORMAT,
                };
            }
        }
        // 判定是否是字符串格式错误
        if(!(m[0] && m[0].length === 2 && m[1] && m[1].length === 2)){
            return {
                type:false,
                roadList:[],
                msg:WRONG_FORMAT,
            };
        }
        // 判定是否是字符串连通性错误
        if((m[0][0] === m[1][0]) || m[0][1] === m[1][1]){
            let x = (m[0][0] + m[1][0]) / 2;
            let y = (m[0][1] + m[1][1]) / 2;
            roadList.push([x, y]);
        }else{
            return {
                type:false,
                roadList:[],
                msg:CONNECTIVITY_ERROR,
            };
        }
    }
    return {
        type:true,
        roadList,
        msg:''
    }
}
CreateMaze.prototype.drawRoad = function() {
    this.create();
    const { type,roadList,msg } =  this.handlestring();
    if(type){
        for(let i = 0; i < roadList.length; i++) {
            let m = roadList[i];
            this.mazeArr[m[0]][m[1]].label = '[R]';
        }
        return {
            type:true,
            result:this.mazeArr,
            msg,
        };
    }else{
        return {
            type:false,
            result:[],
            msg,
        }
    }
}




export default CreateMaze;
