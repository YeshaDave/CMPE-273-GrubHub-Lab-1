var bcrypt = require('bcrypt-nodejs');

var crypt = {};

crypt.createHash = function (data, successCallback, failureCallback) {
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            failureCallback(err);
            return;
        }
        bcrypt.hash(data, salt, null, function (err, hash) {
            if (err) {
                failureCallback(err);
                return;
            }
            successCallback(hash);
        });
    });
};

crypt.compareHash = function (data, encrypted, successCallback, failureCallback) {
    bcrypt.compare(data, encrypted, function (err, isMatch) {
        if (err) {
            failureCallback(err);
            return;
        }
        successCallback(err, isMatch);
    });
};

module.exports = crypt;


// if (!results.length) {
//     crypt.createHash(msg.password, function (res1) {
//       users.password = res1;
//       connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
//         if (error) {
//            callback(error," Error in Singnup ... ");
//         } else {
//            var profile = new UserProfile({
//                fName : msg.fName,
//                lName : msg.lName,
//                email : msg.email,
//                isRecruiter : msg.isRecruiter,
//                state: msg.state,
//                profilePhoto: "https://s3.us-east-2.amazonaws.com/linkedin-bucket/userdefault.png"
//            })
//            profile.save();
//            console.log( " Final try " + users);

//            //making a node in graph db
//            session = driver.session();
//            var imageUrl = 'https://s3.us-east-2.amazonaws.com/linkedin-bucket/userdefault.png'
//            var occupation = 'Software Engineer'


//            var resultPromise = session.run(
//                'create(n: User {email : $mail, location : $loc, recruiter : $isRecruiter, fName : $fname, lName : $lname, imageUrl: $image, occupation: $occup}) return n',
//                {mail : msg.email, loc : msg.state, isRecruiter : users.isRecruiter, fname : msg.fName, lname : msg.lName, image : imageUrl, occup : occupation}
//            )
//               console.log(msg.fName);
//                resultPromise.then(result => {
//                session.close();
//                console.log("if");
//                const singleRecord = result.records[0];
//                console.log('graph : ', singleRecord.get(0))

//                users.isRecruiter = msg.isRecruiter
//                callback(null,users)

//                driver.close();
//            });

//         }
//       });
//     })
//   }

