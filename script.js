function duplicates(nums) {
    
    const counts = {};
    
    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    
    const duplicateCount = Object.values(counts).filter(count => count > 1).length;
        
    return duplicateCount;
}

const nums = [1, 2, 3, 4, 2, 3, 5, 6, 7, 1, 8, 9, 1];

console.log(duplicates(nums));