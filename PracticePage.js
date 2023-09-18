
import CombinePP from "./CombinePP";

function PracticePage(){
  
  
    return(
        <div style={{backgroundColor:'#262626', width:"auto", height:730+"px"}}>
        <CombinePP/>
      <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item" style={{backgroundColor:'#F5F5F5'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button clr" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ backgroundColor:"#363636", color:"white",}}>
      <h4>Array & Hashing</h4>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body" >

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
      <td>Contains Duplicate</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
      <td>
      <div class="modal fade" id="exampleModalToggle0" aria-hidden="true" aria-labelledby="exampleModalToggleLabel0" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel0" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution {

public boolean containsDuplicate(int[] nums) {
    Set<Integer> uniques = new HashSet<>();
    for (int i = 0; i < nums.length; i++) {
        if (uniques.contains(nums[i])) {
            return true;
        }
        uniques.add(nums[i]);
    }
    return false;
}
}
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle00" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle00" aria-hidden="true" aria-labelledby="exampleModalToggleLabel00" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel00" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()

        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle0" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle0" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Valid Anagram</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
      <td>
      <div class="modal fade" id="exampleModalToggle11" aria-hidden="true" aria-labelledby="exampleModalToggleLabel11" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel11" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution {

public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;

    int[] store = new int[26];

    for (int i = 0; i < s.length(); i++) {
        store[s.charAt(i) - 'a']++;
        store[t.charAt(i) - 'a']--;
    }

    for (int n : store) if (n != 0) return false;

    return true;
}
}
`}</pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle111" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle111" aria-hidden="true" aria-labelledby="exampleModalToggleLabel111" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel111" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle11" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle11" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Two Sum</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td><div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution {

public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> prevMap = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
        int num = nums[i];
        int diff = target - num;

        if (prevMap.containsKey(diff)) {
            return new int[] { prevMap.get(diff), i };
        }

        prevMap.put(num, i);
    }

    return new int[] {};
}
}
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn " data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel2" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {}  # val -> index

        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor:'#F5F5F5'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed clr" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{ backgroundColor:'#363636',color:"white"}}>
      <h4>String</h4>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <table class="table" >
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
      <td>Merge Strings Alternately</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel3" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
       <pre>
        {`class Solution {
    public String mergeAlternately(String word1, String word2) {
        int w1Length = word1.length();
        int w2Length = word2.length();
        StringBuilder result = new StringBuilder();
        int index=0;
        
        while(index<w1Length && index<w2Length){
            result.append(word1.charAt(index));
            result.append(word2.charAt(index));
            index++;
        }

        result.append(word1.substring(index, w1Length));
        result.append(word2.substring(index, w2Length));
        return result.toString();
    }
}`}
       </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn " data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel4" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
       <pre>
        {`class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        return "".join(a + b for a, b in zip(word1, word2)) + word1[len(word2):] + word2[len(word1):]
        
        `}
       </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn " data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle3" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Destination City</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel5" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel5">Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution {
    public String destCity(List<List<String>> paths) {
    HashMap<String, Integer> map = new HashMap<>();
    for (int i=0; i<paths.size(); i++){
        map.put(paths.get(i).get(0), 1);
    }
    for (int i = 0; i < paths.size(); i++){
        if (map.get(paths.get(i).get(1)) == null){
            return paths.get(i).get(1);
        }
    }
    return "";
    }
}`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn " data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel6" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel6" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        mySet, ans =  set(), ""

        for path in range(len(paths)):
            mySet.add(paths[path][0])
            
        for path in range(len(paths)):
            if paths[path][-1] not in mySet:        
                ans = paths[path][-1]
        return ans`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn " data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle5" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Reverse String</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
      <td>
      <div class="modal fade" id="exampleModalToggle7" aria-hidden="true" aria-labelledby="exampleModalToggleLabel7" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel7" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution {
    public void reverseString(char[] s) {
        reverse(s,0,s.length-1);    
    }

    static char[] reverse(char[] s, int start, int end){
        //when the character array is reversed (i.e. start and end pointers cross the mid) 
        if(start>end){
            return s;
        }

        //swapping character at start with character at end 
        char temp= s[start];
        s[start]= s[end];
        s[end]= temp;
        
        //recalling the function with start+1 and end-1 as start and end value
        reverse( s, start+1, end-1);
        return s;

    }
}`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle8" aria-hidden="true" aria-labelledby="exampleModalToggleLabel8" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel8" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        print(s.reverse())`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle7" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
  </tbody>
</table>
         </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor:'#F5F5F5'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed clr" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{ backgroundColor:'#363636',color:"white"}}>
      <h4>Hashing</h4>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      <table class="table" >
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
      <td>Product of Array Except Self</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td><div class="modal fade" id="exampleModalToggle9" aria-hidden="true" aria-labelledby="exampleModalToggleLabel9" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel9" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution {

public int[] productExceptSelf(int[] nums) {
    int[] arr = new int[nums.length];
    int right = 1, left = 1;
    for (int i = 0; i < nums.length; i++) {
        arr[i] = left;
        left *= nums[i];
    }
    for (int i = nums.length - 1; i >= 0; i--) {
        arr[i] *= right;
        right *= nums[i];
    }
    return arr;
}

public int[] productExceptSelfNumsAsPrefix(int[] nums) {
    int[] output = new int[nums.length];
    output[0] = 1;

    for (int i = 0; i < nums.length - 1; i++) output[i + 1] =
        output[i] * nums[i];

    for (int i = nums.length - 2; i >= 0; i--) {
        output[i] = nums[i + 1] * output[i];
        nums[i] = nums[i] * nums[i + 1];
    }
    return output;
}
}`}</pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn " data-bs-target="#exampleModalToggle10" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
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
          {`class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res

        # O(n)
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle9" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a></td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Longest Consecutive Sequence</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td><div class="modal fade" id="exampleModalToggle1111" aria-hidden="true" aria-labelledby="exampleModalToggleLabel1111" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel1111" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution {

public int longestConsecutive(int[] nums) {
    if (nums.length == 0) return 0;
    HashSet<Integer> set = new HashSet<>();
    int ans = 1;
    for (int num : nums) set.add(num);
    for (int num : nums) {
        if (!set.contains(num - 1)) {
            int count = 1;
            while (set.contains(num + 1)) {
                num++;
                count++;
            }
            ans = Math.max(count, ans);
        }
    }
    return ans;
}
}
`}</pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle12" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle12" aria-hidden="true" aria-labelledby="exampleModalToggleLabel12" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel12" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div> 
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
       <pre>
        {`class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in nums:
            # check if its the start of a sequence
            if (n - 1) not in numSet:
                length = 1
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest
`}
       </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle1111" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle1111" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a></td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Top K Frequent Elements</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
      <td>
      <div class="modal fade" id="exampleModalToggle13" aria-hidden="true" aria-labelledby="exampleModalToggleLabel13" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel13" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution1 {

