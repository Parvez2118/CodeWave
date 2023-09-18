import CombinePP from "./CombinePP";

function PP1(){
    return(
      <>
      <div style={{backgroundColor:'#262626'}}>

      <CombinePP/>
      <div class="accordion" id="accordionPanelsStayOpenExample" >
     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingOne">
         <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
           Stack
         </button>
       </h2>
       <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Valid Parentheses</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
          <pre>
            {`class Solution {

public boolean isValid(String s) {
    if (s.length() % 2 != 0) return false;
    Stack<Character> stack = new Stack<>();
    for (int i = 0; i < s.length(); i++) {
        if (
            stack.isEmpty() &&
            (s.charAt(i) == ')' || s.charAt(i) == '}' || s.charAt(i) == ']')
        ) return false; else {
            if (!stack.isEmpty()) {
                if (
                    stack.peek() == '(' && s.charAt(i) == ')'
                ) stack.pop(); else if (
                    stack.peek() == '{' && s.charAt(i) == '}'
                ) stack.pop(); else if (
                    stack.peek() == '[' && s.charAt(i) == ']'
                ) stack.pop(); else stack.add(s.charAt(i));
            } else stack.add(s.charAt(i));
        }
    }
    return stack.isEmpty();
}
}

//Solution with HashMap Lookup table as described in the video

class Solution {
public boolean isValid(String s) {
    Stack<Character> brackets = new Stack<>();
    Map<Character, Character> bracketLookup = new HashMap<>();

    bracketLookup.put(')', '(');
    bracketLookup.put('}', '{');
    bracketLookup.put(']', '[');

    for (char c : s.toCharArray()) {
        if (bracketLookup.containsKey(c)) {
            if (brackets.size() != 0 && brackets.peek() == bracketLookup.get(c)) {
                brackets.pop();
            } else {
                return false;
            }
        } else {
            brackets.push(c);
        }
    }

    if (brackets.size() == 0) return true;
    return false;
}
}
`}
          </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel2" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {`class Solution:
    def isValid(self, s: str) -> bool:
        Map = {")": "(", "]": "[", "}": "{"}
        stack = []

        for c in s:
            if c not in Map:
                stack.append(c)
                continue
            if not stack or stack[-1] != Map[c]:
                return False
            stack.pop()

        return not stack
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Min Stack</td>
         <td><button type="button" class="btn " style={{fontSize:15+'px', height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Medium</button></td>

         <td><div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel3" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
         <pre>
            {`class MinStack {

private Stack<Integer> stack;
private Stack<Integer> minStack;

public MinStack() {
    stack = new Stack<>();
    minStack = new Stack<>();
}

public void push(int val) {
    stack.push(val);

    // The min stack may be empty, so we need to check it
    val = Math.min(val, minStack.isEmpty() ? val : minStack.peek());
    minStack.push(val);
}

public void pop() {
    stack.pop();
    minStack.pop();
}

public int top() {
    return stack.peek();
}

public int getMin() {
    return minStack.peek();
}
}
/**
* Your MinStack object will be instantiated and called as such:
* MinStack obj = new MinStack();
* obj.push(val);
* obj.pop();
* int param_3 = obj.top();
* int param_4 = obj.getMin();
*/
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel4" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
         <pre>
            {`class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle3" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td>Largest Rectangle In Histogram</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Hard</button></td>

         <td><div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel5" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content"> 
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel5" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {`class Solution {
    public int largestRectangleArea(int[] heights) {
      int area = 0, n = heights.length;
      int start;
      Stack<Pair<Integer,Integer>> stack = new Stack<>();
      for(int i=0;i<heights.length;i++){
         int curHt =heights[i];
         start = i;
        while(!stack.isEmpty() && stack.peek().getValue() > curHt){
          Pair<Integer,Integer> pair = stack.pop();
          int index = pair.getKey();
          int h = pair.getValue();
          area = Math.max(area, h * (i - index));
          start = index;
        }
        stack.push(new Pair(start,curHt));
      }
      
       while(!stack.isEmpty()){
          Pair<Integer,Integer> pair = stack.pop();
          int index = pair.getKey();
          int h = pair.getValue();
          area = Math.max(area, h * (n - index));
       }
        return area;
    }
  
}
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel6" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel6" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {`class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxArea = 0
        stack = []  # pair: (index, height)

        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] > h:
                index, height = stack.pop()
                maxArea = max(maxArea, height * (i - index))
                start = index
            stack.append((start, h))

        for i, h in stack:
            maxArea = max(maxArea, h * (len(heights) - i))
        return maxArea
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn " data-bs-toggle="modal" href="#exampleModalToggle5" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>
     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          Queue
         </button>
       </h2>
       <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Kth Largest Element In a Stream</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle7" aria-hidden="true" aria-labelledby="exampleModalToggleLabel7" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header "  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel7" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle8" aria-hidden="true" aria-labelledby="exampleModalToggleLabel8" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel8" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle7" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Kth Largest Element In an Array</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Medium</button></td>

         <td><div class="modal fade" id="exampleModalToggle9" aria-hidden="true" aria-labelledby="exampleModalToggleLabel9" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel9" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle10" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle10" aria-hidden="true" aria-labelledby="exampleModalToggleLabel10" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header" style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel10" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle9" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td>Find Median From Data Stream</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Hard</button></td>

         <td><div class="modal fade" id="exampleModalToggle11" aria-hidden="true" aria-labelledby="exampleModalToggleLabel11" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel11" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}> </button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle12" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle12" aria-hidden="true" aria-labelledby="exampleModalToggleLabel12" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel12" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle11" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle11" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>
     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingThree">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
           Tree
         </button>
       </h2>
       <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Diameter of Binary Tree</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle13" aria-hidden="true" aria-labelledby="exampleModalToggleLabel13" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel13" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {`class Solution {

int result = -1;

public int diameterOfBinaryTree(TreeNode root) {
    dfs(root);
    return result;
}

private int dfs(TreeNode current) {
    if (current == null) {
        return -1;
    }
    int left = 1 + dfs(current.left);
    int right = 1 + dfs(current.right);
    result = Math.max(result, (left + right));
    return Math.max(left, right);
}
}
`}
           </pre>
         </div> 
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle14" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle14" aria-hidden="true" aria-labelledby="exampleModalToggleLabel14" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel14" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = 0

        def dfs(root):
            nonlocal res

            if not root:
                return 0
            left = dfs(root.left)
            right = dfs(root.right)
            res = max(res, left + right)

            return 1 + max(left, right)

        dfs(root)
        return res
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle13" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle13" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Binary Tree Right Side View</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Medium</button></td>

         <td><div class="modal fade" id="exampleModalToggle15" aria-hidden="true" aria-labelledby="exampleModalToggleLabel15" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel15" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}} ></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {`class Solution {

public List<Integer> rightSideView(TreeNode root) {
    List<Integer> list = new ArrayList<Integer>();
    if (root == null) return list;
    bfs(list, root);
    return list;
}

public void bfs(List<Integer> list, TreeNode root) {
    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root);
    while (!q.isEmpty()) {
        int levelSize = q.size();
        for (int i = 0; i < levelSize; i++) {
            TreeNode cur = q.poll();
            if (i == 0) list.add(cur.val);
            if (cur.right != null) q.offer(cur.right);
            if (cur.left != null) q.offer(cur.left);
        }
    }
}
}
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle16" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle16" aria-hidden="true" aria-labelledby="exampleModalToggleLabel16" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel16" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        res = []
        q = collections.deque([root])

        while q:
            rightSide = None
            qLen = len(q)

            for i in range(qLen):
                node = q.popleft()
                if node:
                    rightSide = node
                    q.append(node.left)
                    q.append(node.right)
            if rightSide:
                res.append(rightSide.val)
        return res
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle15" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle15" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td>Binary Tree Maximum Path Sum</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Hard</button></td>

         <td><div class="modal fade" id="exampleModalToggle17" aria-hidden="true" aria-labelledby="exampleModalToggleLabel17" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel17" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {`/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    public int maxPathSum(TreeNode root) {
        int[] res = { Integer.MIN_VALUE };
        maxPathSum(root, res);
        return res[0];
    }

    public int maxPathSum(TreeNode root, int[] res) {
        if (root == null) return 0;

        int left = Math.max(0, maxPathSum(root.left, res));
        int right = Math.max(0, maxPathSum(root.right, res));
        res[0] = Math.max(res[0], root.val + left + right);

        return root.val + Math.max(left, right);
    }
}
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle18" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle18" aria-hidden="true" aria-labelledby="exampleModalToggleLabel18" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel18" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        res = [root.val]

        # return max path sum without split
        def dfs(root):
            if not root:
                return 0

            leftMax = dfs(root.left)
            rightMax = dfs(root.right)
            leftMax = max(leftMax, 0)
            rightMax = max(rightMax, 0)

            # compute max path sum WITH split
            res[0] = max(res[0], root.val + leftMax + rightMax)
            return root.val + max(leftMax, rightMax)

        dfs(root)
        return res[0]
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle17" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle17" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>
    
     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingFour">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        Graph
         </button>
       </h2>
       <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Number of Islands</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle19" aria-hidden="true" aria-labelledby="exampleModalToggleLabel19" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel19" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {`class Solution {

public int numIslands(char[][] grid) {
    int count = 0;
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
}

public void dfs(char[][] grid, int i, int j) {
    if (
        i < 0 ||
        j < 0 ||
        i >= grid.length ||
        j >= grid[0].length ||
        grid[i][j] == '0'
    ) {
        return;
    }
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
}
}
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle20" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle20" aria-hidden="true" aria-labelledby="exampleModalToggleLabel20" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel20" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {`class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or not grid[0]:
            return 0

        islands = 0
        visit = set()
        rows, cols = len(grid), len(grid[0])

        def dfs(r, c):
            if (
                r not in range(rows)
                or c not in range(cols)
                or grid[r][c] == "0"
                or (r, c) in visit
            ):
                return

            visit.add((r, c))
            directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
            for dr, dc in directions:
                dfs(r + dr, c + dc)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1" and (r, c) not in visit:
                    islands += 1
                    dfs(r, c)
        return islands


# BFS Version From Video
class SolutionBFS:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0

        rows, cols = len(grid), len(grid[0])
        visited=set()
        islands=0

         def bfs(r,c):
             q = deque()
             visited.add((r,c))
             q.append((r,c))
           
             while q:
                 row,col = q.popleft()
                 directions= [[1,0],[-1,0],[0,1],[0,-1]]
               
                 for dr,dc in directions:
                     r,c = row + dr, col + dc
                     if (r) in range(rows) and (c) in range(cols) and grid[r][c] == '1' and (r ,c) not in visited:
                       
                         q.append((r , c ))
                         visited.add((r, c ))

         for r in range(rows):
             for c in range(cols):
               
                 if grid[r][c] == "1" and (r,c) not in visited:
                     bfs(r,c)
                     islands +=1 

         return islands

`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle19" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle19" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Rotting Oranges</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle21" aria-hidden="true" aria-labelledby="exampleModalToggleLabel21" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel21" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
             {`class Solution {

public int orangesRotting(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    Queue<int[]> queue = new LinkedList<>();
    int fresh = 0;

    for (int i = 0; i < m; i += 1) {
        for (int j = 0; j < n; j += 1) {
            if (grid[i][j] == 2) queue.offer(new int[] { i, j }); else if (
                grid[i][j] == 1
            ) fresh += 1;
        }
    }

    int count = 0;
    int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
    while (!queue.isEmpty() && fresh != 0) {
        count += 1;
        int sz = queue.size();
        for (int i = 0; i < sz; i += 1) {
            int[] rotten = queue.poll();
            int r = rotten[0], c = rotten[1];
            for (int[] dir : dirs) {
                int x = r + dir[0], y = c + dir[1];
                if (0 <= x && x < m && 0 <= y && y < n && grid[x][y] == 1) {
                    grid[x][y] = 2;
                    queue.offer(new int[] { x, y });
                    fresh -= 1;
                }
            }
        }
    }
    return fresh == 0 ? count : -1;
}
}
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle22" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle22" aria-hidden="true" aria-labelledby="exampleModalToggleLabel22" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel22" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
           {`class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = collections.deque()
        fresh = 0
        time = 0

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1:
                    fresh += 1
                if grid[r][c] == 2:
                    q.append((r, c))

        directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        while fresh > 0 and q:
            length = len(q)
            for i in range(length):
                r, c = q.popleft()

                for dr, dc in directions:
                    row, col = r + dr, c + dc
                    # if in bounds and nonrotten, make rotten
                    # and add to q
                    if (
                        row in range(len(grid))
                        and col in range(len(grid[0]))
                        and grid[row][col] == 1
                    ):
                        grid[row][col] = 2
                        q.append((row, col))
                        fresh -= 1
            time += 1
        return time if fresh == 0 else -1

                
`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle21" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle21" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td >Word Ladder</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle22" aria-hidden="true" aria-labelledby="exampleModalToggleLabel22" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel22" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            
{`
package java;

class Solution {

    public int ladderLength(
        String beginWord,
        String endWord,
        List<String> wordList
    ) {
        Map<String, List<String>> adjlist = new HashMap<>();
        wordList.add(beginWord);
        for (String word : wordList) {
            StringBuilder string = null;
            for (int i = 0; i < word.length(); i++) {
                string = new StringBuilder(word);
                string.setCharAt(i, '*');
                List<String> wordlist = adjlist.getOrDefault(
                    string.toString(),
                    new ArrayList<String>()
                );
                wordlist.add(word);
                adjlist.put(string.toString(), wordlist);
            }
        }

        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        Set<String> visited = new HashSet<>();
        visited.add(beginWord);
        int step = 1;
        StringBuilder string = null;
        while (!queue.isEmpty()) {
            step++;
            int size = queue.size();
            for (int j = 0; j < size; j++) {
                String str = queue.poll();

                for (int i = 0; i < str.length(); i++) {
                    string = new StringBuilder(str);
                    string.setCharAt(i, '*');
                    for (String pat : adjlist.get(string.toString())) {
                        if (pat.equals(endWord)) {
                            return step;
                        }
                        if (visited.contains(pat)) {
                            continue;
                        }
                        queue.offer(pat);
                        visited.add(pat);
                    }
                }
            }
            // step++;
        }
        return 0;
    }
}

`}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle23" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle23" aria-hidden="true" aria-labelledby="exampleModalToggleLabel23" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel23" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}} ></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
           {`
           class Solution:
           def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
               if endWord not in wordList:
                   return 0
       
               nei = collections.defaultdict(list)
               wordList.append(beginWord)
               for word in wordList:
                   for j in range(len(word)):
                       pattern = word[:j] + "*" + word[j + 1 :]
                       nei[pattern].append(word)
       
               visit = set([beginWord])
               q = deque([beginWord])
               res = 1
               while q:
                   for i in range(len(q)):
                       word = q.popleft()
                       if word == endWord:
                           return res
                       for j in range(len(word)):
                           pattern = word[:j] + "*" + word[j + 1 :]
                           for neiWord in nei[pattern]:
                               if neiWord not in visit:
                                   visit.add(neiWord)
                                   q.append(neiWord)
                   res += 1
               return 0
       
`}

           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle22" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle22" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>
     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingFive">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
         Binary Search
         </button>
       </h2>
       <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Find Minimum In Rotated Sorted Array</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle24" aria-hidden="true" aria-labelledby="exampleModalToggleLabel24" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel24" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle25" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle25" aria-hidden="true" aria-labelledby="exampleModalToggleLabel25" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel25" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle24" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle24" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Search In Rotated Sorted Array</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle26" aria-hidden="true" aria-labelledby="exampleModalToggleLabel26" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel26" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle27" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle27" aria-hidden="true" aria-labelledby="exampleModalToggleLabel27" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel27" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle26" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle26" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>
{/* ---------------------------11111111111111111111111111111111111111111111111111111--------------------------------------- */}
     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingSix">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
         Bit Manipulation
         </button>
       </h2>
       <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Number of 1 Bits</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle30" aria-hidden="true" aria-labelledby="exampleModalToggleLabel30" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel30" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle31" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle31" aria-hidden="true" aria-labelledby="exampleModalToggleLabel31" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel31" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle30" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle30" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Counting Bits</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle32" aria-hidden="true" aria-labelledby="exampleModalToggleLabel32" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel32" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle33" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle33" aria-hidden="true" aria-labelledby="exampleModalToggleLabel33" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel33" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle32" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle32" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td >Reverse Bits</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle34" aria-hidden="true" aria-labelledby="exampleModalToggleLabel34" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel34" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle35" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle35" aria-hidden="true" aria-labelledby="exampleModalToggleLabel35" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel35" style={{color:"white"}}> Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle34" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle34" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div> 

{/* -------------------------------------------------------------------------------- */}
<div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
         Dynamic Programming
         </button>
       </h2>
       <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Climbing Stairs</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle36" aria-hidden="true" aria-labelledby="exampleModalToggleLabel36" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel36" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle37" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle37" aria-hidden="true" aria-labelledby="exampleModalToggleLabel37" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel37" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle36" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle36" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>House Robber</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle38" aria-hidden="true" aria-labelledby="exampleModalToggleLabel38" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel38" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle39" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle39" aria-hidden="true" aria-labelledby="exampleModalToggleLabel39" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel39" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle38" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle38" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">3</th>
         <td >House Robber II</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle40" aria-hidden="true" aria-labelledby="exampleModalToggleLabel40" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel40" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn " data-bs-target="#exampleModalToggle41" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle41" aria-hidden="true" aria-labelledby="exampleModalToggleLabel41" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel41" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle40" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle40" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>

     {/* ------------------------------------------------------ */}

     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingEight">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
         Greedy
         </button>
       </h2>
       <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Maximum Subarray</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle42" aria-hidden="true" aria-labelledby="exampleModalToggleLabel42" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel42" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle43" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle43" aria-hidden="true" aria-labelledby="exampleModalToggleLabel43" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel43" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle42" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle42" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Jump Game</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle44" aria-hidden="true" aria-labelledby="exampleModalToggleLabel44" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel44" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle45" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle45" aria-hidden="true" aria-labelledby="exampleModalToggleLabel45" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel45" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}} >
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle44" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle44" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>

     {/* ================================================================= */}
     <div class="accordion-item">
       <h2 class="accordion-header" id="panelsStayOpen-headingNine">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
         Heap / Priority Queue
         </button>
       </h2>
       <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
         <div class="accordion-body">
         <table class="table">
     <thead>
       <tr>
       <th scope="col">Number</th>
      <th scope="col">Problem</th>
      <th scope="col">Difficulty</th>
      <th scope="col">Code</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td>Find Median From Data Stream</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle48" aria-hidden="true" aria-labelledby="exampleModalToggleLabel48" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel48" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle49" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle49" aria-hidden="true" aria-labelledby="exampleModalToggleLabel49" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel49" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer "  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle48" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle48" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td>Add One</td>
         <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>

         <td><div class="modal fade" id="exampleModalToggle50" aria-hidden="true" aria-labelledby="exampleModalToggleLabel50" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel50" style={{color:"white"}}>Java Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
            <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle51" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
         </div>
       </div>
     </div>
   </div>
   <div class="modal fade" id="exampleModalToggle51" aria-hidden="true" aria-labelledby="exampleModalToggleLabel51" tabindex="-1">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
         <div class="modal-header"  style={{backgroundColor:"#262626"}}>
           <h5 class="modal-title" id="exampleModalToggleLabel51" style={{color:"white"}}>Python Code</h5>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
         </div>
         <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
           <pre>
            {``}
           </pre>
         </div>
         <div class="modal-footer"  style={{backgroundColor:"#262626"}}>
           <button class="btn" data-bs-target="#exampleModalToggle50" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
         </div>
       </div>
     </div>
   </div>
   <a class="btn" data-bs-toggle="modal" href="#exampleModalToggle50" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:81+'px',borderRadius:20+'px'}}>Java</a></td>
       </tr>
     </tbody>
   </table> </div>
       </div>
     </div>
     
   </div>
   
   </div>
           </>
    )
}

export default PP1;