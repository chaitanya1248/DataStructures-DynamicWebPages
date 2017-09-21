/** 
 *  Author: Chaitanya Saladi.
 *  Linked list with add, remove, addAt, removeAt, search.
 *  Open index.html to get this running.
 *  Various methods of linked list can be tested by un-commenting logs at end of the file.
 *  Used bootstrap for styling.
 *  onClick of each nav item on the nav bar, body content and footer content for respective tab gets populated.
 *  Ref:
 *  Design data structure to efficiently represent a set of pages with repeated content.
    Example:
    0 => headerContent1, footerContent1
    1 => headerContent1, footerContent1, bodyContent1
    2 => headerContent1, footerContent2, bodyContent2
    3 => headerContent2, footerContent1, bodyContent3, advertisement1
    Design a navigation system to efficiently render pages to HTML. Example:
    render( 0 ) render( 3 ) render( 1 )
    Notes
    CSS and UI libraries are not necessary. We'll only evaluate JavaScript part of assignment.
    Please make sure that solution runs in Chrome and Firefox.
*/
function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };

    this.remove = function (element) {
        let currentNode = head;
        let previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.indexOf = function (element) {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    };

    this.elementAt = function (index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    };


    this.addAt = function (index, element) {
        let node = new Node(element);

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    this.removeAt = function (index) {
        let currentNode = head;
        let previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= length) {
            return null;
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        length--;
        return currentNode.element;
    }

}

function handleNavClick(event) {
    let currentNode = list.head();
    const text = event.target.innerHTML;
    while (currentNode) {
        if (currentNode.element.page === text.replace(' ', '')) {
            document.getElementById('bodyContent').innerHTML = currentNode.element.bodyContent;
            document.getElementById('footer').innerHTML = currentNode.element.footer;
            return;
        }
        currentNode = currentNode.next;
    }
}

let list = new LinkedList();
list.add({ page: 'Home', bodyContent: 'Home body content', header: '', footer: 'Home footer' });
list.add({ page: 'Profile', bodyContent: 'Profile body content , this can be updated dynamically.', header: '', footer: 'Profile Footer' });
list.add({ page: 'About', bodyContent: 'About body content', header: '', footer: 'About Footer' });
list.add({ page: 'ContactUs', bodyContent: 'Contact us body content', header: '', footer: 'Contact us footer' });
list.add({ page: 'Feedback', bodyContent: 'Feedback body content, all this text is placeholder.', header: '', footer: 'Feedback footer' });

// console.log("list size ",list.size());
// console.log("Removing item at index 3 ", list.removeAt(3));
// console.log("Item at index 3 after removing ", list.elementAt(3));
// console.log("Finding index of an item ", list.indexOf('Foo bar'));
// console.log("list size again ", list.size());
// console.log("Finding element at 0 ", list.elementAt(0));