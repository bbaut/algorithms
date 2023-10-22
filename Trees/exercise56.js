// Given an input stream, detect when the series of characters correspond to a word found in a word array

class Node {
    constructor (value = "", endOfWord = false) {
        this.value = value;
        this.children = new Array();
        this.endOfWord = endOfWord;
    }
}

class Trie {
    constructor(){
        this.root = new Node();
    }

    insert(word) {
        if(!word) {
            return false;
        }

        let currentNode = this.root;

        for(let i =0 ; i < word.length; i++) {
            let nodeAlreadyExists = currentNode.children.find((element) => {
                return element.value === word[i];
                })
            if(nodeAlreadyExists === undefined){
                if(i === word.length-1){
                    const newNode = new Node(word[i], true);
                    currentNode.children.push(newNode);
                }
                else {
                    const newNode = new Node(word[i]);
                    currentNode.children.push(newNode);
                }
            }
            currentNode = currentNode.children.find((element) => {
                return element.value === word[i];
            })
        }
    }

    hasWord(word) {
        if (!word) {
            return false
        }

        let currentNode = this.root;

        for(let i =0 ; i < word.length; i++) {
            let node = currentNode.children.find((element) => {
                return element.value === word[i];
              })

            if(node === undefined){
                return false;
            }
            
            if(node.endOfWord && i < word.length -1){
                return false;
            }
            if(node.endOfWord || (i === word.length-1 && node.endOfWord === false)){
                return true;
            }

            currentNode = node;
        }
    }
}

function generateLetter(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function randomLetter() {
    function _stream(n) {
        return {
            value: generateLetter(n),
            next() {
            return _stream(n);
            }
        };
    }
   
    return () => _stream(1);
}

function take(n, str) {
    let word = "";
    let boolean = false;
    function _take(n, str) {
        if (n === 0) {
            return [word, boolean];
        }

        const { value, next } = str();
        word = word + value;
        boolean = myTrie.hasWord(word);

        return _take(n - 1, next, word);
    }
    return _take(n, str, word = "");
}

//Word array
let wordArray = ["amor", "aloha", "sol"];

//Trie creation
const myTrie = new Trie();

//Insert words' array in the trie
wordArray.forEach(word => myTrie.insert(word));

//Function to create random letters
const randoms = randomLetter();

const checkIfWordExists = take(4, randoms);

console.log(checkIfWordExists);