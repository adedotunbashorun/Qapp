
export const config = {
    apiUrl: (process.env.Node_ENV === 'production') ? 'https://qappdevtestapi.herokuapp.com' : 'http://localhost:5000',
}