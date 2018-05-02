let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get childNodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Constant	                      Value	Description
// Node.ELEMENT_NODE	              1	  An Element node such as <p> or <div>.
// Node.TEXT_NODE	                  3	  The actual Text of Element or Attr.
// Node.PROCESSING_INSTRUCTION_NODE	7	  A ProcessingInstruction of an XML document such as <?xml-stylesheet ... ?> declaration.
// Node.COMMENT_NODE	              8	  A Comment node.
// Node.DOCUMENT_NODE	              9	  A Document node.
// Node.DOCUMENT_TYPE_NODE	        10	A DocumentType node e.g. <!DOCTYPE html> for HTML5 documents.
// Node.DOCUMENT_FRAGMENT_NODE	    11	A DocumentFragment node.

// get children element nodes
val = list.children;
val = list.children[1];
list.children[2].textContent = 'Hello';

// children of children
list.children[3].children[1].id = 'test-link';
val = list.children[3].children[1];

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);