var s,

studentModule = {

  setting: {
    // form: $("#studentForm"),
  },

  init: function(){
    s = this.setting;
    this.bindUIActions();
  },

  bindUIActions: function() {
    // $("#studentForm").studentModule.validate();
  },


  percentageCalculate: function(arr) {
    var result = 0
     var length = arr.length;
     for (var i = 0; i < length; i++) {
        result += arr[i];
     }
     return result/length;
  },

  // validate: function(){

  //   rules: {

  //     firstname: "required",
  //     lastname: "required",
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   messages: {
  //     firstname: "Please enter your firstname",
  //     lastname: "Please enter your lastname",
  //     email: "Please enter a valid email address",
  //   },
  //   submitHandler: function(form) {
  //     form.submit();
  //     alert("submit");
  //   }
  // }

};

$(document).ready(function(){
  studentModule.init();

   $("#myTable").submit(function(){
      // var fname = $("#name").val();
      // var lname = $("#name").val();
      // var email = $("#email").val();
      // var fname = $("#name").val();
      // var fname = $("#name").val();

      var markup = "<tr><td>" + "name" + "email" + "</td></tr>";
      $("#myTable").append(markup);
  });

  $("#studentForm").validate({

    rules: {

      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        number: true
      },
      subject1: {
        required: true,
        minlength: 1,
        maxlength: 2,
        number: true
      },
      subject2: {
        required: true,
        minlength: 1,
        maxlength: 2,
        number: true
      },
      subject3: {
        required: true,
        minlength: 1,
        maxlength: 2,
        number: true
      }
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      email: "Please enter a valid email address",
      phone: "Please enter proper phone number",
      subject1: "please enter marks of subject",
      subject2: "please enter marks of subject",
      subject3: "please enter marks of subject"
    },
    // submitHandler: function(form) {
    //   form.submit();
    // }
  });
});
