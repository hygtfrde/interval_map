class Node {
    constructor(x, y, value) {

        /**
        *@param X - left interval bound inclusive 
        *@param Y - right interval bound exclusive 
        *@param value - arbitrary string to map
        *@param left - left tree branch
        *@param right - right tree branch
        */

        this.x = x;
        this.y = y; 
        this.value = value; 
        this.left = null;
        this.right = null; 
    }
}

export default class BinaryTree {
    constructor() {
        console.log('BinaryTree constructed! Root is now null.'); 
        this.root = null; 
    }
    //--------------------------------------
    //----------------INSERT DATA-----------
    //--------------------------------------
    insert(dataX, dataY, dataValue) {
        console.log('inserting: ', dataX, ' ,', dataY, ' ,', dataValue); 
        if(this.root === null) {
            // no root exists so data goes here first 
            this.root = new Node(dataX, dataY, dataValue); 
        }
        // otherwise the root exists
        else {
            const node = this.root; 
            // search where to add new data
            const searchBinaryTree = (node) => {
                if(dataX < node.x && node.left) {
                    // recusively call function on left node
                    searchBinaryTree(node.left);
                }
                else if (dataX < node.x) {
                    // left node does not exists
                    // so data goes here 
                    node.left = new Node(dataX); 
                }
                else if (dataX > node.x && node.right) {
                    // recusively call function on right node
                    searchBinaryTree(node.right);
                }
                else if (dataX > node.x) {
                    // right node does not exists
                    // so data goes here 
                    node.right = new Node(dataX);
                }
            }
            return searchBinaryTree(node);
        }
    }
    //------------------------------------------
    //----------------RETRIEVE DATA-------------
    //------------------------------------------
    retrieve(data) {
        if (this.root === null) {
            // no root, game over 
            return false;
        }
        let node = this.root;
        let found = false; 
        while (node && !found) {
            if (data < node.x) {
                node = node.left;
            }
            else if (data > node.x) {
                node = node.right;
            }
            else {
                found = node; 
            }
        }
        return found; 
    }
}