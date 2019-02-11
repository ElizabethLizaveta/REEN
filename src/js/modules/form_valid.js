/* jshint esversion: 6 */
const FormValid = {

  validateEmail() {
    const result = $('#result');
    const email = $('#InputEmail');
    const submitBtn = $('.subscribe-btn');
    submitBtn.attr('disabled', true);


    function emailCheck(mail) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(mail);
    }

    function validate(e) {
      result.text('');

      if (emailCheck(email.val(e))) {
        result.text('');
      } else {
        e.preventDefault();
        result.text('Enter correct email please');
        email.val('');
      }
      return false;
    }

    submitBtn.click((e) => {
      validate(e);
    });

    email.keyup(() => {
      if (email.val().length !== 0) {
        submitBtn.attr('disabled', false);
      } else {
        submitBtn.attr('disabled', true);
      }
    });
  },
};

export default FormValid;
