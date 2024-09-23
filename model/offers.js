
const fs = require('fs')


module.exports = class offers {
  constructor() {
    this.courseName = null;
    this.rating = null;
    this.fullPrice = null;
    this.offeredPrice = null;
    this.kind = null;
    this.level = null;
    this.iesLogo = null;
    this.iesName = null;
  }

  async read(){
    
    const operacaoAssincrona = new Promise((resolve,reject) => {
        try {
            const filePath = './data.json';
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err)
                } else {
                    const courseOffers = JSON.parse(data);
                    resolve(courseOffers.offers)
                  }
            })
            
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
    return operacaoAssincrona
  }
  get courseName() {
    return this._courseName;
  }

  set courseName(courseName) {
    this._courseName = courseName;
  }

  get rating() {
    return this._rating;
  }

  set rating(rating) {
    this._rating = rating;
  }

  get fullPrice() {
    return this._fullPrice;
  }

  set fullPrice(fullPrice) {
    this._fullPrice = fullPrice;
  }

  get offeredPrice() {
    return this._offeredPrice;
  }

  set offeredPrice(offeredPrice) {
    this._offeredPrice = offeredPrice;
  }

  get kind() {
    return this._kind;
  }

  set kind(kind) {
    this._kind = kind;
  }

  get level() {
    return this._level;
  }

  set level(level) {
    this._level = level;
  }

  get iesLogo() {
    return this._iesLogo;
  }

  set iesLogo(iesLogo) {
    this._iesLogo = iesLogo;
  }

  get iesName() {
    return this._iesName;
  }

  set iesName(iesName) {
    this._iesName = iesName;
  }
};
