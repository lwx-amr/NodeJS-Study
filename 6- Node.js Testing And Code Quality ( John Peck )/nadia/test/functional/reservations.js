const chai = require('chai');
const chaiHttp = require('chai-http');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

chai.use(chaiHttp);

const should = chai.should();

describe('/reservations', function(){
  let dbStub,
      loggerStub,
      debugStub,
      app;

  before(function(){
    dbStub = {
      run: function(){
        return Promise.resolve({
          stmt: {
            lastID: 1349
          }
        });
      }
    }

    dbStub['@global'] = true;
    debugStub = function(){
      return sinon.stub();
    };
    debugStub['@global'] = true;

    app = proxyquire('../../app', {
      sqlite: dbStub,
      debug: debugStub
    });
  });

  context('GET', function(){
    it('Should return the reservations form', function(done){
      chai.request(app)
        .get('/reservations')
        .end(function(err, res){
          res.should.have.status(200);
          res.text.should.contain('To make reservations please fill out the following form');
          done(err);
        });
    });
  });

  context('POST',function(){
    it('Should accept a valid reservation request',function(done){
      chai.request(app)
        .post('/reservations')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
          date: '2017/06/10',
          time: '06:02 AM',
          party: 4,
          name: 'Family',
          email: 'username@example.com'
        })
        .end(function(err, res){
          res.should.have.status(200);
          res.text.should.contain('Thanks, your booking request #1349');
          done(err);
        });
    });
  });

  context('POST',function(){
    it('Should not accept an invalid reservation request',function(done){
      chai.request(app)
        .post('/reservations')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
          date: '2017/06/10',
          time: '06:02 AM',
          party: 'Bananas',
          name: 'Family',
          email: 'username'
        })
        .end(function(err, res){
          res.should.have.status(400);
          res.text.should.contain('Sorry, there was a problem with your booking request.');
          done();
        });
    });
  });
});

