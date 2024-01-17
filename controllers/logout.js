module.exports = async (req, res) => {
    req.session.destroy();
    res.redirect('/loginform'); // Redirect to the desired page after destroying the session
};