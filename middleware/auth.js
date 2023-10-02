const auth = (req, res, next) => {
    if (req.session.logged_in) {
        console.log(`[INFO]: User ${req.session.user_name} is in session at ${new Date().toISOString()}`);
        return next();
    }

    return res.redirect('/login');
};

module.exports = auth;