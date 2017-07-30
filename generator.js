module.exports = function () {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    coffeShops: _.times(10, function(n) {
      return {
        "id": faker.random.uuid().replace(/-/g, ''),
        "name": faker.company.companyName(),
        "city": faker.address.city(),
        "currencyCode": faker.finance.currencyCode(),
        "phone": faker.phone.phoneNumberFormat(),
        "info": faker.lorem.paragraph()
      }
    })
  }
}
