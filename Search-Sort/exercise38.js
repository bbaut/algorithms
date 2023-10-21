//Given a random set of letters, find the longest word that can be formed

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
        let count = 0;

        for(let i =0 ; i < word.length; i++) {
            let node = currentNode.children.find((element) => {
                return element.value === word[i];
              })

            if(node === undefined){
                return null;
            }

            count++;
            
            if(node.endOfWord && i < word.length -1){
                return null;
            }
            if(node.endOfWord || (i === word.length-1 && node.endOfWord === false)){
                return count;
            }

            currentNode = node;
        }
    }
}

const myTrie = new Trie();

myTrie.insert("amor");
myTrie.insert("aloha");
myTrie.insert("sol");

let listWords = ["amor", "aloha", "sol"];

function longestWord(listWords, trie){
    let maxWordSize = 0;
    let wordMaxSize = "";

    for(let word in listWords){
        let wordSize = trie.hasWord(listWords[word]);

        if(wordSize > maxWordSize){
            maxWordSize = wordSize;
            wordMaxSize = listWords[word];
        }
    }

    return [wordMaxSize, maxWordSize];
}

console.log(longestWord(listWords, myTrie));