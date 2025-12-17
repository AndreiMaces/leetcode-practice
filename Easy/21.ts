
 //Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}
 
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	let newList: ListNode;
	let currentNode: ListNode;
    if(!list1 && !list2) return null;
	if(!list1) {
      newList = new ListNode(list2.val);
	  list2 = list2.next;
    }
    else if(!list2) {
	  newList = new ListNode(list1.val);
	  list1 = list1.next;
    } else {
        if(list1.val < list2.val) {
        newList = new ListNode(list1.val);
        list1 = list1.next;
        } else {
        newList = new ListNode(list2.val);
        list2 = list2.next;
        }
    }

	currentNode = newList;
    
	while(list1 !== null && list2 !== null) {
		  if(list1.val < list2.val) {
		  currentNode.next  = new ListNode(list1.val);
		  currentNode = currentNode.next;
		  list1 = list1.next;
		} else {
			currentNode.next  = new ListNode(list2.val);
			currentNode = currentNode.next;
			list2 = list2.next;
		}
	};
	
	while(list1 !== null) {
		currentNode.next  = new ListNode(list1.val);
		currentNode = currentNode.next;
		list1 = list1.next;
	}
	
	while(list2 !== null) {
		currentNode.next  = new ListNode(list2.val);
		currentNode = currentNode.next;
		list2 = list2.next;
	}
	return newList;
};

function transformIntoList(list: number[]) {
	let newList = new ListNode(list[0]);
	let start = newList;
	for(let i = 1 ; i < list.length ; i++) {
	  newList.next = new ListNode(list[i]);
	  newList = newList.next;
	}
	newList.next = null;
	return start;
}

function stringify(list) {
  let s = "[";
  for(let i = list ; i != null; i = i.next) {
    s += i.val;
	if(i.next != null) s += ", ";
	else s += ']';
  }
  return s;
}

function main() {
  let list1: ListNode = transformIntoList(process.argv[2].split("").map(i => parseInt(i)));
  let list2: ListNode = transformIntoList(process.argv[3].split("").map(i => parseInt(i)));
  console.log(stringify(mergeTwoLists(list1, list2)));
}

main();