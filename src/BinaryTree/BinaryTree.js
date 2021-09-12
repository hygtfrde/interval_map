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

                // data interval is to the left
                if( (dataX < node.x) && (dataY < node.x) && !!node.left ) {
                    // recusively call function on left node
                    searchBinaryTree(node.left);
                }
                // found a leaf, insert here 
                else if ( (dataX < node.x) && (dataY < node.x) ) {
                    // left node leaf does not exists
                    // so data goes there 
                    node.left = new Node(dataX, dataY, dataValue); 
                }
                // data interval is to the right 
                else if ( (dataX > node.x) && (dataY > node.y) && !!node.right ) {
                    // recusively call function on right node
                    searchBinaryTree(node.right);
                }
                // found a leaf, insert here 
                else if ( (dataX > node.x) && (dataY > node.x) ) {
                    // right node leaf does not exists
                    // so data goes there 
                    node.right = new Node(dataX, dataY, dataValue);
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