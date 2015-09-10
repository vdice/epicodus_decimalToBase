describe('decimalToBase', function() {
  describe('base = 2', function() {
    var base = 2;
    var data = [{args: [0, base], expected: '0'},
               {args: [1, base], expected: '1'},
               {args: [2, base], expected: '10'},
               {args: [3, base], expected: '11'},
               {args: [7, base], expected: '111'},
               {args: [12, base], expected: '1100'},
               {args: [15, base], expected: '1111'},
               {args: [16, base], expected: '10000'},
               {args: [32, base], expected: '100000'}];

    data.forEach(function(obj) {
      it('returns \'' + obj.expected + '\' when the input is ' + obj.args, function(){
        expect(decimalToBase(obj.args[0], obj.args[1])).to.equal(obj.expected);
      });
    });
  });

  describe('base = 3', function() {
    var base = 3;
    var data = [{args: [0, base], expected: '0'},
               {args: [1, base], expected: '1'},
               {args: [2, base], expected: '2'},
               {args: [3, base], expected: '10'},
               {args: [7, base], expected: '21'},
               {args: [12, base], expected: '110'},
               {args: [15, base], expected: '120'},
               {args: [16, base], expected: '121'},
               {args: [26, base], expected: '222'},
               {args: [27, base], expected: '1000'}];

    data.forEach(function(obj) {
      it('returns \'' + obj.expected + '\' when the input is ' + obj.args, function(){
        expect(decimalToBase(obj.args[0], obj.args[1])).to.equal(obj.expected);
      });
    });
  });

  describe('base = 10', function() {
    var base = 10;
    var data = [{args: [0, base], expected: '0'},
               {args: [1, base], expected: '1'},
               {args: [2, base], expected: '2'},
               {args: [3, base], expected: '3'},
               {args: [7, base], expected: '7'},
               {args: [12, base], expected: '12'},
               {args: [15, base], expected: '15'},
               {args: [16, base], expected: '16'},
               {args: [26, base], expected: '26'},
               {args: [27, base], expected: '27'}];

    data.forEach(function(obj) {
      it('returns \'' + obj.expected + '\' when the input is ' + obj.args, function(){
        expect(decimalToBase(obj.args[0], obj.args[1])).to.equal(obj.expected);
      });
    });
  });

});
