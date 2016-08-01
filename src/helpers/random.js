module.exports = function(ary, options) {
    var random_entry = ary[Math.floor(Math.random() * ary.length)]
    return options.fn(random_entry);
}