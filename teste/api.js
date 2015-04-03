var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app'),
    db      = require('../db/mongo'),
    _id;


describe('Users Endpoints', function(){
  beforeEach(function(done) {
    db.collection('users').remove({}, done);
  });

  it.only('GET /api/users', function(done){
    db.collection('users').insert({ 'name': 'Walter White', age:50, gender: "male" }, function(){
      db.collection('users').insert({ 'name': 'Goku', age:40, gender: "male"}, function(){
        request(app)
          .get('/api/users')
          .expect(200)
          .end(function(err, res){
            var data = res.body;

            assert.equal(data[0].name, 'Walter White');
            assert.equal(data[1].name, 'Goku');
            assert.equal(data.length, 2);
            done();
          });
      });
    });
  });
});