'use strict';

const Api = use('App/Validators/Api');

class UpdateProfile extends Api {
  get rules () {
    return {
      username: 'min:8|max:32',
      gender: 'in:0,1,2',
      birthday: 'date',
      phone: 'alpha_numeric|max:20',
    };
  }

  get messages() {
    return {
      'gender.in': 'gender_is_invalid',
      'birthday.date': 'birthday_is_not_date_time',
      'phone.alpha_number': 'phone_is_invalid',
      'phone.max': 'phone_too_long',
    };
  }
}

module.exports = UpdateProfile;

