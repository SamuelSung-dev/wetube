import routes from '../routes';

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' });
};
export const postJoin = (req, res) => {
  const {
    body: {
      // eslint-disable-next-line no-unused-vars
      name,
      // eslint-disable-next-line no-unused-vars
      email,
      password,
      password2,
    },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  } else {
    // To Do: Register User
    // To Do: Log In User
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) => res.render('login', { pageTitle: 'Login' });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  // To do: Process Logout
  res.redirect(routes.home);
};
export const user = (req, res) => res.send('User');
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'Edit Profile' });
export const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'Change Password' });
export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail' });
