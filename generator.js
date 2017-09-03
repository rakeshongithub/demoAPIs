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
    }),
    reports: _.times(10, function(n) {
      return {
        "id": faker.random.uuid().replace(/-/g, ''),
        "type": faker.finance.currencyCode().substr(0, 3),
        "reporter": "Exch" + faker.random.number(10),
        "ID": "1234567",
        "status": "Active",
        "memberAliases": [ "FRMA", "FRMA1", "FRMA:U01", "FRMA:U02" ],
        "userReports": _.times(10, function(n) {
          return {
            "date": faker.date.between((2010 + n), (2011 + n)),
        		"companyName": "The Absolute Best Company Description",
            "reports": faker.lorem.paragraph()
          }
        })
      }
    })
  }
}
