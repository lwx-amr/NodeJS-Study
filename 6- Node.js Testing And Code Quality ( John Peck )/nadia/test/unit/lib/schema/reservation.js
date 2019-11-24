const chai = require("chai");
const should = chai.should();

const Reservation =  require ("../../../../lib/schema/reservation");

describe("Reservation Schema", function(){
  context("Date and time combination", function(){
    it("Should return date and time combined in a ISO 8601 foramt with valid input", function(){
      const date = '2019/6/22';
      const time = '02:00 AM';
      Reservation.combineDateTime(date, time)
        .should.equal('2019-06-22T02:00:00.000Z');
    });
    it("shoudl deal with bad inputs (return null)", function(){
      const date="!#@Q#";
      const time="!#@Q#";
      should.not.exist(Reservation.combineDateTime(date, time));
    });
  });

  context('Validator', function(){
    it('Should pass a valid reservation with no optional fields',function(done){
      const reservation = new Reservation({
        date : '2019/06/22',
        time : '02:00 AM',
        party: 4,
        name: 'Family',
        email: 'username@example.com'
      });
      reservation.validator(function(err, value){
        value.should.deep.equal(reservation);
        done(err);
      });
    });

    it('It should fail reservation with bad email',function(done){
      const reservation = new Reservation({
        date : '2019/06/22',
        time : '02:00 AM',
        party: 4,
        name: 'Family',
        email: 'username'
      });
      reservation.validator(function(error){
        error.should.be.an('error').and.not.be.null;
        done();
      });
    });
  });
});
