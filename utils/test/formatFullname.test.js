const fullName = require('../formatFullname.js');
const expect = require('chai').expect;


it('should return an error if "fullName" args is not a string', () => {
    expect(fullName(123)).to.equal('Error');   
    expect(fullName()).to.equal('Error'); 
    expect(fullName({})).to.equal('Error'); 
    expect(fullName([])).to.equal('Error'); 
    expect(fullName(function() {})).to.equal('Error'); 
});

it('should return an error if "fullName" args is empty', () => {
    expect(fullName()).to.equal('Error');
    expect(fullName('')).to.equal('Error');
});

it('should return an error if "fullName" is other than <firstname> <lastname>', () => {
    expect(fullName('John Doe Test')).to.equal('Error');
    expect(fullName('John')).to.equal('Error');
    expect(fullName('Doe')).to.equal('Error');
});

it('should return an error if "fullName" in not correct the capitalization', () => {
    expect(fullName("JohN doE")).to.equal('John Doe');
    expect(fullName('john doe')).to.equal('John Doe');
    expect(fullName('JOHN DOE')).to.equal('John Doe');
});

