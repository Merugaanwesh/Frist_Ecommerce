var tInput = [{
"id": 0,
"name": "E00-E90 StoffwechselstÃ¶rungen",
"parentId": null,
"children": [{
    "id": 1,
    "name": "E70-E90 StoffwechselstÃ¶rungen",
    "parentId": 0,
    "children": [{
        "id": 2,
        "name": "E70.- StÃ¶rungen des Stoffwechsels aromatischer AminosÃ¤uren",
        "parentId": 1,
        "children": []
    }, {
        "id": 3,
        "name": "E71.- StÃ¶rungen des Stoffwechsels verzweigter AminosÃ¤uren und des FettsÃ¤urestoffwechsels",
        "parentId": 1,
        "children": []
    }, {
        "id": 4,
        "name": "E72.- Sonstige StÃ¶rungen des AminosÃ¤urestoffwechsels",
        "parentId": 1,
        "children": []
    }]
  }]
}];

(function removeEmptyChildrenProperties(input){
    //console.log('Checking id:', input.id);
    if(input.hasOwnProperty('children')){
        if(input.children && input.children.length){
                input.children.forEach(removeEmptyChildrenProperties)
        }
        else{
            console.log('Remove children on id:', input.id);
            delete input.children
        }
    };
    
    return input
}).apply(null, tInput);

console.log(JSON.stringify(tInput));