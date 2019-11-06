var request = require('request');

describe('Calc', () => {
    it('should multiply 2 and 2', () =>{
        expect(2*2).toBe(4);
    });
});

describe('Messages Get', ()=>{
    it('Should return 200 Ok', (done)=>{
        request.get('http://localhost:3000/messages', (err, res)=>{
            expect(res.statusCode).toEqual(200);
            done();
        });
    })

    it('Should return a list, thats not empty', (done)=>{
        request.get('http://localhost:3000/messages', (err, res)=>{
            expect(JSON.parse(res.body).length).toBeGreaterThan(4);
            done();
        });
    })
});

// Test driven development example
describe('Get Owner Messages', ()=>{
    it('should get 200 Ok ', (done) =>{
        request.get('http://localhost:3000/messages/tim', (err, res)=>{
            expect(res.statusCode).toEqual(200);
            done();
        });
    });

    it('Should only return tim', (done)=>{
        request.get('http://localhost:3000/messages/tim',(err, res)=>{
            expect(JSON.parse(res.body)[0].name).toEqual('tim');
            done();
        })
    });
});