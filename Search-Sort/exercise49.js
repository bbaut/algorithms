// ICPC 2007 Problem A - Consanguine Calculations

function findCosanguineCombinations(input){
    [parent1, parent2, child] = input;

    let ABOCombination = [];
    let ABOBloodType = {
        "AA": "A",
        "AB": "AB",
        "AO": "A",
        "BB": "B",
        "BO": "B",
        "OO": "O",
    }

    if(child === 0) {
        let parentsPossibleAlleles = [];
        let parent1ABOAllele = "";
        let parent2ABOAllele = "";

        for(let character in parent1) {
            if(parent1[character] != "+" && parent1[character] != "-"){
                parent1ABOAllele = parent1ABOAllele + parent1[character]
            }
        }

        for(let character in parent2) {
            if(parent2[character] != "+" && parent2[character] != "-"){
                parent2ABOAllele = parent2ABOAllele + parent2[character]
            }
        }

        for(let alleles in ABOBloodType){
            if(ABOBloodType[alleles] === parent1ABOAllele || ABOBloodType[alleles] === parent2ABOAllele){
                if(!parentsPossibleAlleles.includes(alleles[0])){
                    parentsPossibleAlleles.push(alleles[0]);
                }

                if(!parentsPossibleAlleles.includes(alleles[1])){
                    parentsPossibleAlleles.push(alleles[1]);
                }
            }
        }
        
        parentsPossibleAlleles.sort();
        for(let i = 0; i< parentsPossibleAlleles.length; i++){
            let stringAllele = ""
            for(let j = i; j< parentsPossibleAlleles.length; j++){
                stringAllele = parentsPossibleAlleles[i] + parentsPossibleAlleles[j]
                if(!ABOCombination.includes(ABOBloodType[stringAllele])){
                    ABOCombination.push(ABOBloodType[stringAllele])
                }
            }
        }

        let finalCombination = [];
        if(parent1[parent1.length -1] === parent2[parent2.length -1] && parent1[parent1.length -1] === "-"){
            for(let i = 0; i < ABOCombination.length; i++){
                finalCombination.push(ABOCombination[i] + "-");
            }
        }
        else {
            for(let i = 0; i < ABOCombination.length; i++){
                finalCombination.push(ABOCombination[i] + "+");
                finalCombination.push(ABOCombination[i] + "-");
            }
        }
        let output = [parent1, parent2, finalCombination];
        return output;
    }
    else {
        let parentsPossibleAlleles = [];
        let parent2PossibleAlleles = [];
        let childrenPossibleAlleles = [];
        let parent1ABOAllele = "";
        let childABOAllele = "";

        for(let character in parent1) {
            if(parent1[character] != "+" && parent1[character] != "-"){
                parent1ABOAllele = parent1ABOAllele + parent1[character]
            }
        }

        for(let character in child) {
            if(child[character] != "+" && child[character] != "-"){
                childABOAllele = childABOAllele + child[character]
            }
        }

        if(childABOAllele === "O" && parent1ABOAllele !== childABOAllele) {
            return [parent1, "IMPOSSIBLE", child];
        }

        for(let alleles in ABOBloodType){
            if(ABOBloodType[alleles] === parent1ABOAllele){
                if(!parentsPossibleAlleles.includes(alleles[0])){
                    parentsPossibleAlleles.push(alleles[0]);
                }
                if(!parentsPossibleAlleles.includes(alleles[1])){
                    parentsPossibleAlleles.push(alleles[1]);
                }
            }
        }

        for(let alleles in ABOBloodType){
            if(ABOBloodType[alleles] === childABOAllele){
                if(!childrenPossibleAlleles.includes(alleles[0])){
                    childrenPossibleAlleles.push(alleles[0]);
                }
                if(!childrenPossibleAlleles.includes(alleles[1])){
                    childrenPossibleAlleles.push(alleles[1]);
                }
            }
        }

        for(let i = 0; i< childrenPossibleAlleles.length; i++){
            if(!parentsPossibleAlleles.includes(childrenPossibleAlleles[i])){
                parent2PossibleAlleles.push(childrenPossibleAlleles[i]);
            }
        }

        if(parent2PossibleAlleles.length === 0){
            parent2PossibleAlleles = parentsPossibleAlleles;
        }

        parent2PossibleAlleles.sort();

        for(let alleles in ABOBloodType){
            if (alleles.includes(parent2PossibleAlleles[0])){
                if(!ABOCombination.includes(ABOBloodType[alleles])){
                    ABOCombination.push(ABOBloodType[alleles]);
                }
            }
        }

        let finalCombination = [];

        for(let i = 0; i < ABOCombination.length; i++){
            finalCombination.push(ABOCombination[i] + "+");
            finalCombination.push(ABOCombination[i] + "-");
        }
        let output = [parent1, finalCombination, child];
        return output;
    }
}

const input1 = ["O+", "O-", 0];
const input2 = ["O+", 0, "O-"];
const input3 = ["AB-", "AB+", 0];
const input4 = ["AB+", 0, "O+"];
const input5 = ["A+", "B+", 0];

console.log(findCosanguineCombinations(input4));