const amigoSecreto = (items) => {
    
    var encapsulateditems = [];
    while (items.length > 0) {
        var r    = Math.floor(Math.random() * items.length);
        var item = items.splice(r, 1)[0];
        encapsulateditems.push(item);
    }

    var res = [];
    for (var i = 0; i < encapsulateditems.length - 1; i++) {
        res.push({
            src: encapsulateditems[i].name,
            num: encapsulateditems[i].num,
            dst: encapsulateditems[i + 1].name
        });
    }
    res.push({
        src: encapsulateditems[encapsulateditems.length - 1].name,
        num: encapsulateditems[encapsulateditems.length - 1].num,
        dst: encapsulateditems[0].name
    });
    
    return res;
}   

module.exports = amigoSecreto;