function pascalTriangle(row, col){
	if (col == 0){
		return 1;
	}
	if (row == 0){
		return 0;
	}
	else {
		return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
	}
}

//콜이 0일 때까지 가면, 1이 나오고 
//로우가 0일 때까지 가면, 0리턴. 
//그럼 로우가 0이 아닐 때를 뺴고 모든 로우 콜의 조합에서 콜이 0이되는 경우가
//아래의 경우 10번이 있다는 이야기이다. 



//5, 2

//step1_left: 4, 2 step1_right: 4, 1

//step1_left_left: 3, 2 step1_left_right: 3, 1        
 
//step1_left_left_left: 2, 2 step1_left_left_right: 2, 0 => 1

//step1_left_left_left_left: 1, 2 step1_left_left_left_left_right: 1, 0 => 1

