function isEvenOrOdd(L,R) 
    { 
        // Count odd Numbers in range [L, R] 
        var oddCount = (R - L) / 2; 
  
        if (R % 2 == 1 || L % 2 == 1) 
            oddCount++; 
  
        // Check if count of odd Numbers 
        // is even or odd 
  
        if (oddCount % 2 == 0) 
            return "Even"; 
        else
          return "Odd"; 
  }

console.log(isEvenOrOdd(2,3))