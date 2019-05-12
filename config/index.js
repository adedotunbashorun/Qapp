
export const config = {
    apiUrl: (process.env.NODE_ENV === 'production') ? 'https://qappdevtestapi.herokuapp.com' : 'http://localhost:5000',
}