/**
 * Time Complexity: O(nlog(k))
 * Space Complexity: O(n)
 */
public int[] topKFrequent(int[] nums, int k) {
    int[] arr = new int[k];
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int num : nums) map.put(num, map.getOrDefault(num, 0) + 1);
    PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
            (a, b) ->
        a.getValue() - b.getValue()
    );
    for (Map.Entry<Integer, Integer> it : map.entrySet()) {
        pq.add(it);
        if (pq.size() > k) pq.poll();
    }
    int i = k;
    while (!pq.isEmpty()) {
        arr[--i] = pq.poll().getKey();
    }
    return arr;
}
}

class Solution2 {

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
public int[] topKFrequent(int[] numbers, int k) {
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int number : numbers) map.put(
        number,
        map.getOrDefault(number, 0) + 1
    );

    int size = map.size();
    int[] keys = new int[size];
    int i = 0;
    for (int key : map.keySet()) keys[i++] = key;

    select(keys, map, 0, size - 1, size - k);
    return Arrays.copyOfRange(keys, size - k, size);
}

// Modified implementation of Hoare's selection algorithm:

private void select(
    int[] keys,
    Map<Integer, Integer> map,
    int left,
    int right,
    int kSmallest
) {
    while (left != right) {
        int pivot = partition(keys, map, left, right, (left + right) / 2);

        if (kSmallest == pivot) return;

        if (kSmallest < pivot) right = pivot - 1; else left = pivot + 1;
    }
}

