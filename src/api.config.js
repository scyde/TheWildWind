let backendHost
const hostname = window && window.location && window.location.hostname
if (hostname === 'localhost') {
    backendHost = 'localhost'
}
else if (hostname === 'the-wild-wind.herokuapp.com') {
    backendHost = 'https://the-wild-wind.herokuapp.com'
}

export default backendHost
