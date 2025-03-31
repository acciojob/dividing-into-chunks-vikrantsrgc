const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 return arr.reduce((acc, num) => {
        let lastSubarray = acc[acc.length - 1];
        
        if (!lastSubarray || lastSubarray.reduce((sum, val) => sum + val, 0) + num > n) {
            acc.push([num]);
        } else {
            lastSubarray.push(num);
        }
        
        return acc;
    }, []);

};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
