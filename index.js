let request = require('request')

let API_KEY

module.exports = class verifyid {
  constructor (email_address, password) {
    API_KEY = null
    this.authenticate(email_address, password)
  }

  authenticate (email_address, password, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/authenticate',
      method: 'POST',
      form: {
        email_address: email_address,
        password: password
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      API_KEY = json.Result.API_KEY
      if(cb)
        cb(API_KEY)
    })
  }

  my_credits (cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/my_credits?api_key=' + API_KEY,
      method: 'GET'
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

  sadl_decode (license, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/sadl_decode',
      method: 'POST',
      form: {
        api_key: API_KEY,
        license: license
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

  said_verification (id_number, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/said_verification',
      method: 'POST',
      form: {
        api_key: API_KEY,
        id_number: id_number
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

  idprofile_verification (id_number, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/idprofile_verification',
      method: 'POST',
      form: {
        api_key: API_KEY,
        id_number: id_number
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

  marital_status (id_number, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/marital_status',
      method: 'POST',
      form: {
        api_key: API_KEY,
        id_number: id_number
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

  tiny_trace (id_number, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/tiny_trace',
      method: 'POST',
      form: {
        api_key: API_KEY,
        id_number: id_number
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

  contact_enquiry (contact_number, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/contact_enquiry',
      method: 'POST',
      form: {
        api_key: API_KEY,
        contact_number: contact_number
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

  bank_account_verification (payload, cb) {
    let options = {
      url: 'https://www.verifyid.co.za/webservice/bank_account_verification',
      method: 'POST',
      form: {
        api_key: API_KEY,
        bank_name: payload.bank_name,
        branch_code: payload.branch_code,
        account_number: payload.account_number,
        account_type: payload.account_type,
        idnumber: payload.idnumber,
        initials: payload.initials,
        surname: payload.surname
      }
    }
    request(options, function(err, res, body){
      let json = JSON.parse(body)
      cb(json)
    })
  }

}
