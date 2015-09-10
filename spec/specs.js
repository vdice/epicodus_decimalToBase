describe('decimalToBase', function() {
  it('returns \'0\' when the input (is 0, 2)', function(){
    expect(decimalToBase(0, 2)).to.equal('0');
  });
  it('returns \'1\' when the input (is 1, 2)', function(){
    expect(decimalToBase(1, 2)).to.equal('1');
  });
  it('returns \'10\' when the input (is 2, 2)', function(){
    expect(decimalToBase(2, 2)).to.equal('10');
  });

  it('returns \'11\' when the input (is 3, 2)', function(){
    expect(decimalToBase(3, 2)).to.equal('11');
  });

  it('returns \'1100\' when the input (is 12, 2)', function(){
    expect(decimalToBase(12, 2)).to.equal('1100');
  });

  it('returns \'111\' when the input (is 7, 2)', function(){
    expect(decimalToBase(7, 2)).to.equal('111');
  });

  it('returns \'1111\' when the input (is 15, 2)', function(){
    expect(decimalToBase(15, 2)).to.equal('1111');
  });

  it('returns \'10000\' when the input (is 16, 2)', function(){
    expect(decimalToBase(16, 2)).to.equal('10000');
  });

  it('returns \'100000\' when the input (is 32, 2)', function(){
    expect(decimalToBase(32, 2)).to.equal('100000');
  });

});
