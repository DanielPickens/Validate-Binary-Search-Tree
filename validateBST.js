var isValidBST = function(root) {
   
        return isfullBST(root, null, null);
    }
    
    let isfullBST = function( x,  min,  max) {
        if (x == null) return true;
        if (max != null && x.val >= max.val) return false;
        if (min != null && x.val <= min.val) return false;
        return isfullBST(x.left, min, x) && isfullBST(x.right, x ,max);
    }






/*
Success
Details 
Runtime: 72 ms, faster than 97.99% of JavaScript online submissions for Validate Binary Search Tree.
Memory Usage: 42.9 MB, less than 85.53% of JavaScript online submissions for Validate Binary Search Tree.
*/
