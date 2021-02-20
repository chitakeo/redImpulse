import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const findUserByCredentials = credentials => {
    if (
      credentials.id === process.env.USER_ID && 
      credentials.password === process.env.USER_PASSWORD 
    ) {
      return { id: 1, name: "Chitakeo" }
    } else {
      return null
    }
}
  
const options = {
    providers: [
      Providers.Credentials({
        name: "admin",
        credentials: {
          id: { label: "ID", type: "id"},
          password: { label: "Password", type: "password" },
        },
        authorize: async credentials => {
          const user = findUserByCredentials(credentials)
          if (user) {
            return Promise.resolve(user)
          } else {
            return Promise.resolve(null) // 認証拒否
            // return Promise.reject(new Error('ログインできませんでした')) // エラーページにリダイレクト
            //return Promise.reject('/path/to/redirect')        // URL にリダイレクト
          }
        },
      }),
    ],
  }
  
  export default (req, res) => NextAuth(req, res, options)