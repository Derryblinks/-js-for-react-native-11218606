// import { processArray } from "./arrayManipulation";
// import { formatArrrayStings } from "./arrayManipulation";


function createUserProfiles(names, modifiedNames) {
    // if (names.length !== modifiedNames.length) {
    //     throw new Error("Both arrays must have the same length");
    // }

    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

module.exports = { createUserProfiles };
