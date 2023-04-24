const User = require('./models/user');

const newUser = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password123'
});

newUser.save()
  .then(() => console.log('User created successfully'))
  .catch(error => console.log(error));