private int partition(
    int[] keys,
    Map<Integer, Integer> map,
    int left,
    int right,
    int pivot
) {
    int pivotValue = map.get(keys[pivot]);
    swap(keys, pivot, right);
    int index = left;

    for (int i = left; i <= right; i++) if (map.get(keys[i]) < pivotValue) {
        swap(keys, i, index);
        index++;
    }
    swap(keys, right, index);
    return index;
}

private void swap(int[] array, int i1, int i2) {
    int temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}
}
class Solution3 {
 /**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
 public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> count = new HashMap<>();
    List<Integer> bucket[] = new ArrayList[nums.length + 1];                
    
    for (int num : nums)
        count.merge(num, 1, Integer::sum);
    
    for (int key : count.keySet()){
        int freq = count.get(key);
        if (bucket[freq] == null)
            bucket[freq] = new ArrayList<>();
        bucket[freq].add(key);
    }
    
    int index = 0;
    int[] res = new int[k];
    for (int i = nums.length; i >= 0; i--)
        if (bucket[i] != null)
            for (int val : bucket[i]){
                res[index++] = val;
                if(index == k)
                    return res;
            }
    return res;
}
   
`}</pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle14" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle14" aria-hidden="true" aria-labelledby="exampleModalToggleLabel14" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel14" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res

        # O(n)
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle13" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle13" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
  </tbody>
</table>
         </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor:'#F5F5F5'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed clr" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour" style={{ backgroundColor:'#363636',color:"white"}}>
      <h4>Recursion</h4>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
      <table class="table" >
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
      <td>Power of Four</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle15" aria-hidden="true" aria-labelledby="exampleModalToggleLabel15" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel15" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution {
    public boolean isPowerOfFour(int n) {
        if(n <= 0) return false;
        if(n == 1) return true;
        return n % 4 == 0 ? isPowerOfFour(n / 4) : false;
    }
}`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle16" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle16" aria-hidden="true" aria-labelledby="exampleModalToggleLabel16" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel16" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n==1:
            return True
        if n==0 or n%4!=0:
            return False
        return Solution.isPowerOfFour(self,n/4)`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle15" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle15" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Fibonacci Number</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle17" aria-hidden="true" aria-labelledby="exampleModalToggleLabel17" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel17" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution {
    public int fib(int n) {
        if(n==0)return 0;
        int a=1;
        int b=1;
        for(int i=1; i<n; i++){
            int temp=b;
            b=a+b;
            a=temp;
        }
        return a;
    }
}`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle18" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle18" aria-hidden="true" aria-labelledby="exampleModalToggleLabel18" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel18" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1:
            return 1
        return self.fib(n-1) + self.fib(n-2)`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle17" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle17" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Power Of Three</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle19" aria-hidden="true" aria-labelledby="exampleModalToggleLabel19" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel19" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution {
    public boolean isPowerOfThree(int n) {
        if(n==0)
            return false;
        else
        {
            while(n%3==0)
                n=n/3;
            if(n==1)
                return true;
        }    
        return false;
    }
}`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle20" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle20" aria-hidden="true" aria-labelledby="exampleModalToggleLabel20" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel20" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n==1:
            return True
        if n<=0 or n%3!=0:
            return False
        return Solution.isPowerOfThree(self,n//3)
        `}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle19" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle19" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
  </tbody>
</table>
         </div>
    </div>
  </div>


  <div class="accordion-item" style={{backgroundColor:'#F5F5F5'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button collapsed clr" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive" style={{ backgroundColor:'#363636',color:"white"}}>
      <h4>Two Pointers</h4>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div class="accordion-body">
      <table class="table" >
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
      <td>Valid Palindrome</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle21" aria-hidden="true" aria-labelledby="exampleModalToggleLabel21" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel21" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}><pre>
        {`public boolean isPalindrome(String s) {
        
        int i = 0;
        int j = s.length() - 1;
        while (i < j) {
            
            Character start = s.charAt(i);
            Character end = s.charAt(j);
            
            if (!Character.isLetterOrDigit(start)) {
                i++;
                continue;
            }
            
            if (!Character.isLetterOrDigit(end)) {
                j--;
                continue;
            }
            
            if (Character.toLowerCase(start) != Character.toLowerCase(end)) {
                return false;
            }
            
            i++;
            j--;    
        }
        
        return true;
    }`}
        </pre></div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle22" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle22" aria-hidden="true" aria-labelledby="exampleModalToggleLabel22" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel22" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
       <pre>
        {`class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not self.alphanum(s[l]):
                l += 1
            while l < r and not self.alphanum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
        return True

    # Could write own alpha-numeric function
    def alphanum(self, c):
        return (
            ord("A") <= ord(c) <= ord("Z")
            or ord("a") <= ord(c) <= ord("z")
            or ord("0") <= ord(c) <= ord("9")
        )
`}
       </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle21" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle21" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>3Sum</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle23" aria-hidden="true" aria-labelledby="exampleModalToggleLabel23" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel23" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}><pre>{`class Solution {

//2 pointers
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    LinkedList<List<Integer>> sol = new LinkedList<List<Integer>>();

    for (int i = 0; i < nums.length - 2; i++) {
        if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
            int target = 0 - nums[i];
            int left = i + 1;
            int right = nums.length - 1;

            while (left < right) {
                if (nums[left] + nums[right] == target) {
                    ArrayList<Integer> miniSol = new ArrayList<>();
                    miniSol.add(nums[i]);
                    miniSol.add(nums[left]);
                    miniSol.add(nums[right]);
                    sol.add(miniSol);
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                } else if (nums[left] + nums[right] > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return sol;
}
}
`}</pre></div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle24" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle24" aria-hidden="true" aria-labelledby="exampleModalToggleLabel24" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel24" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def ThreeSum(self, integers):
        """
        :type integers: List[int]
        :rtype: List[List[int]]
        """
        integers.sort()
        result = []
        for index in range(len(integers)):
            if integers[index] > 0:
                break
            if index > 0 and integers[index] == integers[index - 1]:
                continue
            left, right = index + 1, len(integers) - 1
            while left < right:
                if integers[left] + integers[right] < 0 - integers[index]:
                    left += 1
                elif integers[left] + integers[right] > 0 - integers[index]:
                    right -= 1
                else:
                    result.append([integers[index], integers[left], integers[right]]) # After a triplet is appended, we try our best to incease the numeric value of its first element or that of its second.
                    left += 1 # The other pairs and the one we were just looking at are either duplicates or smaller than the target.
                    right -= 1 # The other pairs are either duplicates or greater than the target.
                    # We must move on if there is less than or equal to one integer in between the two integers.
                    while integers[left] == integers[left - 1] and left < right:
                        left += 1 # The pairs are either duplicates or smaller than the target.
        return result
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle23" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle23" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Container With Most Water</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle25" aria-hidden="true" aria-labelledby="exampleModalToggleLabel25" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content"> 
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel25" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution {

public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int res = 0;
    while (left < right) {
        int containerLength = right - left;
        int area = containerLength * Math.min(height[left], height[right]);
        res = Math.max(res, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
}
}
`}</pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle26" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle26" aria-hidden="true" aria-labelledby="exampleModalToggleLabel26" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel26" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        res = 0
        h = max(height)

        while l < r:
            res = max(res, min(height[l], height[r]) * (r - l))
            if height[l] < height[r]:
                l += 1
            elif height[r] <= height[l]:
                r -= 1
            
            if (r-l) * h <= res:
                break 
        return res
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle25" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle25" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
  </tbody>
</table>
         </div>
    </div>
  </div>

  <div class="accordion-item" style={{backgroundColor:'#F5F5F5'}}>
    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
      <button class="accordion-button collapsed clr" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix" style={{ backgroundColor:'#363636',color:"white"}}>
      <h4>Sliding Window</h4>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
      <div class="accordion-body">
      <table class="table" >
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
      <td >Best Time to Buy And Sell Stock</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle27" aria-hidden="true" aria-labelledby="exampleModalToggleLabel27" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel27" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution {

public int maxProfit(int[] prices) {
    int left = 0;
    int right = 1;
    int maxProfit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            right++;
        } else {
            left = right;
            right++;
        }
    }
    return maxProfit;
}
}
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle28" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle28" aria-hidden="true" aria-labelledby="exampleModalToggleLabel28" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel28" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        
        lowest = prices[0]
        for price in prices:
            if price < lowest:
                lowest = price
            res = max(res, price - lowest)
        return res
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle27" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle27" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Longest Substring Without Repeating Characters</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle29" aria-hidden="true" aria-labelledby="exampleModalToggleLabel29" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel29" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>{`class Solution {

public int lengthOfLongestSubstring(String s) {
        List<Character> substringL = new ArrayList<>();
        int largestlength = 0;
        for(int right = 0; right < s.length(); right++) {
            if(substringL.contains(s.charAt(right))) { 
                // get the index of the char
                int index = substringL.indexOf(s.charAt(right));
                substringL.remove(index);
                if(index > 0)
                    substringL.subList(0, index).clear();
            }
            substringL.add(s.charAt(right));
            largestlength = Math.max(largestlength, substringL.size());
        }
        return largestlength;
}
}
`}</pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn " data-bs-target="#exampleModalToggle30" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle30" aria-hidden="true" aria-labelledby="exampleModalToggleLabel30" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel30" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        l = 0
        res = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            charSet.add(s[r])
            res = max(res, r - l + 1)
        return res
`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle29" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle29" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Minimum Window Substring</td>
      <td><button type="button" class="btn " style={{height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px',backgroundColor:"#CDFFCD"}}>Easy</button></td>
     
      <td>
      <div class="modal fade" id="exampleModalToggle31" aria-hidden="true" aria-labelledby="exampleModalToggleLabel31" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel31" style={{color:"white"}}>Java Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
      <pre>{`class Solution {

//sliding window
public String minWindow(String s, String t) {
    HashMap<Character, Integer> map = new HashMap<>();

    for (char x : t.toCharArray()) {
        map.put(x, map.getOrDefault(x, 0) + 1);
    }

    int matched = 0;
    int start = 0;
    int minLen = s.length() + 1;
    int subStr = 0;
    for (int endWindow = 0; endWindow < s.length(); endWindow++) {
        char right = s.charAt(endWindow);
        if (map.containsKey(right)) {
            map.put(right, map.get(right) - 1);
            if (map.get(right) == 0) matched++;
        }

        while (matched == map.size()) {
            if (minLen > endWindow - start + 1) {
                minLen = endWindow - start + 1;
                subStr = start;
            }
            char deleted = s.charAt(start++);
            if (map.containsKey(deleted)) {
                if (map.get(deleted) == 0) matched--;
                map.put(deleted, map.get(deleted) + 1);
            }
        }
    }
    return minLen > s.length() ? "" : s.substring(subStr, subStr + minLen);
}
}
`}</pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle32" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>View Python Code-{`>`}</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle32" aria-hidden="true" aria-labelledby="exampleModalToggleLabel32" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor:"#262626"}}>
        <h5 class="modal-title" id="exampleModalToggleLabel32" style={{color:"white"}}>Python Code</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{backgroundColor:"#262626",color:"white"}}></button>
      </div>
      <div class="modal-body" style={{backgroundColor:"black",color:"white"}}>
        <pre>
          {`class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""

        countT, window = {}, {}
        for c in t:
            countT[c] = 1 + countT.get(c, 0)

        have, need = 0, len(countT)
        res, resLen = [-1, -1], float("infinity")
        l = 0
        for r in range(len(s)):
            c = s[r]
            window[c] = 1 + window.get(c, 0)

            if c in countT and window[c] == countT[c]:
                have += 1

            while have == need:
                # update our result
                if (r - l + 1) < resLen:
                    res = [l, r]
                    resLen = r - l + 1
                # pop from the left of our window
                window[s[l]] -= 1
                if s[l] in countT and window[s[l]] < countT[s[l]]:
                    have -= 1
                l += 1
        l, r = res
        return s[l : r + 1] if resLen != float("infinity") else ""

`}
        </pre>
      </div>
      <div class="modal-footer" style={{backgroundColor:"#262626"}}>
        <button class="btn" data-bs-target="#exampleModalToggle31" data-bs-toggle="modal" data-bs-dismiss="modal" style={{border:2+'px solid #BF0A30',color:'#BF0A30'}}>Back To Java Code</button>
      </div>
    </div>
  </div>
</div>
<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle31" role="button" style={{border:2+'px solid black',height:35+'px',paddingTop:3+'px',width:70+'px',borderRadius:20+'px'}}>Java</a>
      </td>
    </tr>
  </tbody>
</table>
         </div>
    </div>
  </div>

 
</div>





</div>
    )
}
export default PracticePage;